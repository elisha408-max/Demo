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

            <div class="mt-4">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="Name"
                onChange={formik.handleChange}
                value={formik.values.Name}
              />
            </div>
            <div class="mt-4">
              <label for="billing" class="form-label">
                Billing Address
              </label>
              <input
                type="text"
                class="form-control"
                id="billing"
                name="Billing"
                onChange={formik.handleChange}
                value={formik.values.Billing}
              />
            </div>
            <div class="mt-4">
              <label for="delivery" class="form-label">
                Delivery Address
              </label>
              <input
                type="text"
                class="form-control"
                id="delivery"
                name="Delivery"
                onChange={formik.handleChange}
                value={formik.values.Delivery}
              />
            </div>
            <div class="mt-4">
              <label for="telephone" class="form-label">
                Telephone Number
              </label>
              <input
                type="number"
                class="form-control"
                id="telephone"
                name="Telephone"
                onChange={formik.handleChange}
                value={formik.values.Telephone}
              />
            </div>
            <div class="mt-4">
              <label for="date" class="form-label">
                Date
              </label>
              <input
                type="date"
                class="form-control"
                id="date"
                name="Date"
                onChange={formik.handleChange}
                value={formik.values.Date}
              />
            </div>

            <button type="submit" class="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
