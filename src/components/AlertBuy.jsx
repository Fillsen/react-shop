import React, {useEffect, useContext} from 'react';
import {ShopContext} from "../context";
import {makeStyles} from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        top: '5%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '40%'
    },
});

function AlertBuy() {
    const classes = useStyles();
    const {alertName: name = '', closeAlert = Function.prototype} = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);
        return () => {
            clearTimeout(timerId)
        }
    }, [name])

    return (
        <Alert className={classes.root} variant='filled' severity="success">{name} добавлен в козину</Alert>
    )
}

export {AlertBuy}