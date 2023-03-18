import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Mobile } from "../Mobile";
import { ModalContato } from "../Modal";
export function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-slider-geral">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{
          marginTop: "0",

          color: "#fff",
        }}
        classaName="container-slider"
      >
          
           
            
        <Carousel.Item>
       
          <Carousel.Caption
            style={{ color: "#fff" }}
            className="banner-slider"
            id="um"
          > 
            <h3 id="home" >DISPARO EM MASSA</h3>
            
            <p className="subnome" >
              Entre em contato para fazer um teste grátis.
            </p>
            <ModalContato />
            <p className="banner-p">
              Com nosso sistema você consegue realizar disparo de texto, vídeos,
              imagens, arquivos, realizar disparos em seus grupos, exportar
              contatos até aqueles que não estão salvos e muitos mais.
            </p>
          </Carousel.Caption>
          <div className="image-slider-disparo">
          <figure className="telas-item__inner2">
            <img
              className="d-block w-100"
              src="apidis.png"
              alt="Bot de atendimento"
              width={850}
              height="100%"
            />
            </figure>
          </div>
       
        </Carousel.Item>
 
        <Carousel.Item>
          <Carousel.Caption style={{ color: "#fff" }} className="banner-slider">
            <h3 className="titulo-banner-desejar">API DO WHATSSAP</h3>
            <p className="subnome">
              Entre em contato para fazer um teste grátis.
            </p>
            <ModalContato />
            <p className="banner-p">
              Com o uso da API do WhatsApp é possível automatizar o atendimento
              e garantir a otimização do tempo de resposta para os clientes, o
              que ajuda bastante na satisfação dos consumidores.{" "}
            </p>
          </Carousel.Caption>
          {/* <div className="image-slider-disparo">
            <img
              className="d-block w-100"
              src="API-removebg-preview.png"
              alt="Bot de atendimento"
              width={900}
              height="100%"
            />
          </div> */}
           <div className="image-slider-disparo">
          <figure className="telas-item__inner2">
            <img
              className="d-block w-100"
              src="1-AI-1024x853.png"
              alt="Bot de atendimento"
              width={900}
              height="100%"
            />
            </figure>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption
            style={{ color: "#fff" }}
            className="banner-slider"
            id="um"
          >
            <h3 id="home">BOT DE ATENDIMENTO</h3>
            <p className="subnome">
              Entre em contato para fazer um teste grátis.
            </p>
            <ModalContato />
            <p className="banner-p">
              Com chat bot você pode otimizar seu atendimento deixando um bot
              pré-configurado conforme você deseja, 24hrs por dia de domingo a
              domingo, reduzindo seus custos.
            </p>
          </Carousel.Caption>
           <div className="image-slider-disparo">
          <figure className="telas-item__inner2">
            <img
              className="d-block w-100"
              src="Chatbot-WhatsApp.webp"
              alt="Bot de atendimento"
              width={900}
              height="100%"
            />
            </figure>
          </div>
        </Carousel.Item>
      </Carousel>

      <div class="custom-shape-divider-bottom-1679119813">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
  );
}
