import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import {
  addToCart,
  decreaseQuantity,
  fetchProducts,
  increaseQuantity,
} from "../../redux/slices/allProductSlice";
import SectionTitle from "../SectionTitle/SectionTitle";
import { BsCartPlusFill } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import "./DailyShopping.css";
import Loader from "../Loader/Loader";
const DailyShopping = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { addedProducts } = useSelector((state) => state.products);
  const fruitsAndVegetables = products.filter(
    (product) =>
      product.parent === "Fruits & Vegetable" && product.discount === 0
  );
  const fruitsAndVegetablesInHome = fruitsAndVegetables.slice(0, 18);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      {products?.length ? (
        <div className="my-5 pt-5">
          <SectionTitle
            title="Popular Products for Daily Shopping"
            description="See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping."
          />
          <Row className="mx-3 g-3 my-5 pb-5">
            {fruitsAndVegetablesInHome.map((singleProduct) => {
              const { _id, title, image, originalPrice, unit } = singleProduct;
              const matchedProduct = addedProducts.find(
                (item) => item._id === _id
              );
              return (
                <Col key={_id} xs={6} md={4} lg={2}>
                  <div className="product-card bg-white p-3">
                    <div>
                      <img className="w-100" src={image} alt={title} />
                    </div>
                    <small className="text-muted d-block">{unit}</small>
                    <small>{title}</small>
                    <div className="d-flex mt-2 align-items-center justify-content-between">
                      <h4 className="mb-0">${originalPrice}</h4>
                      {matchedProduct ? (
                        <div className="cart-quantity-icon">
                          <div className="d-flex align-items-center">
                            <AiOutlineMinus
                              onClick={() =>
                                dispatch(decreaseQuantity(matchedProduct))
                              }
                            />
                            <span className="mx-2">
                              {matchedProduct.cartQuantity}
                            </span>
                            <AiOutlinePlus
                              onClick={() =>
                                dispatch(increaseQuantity(matchedProduct))
                              }
                            />
                          </div>
                        </div>
                      ) : (
                        <div
                          onClick={() => dispatch(addToCart(singleProduct))}
                          className="cart-icon"
                        >
                          <BsCartPlusFill className="fs-4" />
                        </div>
                      )}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default DailyShopping;
