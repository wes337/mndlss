import { CDN_URL } from "../constants";
import { getPriceInUSD } from "../utils";
import useSpray from "../hooks/spray";
import "../styles/product-card.scss";

function ProductCard({ title, image, price, onClick }) {
  const { spray, startSprayInterval, stopSprayInterval } = useSpray();

  return (
    <button
      className="product-card"
      onClick={onClick}
      onPointerEnter={startSprayInterval}
      onPointerLeave={stopSprayInterval}
    >
      <img
        className="product-card-image"
        src={`/images/shop/${image}`}
        alt=""
      />
      <div className="product-card-title">
        {title}
        <img
          className="spray"
          key={spray}
          src={`${CDN_URL}/images/misc/spray-${spray}.png`}
          alt=""
        />
      </div>
      <div className="product-card-price">{getPriceInUSD(price)}</div>
    </button>
  );
}

export default ProductCard;
