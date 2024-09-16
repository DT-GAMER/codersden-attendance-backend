This module handles the functionalities related to tutors, including class creation, code generation, and viewing attendance metrics.

Key Responsibilities:

    Sign-Up & Login: Allows tutors to create accounts and log in using their name and password.
    Class Management: Tutors can create, update, and manage classes, including generating attendance codes for classes.
    Attendance Management: Tutors can view attendance records for the classes they manage and monitor student participation.
    Attendance Metrics: Tutors can view detailed metrics on student attendance, such as monthly, quarterly, and yearly reports.

Key Files:

    tutorService.js: Handles tutor-specific functionalities, including class management, code generation, and attendance tracking.
    tutorController.js: Exposes APIs for tutor sign-up, login, class creation, and attendance code generation.
    tutorModel.js: Defines the tutor data model, including name and classes managed.
    
NOte:

    This will also be having web Push Notifications. So, add functionality for tutors to receive push notifications about upcoming classes and attendance summaries.