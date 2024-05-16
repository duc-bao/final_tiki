import { Link } from "react-router-dom";
import Star from "../../util/Rating";
import TextElip from "../../util/TextElip";
import "./BookProps.css";
const BookProps = (props) => {
    return (
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <div className="bg-white">
                <Link
                    to={`/book/${props.book.id}`}
                    className="d-flex justify-content-center"
                >
                    {
                        <img
                            src={props.book.images[0].base_url}
                            alt=""
                            className="object-cover object-fit "
                            style={{
                                height: "200px",
                                width: "100%",
                                aspectRatio: "1/1",
                            }}
                        />
                    }
                </Link>
                <div className=" " style={{height:"100px"}}>
                    <Link to={`/book/${props.book.id}`}>
                        <span>
                            <TextElip
                                text={props.book.name + ""}
                                limit={80}
                                showFullText={false}
                            />
                        </span>
                    </Link>
                    <div className=" d-flex align-items-center">
                        <Star value={props.book.rating_average} />
                        {props.book.quantity_sold && (
                            <span
                                style={{
                                    borderLeft: "1px solid #ccc",
                                    paddingLeft: "8px",
                                }}
                            >
                                {props.book.quantity_sold.text}
                            </span>
                        )}
                    </div>
                </div>
                <strong style={{ fontSize: "16px" }}>
                    {props.book.list_price.toLocaleString()}đ
                </strong>
                <div className="delivery d-flex align-items-center justify-content-center justify-content-lg-start">
                    <img
                        className=" d-none d-lg-block mx-2"
                        style={{ width: "40px" }}
                        src="/images/now_icon.jpg"
                        alt=""
                    />
                    Giao siêu tốc 2h
                </div>
            </div>
        </div>
    );
};

export default BookProps;
