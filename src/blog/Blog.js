import * as React from 'react';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MainFeaturedPost from '../home/MainFeaturedPost';
import FeaturedPost from '../home/FeaturedPost';
import Main from '../home/Main'
import Sidebar from '../home/Sidebar';
import Container from '@mui/material/Container';
import Header from '../home/Header';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';

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

const mainFeaturedPost = {
    title: 'Title of a highlighted tutorial',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
];

const posts = ["post1", "post2", "post3"];

const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};

export default function Blog() {
    return (
        <Container maxWidth="lg">
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto'}}
            >
                {sections.map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.url}
                        sx={{ p: 1, flexShrink: 0 }}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Grid container spacing={4}>
                    {featuredPosts.map((post) => (
                        <FeaturedPost key={post.title} post={post} />
                    ))}
                </Grid>
                <Grid container spacing={5} sx={{ mt: 3 }}>
                    <Main title="From the firehose" posts={posts} />
                    <Sidebar
                        title={sidebar.title}
                        description={sidebar.description}
                        archives={sidebar.archives}
                        social={sidebar.social}
                    />
                </Grid>
        </Container>

    );
}

// Blog.propTypes = {
//     sections: PropTypes.arrayOf(
//       PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     title: PropTypes.string.isRequired,
//   };