import styled from "styled-components";

export const Container = styled.div`
  display: none;
  top: 5rem;
  z-index: 999999;
  margin-top: 3rem;

  
  background: #f3f4f5;
  .button-modal4 {
   max-width: 90%;
        width: 90%;
        justify-content: center;
        /* margin-left: 15px; */
        height: 10px;
      }
  @media (max-width: 999px) {
    display: block;
    background: #f3f4f5;
    z-index: 999999;
    padding-top: 0.5rem;
    text-align: center;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    font-family: "Poppins", sans-serif;
    color: #777474;
    margin-left: auto;
    margin-top: 9rem;
    height:18rem;
      .banner-slider-mobile {
      margin-top: 6rem;
      .button-modal4 {
     
        width: 100%;
        justify-content: center;
        margin-left: 15px;
      }
    }
    h3 {
      z-index: 999999;
    }
    .button-mobile {
      width: 100%;
      padding: 0.7rem;
      border-radius: 1.6rem;
      background: #0d6efd;
      color: #fff;
      border: none;
      font-family: "Poppins", sans-serif;
      margin-top: 0.3rem;
      z-index: 9;
      justify-content: start;
      margin-bottom: 1.5rem;
      cursor: pointer;
      transition: all 0.4s;
    }
    .button-mobile:hover {
      transform: scale(1.1);
    }
    .banner-p-mobile {
      color: #777474;
      font-size: 1.2rem;
      margin-top: 3.9rem;
      margin-bottom: 5rem;
      text-align: center;
      font-family: "Poppins", sans-serif;
      justify-content: center;
       padding: 8px;
      width: 100%;
    }
  }
`;
