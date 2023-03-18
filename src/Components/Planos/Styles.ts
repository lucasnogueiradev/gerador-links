import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  background: #f3f4f5;
  color: #fff;
  margin-top: 2rem;
  margin: 1rem auto;
  box-shadow: 0 1.5em 2.5em -0.5em rgba(#000000, 0.7);
  #planos {
    margin-bottom: -3rem;
    color: #646464;

    transition: all 0.5s;
  }
  h1 {
    text-align: center;
    margin-bottom: -1.6rem;
    padding-top: 1rem;
    width: 100%;
    background: #f3f4f5;
  }
  * {
    box-sizing: border-box;
  }
  @media (max-width: 999px) {
    max-width: 100%;
    width: 100%;
    margin: 0;
    border-radius: 1rem;
  }
  .page-contain {
    display: flex;
    flex-direction: row;
    border-radius: 39rem;
    align-items: center;
    margin: auto;
    transition: all 0.5s;
    padding: -10em;
    height: 40rem;
    padding-top: 0rem;
    font-family: "Poppins";
  }
  .card-plano {
    display: flex;
    flex-direction: row;
    transition: all 0.5s;
    margin: auto;
  }
  @media (max-width: 999px) {
    .page-contain {
      display: flex;
      justify-content: none;
      margin: auto;
      border-radius: 1rem;
      overflow-y: hidden;
    }
    .button-contratar {
      width: 93%;
    }
    .card-plano {
      justify-content: none;
      padding: 20px;
    }
    .data-card {
      h4 {
        font-size: 1em;
        white-space: nowrap;
      }
    }
  }
  .data-card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    max-width: 20.75em;
    min-height: 30.75em;
    margin-top: -3rem;
    overflow: hidden;
    border-radius: 0.5em;
    border-top-right-radius: 5rem;
    border-top-left-radius: 5rem;
    border-bottom-right-radius: 5rem;
    text-decoration: none;
    background-color: #fff;

    margin: 1em;
    padding: 2.75em 2.5em;
    box-shadow: 0 1.5em 2.5em -0.5em rgba(#000000, 0.1);
    transition-duration: 4s;
    transition: all 0.5s;
    @media (max-width: 999px) {
      display: flex;
    }

    h3 {
      color: #8a8787;
      font-size: 1.5em;
      font-weight: 500;
      line-height: 1.3;
      text-align: center;
      padding-bottom: 0.5em;
      margin: 0 0 0.142857143em;
      border-bottom: 2px solid #ccc;
      transition: color 0.45s ease, border 0.45s ease;
    }

    h4 {
      color: #ff6100;
      padding-top: 0.7rem;
      text-transform: uppercase;
      font-size: 2em;
      font-weight: bold;
      line-height: 1;
      text-align: center;
      letter-spacing: 0.1em;
      font-family: "Lato", sans-serif;
      margin: 0 0 1.777777778em;
      transition: color 0.45s ease;
      .sub {
        font-size: 10px;
        text-transform: none;
        margin-top: 1rem;
        transition: all 0.5s;
      }
    }
    h5 {
      font-size: 1rem;
      color: #8a8787;
      line-height: 1.1;
    }

    p {
      opacity: 0;
      color: #ffffff;
      white-space: nowrap;
      font-weight: 600;
      line-height: 1.8;
      margin: 0 0 0em;
      text-align: center;
      padding: 2px;
      transform: translateY(-1em);
      transition: opacity 0.45s ease, transform 0.5s ease;
    }
    .button-contratar {
      font-size: 1rem;
      font-weight: 500;
      display: flex;
      color: #fff;
      background: #ff6100;
      width: 69%;
      flex-direction: row;
      &:hover {
        transform: scale(1.03);
        background: #753bbd;
      }
    }
    .link-text {
      display: block;
      color: #753bbd;
      font-size: 1.125em;
      font-weight: 600;
      line-height: 1.2;
      text-align: center;
      margin: auto 0 0;
      transition: color 0.2s ease;
      transition: all 0.5s;
      svg {
        margin-left: 0.5em;
        transition: transform 0.6s ease;

        path {
          transition: fill 0.45s ease;
        }
      }
    }

    &:hover {
      transform: scale(1.03);
    }
    /* &:hover {
      background-color: #050fa1;
      background-image: linear-gradient(19deg, #050fa1 0%, #b721ff 100%);
      transform: scale(1.01);
      transition-duration: 4s;
      transition: all 0.5s;
      h3 {
        color: #ffffff;
        border-bottom-color: #a754c4;
      }

      h4 {
        color: #ffffff;
      }
      h5 {
        display: none;
      } */

    /* p {
        opacity: 1;
        transform: none;
        font-size: 1.1rem;
        color: #fff;
        margin: auto;
        justify-content: center;
        align-items: center;
        width: 100%;
        top: 50%;
        left: 0%;
        text-align: center;
        position: absolute;
      } */

    /* .link-text {
        color: #ffffff;
        transition: all 0.5s;
        svg {
          animation: point 1.25s infinite alternate;
          transition: all 0.5s;
          path {
            fill: #ffffff;
          }
        }
      }
    }
*/
  }

  @keyframes point {
    0% {
      transform: translateX(0);
      transition: all 0.5s;
    }
    100% {
      transform: translateX(0.125em);
      transition-duration: 4s;
      transition: all 0.5s;
    }
  }
`;
