import React, { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrders from "../ManageOrders/ManageOrders";
import ManageProducts from "../ManageProducts/ManageProducts";

import "./Admin.css";
const Admin = () => {
  const [key, setKey] = useState("manageOrders");
  return (
    <div className="adminDashboard">
      <Row>
        <Col>
          <Container>
            <Tabs
              className="justify-content-center align-items-center border-0 nav-pills"
              defaultActiveKey="manageOrders"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="manageOrders" title="Manage orders">
                <ManageOrders />
              </Tab>
              <Tab eventKey="manageProducts" title="Manage products">
                <ManageProducts />
              </Tab>
              <Tab eventKey="addProduct" title="Add a product">
                <AddProduct />
              </Tab>
              <Tab eventKey="makeAdmin" title="Make admin">
                <MakeAdmin />
              </Tab>
            </Tabs>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
