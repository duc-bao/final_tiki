import { Rating } from "@mui/material";

const Star = (props) => {
    return (
        <Rating
            name="half-rating"
            value={props.value}
            precision={0.5}
            size="small"
        />
    );
};
export default Star;
