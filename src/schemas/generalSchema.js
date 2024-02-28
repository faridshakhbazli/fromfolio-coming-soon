// generalSchema.js
const Yup = require("yup");

const generalSchema = Yup.object().shape({
    email: Yup.string().required("Email is a required field")
});

module.exports = generalSchema;
