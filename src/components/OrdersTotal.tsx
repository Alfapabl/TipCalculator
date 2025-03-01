import { useMemo } from "react"
import { OrderType } from "../types"
import formatCurrency from "./helpers"

type OrdercontentProps = {
  orderItems : OrderType[],
  tip: number,
  placeOrder: () => void
}

export default function OrdersTotal({orderItems, tip, placeOrder}: OrdercontentProps) {

  const SubTotal = useMemo(() =>  orderItems.reduce((total,  item) => total + (item.price * item.quantity), 0), [orderItems])
  const tipTotal = useMemo(()=> SubTotal* tip, [tip, orderItems])
  const total = useMemo(()=> SubTotal + tipTotal, [tip, SubTotal])
  
  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina</h2>
            <p>Subtotal a Pagar: 
                <span className="font-bold">{formatCurrency(SubTotal)}</span>
            </p>
            <p>Propinas: 
              <span className="font-bold">{formatCurrency(tipTotal)}</span>
            </p>
            <p>Total a Pagar:
              <span className="font-bold">{formatCurrency(total)}</span>
            </p>
        </div>
        <button className="bg-black text-white uppercase p-3 w-full mt-10 disabled:opacity-10" disabled={total === 0} onClick={placeOrder}>Guardar Orden</button>
    </>
  )
}
