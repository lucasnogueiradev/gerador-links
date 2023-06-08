import { AiOutlineLink } from "react-icons/ai";
import { BsFiletypePdf, BsImages, BsWhatsapp } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { TbSend } from "react-icons/tb";
import { Container } from "./styles";

export const Disparos = () => {
  return (
    <Container id="disparo">
      <div className="container">
        <div className="titulo">
          <h2 style={{color: "#ff6100"}}>Disparo em massa no WhatsApp.</h2>

          <p className="sub-titulo">
            Com o nosso sistema você consegue realizar disparo de texto, vídeos,
            imagens, arquivos, realizar disparos em seus grupos, exportar
            contatos até aqueles que não estão salvos e muitos mais.
          </p>
        </div>
        <div className="content">
          <div className="cards">
            <span className="titulo-card">
              <TbSend className="icon-card" style={{color: "#ff6100"}} />
              <h4 >Envio de texto</h4>
            </span>
            <p>
              Envie mensagens de texto em massa ilimitadas, para todos os seus
              clientes.
            </p>
          </div>
          <div className="cards">
            <span className="titulo-card">
              <BsImages className="icon-card" />
              <h4>Envio de imagem</h4>
            </span>
            <p>
              Envie mensagens de texto com imagem, sem se preocupar com
              quantidade de envio.
            </p>
          </div>
          <div className="cards">
            <span className="titulo-card">
              <BsFiletypePdf className="icon-card" />
              <h4>Envio de arquivos.</h4>
            </span>
            <p>
              Envie arquivos como boletos e nota fiscal para todos os seus
              clientes de uma só vez.
            </p>
          </div>
          <div className="cards">
            <span className="titulo-card">
              <AiOutlineLink className="icon-card" />
              <h4>Envio de links.</h4>
            </span>
            <p>
              Envie mensagens de texto com links, para redirecionar seus
              clientes.
            </p>
          </div>
          <div className="cards">
            <span className="titulo-card">
              <BsWhatsapp className="icon-card" />
              <h4>Envio de texto.</h4>
            </span>
            <p>
              Envie mensagens de texto com links, para redirecionar seus
              clientes.
            </p>
          </div>
          <div className="cards">
            <span className="titulo-card">
              <IoMdContacts className="icon-card" />
              <h4>Envio em grupos.</h4>
            </span>
            <p>Envie mensagens de texto, arquivos ou imagem em seus grupos. </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
