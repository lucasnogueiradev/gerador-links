import styled from "styled-components";

export const Container = styled.div`
  margin-top: -5rem;
  margin-bottom: 5rem;
  background-image: linear-gradient(
    90deg,
    #4f5bd5,
    #962fbf,
    #d62976,
    #fa7e1e,
    #feda75
  );

  .titulo-bot {
    display: none;
  }

  .telas-item__inner4 {
    flex: 0 0 34%;
    background: url(./mancha3.svg) no-repeat left center;
    width: 93%;
    height: 73%;

    background-size: contain;
    padding: 4% 0 4% 4%;
    margin: 0% 1% 0 0;
  }

  .container-video {
    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.2); */
    padding: 1rem;

    height: 34rem;
  }
  font-family: "Poppins", sans-serif;

  margin-top: 2rem;
  justify-content: center;
  align-items: center;

  .text-video {
    width: 30%;
    margin-left: 6rem;
    margin-top: -0.2rem;
    p {
      font-size: 1.3rem;
    }
  }
  video {
    border-radius: 1rem;
    align-items: center;
    margin: auto;
    justify-content: center;
    display: flex;
    margin-bottom: -2rem;
    z-index: 9;
    box-shadow: 2px 2px 9px rgba(2, 0, 0, 0.7);
  }
  .video {
    margin-top: 4rem;
  }
  .container-video1 {
    margin-top: 5rem;
    width: 40%;
    height: 100%;
    .whats-fundo {
      position: absolute;
      width: 600px;
      color: red;
    }
    .whats1 {
      position: absolute;
      margin-top: 5rem;
      left: 38rem;
    }
    .whats2 {
      position: absolute;
      margin-top: 25rem;
      left: 14rem;
    }
    z-index: 1;
  }
  video source {
    border-radius: 1rem;
  }
  .video {
    border-radius: 1rem;
  }
  p {
    color: #fff;
  }
  strong {
    color: #fff;
  }
  h3 {
    color: #fff;
    margin-bottom: 3rem;
    font-weight: 700;
    font-size: 2.4rem;
    font-family: "Poppins", sans-serif;
    font-style: normal;
  }
  @media (max-width: 999px) {
    width: 100%;
    .h3-titulo {
      display: none;
    }
    .telas-item__inner4 {
      background: none;
      width: 100%;
    }
    .titulo-bot {
      margin-top: 2rem;
      text-align: center;
      margin: auto;
      justify-content: center;
      align-items: center;

      width: 90%;
      display: block;
      h3 {
        text-align: center;
        margin: auto;
        margin-top: 2rem;
        justify-content: center;
      }
    }
    .container-video {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }

    video {
      align-items: center;
      text-align: center;
      background: transparent;
      box-shadow: none;
      border-radius: 10rem;
      background-image: linear-gradient(
        90deg,
        #4f5bd5,
        #962fbf,
        #d62976,
        #fa7e1e,
        #feda75
      );
      justify-content: center;
      width: 100%;
      left: 2.9%;
      right: 0%;
      z-index: 9;
    }
    .video {
      border-radius: 10rem;
      padding-left: -1rem;
    }
    .container-video1 {
      width: 100%;
      border-radius: 20rem;
      margin: auto;
      height: 50%;
      .whats-fundo {
        display: none;
      }
      .text-video {
        width: 100%;
        margin-left: 0;
      }
      .whats1 {
        display: none;
      }

      .whats2 {
        display: none;
      }
    }
    .text-video {
      width: 100%;
      height: 50%;
      text-align: center;
      margin-left: 0rem;
      strong {
        padding-top: 2rem;
      }
      p {
        font-size: 1rem;
        font-family: "Roboto", sans-serif;
      }
    }
    h3 {
      margin-bottom: 2rem;
      font-size: 1.4em;
    }
  }
`;
