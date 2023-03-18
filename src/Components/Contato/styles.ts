import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  justify-content: center;
  margin: auto;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 8rem;
  font-family: "Poppins", sans-serif;
  .label-msg {
    margin-left: 6rem;
  }
  .contato1 {
    width: 100%;
    height: 10rem;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  .contato2 {
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 100%;
    width: 40%;
  }
  h1 {
    text-align: center;
  }

  @media (max-width: 999px) {
    width: 100%;
    margin: 0;
    .contato2 {
      width: 90%;
      padding: 0rem;
      margin: auto;
      justify-content: center;
      align-items: center;
    }
  }
`;
