
import { ModalContato } from "../Modal";
import { Container } from "./styles";

function Contato() {
  return (
    <Container>
      <h1 className="title-contato" id="contato">
        Solicitar atendimento
      </h1>
      {/* <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="label-msg">Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            className="input-contato"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="label-msg">Numero</Form.Label>
          <Form.Control
            type="email"
            placeholder="(11) 0000-0000"
            className="input-contato"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
          placeholder="Opcional"
        >
          <Form.Label className="label-msg">Mensagem:</Form.Label>
          <Form.Control as="textarea" rows={3} className="input-contato" />
        </Form.Group>
        <Button variant="primary" className="input-button">
          Enviar
        </Button>
      </Form> */}
      <div className="contato1">
        <div className="contato2">
        <ModalContato  />
        </div>
      </div>
    </Container>
  );
}

export default Contato;
