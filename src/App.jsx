import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/header_footer/Header/Header";
import Footer from "./layout/header_footer/footer/Footer";
import CartPage from "./layout/page/CartPage";
import HomePage from "./layout/page/HomePage";
import BookDetail from "./layout/product/BookDetail";
function App() {
    const [totalCart, setTotalCart] = useState(0);

    const [cartList, setCartList] = useState([]);

    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route
                    path="/book/:id"
                    element={<BookDetail></BookDetail>}
                ></Route>
                <Route
                    path="/cart"
                    element={
                        <CartPage
                            totalCart={totalCart}
                            cartList={cartList}
                        ></CartPage>
                    }
                ></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
