import { useState } from "react";
import { MenuItemsType, OrderType } from "../types";


export default function useOrder() {

    const [orderItems, SetOrderItems] = useState<OrderType[]>([])
    const [tip, SetTip] = useState(0)


    const addItems = (item: MenuItemsType) => {

        const checkExist = orderItems.find(orderItems => orderItems.id === item.id);

        if (checkExist) {
            const updateItem = orderItems.map(orderItems => orderItems.id === item.id ? { ...orderItems, quantity: orderItems.quantity + 1 } : orderItems)
            SetOrderItems(updateItem)


        } else {
            const newItem = { ...item, quantity: 1 }
            SetOrderItems([...orderItems, newItem]);
        }

    }

    const removeItems = (id: MenuItemsType['id']) => {
        SetOrderItems(orderItems.filter ( item => item.id !== id))
        
    }

    const placeOrder = () => {
        console.log("guardando...");
        
    }


    return {
        orderItems,
        SetTip,
        tip,
        addItems,
        removeItems,
        placeOrder
    }

}

