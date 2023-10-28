import { useEffect } from "react";
import { useAtom } from "jotai";
import { CDN_URL } from "../constants";
import { getPriceInUSD } from "../utils";
import { productPreviewAtom } from "../state";
import useSpray from "../hooks/spray";
import "../styles/product-preview.scss";

function ProductPreview() {
  const [productPreview, setProductPreview] = useAtom(productPreviewAtom);
  const { spray, startSprayInterval, stopSprayInterval } = useSpray();

  useEffect(() => {
    if (productPreview) {
      startSprayInterval();
    } else {
      stopSprayInterval();
    }

    return () => {
      stopSprayInterval();
    };
  }, [productPreview, startSprayInterval, stopSprayInterval]);

  if (!productPreview) {
    return null;
  }

  return (
    <>
      <div className="product-preview">
        <div className="product-preview-inner">
          <button
            className="product-preview-close"
            onClick={() => setProductPreview(null)}
          >
            <img src={`${CDN_URL}/images/misc/close.png`} alt="Close" />
          </button>
          <div className="product-preview-images">
            <button className="previous" onClick={() => {}}>
              <img src={`${CDN_URL}/images/misc/arrow.png`} alt="Prev" />
            </button>
            <div className="product-preview-image">
              {productPreview.images.map((image) => {
                return (
                  <img
                    key={image}
                    src={`${CDN_URL}/images/shop/${image}`}
                    alt=""
                  />
                );
              })}
            </div>
            <button className="next" onClick={() => {}}>
              <img src={`${CDN_URL}/images/misc/arrow.png`} alt="Next" />
            </button>
          </div>
          <div className="product-preview-info">
            <div className="product-preview-title">
              {productPreview.title}
              <img
                className="spray"
                key={spray}
                src={`${CDN_URL}/images/misc/spray-${spray}.png`}
                alt=""
              />
            </div>
            <div className="product-preview-price">
              {getPriceInUSD(productPreview.price)}
            </div>
            <button className="product-preview-buy">Buy It Now</button>
            <div className="product-preview-description">
              {productPreview.description}
            </div>
          </div>
        </div>
      </div>
      <div
        className="product-preview-backdrop"
        onClick={() => setProductPreview(null)}
      />
    </>
  );
}

export default ProductPreview;
