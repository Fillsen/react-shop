import {Typography, Container, Grid, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(12, 0, 12)
    },
    buttons: {
        paddingTop: '10px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        flexGrow: 1,
    },
}))

function Header() {
    const classes = useStyles();
    return (
        <main>
            <div className={classes.appBar}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Menu
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <div className={classes.root}>
                <Container maxWidth='sm'>
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                        React Shop
                    </Typography>
                    <Typography variant='h5' align='center' color='textSecondary' gutterBottom>
                        This simple project made by Fillsen with Material-UI, React JS, Reducer & FortniteAPI
                    </Typography>
                    <div className={classes.buttons}>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item>
                                <Button
                                    href='https://github.com/Fillsen/react-shop'
                                    rel='noreferrer'
                                    target='_blank'
                                    variant='contained'
                                    color='primary'>
                                    Github
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    href='https://tlgg.ru/Fillsen'
                                    rel='noreferrer'
                                    target='_blank'
                                    variant='outlined'
                                    color='primary'>
                                    Contact me
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </main>
    )
}

export {Header}