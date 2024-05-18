import { Rating } from "@mui/material";

const Star = (props) => {
    return <Rating name="read-only" value={props.value} size="small" readOnly precision={0.5} className="me-2"/>;
};
export default Star;
