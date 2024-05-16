import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
    return (
        <>
            <div className="container-fluid  footer ">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-3 mb-3">
                            <h4 className="footer-title text-start">
                                Hỗ trợ khách hàng
                            </h4>
                            <ul className="nav flex-column text-start">
                                <Link to ="/" className="nav-item ">
                                    Hotline: 1900-6035
                                </Link>
                                <Link to = "/" className="nav-item mb-1">
                                    (1000 đ/phút, 8-21h kể cả T7, CN)
                                </Link>
                                <li className="nav-item mb-1">
                                    Các câu hỏi thường gặp
                                </li>
                                <li className="nav-item mb-1">
                                    Gửi yêu cầu hỗ trợ
                                </li>
                                <li className="nav-item mb-1">
                                    Hướng dẫn đặt hàng
                                </li>
                                <li className="nav-item mb-1">
                                    Phương thức vận chuyển
                                </li>
                                <li className="nav-item mb-1">
                                    Chính sách đổi trả
                                </li>
                                <li className="nav-item mb-1">
                                    Hướng dẫn trả góp{" "}
                                </li>
                                <li className="nav-item mb-1">
                                    Chính sách hàng nhập khẩu
                                </li>
                                <li className="nav-item mb-1">
                                    Hỗ trợ khách hàng: hotro@tiki.vn
                                </li>
                                <li className="nav-item mb-1">
                                    Báo lỗi bảo mật: security@tiki.vn
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 text-start">
                            <h4 className="footer-title">Về Tiki</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item ">Giới thiệu Tiki</li>
                                <li className="nav-item mb-1">Tiki Blog</li>
                                <li className="nav-item mb-1">Tuyển dụng</li>
                                <li className="nav-item mb-1">
                                    Chính sách bảo mật thanh toán
                                </li>
                                <li className="nav-item mb-1">
                                    Chính sách bảo mật thông tin cá nhân
                                </li>
                                <li className="nav-item mb-1">
                                    Chính sách giải quyết khiếu nại
                                </li>
                                <li className="nav-item mb-1">
                                    Điều khoản sử dụng
                                </li>
                                <li className="nav-item mb-1">
                                    Giới thiệu Tiki Xu
                                </li>
                                <li className="nav-item mb-1">
                                    Gói hội viên VIP
                                </li>
                                <li className="nav-item mb-1">
                                    Tiếp thị liên kết cùng Tiki
                                </li>
                                <li className="nav-item mb-1">
                                    Bán hàng doanh nghiệp
                                </li>
                                <li className="nav-item mb-1">
                                    Điều kiện vận chuyển
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 mb-3 d-flex justify-content-between text-start">
                            <div className="me-1">
                                <h4 className="footer-title">
                                    Hợp tác và liên kết
                                </h4>
                                <ul className="nav flex-column">
                                    <li className="nav-item ">
                                        Quy chế hoạt động Sàn GDTMĐT
                                    </li>
                                    <li className="nav-item mb-2">
                                        Bán hàng cùng Tiki
                                    </li>
                                    <li className="nav-item mb-2">
                                        <h4 className="footer-title">
                                            Chứng nhận bởi{" "}
                                        </h4>
                                    </li>
                                    <li className="nav-item mb-1 text-center">
                                        <img
                                            src="./image/bo-cong-thuong.svg.png"
                                            alt=""
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="text-start">
                                <h4 className="footer-title mb-5">
                                    Phương thức thanh toán
                                </h4>
                                <h4 className="footer-title">
                                    Dịch vụ giao hàng
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3 text-start">
                            <h4 className="footer-title mb-3">
                                Kết nối với chúng tôi
                            </h4>

                            <div className="d-flex ">
                                <a href="https://www.facebook.com/">
                                    <svg
                                        width="32"
                                        height="33"
                                        viewBox="0 0 32 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 16.6665C0 7.82995 7.16344 0.666504 16 0.666504C24.8366 0.666504 32 7.82995 32 16.6665C32 25.5031 24.8366 32.6665 16 32.6665C7.16344 32.6665 0 25.5031 0 16.6665Z"
                                            fill="#3B5998"
                                        ></path>
                                        <path
                                            d="M17.6676 26.0742V17.3693H20.0706L20.389 14.3696H17.6676L17.6717 12.8682C17.6717 12.0858 17.7461 11.6666 18.8698 11.6666H20.372V8.6665H17.9687C15.082 8.6665 14.066 10.1217 14.066 12.5689V14.3699H12.2666V17.3696H14.066V26.0742H17.6676Z"
                                            fill="white"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/">
                                    <svg
                                        width="32"
                                        height="33"
                                        viewBox="0 0 32 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 16.6665C0 7.82995 7.16344 0.666504 16 0.666504C24.8366 0.666504 32 7.82995 32 16.6665C32 25.5031 24.8366 32.6665 16 32.6665C7.16344 32.6665 0 25.5031 0 16.6665Z"
                                            fill="#FF0000"
                                        ></path>
                                        <path
                                            d="M24.1768 12.7153C23.9805 11.9613 23.4022 11.3675 22.6679 11.166C21.3371 10.7998 16.0001 10.7998 16.0001 10.7998C16.0001 10.7998 10.6632 10.7998 9.3323 11.166C8.59795 11.3675 8.01962 11.9613 7.82335 12.7153C7.4668 14.0818 7.4668 16.9331 7.4668 16.9331C7.4668 16.9331 7.4668 19.7843 7.82335 21.151C8.01962 21.905 8.59795 22.4987 9.3323 22.7003C10.6632 23.0665 16.0001 23.0665 16.0001 23.0665C16.0001 23.0665 21.3371 23.0665 22.6679 22.7003C23.4022 22.4987 23.9805 21.905 24.1768 21.151C24.5335 19.7843 24.5335 16.9331 24.5335 16.9331C24.5335 16.9331 24.5335 14.0818 24.1768 12.7153Z"
                                            fill="white"
                                        ></path>
                                        <path
                                            d="M14.3999 19.8665V14.5332L18.6666 17.2L14.3999 19.8665Z"
                                            fill="#FF0000"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="https://chat.zalo.me/">
                                    <svg
                                        width="32"
                                        height="33"
                                        viewBox="0 0 32 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 16.6665C0 7.82995 7.16344 0.666504 16 0.666504C24.8366 0.666504 32 7.82995 32 16.6665C32 25.5031 24.8366 32.6665 16 32.6665C7.16344 32.6665 0 25.5031 0 16.6665Z"
                                            fill="#3171F6"
                                        ></path>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16.0002 5.99984C10.1091 5.99984 5.3335 10.4556 5.3335 15.9522C5.3335 19.0351 6.83597 21.7903 9.19473 23.6158V27.3332L12.8261 25.4565C13.8287 25.7477 14.8948 25.9046 16.0002 25.9046C21.8912 25.9046 26.6668 21.4488 26.6668 15.9522C26.6668 10.4556 21.8912 5.99984 16.0002 5.99984ZM9.87701 18.0804C10.6612 18.0804 11.3932 18.0759 12.125 18.0821C12.5362 18.0856 12.7584 18.2607 12.7962 18.5845C12.8442 18.9944 12.605 19.2664 12.1609 19.2714C11.3233 19.2809 10.4855 19.275 9.64768 19.275C9.40587 19.275 9.16349 19.2835 8.92244 19.2696C8.62187 19.2523 8.32787 19.1928 8.18415 18.8827C8.04006 18.5719 8.14015 18.293 8.33911 18.04C9.13968 17.0219 9.9412 16.0047 10.7422 14.9869C10.7898 14.9265 10.8357 14.8648 10.882 14.8043C10.833 14.7159 10.7554 14.7555 10.6949 14.7551C10.1336 14.7516 9.57215 14.7556 9.01082 14.7511C8.88254 14.7501 8.75044 14.7398 8.62701 14.7074C8.36663 14.6391 8.20854 14.4307 8.20644 14.182C8.20434 13.9329 8.35768 13.722 8.61749 13.6487C8.74025 13.6141 8.87282 13.6021 9.00111 13.6016C9.9252 13.5978 10.8493 13.5981 11.7734 13.6011C11.9367 13.6016 12.1011 13.6058 12.2597 13.6606C12.6101 13.7815 12.7643 14.1045 12.6219 14.4465C12.4978 14.7442 12.3001 14.9973 12.1027 15.2486C11.4252 16.1108 10.7452 16.9709 10.0663 17.8322C10.0136 17.899 9.96292 17.9676 9.87701 18.0804ZM14.0567 17.2472C14.0617 17.4255 14.1205 17.6652 14.2747 17.8732C14.6102 18.3257 15.2984 18.3243 15.6337 17.8723C15.9242 17.4805 15.9227 16.8304 15.6319 16.4389C15.4782 16.2321 15.273 16.1238 15.0169 16.1087C14.4487 16.0753 14.0509 16.5148 14.0567 17.2472ZM15.8889 15.3525C16.0151 15.1936 16.1404 15.0439 16.3538 15.0005C16.7609 14.9174 17.147 15.182 17.1525 15.596C17.1661 16.6319 17.161 17.668 17.1549 18.7041C17.1532 18.987 16.9789 19.2039 16.7239 19.2906C16.4567 19.3814 16.1783 19.3152 15.9998 19.09C15.9124 18.9797 15.875 18.9607 15.7531 19.0596C15.2812 19.4422 14.7489 19.5091 14.1735 19.3225C13.2505 19.023 12.8705 18.3038 12.7703 17.4228C12.6626 16.4766 12.9776 15.6645 13.8246 15.1666C14.5277 14.7532 15.2421 14.788 15.8889 15.3525ZM20.7838 17.1508C20.7824 17.416 20.8448 17.6634 21.0047 17.8783C21.3324 18.3189 22.0136 18.3224 22.348 17.8879C22.6494 17.4962 22.6504 16.8305 22.353 16.4346C22.1979 16.2282 21.9918 16.1217 21.7364 16.1082C21.1766 16.0785 20.7862 16.5065 20.7838 17.1508ZM19.4806 17.276C19.4411 15.9452 20.3142 14.9509 21.556 14.9127C22.8756 14.8721 23.8436 15.7594 23.883 17.0529C23.9229 18.3626 23.1194 19.2917 21.8803 19.416C20.5341 19.5509 19.4614 18.57 19.4806 17.276ZM19.0266 16.2455C19.0266 17.0484 19.0306 17.8513 19.025 18.6542C19.0218 19.1134 18.6166 19.4239 18.1809 19.3139C17.9192 19.2479 17.7236 18.9703 17.7231 18.6468C17.7211 17.2741 17.7223 15.9014 17.7223 14.5287C17.7223 14.287 17.7189 14.0451 17.7231 13.8035C17.7301 13.4051 17.9837 13.1465 18.3649 13.1428C18.7586 13.1389 19.0226 13.3985 19.0252 13.811C19.0302 14.6225 19.0266 15.434 19.0266 16.2455Z"
                                            fill="white"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                            <h4 className="footer-title mt-5">
                                Tải ứng dụng trên điện thoại
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className=" flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-start">
                        <h4 className="footer-title">Công ty TNHH TIKI</h4>
                        <ul className="nav flex-column">
                            <li className="nav-item ">
                                Địa chỉ trụ sở: Tòa nhà Viettel, Số 285, Đường
                                Cách Mạng Tháng 8, Phường 12, Quận 10, Thành phố
                                Hồ Chí Minh
                            </li>
                            <li className="nav-item mb-2">
                                Giấy chứng nhận đăng ký doanh nghiệp số
                                0309532909 do Sở Kế Hoạch và Đầu Tư Thành phố Hồ
                                Chí Minh cấp lần đầu vào ngày 06/01/2010.
                            </li>
                            <li className="nav-item mb-2">
                                <h4 className="footer-title">
                                    Hotline: 1900 6035{" "}
                                </h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
