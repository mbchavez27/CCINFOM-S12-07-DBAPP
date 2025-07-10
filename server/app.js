import express from "express";
import cors from "cors";
import customerRouter from "./routes/customer.routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/customer", customerRouter);

app.get("/", (req, res) => {
  res.send("Laptop borrowing App");
});

app.listen(port, () => {
  console.log("Laptop Borrowing App running at port " + port);
});
