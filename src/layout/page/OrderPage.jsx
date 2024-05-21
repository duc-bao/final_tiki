import { useEffect, useState } from "react";
import { getOrder } from "../api/bookAPI";
import OrderItem from "./componets/OrderItem";
import { useLocation } from "react-router-dom";

const OrderPage = () => {
    const location = useLocation();
    const { isPayment } = location.state || {};
    const [contentPayment, setContentPayment] = useState("");
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getOrder();
                if (data) {
                    setOrderList(data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        if (isPayment) {
            setContentPayment("Đã thanh toán online");
        } else {
            setContentPayment("Thanh toán khi nhận hàng");
        }
    }, [isPayment]);
    return (
        <>
            <div className="container bg-white mt-5">
                
                <h3 className="text-center">Chi Tiết Đơn Hàng</h3>
                <hr />
                <div className="row align-items-center ">
                    {orderList.map((item) => {
                        return (
                            <OrderItem
                                order={item}
                                key={item.id}
                                contentPayment={contentPayment}
                            ></OrderItem>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
export default OrderPage;
