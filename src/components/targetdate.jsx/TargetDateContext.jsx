// TargetDateContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const TargetDateContext = createContext();

export const useTargetDate = () => {
    return useContext(TargetDateContext);
};

export const TargetDateProvider = ({ children }) => {
    const [targetDate] = useState(new Date("2024-11-15T00:00:00Z"));

    return (
        <TargetDateContext.Provider value={targetDate}>
            {children}
        </TargetDateContext.Provider>
    );
};
