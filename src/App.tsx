import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { Content } from "./Components/Content/index";
import { GeradorLinks } from "./pages/GeradorLinks";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Content />} />
        </Routes>
        <Routes>
          <Route path="/gerar-link-whatsapp" element={<GeradorLinks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
