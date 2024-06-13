import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { store } from "./store/store.tsx";
import { Provider } from "react-redux";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Router>
         <Provider store={store}>
            <ChakraProvider>
               <App />
            </ChakraProvider>
         </Provider>
      </Router>
   </React.StrictMode>
);
