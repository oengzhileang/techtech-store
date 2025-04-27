<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br/>
<div align="center">
    <a href="/">
        <img src="https://github.com/easycode002/data-catalog/blob/main/apps/dashboard-app/public/data-catalog-logo.png" atl="Logo" width="80" heigt="80">
    </a>
    <h1 align="center">TechTech Store</h1>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project davi

TechTech Store is an e-commerce platform designed for selling computers (desktops, laptops) and accessories (mice, keyboards, etc.). The platform features a user-friendly storefront for customers to browse and purchase products and a robust admin dashboard for managing inventory, orders, and product listings. Built with a modern tech stack, it ensures scalability, performance, and a seamless user experience. TechTrend Innovations!

## Our vision

To empower tech enthusiasts and professionals by providing a reliable, user-centric platform for purchasing high-quality computers and accessories, backed by efficient inventory management and exceptional customer service.

## Our mission

To simplify the online shopping experience for tech products by offering a seamless, secure, and scalable e-commerce solution, enabling customers to find the perfect devices and accessories while streamlining business operations for administrators.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## UI design

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section we lists all library and framework that make this project

- [![Static Badge](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
- [![Static Badge](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
- [![Static Badge](https://img.shields.io/badge/Node.js-499442?style=for-the-badge&logo=node.js&logoColor=fff&color=499442)](https://nodejs.org/en)
- [![Static Badge](https://img.shields.io/badge/Tyscript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff&color=3178C6)](https://www.typescriptlang.org/)
- [![Static Badge](https://img.shields.io/badge/Express.js-000?style=for-the-badge&logo=express&logoColor=fff&color=000)](https://expressjs.com/)
- [![Static Badge](https://img.shields.io/badge/Mongodb-%23023430?style=for-the-badge&logo=mongodb&logoColor=fff&color=%23023430)](https://www.mongodb.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Project Structure

The project follows a modular architecture for maintainability and scalability. Below is an overview of the directory structure:

```sh
.
├── apps
│   ├── backend
│   │   ├── auth-service
│   │   │   ├── build-script.js
│   │   │   ├── Dockerfile.dev
│   │   │   ├── Dockerfile.local
│   │   │   ├── ecosystem.config.js
│   │   │   ├── ecosystem.local.config.js
│   │   │   ├── nodemon.json
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── app.ts
│   │   │   │   ├── configs
│   │   │   │   ├── config.ts
│   │   │   │   ├── controllers
│   │   │   │   │   └── product.controller.ts
│   │   │   │   ├── docs
│   │   │   │   │   └── swagger.json
│   │   │   │   ├── routes
│   │   │   │   │   └── v1
│   │   │   │   │       └── routes.ts
│   │   │   │   └── server.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsoa.json
│   │   ├── docker-compose.dev.yml
│   │   └── docker-compose.local.yml
│   ├── client-app
│   │   ├── app
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── next.config.mjs
│   │   ├── next-env.d.ts
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   ├── README.md
│   │   ├── tailwind.config.ts
│   │   └── tsconfig.json
│   └── dashboard-app
│       ├── eslint.config.js
│       ├── index.html
│       ├── package.json
│       ├── postcss.config.js
│       ├── public
│       │   ├── data-catalog-logo.png
│       │   └── vite.svg
│       ├── README.md
│       ├── src
│       │   ├── App.tsx
│       │   ├── index.css
│       │   ├── main.tsx
│       │   └── vite-env.d.ts
│       ├── tailwind.config.js
│       ├── tsconfig.app.json
│       ├── tsconfig.json
│       ├── tsconfig.node.json
│       └── vite.config.ts
├── packages
│   ├── libs
│   │   ├── babel.config.json
│   │   ├── note.txt
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── scripts
│   │   │   ├── babel-preset.js
│   │   │   └── build-package.js
│   │   ├── src
│   │   │   ├── constants
│   │   │   │   ├── app-error-message.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── status-code.ts
│   │   │   ├── index.ts
│   │   │   ├── types
│   │   │   │   ├── auth.interface.ts
│   │   │   │   ├── common.interface.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── user.interface.ts
│   │   │   └── utils
│   │   │       ├── errors.ts
│   │   │       ├── index.ts
│   │   │       └── logger.ts
│   │   ├── tsconfig.json
│   │   └── yarn.lock
│   └── ui-components
│       ├── eslint.config.js
│       ├── index.html
│       ├── index.ts
│       ├── package.json
│       ├── postcss.config.js
│       ├── public
│       │   └── vite.svg
│       ├── README.md
│       ├── src
│       │   ├── App.tsx
│       │   ├── components
│       │   │   ├── atoms
│       │   │   │   ├── Button.tsx
│       │   │   │   └── Input.tsx
│       │   │   ├── molecules
│       │   │   ├── organisms
│       │   │   ├── pages
│       │   │   └── templates
│       │   ├── index.css
│       │   ├── main.tsx
│       │   └── vite-env.d.ts
│       ├── tailwind.config.js
│       ├── tsconfig.app.json
│       ├── tsconfig.json
│       ├── tsconfig.node.json
│       ├── vite.config.ts
│       ├── webpack.config.js
│       └── webpack.config.ui.js
├── scripts
│   ├── data-catalog.pem
│   └── setup-environment.sh
├── README.md
├── package.json
└── yarn.lock
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To run the project, ensure you have the following installed on your system:

Then, follow these steps:
Backend

Clone the Repository:
git clone https://github.com/yourusername/techtech-store.git

Navigate to the Project Directory:
cd techtech-store

Install Dependencies:
npm install

Set Up Environment Variables:Create a .env file in the root directory and add:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000

Start the Project:
npm run start:dev

The backend server will run on http://localhost:3000.

Frontend
(Note: Frontend setup instructions depend on the chosen framework. Update this section once the frontend stack is specified.)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

API Endpoints
Products

GET /products: Retrieve all products.
POST /products: Create a new product (admin only).
PUT /products/:id: Update a product (admin only).
DELETE /products/:id: Delete a product (admin only).

Users

POST /auth/register: Register a new user.
POST /auth/login: Log in and receive a JWT token.
GET /users/me: Get authenticated user details.

Orders

POST /orders: Create a new order.
GET /orders: Retrieve all orders (admin only).
GET /orders/me: Retrieve user-specific orders.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Contributing

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Project Link: https://github.com/yourusername/techtech-store.git

<p align="right">(<a href="#readme-top">back to top</a>)</p>
