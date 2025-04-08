import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem["id"]) => void
}

export const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
    return (
        <>
            <div>
                <h2 className="text-4xl font-black">Consumo</h2>
                <div className="space-y-3 mt-5">
                    {order.map(item => (
                        <div
                            key={item.id}
                            className="flex justify-between border-t border-gray-100 py-5 items-center last-of-type:border-b"
                        >
                            <div>
                                <p className="text-lg">
                                    {item.name} - {formatCurrency(item.price)}
                                </p>
                                <p className="font-black">
                                    Cantidad: {item.qty} - {formatCurrency(item.price * item.qty)}
                                </p>
                            </div>
                            <button
                                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                                onClick={() => removeItem(item.id)}
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
