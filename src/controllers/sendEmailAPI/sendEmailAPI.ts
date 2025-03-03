import { Request, Response } from "express";
import nodemailer from "nodemailer";
import "../../config/dotenv";


export const send_email = async (req: Request, res: Response): Promise<any> => {
  const {
    category,
    "First Name": firstName,
    "Last Name": lastName,
    Address,
    "Contact Number": contactNumber,
    email,
    Message,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 5000,
    host: "",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `New ${category} from ${firstName} ${lastName}`,
    text: `
            Category: ${category}
            First Name: ${firstName}
            Last Name: ${lastName}
            Address: ${Address}
            Contact Number: ${contactNumber}
            Email: ${email}
            Message: ${Message}
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email", error });
  }
};
