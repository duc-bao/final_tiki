    import { useEffect, useState } from "react";
    import BookList from "../product/BookList";
    import SideBar from "./componets/sideBar/SideBar";
    import { getData } from "../api/bookAPI";
    import FilterCheckBox from "./FilterCheckBox";

    const HomePage = () => {
        const [ischeck, setCheck] = useState(false);
        const [isCheckStar, setCheckStar] = useState(false);
        const [sellerList, setSellerList] = useState("");
        const [bookList, setBookList] = useState([]);
        const [bookData, setBookData] = useState([]);
        const [bookStar, setBookStar] = useState([]);
        const [star, setstar] = useState(0);
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const data = await getData();
                    setBookList(data);
                } catch (error) {
                    console.error("Error setting book list:", error);
                }
            };
            fetchData();
        }, []);
        const handleChecked = (ischeck, idValue) => {
            setCheck(ischeck);
            const valueSearch = idValue.toLowerCase();
            setSellerList(valueSearch);
        };
        useEffect(() => {
            setBookData(
                bookList.filter((item) => {
                    return item.current_seller.name
                        .toLowerCase()
                        .includes(sellerList);
                })
            );
        }, [bookList, sellerList]);

        const handleClickStar = (value) => {
            setstar(value);
            setCheckStar(true);
        };
        useEffect(() => {
            setBookStar(
                bookList.filter((item) => {
                    return Math.round(item.rating_average - 0.3) === star;
                })
            );
        }, [ star]);
        // useEffect(() =>{
        //     console.log(star);
        // }, [star])
        return (
            <div className="container">
            <div className="row">
                {!ischeck && !isCheckStar && (
                    <>
                        <SideBar
                            handleChecked={handleChecked}
                            handleClickStar={handleClickStar}
                        />
                        <BookList />
                    </>
                )}
                {(ischeck || isCheckStar) && (
                    <div className="col-lg-10 col-sm-12 col-md-12" style={{ marginTop: "30px" }}>
                        <h3 className="text-center my-3">Kết quả tìm kiếm</h3>
                        <div className="row">
                            {isCheckStar
                                ? bookStar.map((book) => <FilterCheckBox key={book.id} book={book} />)
                                : bookData.map((book) => <FilterCheckBox key={book.id} book={book} />)
                            }
                        </div>
                    </div>
                )}
                {ischeck && !isCheckStar && bookData.length === 0 && (
                    <h3 className="text-center">Không tìm thấy kết quả phù hợp.</h3>
                )}
                {isCheckStar && bookStar.length === 0 && (
                    <h3 className="text-center">Không tìm thấy kết quả phù hợp.</h3>
                )}
            </div>
        </div>
        );
    };

    export default HomePage;
