import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  width: 90%;

  height: auto;
  border: none;
  z-index: 99;

  position: absolute;

.select-input{
  width: 90%;
}

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
      top: -28rem;
      right: 1rem;
    }


    
  }

`;
export const FormInput = styled.div`

width: 80%;
align-items: center;
margin: auto;
gap: 2rem;
`;