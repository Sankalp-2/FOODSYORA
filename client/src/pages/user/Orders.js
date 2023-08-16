import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";

const Orders = () => {
  return (
    <Layout title={"Your Orders"}>
      <div className="container=fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>Product Name : </h3>
              <h3>Product Description : </h3>
              <h3>Product Price : </h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
