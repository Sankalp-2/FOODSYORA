import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const CreateCategory = () => {
  return (
    <Layout title={"Create Category"}>
      <div className="container=fluid m-3 p-3">
        <div className="row">
            <div className="col-md-3">
                <AdminMenu />
            </div>
            <div className="col-md-9">
                <div className="card w-75 p-3">
                    <h3>Admin Name : </h3>
                    <h3>Admin Email : </h3>
                    <h3>Admin Contact : </h3>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateCategory