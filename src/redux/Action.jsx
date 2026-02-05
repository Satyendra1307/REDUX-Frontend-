import axios from "axios";

const Action = () => async (dispatch) => {
  try {
    const product = await axios.get(
      "https://employee-management-mern-backend-1.onrender.com/getProducts"
    );

    // assuming backend sends: { products: [...] }
    dispatch({
      type: "success",
      payload: product.data.products
    });

  } catch (error) {
    dispatch({
      type: "fail",
      payload: error.message
    });
  }
};

export default Action;
