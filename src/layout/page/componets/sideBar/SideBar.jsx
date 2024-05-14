import Star from "../../../util/Rating";
import "./SideBar.css";

const SideBar = () => {
    return (
        <>
            <div className="col-lg-2 d-none d-sm-block ">
                <div>
                    <span>
                        <a href="">Trang Chủ</a>
                    </span>
                    &#62;
                    <span>
                        <a href="">Nhà Sách Tiki</a>
                    </span>
                </div>
                <div className="bg-white text-start mt-2 p-3">
                    <div className="sideBar_top">
                        <strong className="font-semibold text-lg">
                            Danh Mục Sản Phẩm
                        </strong>
                        <a style={{ display: "block" }}>English Books</a>
                        <a style={{ display: "block" }}>Sách tiếng Việt</a>
                        <a style={{ display: "block" }}>Văn phòng phẩm</a>
                        <a style={{ display: "block" }}>Quà lưu niệm</a>
                    </div>
                    <div className="sideBar_center mt-2 ">
                        <strong className="font-semibold text-lg">
                            Nhà cung cấp
                        </strong>
                        <div>
                            <input
                                type="checkbox"
                                name="name"
                                id="check_ncc"
                                className="me-2"
                            />
                            <label htmlFor="check_ncc">Nhà sách Fahasa</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="name"
                                id="check_ncc"
                                className="me-2"
                            />
                            <label htmlFor="check_ncc">Bamboo Books</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="name"
                                id="check_ncc"
                                className="me-2"
                            />
                            <label htmlFor="check_ncc">Times Books</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="name"
                                id="check_ncc"
                                className="me-2"
                            />
                            <label htmlFor="check_ncc">
                                Nhà Sách Trẻ Online
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="name"
                                id="check_ncc"
                                className="me-2"
                            />
                            <label htmlFor="check_ncc">VBooks</label>
                        </div>
                        <div>
                            <a href="" className="text-primary">
                                Xem thêm
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                            >
                                <path
                                    d="M6.86389 7.70957L9.84045 4.73066C10.0608 4.51035 10.417 4.51035 10.635 4.73066C10.853 4.95098 10.853 5.30723 10.635 5.52754L7.26233 8.90254C7.04905 9.11582 6.70686 9.12051 6.48655 8.91895L3.09045 5.52988C2.9803 5.41973 2.92639 5.27441 2.92639 5.13145C2.92639 4.98848 2.9803 4.84316 3.09045 4.73301C3.31077 4.5127 3.66702 4.5127 3.88499 4.73301L6.86389 7.70957Z"
                                    fill="#0B74E5"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-1 feedback-filter ">
                        <strong>Đánh giá</strong>
                        <ul className="mt-3">
                            <li className="d-flex align-items-center mb-2">
                                <Star value={5} />
                                <span>từ 5 sao</span>
                            </li>
                            <li className="d-flex align-items-center">
                                <Star value={4} />
                                <span>từ 4 sao</span>
                            </li>
                            <li className="d-flex align-items-center">
                                <Star value={3} />
                                <span>từ 3 sao</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mobile-nav d-block d-lg-none">
                <div className="box d-flex align-items-center justify-content-between">
                    <a href="" className="text-primary">
                        Phổ biến
                    </a>
                    <button className="">Bán chạy</button>
                    <button className="">Hàng mới</button>
                    <span className="">
                        {true && (
                            <button className="">
                                Giá{" "}
                                <i className="fa-solid fa-arrow-up-long"></i>
                            </button>
                        )}
                        {true && (
                            <button className="">
                                Giá{" "}
                                <i className="fa-solid fa-arrow-down-long"></i>
                            </button>
                        )}
                    </span>
                </div>
            </div>
        </>
    );
};

export default SideBar;
