import { ModalContato } from "../Modal";
import { Container } from "./styles";

export function Mobile() {
  return (
    <Container>
      <div style={{ color: "#464646" }} className="banner-slider-mobile">

        <p className="subnome-mobile">
          Entre em contato para fazer um teste grátis.
        </p>
        <div className="button-modal4">
          <ModalContato />
        </div>
           </div>
    </Container>
  );
}
