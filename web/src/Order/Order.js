import React from 'react';
import styled from 'styled-components';
import OrderButton from './OrderButton';

const PostIt = styled.section`
  line-height: 1;
  text-align:center;
  width: 275px;
  min-height:250px;
  max-height:250px;
  padding-top:25px;
  position:relative;
  border:1px solid #E8E8E8;
  border-top:60px solid #fdfd86;
  /* font-family:'Reenie Beanie'; */
  font-size:22px;
  border-bottom-right-radius: 60px 5px;
  display:inline-block;
  background: #ffff88;
  background: -moz-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right bottom, color-stop(81%,#ffff88), color-stop(82%,#ffff88), color-stop(82%,#ffff88), color-stop(100%,#ffffc6)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* IE10+ */
  background: linear-gradient(135deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffffc6',GradientType=1 ); /* IE6-9 fallbac */

  &:after {
    content: "";
    position:absolute;
    z-index:-1;
    right:-0px; bottom:20px;
    width:200px;
    height: 25px;
    background: rgba(0, 0, 0, 0.2);
    box-shadow:2px 15px 5px rgba(0, 0, 0, 0.40);
    -moz-transform: matrix(-1, -0.1, 0, 1, 0, 0);
    -webkit-transform: matrix(-1, -0.1, 0, 1, 0, 0);
    -o-transform: matrix(-1, -0.1, 0, 1, 0, 0);
    -ms-transform: matrix(-1, -0.1, 0, 1, 0, 0);
    transform: matrix(-1, -0.1, 0, 1, 0, 0);
  }
`;

function Order() {
  return(
    <PostIt>
      <p>Pedido</p>
      <OrderButton />
    </PostIt>
  )
}
export default Order;
