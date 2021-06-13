import { createGlobalStyle } from 'styled-components';
import Header from '../Header/Header';
import OrderList from '../Order/OrderList';
import OrderModal from '../Order/OrderModal';
/* import Login from '../Login/Login'; */
import './App.css';

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Login /> */}
      <Header></Header>
      <OrderList></OrderList>
      <OrderModal />
    </>
  );
}

export default App;
