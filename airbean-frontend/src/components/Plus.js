function Plus({ update }) {
  return (
    <div className="plus" onClick={() => update()}>
      <div className="line-1"></div>
      <div className="line-2"></div>
    </div>
  );
}

export default Plus;
