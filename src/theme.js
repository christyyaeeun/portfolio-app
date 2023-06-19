// Theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        primary: {
            10: "#0461cf29",
            20: "#0461cf7d",
            50: "#b3c7f7",
            100: "#8babf1",
            200: "#0073e6",
            300: "#0461cf",
        },
        dark: {
            100: "#2c323e",
            200: "#2c313d",
        },
        colorMode: {
            light: "#0461cf7d",
            dark: "#0461cf",
        },
        blue: {
            100: "#c6e4fa",
            200: "#aed7f5",
            300: "#77BDEC",
            400: "#72b3df",
        },
    },
    styles: {
        global: (props) => ({
            "body": {
                color: props.colorMode === "light" ? "#2c2c2c" : "#ffffff",
            },
            ".nav-link .link": {
                color: props.colorMode === "light" ? "#2c313d" : "#ffffff",
            },
            ".submit-btn": {
                bg: props.colorMode === "light" ? "blue.200" : "blue.300",
                color: props.colorMode === "light" ? "#2c2c2c" : "#ffffff",
            },
        }),
    },
});

export default theme;
