import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookId } from "../api/bookAPI";
import ContentDetail from "./components/bookdetail/ContentDetail";
import SideBarBook from "./components/bookdetail/SideBarBook";
import DetailPrice from "./components/bookdetail/DetailPrice";
import CheckoutPage from "../page/CheckoutPage";

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
    
    const [isCheckout, setIsCheckout] = useState(false);
    const [totalPriceProduct, setTotalPriceProduct] = useState(0);
    const [bookBuy, setBookBuy] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const handleBuyNow = (isCheckouts,book, totalPriceProducts, quantity) => {
        setIsCheckout(isCheckouts);
        setTotalPriceProduct(totalPriceProducts);
        setQuantity(quantity);
        setBookBuy(book);
    };

    return (
        <>
            {!isCheckout ? (
                <div className="container bg-white mt-5 ">
                    <div className="row">
                        <div className="col-12 col-lg-3 col-md-3 order-1 order-lg-1">
                            {book !== null && (
                                <SideBarBook book={book}></SideBarBook>
                            )}
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 order-3 order-lg-2">
                            {book !== null && (
                                <ContentDetail book={book}></ContentDetail>
                            )}
                        </div>
                        <div className="col-12 col-lg-3 col-md-3 order-2 order-lg-3">
                            {book !== null && (
                                <DetailPrice
                                    book={book}
                                    totalCart={props.totalCart}
                                    cartList={props.cartList}
                                    handleBuyNow={handleBuyNow}
                                ></DetailPrice>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <CheckoutPage totalPriceProduct = {totalPriceProduct} bookBuy = {[bookBuy]}  quantity = {quantity}> </CheckoutPage>
            )}
        </>
    );
};
export default BookDetail;
