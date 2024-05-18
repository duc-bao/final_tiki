import { Add, Remove } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../util/CartItemContext";

const DetailPrice = (props) => {
    const [quantity, setQuantity] = useState(1);
    const reduce = () => {
        setQuantity(quantity - 1);
    };
    const add = () => {
        setQuantity(quantity + 1);
    };
    const { cartItems, addToCart } = useContext(CartContext);
    // Mua hàng
    const [isCheckout, setIsCheckout] = useState(false);
    const handleBuyNow = (book) => {
        setIsCheckout(true);
        const totalPrice = book.list_price * quantity;
        props.handleBuyNow(true, book, totalPrice, quantity);
    };
    return (
        <div>
            <p>
                <strong>Số lượng</strong>
            </p>
            <div className="wrapper-select-quantity d-flex align-items-center rounded">
                <Button size="small" onClick={() => reduce()}>
                    <Remove />
                </Button>
                <input
                    type="number"
                    className="inp-number p-0 m-0 text-center"
                    value={quantity}
                    onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (!isNaN(value)) {
                            setQuantity(value);
                        }
                    }}
                    min={1}
                    max={99}
                />
                <Button size="small" onClick={() => add()}>
                    <Add />
                </Button>
            </div>
            <div>
                <strong>Tạm tính</strong>
                <br></br>
                <strong style={{ fontSize: "24px" }}>
                    {(quantity * props.book.list_price).toLocaleString()}đ
                </strong>
            </div>
            <div className="d-grid gap-2 mt-2">
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
                    onClick={() => handleBuyNow(props.book)}
                >
                    Mua hàng
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    sx={{
                        borderColor: "blue",
                        backgroundColor: "white",
                        color: "blue",
                        "&:hover": {
                            backgroundColor: "black",
                            color: "white",
                        },
                    }}
                    onClick={() => addToCart(props.book)}
                >
                    Thêm vào giỏ hàng
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    sx={{
                        borderColor: "blue",
                        backgroundColor: "white",
                        color: "blue",
                        "&:hover": {
                            backgroundColor: "black",
                            color: "white",
                        },
                    }}
                >
                    Mua trước trả sau
                </Button>
            </div>
        </div>
    );
};
export default DetailPrice;
