import arrowSmall from '../assets/arrow-small.svg';

function CartItems({ title, price, amount, update }) {
  return (
    <li>
      <section>
        <h2>{title}</h2>
        <div className="amount">
          <img
            src={arrowSmall}
            alt="arrow"
            onClick={() => {
              update('INCREMENT', title);
            }}
          />
          <p>{amount}</p>
          <img
            src={arrowSmall}
            alt="arrow"
            className="arrow-down"
            onClick={() => {
              update('DECREMENT', title);
            }}
          />
        </div>
      </section>
      <p>{price} Kr</p>
    </li>
  );
}

export default CartItems;
