const Card = (props) => {
  return (
    <>
      <div>
        <img src={props.image} />
        <p>{props.nameItem}</p>
        <p>{props.price}</p>
        <button type="button" onClick={() => Aleart()}>
          Mua ngay
        </button>
      </div>
    </>
  );
};
function Aleart() {
  alert("Đã them vào giỏ hàng");
}

export default Card;
