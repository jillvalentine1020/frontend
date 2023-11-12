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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
  const [page, setPage] = useState("Blog");

  console.log("page", page)

  const renderPage = (page) => {
    switch (page) {
      case 'Profile':
        return <div>Profile</div>;
      case 'Account':
        return <div>Account</div>;
      case 'Dashboard':
        return <div>Dashboard</div>;
      case 'Logout':
        return <div>Logout</div>;  
      default:
        return <div>Error: Invalid User Role</div>;
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
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