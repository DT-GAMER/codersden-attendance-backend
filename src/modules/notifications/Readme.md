This module will handle all notifications sent to students and tutors. Notifications include reminders for upcoming classes and alerts about attendance code submission deadlines.
Key Responsibilities:

    Web Push Notifications: Uses Web Push API to send real-time notifications to students and tutors, reminding them of upcoming classes and when they need to submit their attendance codes.
    Notification Scheduling: Sends notifications at predefined times before class starts and during the class for code submissions.

Key Files:

    notificationService.js: Responsible for creating and sending push notifications.
    notificationController.js: Provides endpoints to schedule notifications for classes.
    notificationModel.js: Stores notification preferences for students and tutors (e.g., opt-in/opt-out, preferred notification times).

Web Push Notifications Setup:

    You will be making use of VAPID keys for securing push notifications.
    Customize notification messages based on class type (e.g., reminders for JavaScript Weekend Classes or Advanced Master Class).