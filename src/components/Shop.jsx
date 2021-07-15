import Container from "@material-ui/core/Container";
import React, {useState, useEffect} from 'react'
import {API_KEY, API_URL} from '../config'
import {Preloader} from "./Preloader";
import {ItemList} from "./ItemList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import {AlertBuy} from "./AlertBuy";

function Shop() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('')

    // Ф-нал добавления в корзину
    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder)
        }
        setAlertName(item.name)
    };

    // Ф-нал удаления из корзины
    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId)
        setOrder(newOrder)
    }

    // Ф-нал увеличения/уменьшения товаров
    const incrementQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }
    const decrementQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    // Состояние корзины вкл/выкл TODO: сделать модальное окно https://material-ui.com/ru/components/dialogs/
    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

    // Получаем данные API
    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        })
            .then(response => response.json())
            .then(data => {
                data.featured && setItems(data.featured)
                setLoading(false)
            })
    }, [])

    // AlertBuy таймер
    const closeAlert = () => {
        setAlertName('')
    }

    // Результат
    return (
        <Container>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {
                loading ? (
                    <Preloader/>
                ) : (
                    <ItemList
                        items={items}
                        addToBasket={addToBasket}
                    />
                )}
            {
                isBasketShow && (
                    <BasketList
                        order={order}
                        handleBasketShow={handleBasketShow} //Прокидываем функции
                        removeFromBasket={removeFromBasket} //Прокидываем функции
                        incrementQuantity={incrementQuantity} //Прокидываем функции
                        decrementQuantity={decrementQuantity} //Прокидываем функции
                    />
                )
            }
            {
                alertName && <AlertBuy name={alertName} closeAlert={closeAlert}/>
            }
        </Container>
    )
}

export {Shop}