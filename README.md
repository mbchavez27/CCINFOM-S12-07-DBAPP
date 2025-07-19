# CCINFOM-S12-07-DBAPP - Laptop Borrowing System

This is a database-driven web application designed to manage the borrowing and returning of laptops, monitor penalties, and generate insightful reports. It was developed for the CCINFOM course at De La Salle University.

## Features

- **Laptop Management:** Add, edit, and delete laptop records with condition tracking.
- **Customer Management:** Manage customer information including colleges and contact details.
- **Borrowing System:** Record laptop borrowing and return transactions.
- **Ticketing System:** Raise and resolve issue tickets related to laptops.
- **Penalty Tracking:** Automatically record penalties for overdue returns.
- **Reports & Analytics:**
  - Monthly borrow statistics
  - Average borrowing durations per college
  - Most common issues per month
  - Penalty heatmaps

## Tech Stack

- **Frontend:** React + TailwindCSS + Shadcn UI
- **Backend:** Node.js + Express
- **Database:** MySQL
- **ORM/Querying:** Raw SQL via MySQL2
- **Deployment:** Local development

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/mbchavez27/CCINFOM-S12-07-DBAPP.git
cd CCINFOM-S12-07-DBAPP
```

2. Install dependencies

```bash
npm install
```

3. Set up the database

- Create a MySQL database named laptop_borrowing1
- Import the SQL schema (schema.sql or equivalent if available)
- Configure the .env file:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASS=your_mysql_password
DB_NAME=laptop_borrowing
```

4. Run the development server

```bash
npm run dev
```

## 👨‍💻 Authors

- **Max Benedict Chavez**
- **Alec Nono**
- **Paul Placer**
- **Gian Sy**

## 📜 License

This project is licensed for academic purposes under **DLSU CCINFOM**.
