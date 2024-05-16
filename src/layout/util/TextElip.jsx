const TextElip = (props) => {
    const truncatedText = props.showFullText
        ? props.text
        : props.text.slice(0, props.limit) +
          (props.text.length > props.limit ? "..." : "");
    return (
        <p
            style={{
                width: "100%",
                overflowWrap: "break-word",
                whiteSpace: "pre-wrap",
                lineHeight: "18px",
            }}
        >
            {truncatedText}
        </p>
    );
};

export default TextElip;
