import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/header_footer/Header/Header";
import Footer from "./layout/header_footer/footer/Footer";
import CartPage from "./layout/page/CartPage";

import FilterCheckBox from "./layout/page/FilterCheckBox";
import HomePage from "./layout/page/HomePage";
import SearchPage from "./layout/page/SearchPage";
import BookDetail from "./layout/product/BookDetail";
import CheckoutSucces from "./layout/page/componets/CheckoutSucces";
import BookList from "./layout/product/BookList";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
function App() {
    const initialOptions = {
        "client-id":
            "Ac7z_dtT_6cf7HqV8O7HamRqigbrcFJIyE9QCm0bS8s3AU4mlLV_HkZWLvc_L2JXwNt-aDWY5IXmiIjs",
        currency: "USD",
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
                </Routes>
                <Footer></Footer>
            </PayPalScriptProvider>
        </>
    );
}

export default App;
