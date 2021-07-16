import Container from "@material-ui/core/Container";
import React, {useEffect, useContext} from 'react'
import {ShopContext} from '../context'
import {API_KEY, API_URL} from '../config'
import {Preloader} from "./Preloader";
import {ItemList} from "./ItemList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import {AlertBuy} from "./AlertBuy";

function Shop() {
    const {items, setItems, loading, order, isBasketShow, alertName} = useContext(ShopContext)

    // Получаем данные API
    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        })
            .then(response => response.json())
            .then(data => {
                setItems(data.featured)
            })
    }, [])

    // Результат
    return (
        <Container>
            <Cart quantity={order.length}/>
            {
                loading ? (
                    <Preloader/>
                ) : (
                    <ItemList
                        items={items}
                    />
                )}
            {
                isBasketShow && (
                    <BasketList/>
                )
            }
            {
                alertName && <AlertBuy/>
            }
        </Container>
    )
}

export {Shop}