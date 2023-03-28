import { BsInstagram } from "react-icons/bs";
import { Container } from "./styles";

export const VideoIns = () => {
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
              <source className="video" src="instragam.mp4" type="video/mp4" />
              <source src="instragam.mp4" type="video/ogg" />
            </video>
          </figure>

          <div className="titulo-bot">
            <h3>
              Bot de atendimento para Instagram <BsInstagram />
            </h3>
          </div>
        </div>
        <div className="text-video">
          <h3 className="h3-titulo">
            Bot de atendimento para Instagram <BsInstagram />
          </h3>
          <p>
            Promova seus produtos e serviços usando um bot do Instagram. Para
            envolver os usuários com o bot, você pode lançar uma campanha
            publicitária direcionada com o objetivo
          </p>
          <p></p>
          <p></p>
        </div>
      </div>
    </Container>
  );
};
