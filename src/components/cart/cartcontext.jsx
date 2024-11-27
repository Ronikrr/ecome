
import React, { createContext, useEffect, useState } from "react";

export const Cartcontext = createContext();

export const Cartprovider = ({ children }) => {
    const [cart, setcart] = useState({});
    const [cartTotal, setcartTotal] = useState(0);
    useEffect(() => {
        const savecart = JSON.parse(localStorage.getItem("cosmaticCart")) || {};
        setcart(savecart);
        calculateCartTotal(savecart);
    },[]);
    const calculateCartTotal = (cart) => {
        const total = Object.values(cart)
            .flat()
            .reduce((acc, item) => acc + item.price * item.quantity, 0);
        setcartTotal(total);
    };
    const addtocart = (userid, product) => {
        const updatedcart = { ...cart };
        if (!Array.isArray(updatedcart[userid])) {
            updatedcart[userid] = [];
        }

        const existproductindex = updatedcart[userid].findIndex(
            (item) => item.id === product.id
        );
        if (existproductindex > -1) {
            updatedcart[userid][existproductindex].quantity += 1;
        } else {
            updatedcart[userid].push({ ...product, quantity: 1 });
        }
        calculateCartTotal(updatedcart);
        localStorage.setItem("cosmaticCart", JSON.stringify(updatedcart));
        setcart(updatedcart);
    };
    const increaceQuntity = (userid, productid) => {
        setcart((prevcart) => {
            const updatedcart = { ...prevcart };
            const usercart = updatedcart[userid] || [];
            const productIndex = usercart.findIndex((item) => item.id === productid);
            if (productIndex > -1) {
                const updateproduct = {
                    ...usercart[productIndex],
                    quantity: usercart[productIndex].quantity + 1,
                };
                const updatedusercart = [...usercart];
                updatedusercart[productIndex] = updateproduct;
                updatedcart[userid] = updatedusercart;
                localStorage.setItem("cosmaticCart", JSON.stringify(updatedcart));
                calculateCartTotal(updatedcart);
            } else {
                console.error("Product not found in cart for user:", userid);
            }
        });
    };
    const decreaseQuantity = (userid, productid) => {
        setcart((prevcart) => {
            const updatedcart = { ...prevcart };
            const usercart = updatedcart[userid] || [];
            const productIndex = usercart.findIndex((item) => item.id === productid);
            if (productIndex > -1 && usercart[productIndex].quantity>1) {
                const updateproduct = {
                    ...usercart[productIndex],
                    quantity: usercart[productIndex].quantity - 1,
                };
                const updatedusercart = [...usercart];
                updatedusercart[productIndex] = updateproduct;
                updatedcart[userid] = updatedusercart;
                localStorage.setItem("cosmaticCart", JSON.stringify(updatedcart));
                calculateCartTotal(updatedcart);
            } else {
                console.error("Product not found in cart for user:", userid);
            }
        });
    };
    const removeformcart = (userid, productid) => {
        setcart((prevcart) => {
            const updatedcart = { ...prevcart };
            if (Array.isArray(updatedcart[userid])) {
                updatedcart[userid]=updatedcart[userid].filter(item=>item.id !== productid)
            }
            localStorage.setItem('cosmaticCart', JSON.stringify(updatedcart));
            calculateCartTotal(updatedcart);
            return updatedcart;
        })
    }
    return (
        <Cartcontext.Provider value={{cart,cartTotal,removeformcart,addtocart,increaceQuntity,decreaseQuantity}} >
            {children}
        </Cartcontext.Provider>
    );
};
