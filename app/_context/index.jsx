"use client";

import { createContext, useContext, useState } from "react";

export const indexContext = createContext();

import React from "react";

export const IndexContextProvider = ({ children }) => {
    const [state, setstate] = useState("lslssl");
    return (
        <indexContext.Provider value={{ state }}>
            {children};
        </indexContext.Provider>
    );
};

export function useIndexContext() {
    return useContext(indexContext);
}
