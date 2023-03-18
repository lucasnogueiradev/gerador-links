import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import api from "../Api";
import { Container } from "./styles";
import { Alert } from "@mui/material";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";

export function ModalContato(props: any) {
  const [show, setShow] = useState(false);

  const [mensage, setMensage] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [alertt, setAlertt] = useState(false);

  const [alerterr, setAlerterr] = useState(false);
  const [alertcriar, setAlertcriar] = useState(false);
  const [alertContent, setAlertContent] = useState("");

  async function Submit() {
    setLoading(true);
    await api
      .post(
        "/send_message",
        {
          number: number,
          nome: name,
          message: `Olá, *${name}*! Seja bem-vindo(a) a central de suporte, é um prazer recebê-lo(a) aqui. Como posso te ajudar?`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "22c0cbae6887d940f4c488d042ef0783",
          },
        }
      )

      .then((response) => {
        console.log(response.data);
        setAlertContent(response.data.result);
        setAlertt(true);
      })
      .catch((err) => {
        console.log(err);

        setAlerterr(true);
      });

    setLoading(false);
  }

  return (
    <Container className="container-modal">
      {alertt ? (
        <Alert
          className="alert"
          severity="success"
          onClose={(event) => setAlertt(false)}
        >
          Enviado!
          {alertContent}
        </Alert>
      ) : (
        <></>
      )}
      {alerterr ? (
        <Alert
          className="alert"
          severity="error"
          onClose={(event) => setAlerterr(false)}
        >
          Não enviado!
          {alertContent}
        </Alert>
      ) : (
        <></>
      )}
      <Button variant="primary" className="button-modal" onClick={handleShow}>
        Teste Grátis
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="header-modal">
          <Modal.Title className="title-modal">Solicitar orçamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={Submit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="label-modal-email">Nome:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu nome...."
                autoFocus
                className="placeholder-modal"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Form.Label className="label-modal-numero">Numero:</Form.Label>
              <Form.Control
                type="humber"
                placeholder="Digite seu numero...."
                autoFocus
                className="placeholder-modal"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                value={number}
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button
            variant="sucess"
            onClick={handleClose}
            className="label-modal"
          >
            EXIT


          </Button> */}

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
