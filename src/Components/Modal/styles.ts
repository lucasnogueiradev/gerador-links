import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  width: 90%;

  height: auto;
  border: none;
  z-index: 99;

  position: absolute;
  .title-modal {
    font-family: "Poppins", sans-serif;
    color: #646464;
     background: "#ff6100",
  }
  .alert {
    width: 19rem;
    top: -6rem;
    overflow-y: hidden;
    overflow-x: hidden;
    height: 52px;
    position: absolute;
    right: -16rem;
    transition: all 0.5s;
    box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.1);
    z-index: 999999;
    font-family: "Poppins";
  }

  @media (max-width: 999px) {
    .alert {
      top: -34rem;
      right: 1rem;
    }


    
  }
 
`;
