import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "./redux-toolkit/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/index.scss";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
