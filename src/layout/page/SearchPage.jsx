import { useEffect, useState } from "react";
import { getData } from "../api/bookAPI";
import BookProps from "../product/components/BookProps";

const SearchPage = () => {
    const [bookList, setBookList] = useState([]);
    const [datalist, setDataList] = useState([]);
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
    useEffect(() => {
        const url = new URLSearchParams(window.location.search);
        console.log(url);
        const key = url.get("name");    
        if (key) {
            const keysearch = key.toLowerCase();
            setDataList(
                bookList.filter(
                    (item) =>
                        item.name.toLowerCase().includes(keysearch) ||
                        item.categories.name
                            .toLowerCase()
                            .includes(keysearch) ||
                        item.current_seller.name
                            .toLowerCase()
                            .includes(keysearch)
                )
            );
        }
    }, [bookList]);

    return (
        <div className="container bg-white">
            <h2 className="mt-2 text-center mb-5">Kết quả tìm kiếm</h2>
            <div className="row">
                {datalist.length === 0 ? (
                    <h3 className="text-center">Không tìm thấy kết quả phù hợp.</h3>
                ) : (
                    datalist.map((book) => (
                        <BookProps key={book.id} book={book} />
                    ))
                )}
            </div>
        </div>
    );
};
export default SearchPage;
