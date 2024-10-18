import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			{console.log(import.meta.env.BASE_URL)}
			<App />
		</BrowserRouter>
	</StrictMode>,
);