# Food Store

## Description
Food Store is a responsive web application that allows users to browse a variety of food items, add them to their cart, and place orders online. Built with the MERN stack, this project leverages MongoDB, Express.js, React.js, and Node.js to offer a seamless shopping experience.

# Demo
[Link to demo video](https://drive.google.com/file/d/1xLYGNRmkYu3feHFxaW6ZSHlPigx_mFPu/view?usp=sharing)

# Live link
    https://food-store-mern.vercel.app 

## Features

- **Home Page**: Displays all available food items which users can browse.
- **User Authentication**: Secure login and registration functionality.
- **Shopping Cart**: Users can add items to their cart, update quantities, or remove items.
- **Checkout Process**: Allows for the review of items in the cart and places an order.
- **Order History**: Users can view all their past orders in the 'My Orders' section.

## Technologies

- **MongoDB**: NoSQL database for storing user and product data.
- **Express.js**: Backend framework used to handle requests and responses.
- **React.js**: Frontend library used for building the user interface.
- **Node.js**: JavaScript runtime environment that executes JavaScript code server-side.
- **React Router**: Library to handle routing in React applications.

## Installation

To get the project running on your local machine, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/divyansh-2005/FoodStore_MERN.git
   cd FOODSTORE_MERN
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the backend directory and add the following:
   ```
   MONGO_URI=your_mongodb_uri
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application**
   - Start the backend server
     ```bash
     cd backend
     npm start
     ```
   - In a new terminal, start the frontend client
     ```bash
     cd frontend
     npm start
     ```

5. **Open the application**

   Visit `http://localhost:3000` in your browser to view the app.

## Usage

After launching the app, you can register a new user account or log in with existing credentials. Once logged in, you can start adding food items to your cart, modify your cart, or proceed to checkout. Your orders will be saved and can be viewed anytime under the 'My Orders' section.

## Contributing

Contributions are welcome! Feel free to open a pull request with your suggestions.
