import * as React from 'react';
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

const sections = [
  { title: 'All Engineering Topics', url: '#' },
  { title: 'Cloud', url: '#' },
  { title: 'Message Streaming', url: '#' },
  { title: 'Backend', url: '#' },
  { title: 'Web Frontend', url: '#' },
  { title: 'Mobile', url: '#' },
  { title: 'Data Science and Databases', url: '#' },
  { title: 'More...', url: '#' }
];


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog"  />
        <main>
          <Blog />
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}