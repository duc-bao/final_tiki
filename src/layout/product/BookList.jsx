import { useEffect, useState } from "react";
import { getData } from "../api/bookAPI";
import BookProps from "./components/BookProps";

const BookList = () => {
    const [bookList, setBookList] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                setBookList(data);
            } catch (error) {
                setError(error);
                console.error("Error setting book list:", error);
            }
        };
        fetchData();
    }, []);
    if (error) {
        return <div>Error loading books: {error.message}</div>;
    }
    return (
        <div className="col-lg-10 col-sm-12 col-md-4  " style={{marginTop:"30px"}}>
            <div className="row g-4">
                { bookList.map((book) => {
                    return <BookProps key={book.id} book={book}></BookProps>;
                })} 
            </div>
        </div>
    );
};
export default BookList;
