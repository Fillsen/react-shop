import {ItemSingle} from "./ItemSingle";
import {ShopContext} from "../context";
import React, {useContext} from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    gridcontainer: {
        marginTop: '20px',
        marginBottom: '20px'
    }
}))

function ItemList() {
    const classes = useStyles();
    const {items = []} = useContext(ShopContext);
    if (!items.length) {
        return <Typography variant='h1' align='center'>Nothing here</Typography>
    }
    return <Grid container className={classes.gridcontainer} spacing={4}>
        {items.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <ItemSingle key={item.id} {...item} />
            </Grid>
        ))}
    </Grid>
}

export {ItemList}