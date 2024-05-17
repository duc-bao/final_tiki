import { createContext, useContext, useEffect, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(
        localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : []
    );
    const addToCart = (item) => {
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
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };
    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find(
            (cartItem) => cartItem.id === item.id
        );

        if (isItemInCart.quantity === 1) {
            setCartItems(
                cartItems.filter((cartItem) => cartItem.id !== item.id)
            );
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
        }
    };
    const incrementQuantity = (id) => {
        setCartItems(
            cartItems.map((cartItem) =>
                cartItem.id === id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };

    const decrementQuantity = (id) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === id);
        if (isItemInCart && isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
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
    const clearCart = () => {
        setCartItems([]);
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
