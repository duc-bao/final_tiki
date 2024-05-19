import { Link } from "react-router-dom";
import "./Header.css";
import { useContext, useState } from "react";
import { CartContext } from "../../util/CartItemContext";

const Header = () => {
    const {  getCartTotal } = useContext(CartContext)
    const [input , setInput] = useState("");
    const handleInputChange = (event) => {
        setInput(event.target.value);
    }
    return (
        <>
            <div className="header-lg d-none d-lg-block container-fluid">
                <div className="container ">
                    <div className="row header-content  gx-5 d-flex align-items-center justify-content-between">
                        <div className="col-lg-1 text-start logo">
                            <Link to=  "/">
                            <img src="./images/logo.jpg" alt="" />
                            </Link>
                            
                        </div>
                        <div className="col-lg-8">
                            <form
                                className="search-form d-flex"
                                action="/search"
                            >
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Freeship đến 30k"
                                    value={input}
                                    onChange={handleInputChange}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Tìm kiếm
                                </button>
                            </form>
                        </div>
                        <div className="col-lg-3 d-flex align-items-center justify-content-between header_btn">
                            <a href="" className="d-flex align-items-center">
                                <img src="./images/header_img/hb1.png" alt="" />
                                Trang Chủ
                            </a>
                            <a href="" className="d-flex align-items-center">
                                <img src="./images/header_img/hb2.png" alt="" />
                                Tài khoản
                            </a>
                            <Link to = "/cart" className="cart_btn">
                                <img src="./images/cart.png" alt="" />
                                <span>{getCartTotal()}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="mobile-header"
                className="container-fluid d-block bg-primary d-lg-none"
            >
                <div className="container p-0 d-flex justify-content-between align-items-center">
                    <Link to ="/">
                        <button>
                            <i className="fa-solid fa-xl fa-chevron-left"></i>
                        </button>
                    </Link>
                    <Link to = '/'>
                        <i className="fa-solid fa-xl fa-bars"></i>
                    </Link>
                    <form
                        action="/search"
                        className="mobile-search d-flex align-items-center justify-content-between"
                    >
                        <span>
                            <img src="/images/search_icon.png" alt="" />
                        </span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Bạn đang tìm kiếm gì"
                        />
                    </form>
                    <Link  to="/cart">
                        <button className="mobile-cart-btn">
                            <i className="fa-solid fa-xl fa-cart-shopping"></i>
                            <span>{getCartTotal()}  </span>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default Header;
