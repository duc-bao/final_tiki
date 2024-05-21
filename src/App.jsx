import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/header_footer/Header/Header";
import Footer from "./layout/header_footer/footer/Footer";
import CartPage from "./layout/page/CartPage";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import CheckoutPage from "./layout/page/CheckoutPage";
import HomePage from "./layout/page/HomePage";
import SearchPage from "./layout/page/SearchPage";
import CheckoutSucces from "./layout/page/componets/CheckoutSucces";
import BookDetail from "./layout/product/BookDetail";
import OrderPage from "./layout/page/OrderPage";
function App() {
    const initialOptions = {
        "client-id":
            "Ac7z_dtT_6cf7HqV8O7HamRqigbrcFJIyE9QCm0bS8s3AU4mlLV_HkZWLvc_L2JXwNt-aDWY5IXmiIjs",
        currency: "VNĐ",
        intent: "capture",
    };
    return (
        <>
            <PayPalScriptProvider options={initialOptions}>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<HomePage></HomePage>}></Route>

                    <Route
                        path="/book/:id"
                        element={<BookDetail></BookDetail>}
                    ></Route>
                    <Route path="/cart" element={<CartPage></CartPage>}></Route>
                    <Route
                        path="/search"
                        element={<SearchPage></SearchPage>}
                    ></Route>
                    <Route
                        path="/checkout-success"
                        element={<CheckoutSucces></CheckoutSucces>}
                    ></Route>
                    <Route path="/checkout" element={<CheckoutPage></CheckoutPage>}></Route>
                    <Route path="/order" element= {<OrderPage></OrderPage>}></Route>
                </Routes>
                <Footer></Footer>
            </PayPalScriptProvider>
        </>
    );
}

export default App;
