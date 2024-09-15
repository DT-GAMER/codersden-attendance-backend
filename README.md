# Coder's Den Attendance Management System

This project is created by Coder's den community Sub-group 12 team, it is a solution designed to solve the attendance loophole in the community. It aim to manage attendance for various coding classes, providing both students and tutors with an efficient platform to track and manage class schedules and attendance.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Development Workflow](#development-workflow)
5. [Testing](#testing)

## Project Overview

The Coder's Den Attendance Management System includes the following features:
- **Student and Tutor Authentication**: Secure sign-up and login processes.
- **Tutor Portal**: Manage classes, generate attendance codes, and view metrics.
- **Student Portal**: View and join classes, check attendance records, and view curriculum.
- **Web Push Notifications**: Notify students and tutors about class timings.

## Technologies Used

- **Backend Framework**: Express.js
- **Database**: MongoDB (in-memory for tests)
- **Testing**: Jest
- **Rate Limiting**: In-memory solution for brute-force protection
- **Documentation**: Swagger
- **Password Security**: Hashing, salts, and pepper

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- Node.js and npm installed
- MongoDB (if not using the in-memory server for tests)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/DT-GAMER/codersden-attendance-backend.git
    cd codersden-attendance-backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```plaintext
   NODE_ENV=development
   PORT=your_port
   MONGO_URI=mongodb://localhost:27017/coders-den-attendance
   JWT_SECRET=jedjewnjnwjnvwjn
   SALT_ROUNDS=10
   PEPPER=pepper_password
   RATE_LIMIT_WINDOW=900000
   RATE_LIMIT_MAX=100
   RATE_LIMIT_DELAY=1000

   EMAIL_HOST=smtp.mailtrap.io
   EMAIL_PORT=587
   EMAIL_USER=your_email_user
   EMAIL_PASS=your_email_pass

   LOG_LEVEL=info
    ```

4. **Run the application:**

    ```bash
    npm start
    ```

5. **Access the Swagger API Documentation:**

    Visit `http://localhost:3000/api-docs` to view the API documentation.

## Development Workflow

### Branching Strategy

- **Feature Branches**: Create a new branch for each module. Follow this naming convention: `feature/<module-name>`.

### Code Reviews

- **Pull Requests**: Create a pull request (PR) for every branch before merging into `starter`.
- **Review Process**: All PRs must be reviewed and approved.

## Testing

### Running Tests

1. **Run all tests:**

    ```bash
    npm test
    ```

2. **Run specific test files:**

    ```bash
    npm test <test-file>
    ```

### Test Configuration

- **Setup**: Tests are configured to use an in-memory MongoDB instance.
- **Coverage**: Test coverage is reported and available in the `coverage` directory.
