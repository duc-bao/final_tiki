import { useEffect, useState } from "react";
import { getData } from "../api/bookAPI";

const FilterCheckBox = () => {
    const [bookList, setBookList] = useState([]);
    const [filterTags, setFilterTags] = useState([]);
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
    const filterdData = bookList.filter((node) => {
        filterTags.length > 0
            ? filterTags.every((filterTag) => {
                  node.categories
                      .map((cate) => {
                          cate.name;
                      })
                      .includes(filterTag);
              })
            : bookList; 
    });
    const filterHandler = (event) => {
        if (event.target.checked) {
            setFilterTags([...filterTags, event.target.value]);
        } else {
            setFilterTags(
                filterTags.filter(
                    (filterTag) => filterTag !== event.target.value
                )
            );
        }
    };
};
export default FilterCheckBox;
