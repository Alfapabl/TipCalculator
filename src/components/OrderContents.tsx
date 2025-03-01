import { OrderType, MenuItemsType } from "../types"
import formatCurrency from "./helpers"

type OrdercontentProps = {
  orderItems : OrderType[],
  removeItems: (id: MenuItemsType["id"]) => void
}

export default function orderContent ({orderItems, removeItems}: OrdercontentProps) {
  return (
    <div>
        <h2 className=' font-black text-4xl'>Consumo</h2>
        <div className="space-y-3 mt-5">
          
          {orderItems.map((items => (
             
             <div 
              key={items.id}
              className=" flex justify-between border-t pt-5 border-gray-500 last-of-type:border-b pb-5 items-center"
             >
                <div>
                  {items.name} - {formatCurrency(items.price)}
                  <p className=" font-black">
                  Cantidad: {items.quantity} - SubTotal: {formatCurrency (items.price * items.quantity)}
                  </p>
                </div>
                <button className=" h-8 w-8 bg-red-600 rounded-full font-black text-white" onClick={()=>removeItems(items.id)}>X</button>
              </div>
           )))
          }

        </div>
    </div>
  )
}
