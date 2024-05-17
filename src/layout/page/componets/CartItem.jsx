import { Add, Remove } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../util/CartItemContext";
import TextElip from "../../util/TextElip";
const CartItem = (props) => {
    const { removeFromCart ,decrementQuantity,incrementQuantity,getQuantity} =
        useContext(CartContext);
    return (
        <>
            <div className="col-5">
                <div className="d-flex">
                    <Link to={`/book/${props.cartItem.id}`}>
                        <img
                            src={props.cartItem.images[0].base_url}
                            className="card-img-top"
                            style={{ width: "100px" }}
                        />
                    </Link>
                    <div className="d-flex flex-column pb-2">
                        <Link to={`/book/${props.cartItem.id}`}>
                            <Tooltip title={props.cartItem.name} arrow>
                                <span className="d-inline">
                                    <TextElip
                                        text={props.cartItem.name + " "}
                                        limit={38}
                                    />
                                </span>
                            </Tooltip>
                        </Link>
                        <div className="mt-auto">
                            <span className="discounted-price text-danger">
                                <strong style={{ fontSize: "22px" }}>
                                    {props.cartItem.list_price?.toLocaleString()}
                                    đ
                                </strong>
                            </span>
                            <span
                                className="original-price ms-3 small"
                                style={{ color: "#000" }}   
                            >
                                <del>
                                    {props.cartItem.original_price?.toLocaleString()}
                                    đ
                                </del>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3 text-center my-auto d-flex align-items-center justify-content-center">
                <Button size="small" onClick={() => decrementQuantity(props.cartItem.id)}>
                    <Remove />
                </Button>
                <input
                    type="number"
                    className="inp-number p-0 m-0 text-center"
                    value={getQuantity(props.cartItem.id)}
                    onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (!isNaN(value)) {
                            setQuantity(value);
                        }
                    }}
                    min={1}
                    max={99}
                />
                <Button size="small" onClick={() => incrementQuantity(props.cartItem.id)}>
                    <Add />
                </Button>
            </div>
            <div className="col-2 text-center my-auto">
                <span className="text-danger">
                    <strong>
                        {props.cartItem.list_price
                            ? (
                                getQuantity(props.cartItem.id) * props.cartItem.list_price
                              ).toLocaleString() + "đ"
                            : "Price Unavailable"}
                    </strong>
                </span>
            </div>
            <div className="col-2 d-flex align-items-center">
                <Button 
                onClick={() =>removeFromCart(props.cartItem)}>
                    Xóa
                </Button>
            </div>
            <hr className="my-3" />
        </>
    );
};
export default CartItem;
