import styled from "styled-components";

export const Container = styled.div`
  margin-top: 7rem;
  margin-bottom: 9rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  .tela {
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  .figura {
    width: 50%;
    align-items: center;
    margin: auto;
    justify-content: center;
    margin-top: -1rem;
  }
  .sobre-banner {
    display: flex;
    font-family: "Poppins", sans-serif;
    flex-direction: row;
    width: 97%;
  }
  .text-video {
    width: 50%;
    margin-top: 1rem;
    p {
      font-size: 1.3rem;
      color: #646464;
      width: 80%;
    }
  }
  .sobre-banner p {
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-family: "Poppins", sans-serif;
    color: #adadad;
    font-weight: 400;
    margin-top: 0.2rem;
    width: 90%;
  }
  .p-2 {
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-family: "Poppins", sans-serif;
    color: #adadad;
    font-weight: 400;
    margin-top: -0.2rem;
    margin-left: 4rem;
  }
  .sobre-banner img {
    width: 40%;
    height: 20rem;
    margin-left: -1rem;
    margin-right: -1rem;
  }
  @media (max-width: 999px) {
    display: none;
    .sobre-img {
      display: none;
    }

    .sobre-banner {
      text-align: center;
    }
  }
`;
