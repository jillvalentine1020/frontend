import React, { useEffect, useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from './Sidebar';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';
import Footer from './Footer';
import Header from './Header';
import Blog from '../blog/Blog';
import Profile from "../profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingIcon from '../utilities/LoadingIcon'

// TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function Home() {
  const [page, setPage] = useState("Blog");
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
    isLoading, 
    error
  } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
        logoutParams: {
            returnTo: window.location.origin,
        }
  });

  const renderPage = (page) => {
    switch (page) {
      case 'Blog':
        return <Blog/>;  
      case 'Profile':
        return <Profile/>;
      case 'Account':
        return <div>Account</div>;
      case 'Logout':
        logoutWithRedirect();
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" setPage={setPage}/>
        <main>
          {renderPage(page)}
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}