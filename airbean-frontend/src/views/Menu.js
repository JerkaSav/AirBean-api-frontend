import ImgHeader from '../components/ImgHeader';
import DropdownBtn from '../components/DropdownBtn';
import MenuItem from '../components/MenuItem';
import ImgFooter from '../components/ImgFooter';
import CartBtn from '../components/CartBtn';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Menu() {
  const menu = useSelector((state) => state.menu);
  const [rerender, setRerender] = useState(true);
  function update() {
    setRerender(!rerender);
  }

  return (
    <div className="grid bg-pink menu">
      <DropdownBtn />
      <CartBtn />
      <ImgHeader />
      <h1 className="big-h1 brown">Meny</h1>
      <ul className="menu-list">
        {menu.map((item) => {
          return <MenuItem key={item.id} item={item} update={update} />;
        })}
      </ul>
      <ImgFooter />
    </div>
  );
}

export default Menu;
