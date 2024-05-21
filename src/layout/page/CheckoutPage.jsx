import {
    Button,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../util/CartItemContext";
import CheckoutItem from "./componets/CheckoutItem";
import { sendOrderApi } from "../api/bookAPI";
const CheckoutPage = () => {
    const location = useLocation();
    const { book, totalPriceProduct, quantity } = location.state || {};
    const { cartItems, getTotalPrice, getQuantity } = useContext(CartContext);
    const { clearCart } = useContext(CartContext);
    const [fullName, setFullName] = useState("");
    const [isPayment, setIsPayment] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [note, setNote] = useState("");
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    const bookArray = Array.isArray(book) ? book : [book];
    const itemsToDisplay = book ? bookArray : cartItems;
    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    };
    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: totalOrder().toFixed(2),
                    },
                },
            ],
        });
    };
    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
            setIsPayment(true);
        });
    };
    const totalOrder = () => {
        let totalPrice = 0;
        itemsToDisplay.forEach((item) => {
            const currentQuantity = item.quantity ? item.quantity : quantity;
            totalPrice += item.list_price * currentQuantity;
        });
        return totalPrice;
    };

    useEffect(() => {
        const userData = {
            fullName,
            phoneNumber,
            deliveryAddress,
            note,
        };
        localStorage.setItem("user", JSON.stringify(userData));
    }, [fullName, phoneNumber, deliveryAddress, note]);
    const navigate = useNavigate();
    const handleConfirmOrder = () => {
        const isConfirmed = window.confirm("Bạn đã chắc chắn đặt hàng?");
        if (isConfirmed) {
            try {
                sendOrderApi(
                    fullName,
                    phoneNumber,
                    deliveryAddress,
                    note,
                    itemsToDisplay,
                    totalOrder()
                );
            } catch (error) {
                console.log(error);
                alert("Đã xảy ra lỗi khi đặt hàng. Vui lòng thử lại sau.");
            }
            if(!book && cartItems.length > 0){
                clearCart();
            }
            navigate("/checkout-success");
        }
    };
    return (
        <div className="container bg-light my-3">
            <h2 className="text-center">Đơn Hàng</h2>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <TextField
                        required={true}
                        fullWidth
                        type="text"
                        label="Họ và tên người nhận"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="mb-3 mt-2"
                    />
                    <TextField
                        required={true}
                        fullWidth
                        type="text"
                        label="Số điện thoại "
                        value={phoneNumber}
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                        }}
                        className="mb-3"
                    ></TextField>
                    <TextField
                        required={true}
                        fullWidth
                        type="text"
                        label="Địa chỉ giao hàng "
                        value={deliveryAddress}
                        onChange={(e) => {
                            setDeliveryAddress(e.target.value);
                        }}
                        className="mb-3"
                    ></TextField>
                    <TextField
                        required={true}
                        fullWidth
                        type="text"
                        label="Ghi chú  "
                        value={note}
                        onChange={(e) => {
                            setNote(e.target.value);
                        }}
                        className="mb-3"
                    ></TextField>
                </div>
                <div className="col-md-6 col-12">
                    <div className="row">
                        <div className="col">Sản phẩm</div>
                        <div className="col-2">Số lượng</div>
                        <div className="col-2">Số tiền</div>
                    </div>
                    <div className="row d-flex align-items-center">
                        {itemsToDisplay.map((item, key) => {
                            const currentQuantity = item.quantity
                                ? item.quantity
                                : quantity;
                            return (
                                <CheckoutItem
                                    book={item}
                                    key={item.id}
                                    quantity={currentQuantity}
                                    totalOrder={totalOrder}
                                ></CheckoutItem>
                            );
                        })}
                    </div>
                    <hr></hr>
                    <div className="d-flex align-items-center justify-content-between">
                        <span>
                            <strong>Tổng số tiền (gồm VAT):</strong>
                        </span>
                        <span className="text-danger fs-5 me-3">
                            <strong>{totalOrder().toLocaleString()}₫</strong>
                        </span>
                    </div>
                </div>
            </div>
            {!isPayment && (
                <div className="text-center">
                    <strong className="fs-6 text-center">
                        PHƯƠNG THỨC THANH TOÁN
                    </strong>
                    <hr />
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                        >
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label={
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <img
                                            src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_cashondelivery.svg?q=10311"
                                            alt="Cash on Delivery"
                                            style={{
                                                width: "40px",
                                                marginRight: "10px",
                                            }}
                                        />
                                        Thanh toán tiền mặt khi nhận hàng (COD)
                                    </div>
                                }
                            />
                        </RadioGroup>
                        <PayPalButtons
                            style={{ layout: "vertical" }}
                            createOrder={(data, actions) =>
                                onCreateOrder(data, actions)
                            }
                            onApprove={(data, actions) =>
                                onApproveOrder(data, actions)
                            }
                        />
                    </FormControl>
                </div>
            )}

            <div className="text-center mt-5">
                <Button
                    variant="outlined"
                    size="large"
                    sx={{
                        borderColor: "red",
                        backgroundColor: "red",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "blue",
                            color: "white",
                        },
                    }}
                    onClick={handleConfirmOrder}
                >
                    Xác nhận đơn hàng
                </Button>
            </div>
        </div>
    );
};
export default CheckoutPage;
