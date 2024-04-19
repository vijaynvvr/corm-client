import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import appStore from "./store/store.js";
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={appStore}>
                <BrowserRouter>
                    <App />
                    <Toaster />
                </BrowserRouter>
            </Provider>
        </QueryClientProvider>
	</React.StrictMode>
);
