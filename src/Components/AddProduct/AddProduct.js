import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Row, Alert, Spinner, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ImageUploader from "react-images-upload";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { register, handleSubmit } = useForm(); // initialize the hook
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    setLoading(true);
    if (!picture) {
      setError("Image is required");
      setLoading(false);
    } else {
      data.slug = data.title.toLowerCase().replace(/ /g, "-");
      data.image = picture;
      data.tag = [
        `${data?.parent.toLowerCase()}`,
        `${data?.children.toLowerCase()}`,
      ];
      axios
        .post("http://localhost:5000/products", data)
        .then(() => setLoading(false))
        .then(() => {
          Swal.fire(
            "Good job!",
            "Successfully added a new product!",
            "success"
          );
        });
    }
  };
  const [picture, setPicture] = useState("");
  const onDrop = (pictureFiles, pictureDataURLs) => {
    setPicture(pictureDataURLs);
  };
  return (
    <Container
      style={{ borderRadius: "35px" }}
      className="p-5 bg-white my-5 text-black"
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row xs={1} sm={1} md={2}>
          <div className="mx-auto">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Product Title</Form.Label>
              <Form.Control
                {...register("title")}
                required
                type="text"
                placeholder="Enter the product name as title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Parent Category</Form.Label>
              <Form.Control
                {...register("parent")}
                required
                type="text"
                placeholder="Enter the product parent category"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Child Categories</Form.Label>
              <Form.Control
                {...register("children")}
                required
                type="text"
                placeholder="Enter the product child categories separated by a space"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Product Type</Form.Label>
              <Form.Control
                {...register("type")}
                required
                type="text"
                placeholder="Which type of product is this?"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">
                Description For The Product
              </Form.Label>
              <Form.Control
                required
                {...register("description")}
                as="textarea"
                placeholder="Enter Short Description"
                rows={3}
              />
            </Form.Group>
          </div>
          <div className="mx-auto">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Price</Form.Label>
              <Form.Control
                required
                type="number"
                {...register("price")}
                placeholder="Enter Price"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Discount</Form.Label>
              <Form.Control
                required
                type="number"
                {...register("discount")}
                placeholder="Enter Discount for this product"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Original Price</Form.Label>
              <Form.Control
                required
                type="number"
                {...register("originalPrice")}
                placeholder="Enter Original Price"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Quantity</Form.Label>
              <Form.Control
                required
                type="number"
                {...register("quantity")}
                placeholder="Enter quantity of the product"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Unit</Form.Label>
              <Form.Control
                required
                type="text"
                {...register("unit")}
                placeholder="Enter unit of the product"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Product Image</Form.Label>
              <div>
                {picture ? (
                  <img className="w-25" src={picture ? picture : ""} alt="" />
                ) : error ? (
                  <Alert variant="danger">{error}</Alert>
                ) : (
                  ""
                )}
                <ImageUploader
                  withIcon
                  className="shadow w-100"
                  labelStyles={{ color: "black" }}
                  onChange={onDrop}
                  singleImage
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                />
              </div>
            </Form.Group>
            {loading ? (
              <Button className="ms-auto d-block my-5 w-50" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
              </Button>
            ) : (
              <Button className="ms-auto d-block my-5 w-50" type="submit">
                Add Product
              </Button>
            )}
          </div>
        </Row>
      </Form>
    </Container>
  );
};

export default AddProduct;
