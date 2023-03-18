import styled from "styled-components";

export const Container = styled.div`
  margin-top: -4.5rem;
  h1 {
    text-align: center;
    margin-bottom: 3rem;
    color: rgb(69, 22, 130);
  }

  align-items: center;
  text-align: center;
  justify-content: center;

  .card {
    align-items: center;
    text-align: center;

    text-align: center;
  }
  @media (max-width: 800px) {
    margin-top: -11.5rem;
  }
`;

export const CardContent = styled.div`
  display: grid;
  font-family: "Poppins", sans-serif;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-content: center;
  margin: auto;
  gap: 1rem;
  grid: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  text-align: center;
  transition: all 0.5s;
  .card-title {
    color: #777474;
  }
  .card {
    align-items: center;
    text-align: center;
    margin: auto;
    color: #adadad;
    text-align: center;
    border-radius: 3rem 1rem;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      box-shadow: none;
    }
    img {
      border-radius: 3rem 1rem;
    }
  }

  .card-button {
    border-radius: 2.5rem;
    padding: 0.5rem 1rem;
    background: #ff9900;
    border: none;
    font-size: 0.9rem;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
  }
  .card-button:hover {
    transform: scale(1.1);
  }

  @media (max-width: 999px) {
    flex-direction: column;
    transition: all 0.5s;
    align-items: center;
    text-align: center;
    margin: auto;
  }
`;
