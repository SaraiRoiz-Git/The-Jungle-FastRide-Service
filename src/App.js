import styled from 'styled-components';
import './App.css';
import Homepage from './layouts/Homepage/Homepage';
import OrderConfirm from './layouts/OrderConfirm/OrderConfirm';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, HashRouter } from "react-router-dom";
const hist = createBrowserHistory();

function App() {
  return (
    <Container>
      {/* <Route history={hist}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/confirmation" component={OrderConfirm} />
      </Switch>
    </Route>, */}
      <HashRouter>
        <Route exact path={'/'}>
          <Homepage />
        </Route>
        <Route exact path={'/confirmation'}>
          <OrderConfirm />
        </Route>
      </HashRouter>
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