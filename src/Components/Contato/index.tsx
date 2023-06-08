
import { ModalContato } from "../Modal";
import { Container } from "./styles";

function Contato() {
  return (
    <Container>
      <h1 className="title-contato" id="contato">
        Solicitar atendimento
      </h1>
      <div className="contato1">
        <div className="contato2">
        <ModalContato  />
        </div>
      </div>
    </Container>
  );
}

export default Contato;
