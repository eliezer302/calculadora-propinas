import type { MenuItem } from "../types"

type MenuItemProps = {
    menu: MenuItem,
    addItem: (menu: MenuItem) => void
}

export const MenuItems = ({menu, addItem}: MenuItemProps) => {
  return (
    <>
        <button
            className="border-2 border-blue-400 w-full p-3 flex justify-between hover:bg-blue-200"
            onClick={() => addItem(menu)}
        >
            <p>{menu.name}</p>
            <p className="font-black">{menu.price}</p>
        </button>
    </>
  )
}
