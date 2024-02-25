import nodemailer from "nodemailer";

const email = process.env.SMTP_EMAIL;
const pass = process.env.SMTP_PASS;

export const Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const MailOptions = {
  from: email,
  to: email,
};
