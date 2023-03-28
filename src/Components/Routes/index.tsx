import { Route, Routes } from "react-router-dom";
import { GeradorLinks } from "../../pages/GeradorLinks";

export const RoutesR = () => {
  return (
    <Routes>
      <Route path="/gerar-link-whatsapp" element={<GeradorLinks />} />
    </Routes>
  );
};
