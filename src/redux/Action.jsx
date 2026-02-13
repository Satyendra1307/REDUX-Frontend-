import axios from "axios";

const Action = () => async (dispatch) => {
  try {
    const res = await axios.get(
            'https://reduxb.onrender.com/api/get'      
    );

    // ✅ normalize response
    const data =
      Array.isArray(res.data)
        ? res.data
        : Array.isArray(res.data?.products)
        ? res.data.products
        : [];

    dispatch({
      type: "success",
      payload: data
    });

  } catch (error) {
    dispatch({
      type: "fail",
      payload: error.response?.data?.message || error.message
    });
  }
};

export default Action;
