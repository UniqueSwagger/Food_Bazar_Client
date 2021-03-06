import React, { useEffect } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SingleFeaturedCategories from "../SingleFeaturedCategories/SingleFeaturedCategories";
import { fetchCategories } from "../../../redux/slices/filterProductSlice";
import Loader from "../../Loader/Loader";
const FeaturedCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.productFilters.categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <React.Fragment>
      {categories?.length ? (
        <div className="mb-5 pb-5">
          <SectionTitle
            title="Featured Categories"
            description="Choose your necessary products from this feature categories."
          />
          <Row>
            {categories?.map((category) => (
              <SingleFeaturedCategories
                key={category.parent}
                category={category}
              />
            ))}
          </Row>
        </div>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};

export default FeaturedCategories;
