import { Rating } from "@mui/material";

const Star = (props) => {
    return <Rating name="read-only" value={props.value} size="small" readOnly />;
};
export default Star;
