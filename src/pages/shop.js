import { useAtom } from "jotai";
import { PRODUCTS } from "../data/shop";
import { productPreviewAtom } from "../state";
import FreeSample from "../components/free-sample";
import ProductCard from "../components/product-card";
import "../styles/shop.scss";

function Shop() {
  const [, setProductPreview] = useAtom(productPreviewAtom);

  const onClickProduct = (product) => {
    setProductPreview(product);
  };

  return (
    <>
      <div className="shop">
        <FreeSample />
        <div className="shop-note">
          All packs will be updated with new assets for holders, free of charge
        </div>
        <div className="products">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              image={product.images[0]}
              price={product.price}
              onClick={() => onClickProduct(product)}
            />
          ))}
        </div>
      </div>
      <img className="mob" src={`/images/misc/mob.png`} alt="" />
    </>
  );
}

export default Shop;
