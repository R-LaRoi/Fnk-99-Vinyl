# FNK 99 RECORDS

FNK 99 is a full-stack e-commerce application that simulates an online record store. It allows users to browse artists and purchase vinyl records. The application is built using the MERN stack (MongoDB, Express, React, and Node.js) to provide a seamless and responsive user experience.

## Overview

This application offers a comprehensive online vinyl shopping experience, featuring artist profiles, a product catalog, shopping cart functionality, and secure checkout process. It leverages modern web technologies to create an engaging and user-friendly interface for vinyl enthusiasts.

## Features

- **User Authentication**: Secure login and registration using Auth0.
- **Product Catalog**: Browse and search functionality for vinyl records.
- **Artist Profiles**: Dedicated pages with artist details and their discography.
- **Shopping Cart**: Add and manage items in the cart.
- **Checkout Process**: Secure checkout for authenticated users.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

### Frontend:
- **React**: For building the user interface.
- **React Router**: For client-side routing.
- **Axios**: For making API requests.
- **TailwindCSS**: For styling and layout.
- **Auth0**: For user authentication.

### Backend:
- **Node.js**: Server-side logic.
- **Express.js**: RESTful API framework.
- **MongoDB**: NoSQL database for storing data.
- **RESTful API**: Architecture for data exchange.

### Key Components

- `App.js`: Main component handling routing and data fetching.
- `Nav.js`: Navigation component.
- `Cart.js`: Shopping cart functionality.
- `Shop.js`: Displays product catalog.
- `ArtistProfiles.js`: Shows artist information.
- `Checkout.js`: Handles the checkout process.

## API Integration

The application interacts with two main API endpoints:
1. `https://fnk-99-vinyl-server.onrender.com/api` for product data.
2. `https://fnk-99-vinyl-server.onrender.com/api/artist-profiles` for artist profile data.

Data is fetched using Axios and managed using React's useState and useEffect hooks.

## Routing

React Router is used for navigation, with protected routes for authenticated users.

## Screenshots

![App Screenshot](https://github.com/user-attachments/assets/91a536cd-37e8-48d0-a9d8-497635c45404)


