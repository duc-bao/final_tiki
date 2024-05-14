import "./Header.css";

const NavBar = () => {
    return (
        <>
            <div className="header-lg d-none d-lg-block container-fluid">
                <div className="container ">
                    <div className="row header-content  gx-5 d-flex align-items-center justify-content-between">
                        <div className="col-lg-1 text-start logo">
                            <img src="./images/logo.jpg" alt="" />
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
                                    // value={inputValue}
                                    // onChange={handleInputChange}
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
                            <a href="" className="cart_btn">
                                <img src="./images/cart.png" alt="" />
                                <span>2</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="mobile-header"
                className="container-fluid d-block bg-primary d-lg-none"
            >
                <div className="container p-0 d-flex justify-content-between align-items-center">
                    <a href="/">
                        <button>
                            <i className="fa-solid fa-xl fa-chevron-left"></i>
                        </button>
                    </a>
                    <button>
                        <i className="fa-solid fa-xl fa-bars"></i>
                    </button>
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
                    <a href="/cart">
                        <button className="mobile-cart-btn">
                            <i className="fa-solid fa-xl fa-cart-shopping"></i>
                            <span>2</span>
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
};
export default NavBar;
