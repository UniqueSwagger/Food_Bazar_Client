import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data));
  }, [products?.length]);
  //confirming deletion
  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure to delete it?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Removed!",
          "Successfully removed the watch from collection",
          "success"
        );
        axios.delete(`http://localhost:5000/products/${id}`).then((res) => {
          if (res.data.deletedCount) {
            const remaining = products.filter((watch) => watch._id !== id);
            setProducts(remaining);
          }
        });
      }
    });
  };
  return (
    <div>
      {products ? (
        <Container className="text-black my-5 pb-5">
          <Row xs={1} md={2} lg={3} className="g-4 mb-5 ">
            {products?.map((product) => {
              const { title, image, price, parent, _id } = product;
              return (
                <Col key={_id}>
                  <Card className="border-0 h-100 text-center shadow ">
                    <div>
                      <Card.Img
                        className="img-fluid w-50"
                        loading="lazy"
                        src={image}
                        loading="lazy"
                        alt={title}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>
                        <h6 className="fw-bold">{title}</h6>
                      </Card.Title>
                      <p className="fw-bold">Category : {parent}</p>
                      <h5 className="mt-auto text-success">${price}</h5>
                      <Button
                        onClick={() => handleRemove(_id)}
                        className="shadow-none mx-auto my-3"
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
