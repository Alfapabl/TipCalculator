import { MenuItemsType } from "../types";

type MenuItemsProps = {
    items: MenuItemsType
    addItems: (items : MenuItemsType) => void

}
export default function MenuItems({items, addItems} : MenuItemsProps) {
  return (
  <>
 
    <button className=" border-2 border-teal-400 flex justify-between w-full p-3 hover:bg-teal-200 mb-2 rounded-md" onClick={()=>addItems(items)}>
        <p>{items.name}</p>
        <p>{items.price}</p>
    </button>
    
  </>
  )
}

