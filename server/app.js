import express from "express";
import cors from "cors";
import customerRouter from "./routes/customer.routes.js";
import collegeRouter from "./routes/college.routes.js";
import staffRouter from "./routes/staff.routes.js";
import laptopRouter from "./routes/laptops.routes.js";
import borrowRouter from "./routes/borrow.routes.js";
import issueRouter from "./routes/issues.routes.js";
import ticketRouter from "./routes/tickets.routes.js";
import penaltyRouter from "./routes/penalty.route.js";
import analtyicRouter from "./routes/analytics.routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/customers", customerRouter);
app.use("/colleges", collegeRouter);
app.use("/staff", staffRouter);
app.use("/laptops", laptopRouter);
app.use("/borrow-record", borrowRouter);
app.use("/issues", issueRouter);
app.use("/tickets", ticketRouter);
app.use("/penalty", penaltyRouter);
app.use("/analytic", analtyicRouter);

app.listen(port, () => {
  console.log("Laptop Borrowing App running at port " + port);
});
