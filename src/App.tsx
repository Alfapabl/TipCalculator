import { menuItem } from "./data/data"
import MenuItems from "./components/MenuItems"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents"
import OrdersTotal from "./components/OrdersTotal"
import TipForm from "./components/TipForm"

function App() {

  const { orderItems, SetTip, tip, addItems, removeItems, placeOrder } = useOrder()


  return (
    <>
      <header className=" bg-teal-400 py-4">
        <h1 className=" text-4xl text-center font-black">Calculadora Porcentajes</h1>
      </header>

      <main className=" mx-auto max-w-7xl py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h1 className="mb-5 font-black text-4xl ">Menú</h1>
        
          {
            menuItem.map(Items => (<MenuItems 
            items={Items}
            key={Items.id}
            addItems={addItems}/>))
          } 

        </div> 
        <div className=" border border-dashed border-slate-300 p-5 space-y-10 rounded-r-lg">
        {orderItems.length === 0 ? 
            <p>La orden esta vacia</p>
           :
           <>
              <OrderContents 
                orderItems={orderItems}
                removeItems={removeItems}
              />
              <TipForm 
                setTip = {SetTip}
              />
              <OrdersTotal 
                orderItems={orderItems}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
        }
          </div>

      </main>

    </>
  )
}

export default App
