import React from 'react';
import styled from 'styled-components';
import Order from './Order';

const ListGrid = styled.div`
  display: grid;
  grid-template: auto / repeat(auto-fill, 275px);
  grid-gap: 1.5rem 1rem;
  margin: 2rem auto;
  justify-content: space-evenly;
  padding: 1rem;
  min-height: 80vh;
  width: 90%;
`;


function OrderList() {
  return(
    <ListGrid>
      <Order />
      <Order />
      <Order />
      <Order />
    </ListGrid>
  );
}
export default OrderList;
