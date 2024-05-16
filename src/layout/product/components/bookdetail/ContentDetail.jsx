import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Star from "../../../util/Rating";

const ContentDetail = (props) => {
    return (
        <>
            <div className="">
                <div>
                    <img
                        src="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                        alt=""
                        className=""
                        style={{ height: "20px" }}
                    />
                    <span className="ms-2">Tác giả:</span>
                    {props.book && props.book.authors ? (
                        <Link to="/" className="text-primary ms-2">
                            {props.book.authors[0].name}
                        </Link>
                    ) : (
                        <span className="text-primary ms-2">
                            Aleksandra Mizielińska
                        </span>
                    )}
                </div>
                <div>
                    <h4 style={{ fontSize: "20px" }}> {props.book.name}</h4>
                </div>
                <div className="d-flex justify-content-star align-items-center">
                    <span className="me-2">{props.book.rating_average}</span>
                    <Star value={props.book.rating_average}></Star>
                    <span className="ms-2">
                        (
                        {props.book.quantity_sold &&
                            Math.round(props.book.quantity_sold.value / 4)}
                        )
                    </span>
                    <span className="ms-2">
                        {" "}
                        | Đã bán {(props.book.quantity_sold) ?props.book.quantity_sold.value : 0 }
                    </span>
                </div>
                <div className="mt-2">
                    <strong style={{ fontSize: "24px" }}>
                        {props.book.list_price.toLocaleString()}đ
                    </strong>
                </div>
                <div className="mt-2">
                    <h4 style={{ fontSize: "20px" }}>Thông tin chi tiết</h4>
                    <div className="d-flex justify-content-between  ">
                        <div>
                            <span className="text-gray-500">
                                Phiên bản sách
                            </span>
                        </div>
                        <div>
                            <span>Phiên bản thường</span>
                        </div>
                    </div>
                    <ul className="mt-2">
                        {props.book.specifications[0].attributes.map(
                            (item, index) => {
                                return (
                                    <li
                                        key={index}
                                        style={{
                                            display: "block",
                                            marginBottom: "10px",
                                        }}
                                        className="d-flex justify-content-between"
                                    >
                                        <span>{item.name}</span>{" "}
                                        <span>{item.value}</span>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>
            </div>
            <div className="mt-4 bg-white">
                <h4 style={{ fontSize: "20px" }}>Mô tả sản phẩm</h4>

                <img src={props.book && props.book.images[0].large_url} alt="" className="mb-2 mt-2" style={{height:"400px", width:"100%"}}/>
                <div    
                    dangerouslySetInnerHTML={{
                        __html: props.book.description
                    }}
                ></div>
            </div>
        </>
    );
};
export default ContentDetail;
