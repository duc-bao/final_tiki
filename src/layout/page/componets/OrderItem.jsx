import { Chip, Tooltip } from "@mui/material";
import TextElip from "../../util/TextElip";
import { Link } from "react-router-dom";

const OrderItem = (props) => {
    const firstItem = props.order.items[0];
    return (
        <>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <p className="mt-2">
                    Mã đơn hàng:{" "}
                    <strong className="ms-2">{props.order.id}</strong>
                </p>
                <p>
                    Tổng tiền:
                    <strong className="ms-2">
                        {props.order.totalMoney.toLocaleString("vi-vn")} đ
                    </strong>
                </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <p>
                    Họ và tên:
                    <strong className="ms-2">{props.order.fullname}</strong>
                </p>
                <p>
                    Địa chỉ giao hàng:
                    <strong className="ms-2">
                        {props.order.deliveryAddress}
                    </strong>
                </p>
                <p>
                    Số điện thoại:
                    <strong className="ms-2">{props.order.phoneNumber}</strong>
                </p>
            </div>
            <div className="col-lg-5">
                <div className="d-flex">
                    <Link to={`/book/${firstItem.id}`}>
                        <img
                            src={firstItem.images[0].base_url}
                            className="card-img-top"
                            style={{ width: "100px" }}
                        />
                    </Link>
                    <div className="d-flex flex-column pb-2">
                        <Link to={`/book/${firstItem.id}`}>
                            <Tooltip title={firstItem.name} arrow>
                                <span className="d-inline">
                                    <TextElip
                                        text={firstItem.name + " "}
                                        limit={38}
                                    />
                                </span>
                            </Tooltip>
                        </Link>
                        <div className="mt-auto">
                            <span className="discounted-price text-danger">
                                <strong style={{ fontSize: "22px" }}>
                                    {firstItem.list_price?.toLocaleString()}
                                    đ
                                </strong>
                            </span>
                            <span
                                className="original-price ms-3 small"
                                style={{ color: "#000" }}
                            >
                                <del>
                                    {firstItem.original_price?.toLocaleString()}
                                    đ
                                </del>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-3"></hr>
        </>
    );
};
export default OrderItem;
