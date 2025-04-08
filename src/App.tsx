import { MenuItems } from "./components/MenuItems"
import { OrderContents } from "./components/OrderContents";
import { OrderTotal } from "./components/OrderTotal";
import { TipPercentage } from "./components/TipPercentage";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-2xl font-black">Calculadora de propinas y consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-15 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-5">
            {menuItems.map(menu => (
              <MenuItems
                key={menu.id}
                menu={menu}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-5">
          {order.length === 0 ?
            <p className="text-center">Está vacío</p>
            : (
              <>
                <OrderContents
                  order={order}
                  removeItem={removeItem}
                />

                <TipPercentage
                  setTip={setTip}
                  tip={tip}
                />

                <OrderTotal
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
            )}
        </div>
      </main>
    </>
  )

}

export default App
