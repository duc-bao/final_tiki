import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const fetchDataCart = async () => {
            try {
                const response = await axios.get("http://localhost:3000/cart");
                if (response.data) {
                    setCartItems(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataCart();
    }, []);
    const addToCart = async (item) => {
        const isItemInCart = cartItems.find(
            (cartItem) => cartItem.id === item.id
        );
        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
            try {
                await axios.put(`http://localhost:3000/cart/${item.id}`, {
                    ...isItemInCart,
                    quantity: isItemInCart.quantity + 1,
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            const newCart = { ...item, quantity: 1 };

            setCartItems([...cartItems, newCart]);
            try {
                await axios.post(`http://localhost:3000/cart`, newCart);
            } catch (error) {
                console.log(error);
            }
        }
    };
    const removeFromCart = async (item) => {
        const isItemInCart = cartItems.find(
            (cartItem) => cartItem.id === item.id
        );

        if (isItemInCart.quantity === 1) {
            setCartItems(
                cartItems.filter((cartItem) => cartItem.id !== item.id)
            );
            try {
                await axios.delete(`http://localhost:3000/cart/${item.id}`);
            } catch (error) {
                console.log(error);
            }
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
            try {
                await axios.delete(`http://localhost:3000/cart/${item.id}`, {
                    ...isItemInCart,
                    quantity: isItemInCart.quantity - 1,
                });
            } catch (error) {
                console.log(error);
            }
        }
    };
    const incrementQuantity = async (id) => {
        const cartItem = cartItems.find((item) => item.id === id);
        if (cartItem) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
            try {
                await axios.put(`http://localhost:3000/cart/${id}`, {
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                });
            } catch (error) {
                console.error(error);
            }
        }
    };

    const decrementQuantity = async (id) => {
        const cartItem = cartItems.find((item) => item.id === id);
        if (cartItem) {
            if (cartItem.quantity === 1) {
                setCartItems(cartItems.filter((item) => item.id !== id));
                try {
                    await axios.delete(`http://localhost:3000/cart/${id}`);
                } catch (error) {
                    console.error(error);
                }
            } else {
                setCartItems(
                    cartItems.map((cartItem) =>
                        cartItem.id === id
                            ? { ...cartItem, quantity: cartItem.quantity - 1 }
                            : cartItem
                    )
                );
                try {
                    await axios.put(`http://localhost:3000/cart/${id}`, {
                        ...cartItem,
                        quantity: cartItem.quantity - 1,
                    });
                } catch (error) {
                    console.error(error);
                }
            }
        }
    };
    const getQuantity = (id) => {
        const cartItem = cartItems.find((item) => item.id === id);
        return cartItem ? cartItem.quantity : 0;
    };
    const getCartTotal = () => {
        const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        return total;
    };
    const clearCart = async () => {
        setCartItems([]);
        try {
            await Promise.all(
                cartItems.map((item) => {
                    axios.delete(`http://localhost:3000/cart/${item.id}`);
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
    const getTotalPrice = () => {
        const totalPrice = cartItems.reduce(
            (total, item) => total + item.list_price * item.quantity,
            0
        );
        return totalPrice;
    };
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);
    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, []);
    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal,
                getTotalPrice,
                getQuantity,
                decrementQuantity,
                incrementQuantity,
            }}
        >
            {children !== undefined ? children : <></>}
        </CartContext.Provider>
    );
};
export const useCartItem = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("Lỗi context");
    }
    return context;
};
