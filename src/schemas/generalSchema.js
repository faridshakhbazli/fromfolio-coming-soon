import * as Yup from "yup";

export const generalSchema = Yup.object().shape({
    email: Yup.string().required("Email is a required field"),
});
