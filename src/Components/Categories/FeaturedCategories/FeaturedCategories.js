import React, { useEffect } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SingleFeaturedCategories from "../SingleFeaturedCategories/SingleFeaturedCategories";
import { fetchCategories } from "../../../redux/slices/filterProductSlice";
const FeaturedCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.productFilters.categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/categories")
  //     .then((res) => setCategories(res.data));
  // }, []);
  return (
    <div style={{ height: "100vh" }}>
      <SectionTitle
        title="Featured Categories"
        description="Choose your necessary products from this feature categories."
      />
      <Row>
        {categories?.map((category) => (
          <SingleFeaturedCategories key={category.parent} category={category} />
        ))}
      </Row>
    </div>
  );
};

export default FeaturedCategories;
