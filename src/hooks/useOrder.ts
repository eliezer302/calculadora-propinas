import { useState } from "react"

import { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (menu: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === menu.id)
        if (itemExist) {
            const updateOrder = order.map(orderItem => orderItem.id === menu.id ? { ...orderItem, qty: orderItem.qty + 1 } : orderItem)
            setOrder(updateOrder)
        } else {
            const newItem = { ...menu, qty: 1 }
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(setOrder => setOrder.filter(order => order.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}
