import { Button } from "react-bootstrap";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

import { Container } from "./Styles";
export const Planos = () => {
  return (
    <Container>
      <div id="planos">
        <h1>Planos</h1>
      </div>
      <section className="page-contain">
        <div className="card-plano">
          <div className="data-card">
            <h3>API WHATSAPP</h3>
            <h4>
              R$ 249,00<sup className="sub">/mês</sup>
            </h4>
            <div className="descricao">
              <h5 style={{ color: "#00d351" }}>
                <span style={{ color: "#00d351" }}>✔</span> Envios ilimitados
              </h5>

              <h5>
                <span style={{ color: "#00d351" }}>✔</span> Suporte humano.
              </h5>
              <h5>
                <span style={{ color: "#00d351" }}>✔</span> Documentação
                completa.
              </h5>
            </div>
            <p>Ideal para integração!</p>
            <span className="link-text">
              <Button
                className="button-contratar"
                style={{
                  border: "none",

                  padding: "0.6rem",
                  textAlign: "center",
                  justifyContent: "center",
                  transition: "all 0.5s",
                  alignItems: "center",
                  margin: "auto",
                  borderRadius: "2rem",
                  fontWeight: "500",
                }}
                href="https://wa.me/5511975196926?text=Ol%C3%A1%2C+gostaria+de+contratar+API.+"
              >
                Contratar
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                    fill="#ffffff"
                  />
                </svg>
              </Button>
            </span>
          </div>
          <div className="data-card">
            <h3>DISPARO EM MASSA</h3>
            <h4>
              R$ 199,00<sup className="sub">/mês</sup>
            </h4>
            <div className="descricao">
              <h5 style={{ color: "#00d351" }}>
                <span style={{ color: "#00d351" }}>✔</span> Envios ilimitados
              </h5>
              <h5>
                <span style={{ color: "#00d351" }}>✔</span> Envios de qualquer
                mídias.
              </h5>
              <h5>
                <span style={{ color: "#00d351" }}>✔</span> Envios em grupos.
              </h5>
              <h5>
                <span style={{ color: "#00d351" }}>✔</span> Exportar contatos.
              </h5>
              <h5>
                <span style={{ color: "#00d351" }}>✔</span> Exportar numeros não
                salvo.
              </h5>
              <h5>
                <span style={{ color: "#00d351" }}>✔</span> Envio de Texto
              </h5>
            </div>
            <p>Ideal para dispora em massa!</p>
            <span className="link-text">
              <Button
                className="button-contratar"
                style={{
                  border: "none",
                  padding: "0.6rem",
                  textAlign: "center",
                  justifyContent: "center",
                  transition: "all 0.5s",
                  alignItems: "center",
                  margin: "auto",
                  borderRadius: "2rem",
                  fontWeight: "500",
                }}
                href="https://wa.me/5511975196926?text=Ol%C3%A1%2C+gostaria+de+contratar+disparo+em+massa."
              >
                Contratar
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                    fill="#ffffff"
                  />
                </svg>
              </Button>
            </span>
          </div>
          <div className="data-card">
            <h3>BOT ATENDIMENTO</h3>
            <span
              style={{
                fontSize: "13px",
                color: "#ccc",
                marginBottom: "-10px",
                marginLeft: "35px",
              }}
            >
              A partir de
            </span>
            <h4>
              R$ 99,99<sup className="sub">/mês</sup>
            </h4>

            <div className="descricao" style={{ marginTop: "-10px" }}>
              <h5>
                <span style={{ color: "#00d351" }}>✔</span> Incluso botões e
                lista
              </h5>
              <h5>
                <span style={{ color: "#00d351" }}>✔</span> Atendimento completo
              </h5>
              <h5>
                <span style={{ color: "#00d351" }}>✔</span> Suporte e edição do
                bot
              </h5>
              <h5>
                <span style={{ color: "#00d351" }}>✔</span> Envio de qualquer
                mídia
              </h5>
              <h5>
                <span style={{ color: "#00d351" }}>✔</span> Bot completo de
                vendas
              </h5>
              <h5>
                <span style={{ color: "#00d351" }}>✔</span> Incluso consultar
                API externar
              </h5>
              <h5 style={{ color: "#f73485" }}>
                <AiOutlineInstagram style={{ color: "#D82D70" }} /> Integração
                com Instagram
              </h5>
              <h5 style={{ color: "#0980E5" }}>
                <AiOutlineFacebook style={{ color: "#0980E5" }} /> Integração
                com Facebook
              </h5>
            </div>
            <p>Ideal para ecommerce!</p>
            <span className="link-text">
              <Button
                className="button-contratar"
                style={{
                  border: "none",
                  padding: "0.6rem",
                  textAlign: "center",
                  justifyContent: "center",
                  transition: "all 0.5s",
                  alignItems: "center",
                  margin: "auto",

                  borderRadius: "2rem",
                  fontWeight: "500",
                }}
                href="https://wa.me/5511975196926?text=Ol%C3%A1%2C+gostaria+de+contratar+bot+de+atendimeto.+"
              >
                Contratar
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                    fill="#ffffff"
                  />
                </svg>
              </Button>
            </span>
          </div>
        </div>
      </section>
    </Container>
  );
};
