This module is what will be managing the creation, update, and scheduling of classes. It will also link with the attendance module to enable code generation for each class session.

Important Features:

    Class Management: Schedule classes, assign tutors, and update class details (date, time, and day).
    Curriculum: For classes like JavaScript, handle the distinction between Beginner and Intermediate levels.
    Link to Attendance: Coordinates with the attendance module for generating and managing attendance codes during classes.

Important Files:

    classService.js: Business logic for class creation, updating, and linking with the attendance system.
    classController.js: Exposes API endpoints for creating and updating classes.
    classModel.js: Defines the data model for class details, including tutors, schedules, and curriculum.

Important Functionality:

    Implement real-time scheduling notifications for students and tutors using web push notifications.