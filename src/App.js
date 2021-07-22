import styled from 'styled-components';
import './App.css';
import Homepage from './layouts/Homepage/Homepage';
import OrderConfirm from './layouts/OrderConfirm/OrderConfirm';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
const hist = createBrowserHistory();

function App() {
  return (
    <Container>
       <Router history={hist}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/confirmation" component={OrderConfirm} />
      </Switch>
    </Router>,
      {/* <Homepage />
      <OrderConfirm/> */}
    </Container>
  );
}


export default App;

const Container = styled.div`
background-color:  #232323;
display: flex;
justify-content: center;
`