import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Container } from "reactstrap";
import Profile from './profile/Profile';
import { createBrowserHistory } from 'history';
import Home from './home/Home';
const history = createBrowserHistory();


const App = () => {

  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return "<Loading />";
  }
  return (
    <Router history={history}>
      <div id="app" >
        <Container >
          <Routes>
            <Route path="/" exact element={<Home page={history}/>} />
            <Route path="/profile" element={<Home page={history}/>} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;