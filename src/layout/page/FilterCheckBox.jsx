import { useEffect, useState } from "react";
import { getData } from "../api/bookAPI";
import { Link } from "react-router-dom";

import TextElip from "../util/TextElip";
import Star from "../util/Rating";

const FilterCheckBox = (props) => {
    return (
        
        <div className="col-6 col-sm-6 col-md-6 col-lg-3">
            <div className="bg-white">
                <Link
                    to={`/book/${props.book.id}`}
                    className="d-flex justify-content-center"
                >
                    {
                        <img
                            src={props.book.images[0].large_url}
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
                <div className="mt-2  " style={{ height: "100px" }}>
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
                                    fontSize: "10px",
                                    color: "#808089",
                                }}
                            >
                                {props.book.quantity_sold.text}
                            </span>
                        )}
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <span className="discounted-price">
                        <strong style={{ fontSize: "22px" }}>
                            {props.book.list_price?.toLocaleString()}₫
                        </strong>
                    </span>
                    {props.book.list_price >
                        props.book.current_seller.price && (
                        <span className="original-price ms-3 small fw-bolder">
                            <del className="" style={{ fontSize: "12px" }}>
                                {Math.round(
                                    ((props.book.list_price -
                                        props.book.current_seller.price) /
                                        props.book.list_price) *
                                        100
                                )}
                                %
                            </del>
                        </span>
                    )}
                </div>
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
export default FilterCheckBox;
