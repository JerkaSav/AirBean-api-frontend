import ImgHeader from '../components/ImgHeader';
import LoginForm from '../components/LoginForm';
import DropdownBtn from '../components/DropdownBtn';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMenu, setOffers } from '../actions/menuAction';

function Landing() {
  const dispatch = useDispatch();

  async function getMenu() {
    const response = await fetch('http://localhost:9999/api/coffee');
    const data = await response.json();
    const offers = await data.offers.map((item) => {
      item.amount = 0;
      return item;
    });
    const menu = await data.menu.map((item) => {
      item.amount = 0;
      return item;
    });
    dispatch(setOffers(offers));
    dispatch(setMenu(menu));
  }
  useEffect(() => {
    getMenu();
  });
  return (
    <div className="grid bg-brown landing">
      <DropdownBtn />
      <ImgHeader />
      <LoginForm />
    </div>
  );
}

export default Landing;
