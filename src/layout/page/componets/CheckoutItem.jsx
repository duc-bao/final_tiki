import { Tooltip } from "@mui/material";
import TextElip from "../../util/TextElip";
import { Link } from "react-router-dom";

const CheckoutItem = (props) => {
    let total = props.quantity * props.book.list_price;

    return (
        <>
            <div className="col-8">
                <Link to={`/book/${props.book.id}`}>
                    <img
                        src={props.book.images[0].base_url}
                        className="card-img-top"
                        style={{ width: "100px" }}
                    />
                </Link>
                <Link to={`/book/${props.book.id}`}>
                    <Tooltip title={props.book.name} arrow>
                        <span className="d-inline ">
                            <TextElip text={props.book.name + " "} limit={38} />
                        </span>
                    </Tooltip>
                </Link>
            </div>
            <div className="col-2">{props.quantity}</div>
            <div className="col-2">{total.toLocaleString()}₫</div>
        </>
    );
};
export default CheckoutItem;
