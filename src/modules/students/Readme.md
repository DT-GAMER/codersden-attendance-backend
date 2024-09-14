This module manages all functionalities for students ... sign-up, class participation, attendance tracking, and profile management.

Key Responsibilities:

    Sign-Up & Login: Allows students to create accounts using their full name and password, and to log in.
    Join Classes: Enables students to join scheduled classes using a Google Meet link and track attendance.
    View Curriculum: Displays the curriculum for the student based on their level (Beginner/Intermediate).
    Progress Tracking: Tracks attendance records to determine if a student can progress to the next level.

Key Files:

    studentService.js: Manages student-related business logic, including attendance tracking, joining classes, and viewing curriculum.
    studentController.js: Exposes APIs for student sign-up, login, joining classes, and viewing attendance.
    studentModel.js: Defines the student data model, including name, level, and attendance progress.

Features:

    Web Push Notifications: Students receive real-time push notifications to remind them of upcoming classes and attendance code submissions.
    Attendance System: Handles partial and full attendance, as well as time tracking for when students join a class.