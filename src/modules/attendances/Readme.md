This module handles the entire attendance system for the Coder's Den Attendance Management System. The attendance system includes the generation, restriction, expiration of attendance codes, and tracking of student participation during classes.

Key Responsibilities:

    Code Generation: Based on class type, an attendance code is generated. Codes follow specific formats such as CXXXXW for "Code Wars",  BXXXXXE for JavaScript (Beginner), IXXXXXN for JavaScript (Intermediate) etc
    Restrictions: Students who join late (after half the class duration) cannot submit the attendance code.
    Expiration: Attendance codes will expire after a configurable period, typically 10 minutes after the end of the class.
    Tracking: The module tracks whether students join on time and marks partial or full attendance based on their participation.

Key Files:

    attendanceService.js: Contains logic for generating codes, checking restrictions, and handling expiration.
    attendanceController.js: Exposes API endpoints to manage attendance.
    attendanceModel.js: Defines the data model for attendance records, including the generated code, the student who submitted it, and whether the attendance was partial or full.

To Do:

    Add integration with web push notifications to alert students to submit their attendance code before the expiration time.