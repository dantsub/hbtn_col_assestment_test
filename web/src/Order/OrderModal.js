import React from 'react'
import styled from 'styled-components';


const ModalContainer = styled.div`
  background-color: hsl(0, 0%, 25%, 0.7);
  left: 0;
  top: 0;
  right: 0;
  position: fixed;
  padding-top: 5rem;
  height: 100vh;
  margin:0;
  width: 100vw;
  z-index: 1;
`;
const ModalDetail = styled.section`
  background-color: hsl(0, 0%, 100%);
  margin: 0 auto;
  padding: 1rem;
  width: 40%;
`;
const ModalHeader = styled.header`
  border-bottom: 1px solid hsl(0, 0%, 78%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;
const ModalClose = styled.a`
  text-decoration: none;
  color: #000;
`;

const ModalTitle = styled.h2`
`;



function OrderModal() {
  return(
    <ModalContainer>
      <ModalDetail>
        <ModalHeader>
          <ModalTitle>Titulo</ModalTitle>
          <ModalClose href="...">X</ModalClose>
        </ModalHeader>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum impedit praesentium nostrum molestias, quibusdam perferendis, unde quam eveniet cum reprehenderit cumque sint tempore repellendus provident vel, error aliquid voluptas?</p>
      </ModalDetail>
    </ModalContainer>
  );
}
export default OrderModal;
