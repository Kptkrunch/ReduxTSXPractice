import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom';
import App from './Components/App';

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);

