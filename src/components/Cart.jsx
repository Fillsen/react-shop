import React from "react";
import Button from "@material-ui/core/Button";
import {ShoppingCart} from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        cursor: 'pointer',
        zIndex: 5,
        padding: '1rem'
    }

}))

function Cart(props) {
    const classes = useStyles();
    const {quantity = 0, handleBasketShow = Function.prototype} = props;
    return <div onClick={handleBasketShow} className={classes.root}>
        {quantity ? <Button
                position="fixed"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<ShoppingCart/>}>
                {quantity}
            </Button>
            :
            <Button
                disabled
                color="primary"
                size="large"
                startIcon={<ShoppingCart/>}>
            </Button>}
    </div>
}

export {Cart}