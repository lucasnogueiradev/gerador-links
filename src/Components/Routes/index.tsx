import { ModalContato } from "../Modal";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contato from "../Contato";
import Cards from "../Cards";

export const RoutesR = () => {
  return (
    <Routes>
      <Route path="/cards" element={<Cards />} />
      <Route path="/cards1" element={<Cards />} />
    </Routes>
  );
};
