import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import { BsCartPlusFill } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/slices/allProductSlice";
import Loader from "../Loader/Loader";
import "./DiscountedProducts.css";
const DiscountedProducts = () => {
  const { products } = useSelector((state) => state.products);
  const { addedProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const discountedProducts = products.filter((product) => product.discount);
  return (
    <React.Fragment>
      {products?.length ? (
        <div>
          <SectionTitle
            title="Latest Discounted Products"
            description="See Our latest discounted products below. Choose your daily needs from here and get a special discount with free shipping."
          />
          <Row className="mx-3 g-3 my-5 pb-5">
            {discountedProducts.map((singleProduct) => {
              const {
                _id,
                title,
                image,
                originalPrice,
                price,
                unit,
                discount,
              } = singleProduct;
              const matchedProduct = addedProducts.find(
                (item) => item._id === _id
              );
              return (
                <Col key={_id} xs={6} md={4} lg={2}>
                  <div className="product-card bg-white p-3">
                    <span
                      style={{ zIndex: 10 }}
                      className=" position-absolute bg-warning text-white px-2 rounded "
                    >
                      {discount}% Off
                    </span>
                    <div>
                      <img
                        style={{ zIndex: 1 }}
                        className="w-100"
                        src={image}
                        alt={title}
                      />
                    </div>
                    <small className="text-muted d-block">{unit}</small>
                    <small>{title}</small>
                    <div className="d-flex mt-2 align-items-center justify-content-between">
                      <div>
                        <span className="mb-0 h4 me-1">${price}</span>
                        <del className="text-muted">${originalPrice}</del>
                      </div>
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
    </React.Fragment>
  );
};

export default DiscountedProducts;
