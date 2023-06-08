import { TextField } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../Api";
import { Container, FormInput } from "./styles";

export function ModalContato(props: any) {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [age, setAge] =  useState("");


  function handleSuccess() {
    toast.success("Solicitação enviada com sucesso!");
  }

  function handleError() {
    toast.error("Menssagem não enviada!");
  }

  const list = [
      {id: 1, name: 'API'},
      {id: 2, name: 'Disparo em massa'},
      {id: 3, name: 'Bot de atendimento'},
      {id: 4, name: 'Gerador de links'},
    ];

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  async function Submit() {
    setLoading(true);
    await api
      .post(
        "/send_message",
        {
          number: number,
          nome: name,
          message: `Olá, *${name}*! Seja bem-vindo(a) a central de suporte, você tem interesse em saber mais sobre *${age}*? \n 1 - Sim \n 2 - Outros assuntos `,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "8ebbe1add6982a5c1e3aed96a7c8fe5e",
          },
        }
      )
      .then((response) => {
        handleSuccess();
      })
      .catch((err) => {
        handleError();
      });
    setLoading(false);
  }
  return (
    <Container className="container-modal">    
      <Button variant="primary" className="button-modal" onClick={handleShow}>
        Teste Grátis
      </Button>
      <Modal show={show} onHide={handleClose}>
        <ToastContainer autoClose={3000} closeOnClick theme="light" className="toastModal" style={{zIndex: 99999999, marginTop: "5rem"}} />
        <Modal.Header closeButton className="header-modal">
          <Modal.Title className="title-modal">Solicitar orçamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={Submit}>
            <FormInput>
               <TextField
                type="text"
                label="Nome"
                name="text"
                variant="standard"
                placeholder="Digite seu nome...."
                autoFocus
                className="placeholder-modal"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />     
              <TextField
                type="humber"
                placeholder="Digite seu numero...."
                autoFocus
                label="Numero"
                variant="standard"
                className="placeholder-modal"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                value={number}
              />
          </FormInput>
              <FormControl fullWidth variant="standard">               
                 <InputLabel id="demo-simple-select-standard-label" className="label-select">Qual seu interesse?</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      className="select-input"
                      label="Age"
                      onChange={handleChange}
                     >
                     {list.map((item, index) => (
                        <MenuItem value={item.name}>{item.name}</MenuItem>
                      ))}       
                    </Select>
                </FormControl>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {loading ? (
            <ColorRing
              height={77}
              width={75}
              ariaLabel="loading"
              wrapperStyle={{ margin: "auto" }}
            />
          ) : (
            <Button
              variant="success"
              onClick={(props) => Submit()}
              className="label-modal-button"
              style={{
                color: "#fff",
                background: "#ff6100",
                border: "none",
                padding: "0.6rem",
                textAlign: "center",
                justifyContent: "center",
                transition: "all 0.5s",
                alignItems: "center",
                margin: "auto",
                width: "38%",      
                borderRadius: "2rem",
                fontWeight: "500",
              }}
            >
              ENVIAR
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
