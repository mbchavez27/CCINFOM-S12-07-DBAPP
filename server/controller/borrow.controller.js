import * as borrowService from "../services/borrow.services.js";
import { getRandomStaff } from "../services/staff.services.js";

export const borrowLaptop = async (req, res) => {
  const { laptop_id, customer_id, pickup_date } = req.body;
  try {
    const borrow_status = await borrowService.checkBorrowingStatus(customer_id);
    if (borrow_status.length == 0) {
      const staff_id = await getRandomStaff();

      if (!staff_id) {
        res.status(404).json({ message: "No staff found" });
      } else {
        const borrow_record = await borrowService.borrowLaptop(
          laptop_id,
          staff_id.staff_id,
          customer_id,
          pickup_date
        );

        res
          .status(201)
          .json({ message: "Borrowed Laptop", data: borrow_record });
      }
    } else {
      res.status(400).json({ error: "Customer is already borrowing" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const returnLaptop = async (req, res) => {
  const { return_date, borrow_id } = req.body;
  try {
    const success = await borrowService.returnLaptop(borrow_id, return_date);

    if (success) {
      res.status(201).json({ message: "Laptop returned successfully" });
    } else {
      res.status(404).json({ message: "Laptop not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getBorrowedLaptops = async (req, res) => {
  const borrow_id = req.query.borrow_id;

  try {
    if (borrow_id) {
      const BorrowedLaptop = await borrowService.getBorrowedLaptopByID(
        borrow_id
      );

      if (!BorrowedLaptop) {
        return res.status(404).json({ message: "No status found" });
      }

      return res
        .status(200)
        .json({ message: "Fetched status", data: BorrowedLaptop });
    }

    const BorrowedLaptops = await borrowService.getBorrowedLaptops();

    if (!BorrowedLaptops || BorrowedLaptops.length === 0) {
      return res.status(404).json({ message: "No statuses found" });
    }

    return res
      .status(200)
      .json({ message: "Fetched statuses", data: BorrowedLaptops });
  } catch (error) {
    console.error("Error fetching borrowed laptops:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getCurrentlyBorrowedLaptops = async (req, res) => {
  try {
    const currentlyBorrowedLaptops =
      await borrowService.getCurrentlyBorrowedLaptops();

    if (currentlyBorrowedLaptops.length == 0) {
      res.status(404).json({ message: "No status found" });
    }

    res
      .status(200)
      .json({ message: "Fetched Status", data: currentlyBorrowedLaptops });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
