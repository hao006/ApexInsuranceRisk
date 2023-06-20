# APEX Insurance Risk API Assessment Application

This is an application that calculates the risk profile of a user based on their personal information. It determines the risk scores for different lines of insurance (life, disability, home & auto) and maps them to risk profiles such as "economic," "regular," or "responsible."

## Instructions to Run the Code

1. Clone the repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Install the dependencies by running the following command in the project's root directory:
4. Build the TypeScript code by running: npx tsc
5. Start the application by running: npm start
6. Swagger page will be in http://localhost:3000/api-docs/
The application will start on http://localhost:3000 by default.

## Main Technical Decisions

1. **Node.js and Express.js**: The application is built using Node.js and Express.js, which provide a lightweight and efficient server-side JavaScript environment.
2. **TypeScript**: TypeScript is used for strong typing and enhanced tooling support, enabling better code quality and maintainability.
3. **Modular Architecture**: The code is organized into separate modules for models and controllers, promoting modularity and separation of concerns.
4. **Swagger**: Swagger is utilized for API documentation, providing a clear and standardized way to describe the API endpoints and their payloads.

## Project Comments

- The application follows the provided requirements to calculate risk scores and map them to risk profiles based on the user's information.
- The code aims for simplicity, readability, and maintainability, following best practices and design principles.
- Automated tests have been developed to ensure the correctness of the risk calculation logic.
- The application utilizes the Express.js framework for routing and handling HTTP requests.
- Swagger documentation is available to describe the API endpoints and their expected payload structure.
