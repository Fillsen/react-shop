import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core";

import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
    },
}))

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Container component='main'>
                <Typography variant='h6' align='center' gutterBottom>
                    <IconButton aria-label="Github">
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton aria-label="Telegram">
                        <TelegramIcon/>
                    </IconButton>
                    <IconButton aria-label="Mail">
                        <AlternateEmailIcon/>
                    </IconButton>
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary'>
                    Above are some ways to contact me
                </Typography>
            </Container>
        </div>
    )
}

export {Footer}