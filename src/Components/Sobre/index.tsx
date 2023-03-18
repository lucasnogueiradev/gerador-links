import { Container } from "./styles";

export const Sobre = () => {
  return (
    <Container>
      <div id="link">
        <div className="tela">
          <div className="figura">
            <figure className="telas-item__inner1">
              <img
                src="10.png"
                alt="icon"
                width="330"
                className="telas-item__img"
              />
            </figure>
          </div>

          <div className="text-video">
            <h3 className="title-sobre2">Sobre API do WhatsApp.</h3>
            <p>
              A principal função da API do WhatsApp é fazer a integração deste
              canal com outros sistemas, como plataformas de atendimento, CRMs,
              sistemas de controle logístico, automação de marketing e etc.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
