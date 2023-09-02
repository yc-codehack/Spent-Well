import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { GlobalProvider } from "./contexts/global-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<GlobalProvider>
		<App />
	</GlobalProvider>
);
