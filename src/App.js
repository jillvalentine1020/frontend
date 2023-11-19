import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Profile from './profile/Profile';
import { createBrowserHistory } from 'history';
import Home from './home/Home';
import LoadingIcon from './utilities/LoadingIcon';
const history = createBrowserHistory();


const App = () => {

  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (isLoading) {
    return <LoadingIcon />;
  }
  return (
    <Home />
  );
}

export default App;