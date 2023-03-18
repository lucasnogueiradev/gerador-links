import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 33rem;
  margin-top: 8rem;
  .titulo {
    margin-bottom: 2rem;
  }
  .container {
    h2 {
      color: #646464;
      text-align: center;
    }
    p {
      color: #8a8787;
    }
  }
  .sub-titulo {
    width: 50%;
    text-align: center;
    justify-content: center;
    margin: auto;
  }

  .content {
    display: grid;
    width: 90%;
    justify-content: center;
    margin: auto;
    max-width: 90%;

    grid-gap: 19px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  .cards {
    width: 100%;
    background: #fff;
    padding: 10px;
    cursor: pointer;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow:  3px 3px 3px #dbdbdb,
             -3px -3px 3px #ffffff;
    transition: all 0.5s;
    &:hover {
      box-shadow: 0 1.5em 2.5em -0.5em rgba(#000000, 0.7);
      transform: scale(1.03);
    }
    h4 {
      color: #646464;
      font-size: 1.3rem;
      margin-bottom: -4px;
    }
    p {
      color: #8a8787;
      margin-top: 4px;
      margin: 14px 4px;
    }
  }

  .titulo-card {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .icon-card {
    font-size: 2rem;
    color: #ff6100;
  }
  @media (max-width: 999px) {
    height: auto;
    margin-top: auto;
    background: #f3f4f5;
    .container {
      height: auto;
    }
    .sub-titulo {
      width: 90%;
      text-align: center;
      justify-content: center;
      margin: auto;
    }
    .titulo{
    
    }
    .cards{
      margin-top: 39px;
    }
  }
`;
