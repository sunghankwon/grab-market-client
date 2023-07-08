import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  useEffect(function () {
    axios
      .get(
        "https://54055100-43dd-4a38-8818-b40212e100e2.mock.pstmn.io/products/" +
          id
      )
      .then(function (result) {
        setProducts(result.data);
        console.log(result.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보를 받고있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2023년 7월 8일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
