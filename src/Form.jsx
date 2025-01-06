import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Stack } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const validationSchema = Yup.object({
    firstname: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters long"),
    lastname: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters long"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    zipcode: Yup.string()
      .required("Zip Code is required")
      .max(6, "Zip code must be 6 digits"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      zipcode: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form data submitted:", values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <FormControl variant="outlined" sx={{ width: "35ch", m: 1 }}>
          <InputLabel htmlFor="firstname">First Name</InputLabel>
          <OutlinedInput
            id="firstname"
            name="firstname"
            label="First Name"
            value={formik.values.firstname}
            onChange={formik.handleChange}
          />
          {formik.touched.firstname && formik.errors.firstname && (
            <div style={{ color: "red", fontSize: "12px" }}>
              {formik.errors.firstname}
            </div>
          )}
        </FormControl>

        <FormControl variant="outlined" sx={{ width: "35ch", m: 1 }}>
          <InputLabel htmlFor="lastname">Last Name</InputLabel>
          <OutlinedInput
            id="lastname"
            name="lastname"
            label="Last Name"
            value={formik.values.lastname}
            onChange={formik.handleChange}
          />
          {formik.touched.lastname && formik.errors.lastname && (
            <div style={{ color: "red", fontSize: "12px" }}>
              {formik.errors.lastname}
            </div>
          )}
        </FormControl>

        <FormControl variant="outlined" sx={{ width: "35ch", m: 1 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: "red", fontSize: "12px" }}>
              {formik.errors.email}
            </div>
          )}
        </FormControl>

        <FormControl variant="outlined" sx={{ width: "35ch", m: 1 }}>
          <InputLabel htmlFor="zipcode">Zip Code</InputLabel>
          <OutlinedInput
            id="zipcode"
            name="zipcode"
            label="Zip Code"
            type="text"
            value={formik.values.zipcode}
            onChange={formik.handleChange}
          />
          {formik.touched.zipcode && formik.errors.zipcode && (
            <div style={{ color: "red", fontSize: "12px" }}>
              {formik.errors.zipcode}
            </div>
          )}
        </FormControl>

        <FormControl variant="outlined" sx={{ width: "35ch", m: 1 }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: "red", fontSize: "12px" }}>
              {formik.errors.password}
            </div>
          )}
        </FormControl>
      </div>

      <Stack sx={{ alignItems: "center" }}>
        <Button variant="contained" size="medium" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
