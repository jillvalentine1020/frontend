import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Profile from './profile/Profile';
import { createBrowserHistory } from 'history';
import Home from './home/Home';
import LoadingIcon from './utilities/LoadingIcon';
import Blog from './blog/Blog';
import Create from './create/Create';

// const history = createBrowserHistory();

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="blog" element={<Blog />} />
        <Route path="create" element={<Create />} />
      </Route>
    </Routes>
  );
};

// export default App;