import { BsWhatsapp } from "react-icons/bs";
import { Container } from "./styles";

export const Video = () => {
  return (
    <Container>
      <div className="container-video">
        <div className="container-video1">
          <figure className="telas-item__inner4">
            <video
              width="220"
              height="390"
              autoPlay={true}
              loop={true}
              controls={false}
              playsInline
              muted
            >
              <source
                className="video"
                src="restaurante.mp4"
                type="video/mp4"
              />
              <source src="restaurante.mp4" type="video/ogg" />
            </video>
          </figure>

          <div className="titulo-bot">
            <h3>
              Bot de atendimento para WhatsApp <BsWhatsapp />
            </h3>
          </div>
        </div>
        <div className="text-video">
          <h3 className="h3-titulo">
            Bot de atendimento para WhatsApp <BsWhatsapp />
          </h3>
          <p>
            Quanto tempo você dedica respondendo cada um dos seus clientes no
            whatsapp?
          </p>
          <p>Você perde vendas por falta de atendimento?</p>
          <p>
            O que você faz quando 10 clientes mandar mensagem de uma só vez?
          </p>
        </div>
      </div>
    </Container>
  );
};
