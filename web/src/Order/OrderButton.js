import React from 'react'
import styled from 'styled-components';


const ButtonDetails = styled.button`
  background-color: transparent;
  border: 1px solid hsl(0, 0%, 45%);
  border-radius: .4rem;
  color: hsl(0, 0%, 45%);
  padding: .5rem .8rem;

  &:hover{
    border: none;
    background-color: hsl(35, 100%, 60%);
    color: hsl(0, 0%, 25%);
    cursor: pointer;
  }
`;

function OrderButton() {
  return(
    <ButtonDetails>
      More
    </ButtonDetails>
  );
}
export default OrderButton;
