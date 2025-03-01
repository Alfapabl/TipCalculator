export type MenuItemsType = {
    id: number,
    name: string,
    price: number
}

export type OrderType = MenuItemsType & {
    quantity: number
}