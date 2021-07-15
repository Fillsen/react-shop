import {ItemSingle} from "./ItemSingle";
import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    gridcontainer: {
        marginTop: '20px',
        marginBottom: '20px'
    }
}))

function ItemList(props) {
    const {items = [], addToBasket = Function.prototype } = props;
    const classes = useStyles();
    if (!items.length) {
        return <h3>Nothing here</h3>
    }
    //TODO: Each child in a list should have a unique 'key' prop
    return <Grid className={classes.gridcontainer} container spacing={4}>
        {items.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <ItemSingle key={item.id} {...item} addToBasket={addToBasket} />
            </Grid>
        ))}
    </Grid>
}

export {ItemList}