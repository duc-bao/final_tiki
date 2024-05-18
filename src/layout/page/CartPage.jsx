import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CartItem from "./componets/CartItem";
import { useContext, useState } from "react";
import { CartContext } from "../util/CartItemContext";
import CheckoutPage from "./CheckoutPage";

const CartPage = () => {
    const { cartItems, getTotalPrice, getQuantity } = useContext(CartContext);
    const [isCheckout, setIsCheckout] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const handleBuyNow = () => {
        setIsCheckout(true);
        setQuantity(getQuantity())
    };
    return (
        <div>
            {!isCheckout ? (
                cartItems.length === 0 ? (
                    <div className="d-flex align-items-center justify-content-center flex-column position-relative">
                        <img
                            src="https://newnet.vn/themes/newnet/assets/img/empty-cart.png"
                            alt=""
                            width="63%"
                        />
                        <Link
                            to={"/"}
                            className="position-absolute"
                            style={{ bottom: "100px" }}
                        >
                            <Button variant="contained">Mua sắm ngay</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center">Giỏ hàng</h2>
                            <div className="col-lg-8 col-12 mt-5 ">
                                <div className="container-book bg-light ">
                                    <div className="row px-4 py-3">
                                        <div className="col">Sản phẩm</div>
                                        <div className="col-3 text-center">
                                            Số lượng
                                        </div>
                                        <div className="col-2 text-center">
                                            Số tiền
                                        </div>
                                        <div className="col-2 text-center">
                                            Thao tác
                                        </div>
                                    </div>
                                </div>
                                <div className="container-book bg-light mt-3 px-3">
                                    <div className="row px-4 py-3">
                                        {cartItems.map((cartItem) => {
                                            return (
                                                <CartItem
                                                    cartItem={cartItem}
                                                    key={cartItem.id}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="container-book bg-light col-lg col-md-12 col-sm-12 px-5 pb-4 mt-lg-5 mt-md-3 mt-sm-3 "
                                style={{ height: "fit-content" }}
                            >
                                <div className="d-flex align-items-center justify-content-between mt-3">
                                    <span>Thành tiền:</span>
                                    <span>
                                        <strong>
                                            {getTotalPrice().toLocaleString()}
                                        </strong>
                                    </span>
                                </div>
                                <hr className="my-2" />
                                <div className="d-flex align-items-center justify-content-between">
                                    <span>
                                        <strong>Tổng số tiền (gồm VAT):</strong>
                                    </span>
                                    <span className="text-danger fs-5">
                                        <strong>
                                            {getTotalPrice().toLocaleString()}
                                        </strong>
                                    </span>
                                </div>

                                <Button
                                    variant="contained"
                                    sx={{ width: "100%", marginTop: "30px" }}
                                    onClick={handleBuyNow}
                                >
                                    Thanh toán
                                </Button>
                            </div>
                        </div>
                    </div>
                )
            ) : (
                <CheckoutPage
                    totalPriceProduct={getTotalPrice}
                    bookBuy={cartItems}
                    quantity={getQuantity}
                >
                    {" "}
                </CheckoutPage>
            )}
        </div>
    );
};
export default CartPage;
