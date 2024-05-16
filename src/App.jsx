import "./App.css";
import NavBar from "./layout/header_footer/Header/Header";
import Footer from "./layout/header_footer/footer/Footer";
import HomePage from "./layout/page/HomePage";
import { Route, Routes } from "react-router-dom";
import BookDetail from "./layout/product/BookDetail";
function App() {
    return (
        <>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/book/:id" element = {<BookDetail></BookDetail>}></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
