
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, CardContent } from "./styles";


function Cards() {
  return (
    <Container>
      <h1 className="title-bots" id="cards">
        Tipos de bots
      </h1>

      <CardContent>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            width="100%"
            height="100%"
            src="boote.jpg"
            id="cardbotao"
            alt="Bot de atendimento"
          />
          <Card.Body>
            <Card.Title className="card-title">Bot Botão</Card.Title>
            <Card.Text>
              Bot button disponibiliza duas opções de botões, que permite ter
              uma resposta rápida, levar a algum site, cardápio ou até ligar
              para um número, são permitidas adicionar até três botões.
            </Card.Text>
            <a
              href="https://wa.me/message/WJARCUA44KE2L1"
              className="card-button-a"
            >
              <Button
                variant="primary"
                className="card-button"
                // onClick={props.Submit}
              >
                Saber mais
              </Button>
            </a>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="card">
          <Card.Img
            variant="top"
            src="boot4.png"
            className="card-img"
            id="cardlista"
            alt="Bot de atendimento"
            width="100%"
            height="100%"
          />
          <Card.Body>
            <Card.Title>Bot lista</Card.Title>
            <Card.Text>
              Bot de lista substituem o uso de menus com opções numeradas, em
              vez de menus numerados, os bots no WhatsApp poderão oferecer até
              dez opções de listas de resposta.
            </Card.Text>

            <a
              href="https://wa.me/message/WJARCUA44KE2L1"
              className="card-button-a"
            >
              <Button
                variant="primary"
                className="card-button"
                // onClick={props.Submit}
              >
                Saber mais
              </Button>
            </a>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="boot2.jpg"
            id="cardpersonalizado"
            width="100%"
            height="100%"
            alt="Bot de atendimento"
          />
          <Card.Body>
            <Card.Title>Bot personalizado</Card.Title>
            <Card.Text>
              Com bot personalizado, o cliente pode definir conforme desejar
              qualquer opção de bot, pode usar com lista, botões, consultar CPF,
              consultar endereço, enviar boletos, entre outros.
            </Card.Text>
            <a
              href="https://wa.me/message/WJARCUA44KE2L1"
              className="card-button-a"
            >
              <Button
                variant="primary"
                className="card-button"
                // onClick={props.Submit}
              >
                Saber mais
              </Button>
            </a>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            width="100%"
            height="100%"
            src="boot.jpg"
            id="cardcompra"
            alt="Bot de atendimento"
          />
          <Card.Body>
            <Card.Title>Bot de compra</Card.Title>
            <Card.Text>
              Com bot de compra você pode configurar um para finalizar uma venda
              sozinho sem precisar de uma pessoa, com produtos, cadastros e
              finazalização de compra.
            </Card.Text>
            <a
              href="https://wa.me/message/WJARCUA44KE2L1"
              className="card-button-a"
            >
              <Button
                variant="primary"
                className="card-button"
                // onClick={props.Submit}
              >
                Saber mais
              </Button>
            </a>
          </Card.Body>
        </Card>
      </CardContent>
    </Container>
  );
}

export default Cards;
