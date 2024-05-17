import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookId } from "../api/bookAPI";
import ContentDetail from "./components/bookdetail/ContentDetail";
import SideBarBook from "./components/bookdetail/SideBarBook";
import DetailPrice from "./components/bookdetail/DetailPrice";

const BookDetail = (props) => {
    const [book, setBook] = useState(null);
    const { id } = useParams();
    let idBookNumber;
    //ep kieu number
    try {
        idBookNumber = parseInt(id + "");
        if (Number.isNaN(idBookNumber)) {
            idBookNumber = 0;
        }
    } catch (error) {
        console.error(error);
    }
    useEffect(() => {
        getBookId(id)
            .then((response) => {
                if (response !== null) {
                    setBook(response);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    return (
        <div className="container bg-white mt-5 ">
            <div className="row">
                <div className="col-12 col-lg-3 col-md-3 order-1 order-lg-1">
                    {book !== null && <SideBarBook book={book}></SideBarBook>}
                </div>
                <div className="col-12 col-lg-6 col-md-6 order-3 order-lg-2">
                    {book !== null && (
                        <ContentDetail book={book}></ContentDetail>
                    )}
                </div>
                <div className="col-12 col-lg-3 col-md-3 order-2 order-lg-3">
                    {book !== null && <DetailPrice book={book}  totalCart={props.totalCart}
                            cartList={props.cartList}></DetailPrice>}
                </div>
            </div>
        </div>
    );
};
export default BookDetail;
