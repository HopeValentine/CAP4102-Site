import { ITEMS } from "../../components/menu_items";
import { Item } from "./menu_item";
import "./menu.css"

export default function Menu() {
  const a = "Appetizers";
  const e = "Entrees";

  const appetizers = ITEMS.filter(item => item.category === a);
  const entrees = ITEMS.filter(item => item.category === e);

  return (
    <div className="page-container">
      <div className="menu-container">
        <header className="menu-header">
          <h1 className="menu-header-text">Menu</h1>
        </header>

        <body className="menu-body">
          <p className="menu-body-title">
            Discover a blend of flavors from Da Nang and Phan Thiết in our curated menu!
            Made with love and served with a side of culture, each dish is a taste of our rich Vietnamese heritage.
          </p>

          <h1>Appetizers</h1>
          <div className="menu-items-group">
            {appetizers.map((menu_item) => (
              <Item key={menu_item.id} data={menu_item} />
            ))}
          </div>

          <h1>Entrees</h1>
          <div className="menu-items-group">
            {entrees.map((menu_item) => (
              <Item key={menu_item.id} data={menu_item} />
            ))}
          </div>

          <h1>Beverages</h1>
          <div className="menu-items-group">
            <p className="menu-body-text">
              Water
            </p>
            <p className="menu-body-text">
              Soda (Coke, Sprite, Dr. Pepper)
            </p>
            <p className="menu-body-text">
              Coconut Water
            </p>
            <p className="menu-body-text">
              Vietnamese Coffeee
            </p>
          </div>

          <h1>Upgrades</h1>
          <div className="menu-box">
            <div className="menu-items-group">
              <p className="menu-body-text">
                Substitute White Rice w/Fried Rice
              </p>
              <p className="menu-body-text">
                Substitute White Rice w/Stir Fry Noodles
              </p>
            </div>
          </div>

        </body>

      </div>
    </div>
  );
}