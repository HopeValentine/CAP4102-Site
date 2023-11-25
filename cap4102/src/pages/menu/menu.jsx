import { ITEMS } from "../../menu_items";
import { Item } from "./menu_item";

export default function Menu() {
  return (
    <div className="Menu">
        <p>help me IM THE MENU</p>
        {ITEMS.map((menu_item) => 
        (<Item data={menu_item}/>))}
    </div>
  );
};
