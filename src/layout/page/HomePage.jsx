import BookList from "../product/BookList";
import SideBar from "./componets/sideBar/SideBar";

const HomePage = () => {
    return (
        <div className="container">
            <div className="row">
                <SideBar></SideBar>
                <BookList></BookList>
            </div>
        </div>
    );
};

export default HomePage;
