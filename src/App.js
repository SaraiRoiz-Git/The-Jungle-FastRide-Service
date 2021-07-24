import styled from 'styled-components';
import './App.css';
import Homepage from './layouts/Homepage/Homepage';
import OrderConfirm from './layouts/OrderConfirm/OrderConfirm';
import { Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <Container>
      <HashRouter>
        <Route exact path={'/'}>
          <Homepage />
        </Route>
        <Route exact path={'/confirmation'}>
          <OrderConfirm />
        </Route>
      </HashRouter>
    </Container>
  );
}


export default App;

const Container = styled.div`
background-color:  #232323;
display: flex;
justify-content: center;
`