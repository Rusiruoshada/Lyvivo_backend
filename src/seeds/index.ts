import mongoose from "mongoose";
import Product from '../mongoDB/models/product';
import productsSeedData from "./productsSeedData";

const { connect, disconnect } = mongoose;

const URL = process.env.MONGODB_URL as string;

connect(URL)
    .then(() => {
        console.log('Successfully seeds data');
    })
    .catch((error) => {
        console.log('Connecting error with seeding', error)
    })

const seedDB = async () => {

  try {
    await Product.deleteMany({});
    await Product.insertMany(productsSeedData);
    console.log('seed data inserted successfully');
  } catch (error) {
    console.log('error seed data insert ' + error);
  } finally {
    disconnect();
  }
};

seedDB();
