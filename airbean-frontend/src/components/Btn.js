import '../style/components/Btn.scss';

function Btn({ text, selector, update }) {
  return (
    <button className={selector} onClick={update}>
      {text}
    </button>
  );
}

export default Btn;
