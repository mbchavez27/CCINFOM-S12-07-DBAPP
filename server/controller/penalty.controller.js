import * as penaltyService from "../services/penalty.services.js";
import * as ticketService from "../services/tickets.services.js";

export const addPenalties = async (req, res) => {
  const {
    borrow_id,
    customer_id,
    laptop_id,
    staff_id,
    issue_id,
    description,
    date_opened,
  } = req.body;

  try {
    const newTickets = await ticketService.addTickets(
      laptop_id,
      staff_id,
      issue_id,
      description,
      date_opened
    );
    console.log(newTickets.borrow_id);
    const newPenalties = await penaltyService.addPenalties(
      borrow_id,
      customer_id,
      newTickets.ticket_id,
      date_opened
    );

    res.status(201).json(newPenalties);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deletePenalty = async (req, res) => {
  const { penalty_id } = req.body;
  try {
    const success = await penaltyService.deletePenalty(penalty_id);

    if (success)
      res.status(201).json({ message: "Penalty deleted successfully" });
    eles;
    res.status(404).json({ message: "Penalty not found" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const closePenalty = async (req, res) => {
  const { penalty_id, date_lifted } = req.body;

  try {
    const success = await penaltyService.closePenalty(date_lifted, penalty_id);

    if (success) {
      res.status(201).json({ message: "Penalty closed successfully" });
    } else {
      res.status(404).json({ message: "Penalty not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getPenalties = async (req, res) => {
  try {
    const penalties = await penaltyService.getPenalties();
    if (penalties.length == 0) {
      res.status(404).json({ message: "No penalties found" });
    }

    return res
      .status(200)
      .json({ messagee: "Fetched penalties", data: penalties });
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ error: "Internal servoer error" });
  }
};
