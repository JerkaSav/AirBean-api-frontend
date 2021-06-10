import drönare from '../assets/drönare.svg';
import Btn from '../components/Btn';
import '../style/layouts/Status.scss';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setMenu } from '../actions/menuAction';
import { useEffect, useState } from 'react';

function Status() {
  const orderDetails = useSelector((state) => state.orderDetails);
  const menu = useSelector((state) => state.menu);
  const history = useHistory();
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState();
  const url = `http://localhost:9999/api/orderId/${orderDetails.orderid}`;

  function handleClick() {
    menu.map((item) => {
      return (item.amount = 0);
    });
    dispatch(setMenu(menu));
    history.push('/menu');
  }

  useEffect(() => {
    async function fetchTimeLeft() {
      const response = await fetch(url);
      const data = await response.json();

      if (data[0]) {
        setTimeLeft(data[0][0].timeLeft);
      }
    }
    fetchTimeLeft();
  }, [url]);
  return (
    <div className="grid bg-orange status">
      <p className="white">
        Ordernummer <b>#{orderDetails.orderid}</b>
      </p>
      <img src={drönare} alt="drönare" />
      <h1 className="white">{timeLeft ? 'Din beställing är påväg!' : 'Din beställning är klar!'}</h1>
      <h3 className="white">
        <b>{timeLeft ? timeLeft : 'Hoppas kaffet smakar!'}</b>
        {timeLeft ? ' Minuter' : ''}
      </h3>
      <Btn text="Ok cool!" selector="btn-white" update={handleClick} />
    </div>
  );
}

export default Status;
