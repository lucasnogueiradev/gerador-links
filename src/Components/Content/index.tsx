import Contato from "../Contato";
import { Disparos } from "../Disparos";
import Footer from "../footer";
import Menu from "../Menu";
import { Mobile } from "../Mobile";
import { Planos } from "../Planos";
import { Slider } from "../Slider";
import { Sobre } from "../Sobre";
import { Video } from "../Video";
import { VideoIns } from "../VideoIns";
import { ContainerC } from "./styles";

export const Content = () => {
  return (
    <ContainerC>
      <Menu />
      <Slider />

      <Mobile />
      <Disparos />
      <Video />
      <VideoIns />
      <Planos />

      <Sobre />

      <Contato />
      <Footer />
    </ContainerC>
  );
};
