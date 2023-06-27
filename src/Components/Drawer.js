import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ArticleIcon from '@mui/icons-material/Article';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DvrIcon from '@mui/icons-material/Dvr';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Header from './Header/Header';
import { IconButton, createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom"

export default function Drawer() {
    const theme = createTheme({
        palette: {
            mode: 'dark'
        },
    });
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (

        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {/* {['About', 'Contact Us', 'Tutor', 'Drafts']*/}
                <ListItem style={{color:"white"}} key={"About"} disablePadding component={Link} to="/about">
                    <ListItemButton>
                        <ListItemIcon>
                            <ArticleIcon />
                        </ListItemIcon>
                        <ListItemText primary={"About"} />
                    </ListItemButton>
                </ListItem>
                <ListItem style={{ color: "white" }} key={"Contact Us"} disablePadding component={Link} to="/contact">
                    <ListItemButton>
                        <ListItemIcon>
                            <ContactMailIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Contact Us"} />
                    </ListItemButton>
                </ListItem>
                <ListItem style={{ color: "white" }} key={"News"} disablePadding component="a" href="http://localhost:3001" target="_blank" rel="noopener noreferrer">
                    <ListItemButton>
                        <ListItemIcon>
                            <DvrIcon />
                        </ListItemIcon>
                        <ListItemText primary={"News"} />
                    </ListItemButton>
                </ListItem>

            </List>
            <Divider />
            <List>
                <ListItem style={{ color: "white" }} key={"Instagram"} disablePadding component="a" href="https://www.instagram.com/vivekjha659/" target="_blank" rel="noopener noreferrer">
                    <ListItemButton>
                        <ListItemIcon>
                            <InstagramIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Instagram"} />
                    </ListItemButton>
                </ListItem>
                <ListItem style={{ color: "white" }} key={"Github"} disablePadding component="a" href="https://github.com/Vivek112001" target="_blank" rel="noopener noreferrer">
                    <ListItemButton>
                        <ListItemIcon>
                            <GitHubIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Github"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (

        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Header>
                        <IconButton
                            edge="start"
                            style={{ marginRight: theme.spacing(1), color: "black", }}
                            color="white"
                            size='medium'
                            aria-label="menu"
                            onClick={toggleDrawer(anchor, true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Header>
                    <ThemeProvider theme={theme}>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                            sx={{ Color: "black" }}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </ThemeProvider>

                </React.Fragment>
            ))}
        </div>
    );
}