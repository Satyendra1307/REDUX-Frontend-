import axios from "axios";

const Action = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://employee-management-mern-backend-1.onrender.com/getProducts"
    );

    const data = Array.isArray(res.data)
      ? res.data
      : Array.isArray(res.data.products)
      ? res.data.products
      : [];

    dispatch({
      type: "success",
      payload: data
    });

  } catch (error) {
    dispatch({
      type: "fail",
      payload: error.message
    });
  }
};

export default Action;
