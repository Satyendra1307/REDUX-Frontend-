import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminProductPanel.css";

const AdminProductPanel = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    rating: "",
    review: "",
    desc: "",
    img: "",
    category: "",
    subcategory: "",
  });
  const [editId, setEditId] = useState(null);

  
  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:9000/getProducts");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:9000/updateProduct/${editId}`, form);
        alert(" Product Updated");
      } else {
        await axios.post("http://localhost:9000/addProduct", form);
        alert(" Product Added");
      }
      setForm({
        name: "",
        price: "",
        rating: "",
        review: "",
        desc: "",
        img: "",
        category: "",
        subcategory: "",
      });
      setEditId(null);
      getProducts();
    } catch (err) {
      console.error(err);
    }
  };

  
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await axios.delete(`http://localhost:9000/deleteProduct/${id}`);
      alert("🗑️ Product Deleted");
      getProducts();
    }
  };

  
  const handleEdit = (product) => {
    setForm(product);
    setEditId(product._id);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🛍️ Admin Product Panel</h2>

      {/* --- Form Section --- */}
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm mb-5">
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              value={form.rating}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="review"
              placeholder="Review Count"
              value={form.review}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="img"
              placeholder="Image URL or path"
              value={form.img}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="category"
              placeholder="Category (e.g. Men)"
              value={form.category}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="subcategory"
              placeholder="Subcategory (e.g. Shirts)"
              value={form.subcategory}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-12">
            <textarea
              name="desc"
              placeholder="Description"
              value={form.desc}
              onChange={handleChange}
              className="form-control"
            ></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary mt-3 px-5">
              {editId ? "Update Product" : "Add Product"}
            </button>
          </div>
        </div>
      </form>

   
      <h4 className="mb-3"> Product List</h4>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Review</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img
                      src={item.img}
                      alt={item.name}
                      width="60"
                      height="60"
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.subcategory}</td>
                  <td>₹{item.price}</td>
                  <td>{item.rating}</td>
                  <td>{item.review}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(item)}
                      className="btn btn-sm btn-warning me-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-3">
                  No Products Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductPanel;
