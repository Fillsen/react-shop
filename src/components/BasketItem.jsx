import React from 'react';
// MUI
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
// Icons
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

// API Поля & Ф-ии прототипы
function BasketItem(props) {
    const {
        id,
        name,
        price,
        description,
        icon,
        quantity,
        removeFromBasket = Function.prototype,
        decrementQuantity = Function.prototype,
        incrementQuantity = Function.prototype
    } = props;

// Результат
    return <ListItem divider>
        <ListItemAvatar>
            <Badge badgeContent={quantity} max={9} color='primary'>
                <Avatar src={icon}>
                </Avatar>
            </Badge>
        </ListItemAvatar>
        <RemoveIcon cursor='pointer' onClick={() => decrementQuantity(id)}/>
        <AddIcon cursor='pointer' onClick={() => incrementQuantity(id)}/>
        <ListItemText
            primary={name}
            secondary={description}
        />
        <ListItemText
            primary={price * quantity}
            align='right'
        />
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
                <DeleteIcon onClick={() => removeFromBasket(id)}/>
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
}

export {BasketItem}