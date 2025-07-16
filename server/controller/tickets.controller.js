import * as ticketService from "../services/tickets.services.js";

export const addTickets = async (req, res) => {
  const { laptop_id, staff_id, issue_id, description, date_opened } = req.body;

  try {
    const newTickets = await ticketService.addTickets(
      laptop_id,
      staff_id,
      issue_id,
      description,
      date_opened
    );

    res.status(201).json(newTickets);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTickets = async (req, res) => {
  try {
    const tickets = await ticketService.getTickets();
    if (tickets.length == 0) {
      res.status(404).json({ message: "No tickets found" });
    }

    return res.status(200).json({ message: "Fetched tickets", data: tickets });
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const closeTicket = async (req, res) => {
  const { ticket_id, date_closed } = req.body;
  try {
    const success = await ticketService.closeTickets(ticket_id, date_closed);

    if (success) {
      res.status(201).json({ message: "Ticket closed successfully" });
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteTicket = async (req, res) => {
  const { ticket_id } = req.body;
  try {
    const success = await ticketService.deleteTickets(ticket_id);

    if (success) {
      res.status(200).json({ message: "Ticket deleted successfully" });
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
