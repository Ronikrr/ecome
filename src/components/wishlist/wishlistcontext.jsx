import React, { createContext, useEffect, useState } from 'react'

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setwishlist] = useState({});
    useEffect(() => {
        const storewishlist = JSON.parse(localStorage.getItem('cosmaticwishlist')) || {};
        setwishlist(storewishlist)
    }, []);
    const addwishlist = (userid, product) => {
        setwishlist((prevwishlist) => {
            const updatedwishlist = { ...prevwishlist };
            if (!Array.isArray(updatedwishlist[userid])) {
                updatedwishlist[userid] = [];
            }
            const exitingproduct = updatedwishlist[userid].findIndex(item => item.id === product.id);
            if (exitingproduct > -1) {
                updatedwishlist[userid][exitingproduct].quantity += 1;
            }
            else {
                updatedwishlist[userid].push({ ...product, quantity: 1 });
            }
            localStorage.setItem('cosmaticwishlist', JSON.stringify(updatedwishlist));
            return updatedwishlist;
        })
    }
    const removeformwishlist = (userid, itemid) => {
        setwishlist((prevwishlist) => {
            const updatedwishlist = { ...prevwishlist };
            if (Array.isArray(updatedwishlist[userid])) {
                updatedwishlist[userid] = updatedwishlist[userid].filter(item => item.id !== itemid)
            }
            localStorage.setItem('cosmaticwishlist', JSON.stringify(updatedwishlist));
            return updatedwishlist;
        })
    }
    return (
        <WishlistContext.Provider value={{ wishlist, addwishlist, removeformwishlist }} >
            {children}
        </WishlistContext.Provider>
    )
}

