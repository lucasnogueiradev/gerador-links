import { ModalContato } from "../Modal";
import { Container } from "./styles";

export function Mobile() {
  return (
    <Container>
      <div style={{ color: "#464646" }} className="banner-slider-mobile">
        {/* <h3>DISPARO EM MASSA</h3> */}
        <p className="subnome-mobile">
          Entre em contato para fazer um teste grátis.
        </p>
        <div className="button-modal4">
          <ModalContato />
        </div>
        {/* <p className="banner-p-mobile">
          Com nosso sistema você consegue realizar disparo de texto, vídeos,
          imagens, arquivos, realizar disparos em seus grupos, exportar
          contatos, até aqueles que não estão salvos e muitos mais.
        </p> */}
      </div>
    </Container>
  );
}
