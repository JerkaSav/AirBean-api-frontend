import Plus from './Plus';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateAmount } from '../actions/menuAction';

function MenuItem({ item, update }) {
  const menu = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  function handleClick() {
    menu[item.id - 1].amount += 1;
    dispatch(updateAmount(menu));
    update();
  }

  return (
    <li>
      <Plus update={handleClick} />
      <div>
        <section>
          <h2>{item.title}</h2>
          <h2>{item.price} Kr</h2>
        </section>
        <p>{item.desc}</p>
      </div>
    </li>
  );
}

export default MenuItem;
