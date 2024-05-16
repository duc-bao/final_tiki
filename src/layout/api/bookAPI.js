import axios from "axios";

export async function getData() {
    try {
        const response = await axios.get("http://localhost:3000/books   ");
        const allBooks = response.data;
        const limitedBooks = allBooks.slice(0, 24);
        console.log(limitedBooks);
        return limitedBooks;
    } catch (error) {
        console.log(error);
    }
}

export async function getBookId(id) {
    try {
        const response = await axios.get(`http://localhost:3000/books/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
