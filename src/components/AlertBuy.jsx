import React from 'react';
import {useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: '5%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '40%'
    },
}));

function AlertBuy(props) {
    const {name = '', closeAlert = Function.prototype} = props;
    const classes = useStyles();
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);
        return () => {
            clearTimeout(timerId)
        }
    }, [name])

    return (
        <div className={classes.root}>
            <Alert severity="success">{name} добавлен в козину</Alert>
        </div>
    )
}

export {AlertBuy}