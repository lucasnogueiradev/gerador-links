import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { Content } from "./Components/Content/index";
import { GeradorLinks } from "./pages/GeradorLinks";
import CadastroSignIn from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Content />} />
        </Routes>
        <Routes>
          <Route path="/gerar-link-whatsapp" element={<CadastroSignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
