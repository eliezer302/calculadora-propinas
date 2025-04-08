import { useCallback } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}


export const OrderTotal = ({ order, tip, placeOrder }: OrderTotalProps) => {

    const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.price * item.qty), 0), [order])
    const tipAmount = useCallback(() => subtotalAmount() * tip, [subtotalAmount, tip])
    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [subtotalAmount, tipAmount])

    return (
        <>
            <div>
                <div className="space-y-3">
                    <h2 className="font-black text-2xl">Totales y propinas</h2>
                    <p>
                        Subtotal a pagar: {''}
                        <span className="font-bold">{formatCurrency(subtotalAmount())}</span>
                    </p>
                    <p>
                        Propina: {''}
                        <span className="font-bold">{formatCurrency(tipAmount())}</span>
                    </p>
                    <p>
                        Total a pagar: {''}
                        <span className="font-bold">{formatCurrency(totalAmount())}</span>
                    </p>
                </div>
                <div>
                    <button
                        className="w-full bg-green-500 text-white uppercase font-bold mt-10 p-3 disabled:opacity-25"
                        disabled={totalAmount() === 0}
                        onClick={placeOrder}
                    >
                        Guardar orden
                    </button>
                </div>
            </div>
        </>
    )
}
