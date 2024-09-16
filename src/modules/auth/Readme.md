This module handles authentication and authorization for students and tutors.
Major Things In This Module:

    Sign-Up: Allows students and tutors to create accounts using their names and passwords.
    Login: Authenticates both users and issues tokens for session management.
    Password Security: Uses hashing, salts, and pepper to securely store passwords.

Important Files:

    authService.js: Contains the logic for authentication, including hashing, salts, and peppering of passwords.
    authController.js: Exposes the API for login and sign-up.
    authModel.js: Defines the user data model for students and tutors.


    Make sure to Implement rate limiting on login endpoints to prevent brute-force attacks, the rate limiter is in the middleware dir, so import correctly.