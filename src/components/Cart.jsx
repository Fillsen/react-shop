import React, {useContext} from "react";
import {ShopContext} from "../context";
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
    const {order, handleBasketShow = Function.prototype} = useContext(ShopContext);
    const quantity = order.length
    return <div onClick={handleBasketShow} className={classes.root}>
        {quantity ?
            <Button
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