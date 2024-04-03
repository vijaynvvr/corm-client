import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import appStore from "./store/store.js";
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
        <BrowserRouter>
            <Provider store={appStore}>
                <App />
                <Toaster />
            </Provider>
        </BrowserRouter>
	</React.StrictMode>
);
