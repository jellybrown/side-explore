import React from "react";
import { ThemeProvider } from "styled-components";
import media from "./media";

const Theme = ({ children }) => (
    <ThemeProvider
        theme={{
            primaryFont: "Arial",
            primaryColor: "#666",
            ...media,
        }}
    >
        {children}
    </ThemeProvider>
);

export default Theme;
