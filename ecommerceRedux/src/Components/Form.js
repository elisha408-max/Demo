import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   Name:  Yup.string(),
//   Billing: "",
//   Delivery: "",
//   Telephone: "",
//   Date: "",
// });

const Form = () => {
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.Name) {
  //     errors.Name = "Required";
  //   }
  // };
  const formik = useFormik({
    initialValues: {
      Name: "",
      Billing: "",
      Delivery: "",
      Telephone: "",
      Date: "",
    },
    // validationSchema,
    onSubmit: (values, resetForm) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm(values);
    },
  });
  return (
    <>
      <div className="container"></div>
      <div className="Checkout" style={{ padding: "10px" }}>
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="headerFormPage bg-primary text-white">
              <h4 className=" ">Form Page</h4>
            </div>

            <div className="mt-4">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="Name"
                onChange={formik.handleChange}
                value={formik.values.Name}
              />
            </div>
            <div className="mt-4">
              <label for="billing" className="form-label">
                Billing Address
              </label>
              <input
                type="text"
                className="form-control"
                id="billing"
                name="Billing"
                onChange={formik.handleChange}
                value={formik.values.Billing}
              />
            </div>
            <div className="mt-4">
              <label for="delivery" className="form-label">
                Delivery Address
              </label>
              <input
                type="text"
                className="form-control"
                id="delivery"
                name="Delivery"
                onChange={formik.handleChange}
                value={formik.values.Delivery}
              />
            </div>
            <div className="mt-4">
              <label for="telephone" className="form-label">
                Telephone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="telephone"
                name="Telephone"
                onChange={formik.handleChange}
                value={formik.values.Telephone}
              />
            </div>
            <div className="mt-4">
              <label for="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="Date"
                onChange={formik.handleChange}
                value={formik.values.Date}
              />
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
