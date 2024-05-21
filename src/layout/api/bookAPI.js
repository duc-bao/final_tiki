import axios from "axios";

export async function getData() {
    try {
        const response = await axios.get("http://localhost:3000/books");
        const allBooks = response.data;
        const limitedBooks = allBooks.slice(0, 24);
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

export async function sendOrderApi(fullname, phoneNumber, deliveryAddress, note,items, totalMoney){
    try{
        const response = await axios.post('http://localhost:3000/order',{
            fullname,
            phoneNumber, 
            deliveryAddress,
            note,
            items,
            totalMoney
        })
        console.log('Đã gửi đơn hàng thành công!');

    }catch(error){
        console.log(error);
    }
}
export async function getOrder(){
    try{
        const response = await axios.get("http://localhost:3000/order");
        const data = response.data;
        return data;
    }catch(error){
        console.log(error);
    }
}