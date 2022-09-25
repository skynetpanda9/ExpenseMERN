import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 5000;

const app = express();

app.use(cors);

await mongoose.connect(
  "mongodb+srv://skynet:skynetpanda9@cluster0.zui1eft.mongodb.net/?retryWrites=true&w=majority"
);
console.log("DB successfully connected 👍");

app.get("/", (req, res) => {
  res.send("Hello Akash");
});

app.listen(PORT, () => {
  console.log(`Server is running at 🚀 http://localhost:${PORT}`);
});
