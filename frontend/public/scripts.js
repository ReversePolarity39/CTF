// public/scripts.js
const theme = extendTheme({
    fonts: {
        heading: "Verdana, Geneva, sans-serif",
        body: "Verdana, Geneva, sans-serif",
    },
});

const App = ({ children }) => (
    <ChakraProvider theme={theme}>
        {children}
    </ChakraProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));