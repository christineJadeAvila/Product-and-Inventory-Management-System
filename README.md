# React + TypeScript + Vite

# Product and Inventory Management System

A full-featured product and inventory management system built using **Node.js**, **Express**, **PostgreSQL**, and **React.js**. Designed to streamline the process of managing products, suppliers, categories, warehouses, and purchases — this system is ideal for small to medium-sized businesses looking for an efficient way to manage stock and inventory.

---

## Screenshots
![Screenshot 2025-05-18 230837](https://github.com/user-attachments/assets/3740f5b4-b2d1-4ba4-adf3-40dadaa161a3)
---

## Features

**Authentication & Role-Based Access**  
- Admin and cashier roles with secure login  
- Dashboard access based on user role  

**Product Management**  
- Add, edit, delete, and search products  
- Stock quantity tracking  
- Category and warehouse tagging  

**Inventory Tracking**  
- Purchase order tracking  
- Supplier management (e.g., poultry, condiments, etc.)  
- Warehouse storage overview  

**Supplier & Warehouse Management**  
- Add and update supplier details  
- Assign purchases to suppliers and warehouses  

**Payment Method Handling**  
- Supports cash and GCash payment options  
- Payment details stored securely in the database  

**Responsive UI**  
- Clean and intuitive interface built with React.js  
- Styled using SCSS for flexibility and maintainability  

---

## Tech Stack

**Frontend**  
- React.js  
- SCSS  
- Axios  

**Backend**  
- Node.js  
- Express.js  

**Database**  
- PostgreSQL  

**Other Tools**  
- pgAdmin  
- Sequelize ORM  
- Multer (for file handling)  

---


---

## How to Run Locally

> Make sure you have Node.js, PostgreSQL, and npm installed.

```bash
# 1. Clone the repository
git clone https://github.com/christineJadeAvila/Product-and-Inventory-Management-System.git
cd Product-and-Inventory-Management-System

# 2. Install backend dependencies
cd server
npm install

# 3. Set up PostgreSQL database
# - Create a database and configure your credentials in `/server/config/db.js` or `.env`

# 4. Run the backend server
npm start

# 5. Open a new terminal and run the frontend
cd ../client
npm install
npm start

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
