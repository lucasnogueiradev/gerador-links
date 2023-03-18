import Cards from "../Cards";
import Contato from "../Contato";
import Footer from "../footer";
import Menu from "../Menu";
import { Mobile } from "../Mobile";
import { Slider } from "../Slider";
import { Sobre } from "../Sobre";
import { ContainerC } from "./styles";
import { ModalContato } from "../Modal";
import { RoutesR } from "../Routes";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Video } from "../Video";
import { Planos } from "../Planos";
import { Disparos } from "../Disparos";

export const Content = () => {
  return (
    <ContainerC>
      <Menu />
      <Slider />

      <Mobile />
      <Disparos />
      <Video />
      <Planos />
      <Sobre />

      <Contato />
      <Footer />
    </ContainerC>
  );
};
