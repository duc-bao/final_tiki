import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/header_footer/Header/Header";
import Footer from "./layout/header_footer/footer/Footer";
import CartPage from "./layout/page/CartPage";
import CheckoutSucces from "./layout/page/CheckoutSucces";
import FilterCheckBox from "./layout/page/FilterCheckBox";
import HomePage from "./layout/page/HomePage";
import SearchPage from "./layout/page/SearchPage";
import BookDetail from "./layout/product/BookDetail";
import CheckoutPage from "./layout/page/CheckoutPage";

function App() {
    return (
        <>
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
                    path="/filter"
                    element={<FilterCheckBox></FilterCheckBox>}
                ></Route>
                <Route path="/checkout-success" element = {<CheckoutSucces></CheckoutSucces>}></Route>
                <Route path="/checkout" element= {<CheckoutPage></CheckoutPage>}></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
