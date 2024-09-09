
# Rojagaar

Rojagaar is a job marketplace platform aimed at reducing unemployment by connecting job seekers with employers for low-skilled positions. The platform provides a simple and efficient way for labor recruiters to post jobs and directly hire workers who meet their criteria. Job seekers can apply for jobs, accept job invitations, and choose their preferred work locations.

## Features

#### Employee Functionality:
- Update and view personal profile.
- Manage ratings and feedback.
#### Labor Recruiter:
- Directly hire individuals meeting recruitment criteria.
- Post jobs with relevant information.
- Establish contact with job applicants.
- View and update job posts.
#### Jobseeker:
- View job invitations and accept or reject them.
- Apply for jobs of interest.
- Establish contact with the job poster.
- Select a preferred work location.
- Option to join teams for collaborative work.


## Technology Stack

**Frontend:** React Native (Android Application)

**Backend:** Spring Boot (Java Framework)

**Database:** MongoDB Atlas (Cloud Database)

**IDE:** IntelliJ IDEA, Visual Studio Code

**Deployment:** Spring Boot deployed on Render, MongoDB Atlas for cloud database management.




## Installation and Setup Guide

#### Prerequisites:
- Node.js (for React Native)
- Android Studio (for Android development)
- IntelliJ IDEA (for Spring Boot backend)
- VSCode (optional IDE for frontend)
- MongoDB Atlas account (for the database)
- Render account (for backend deployment)

#### Frontend (React Native)
Clone the repository and Install my-project with npm

```bash
  npm install
```
Set up Android Studio and make sure you have the correct SDK and Android Emulator set up.
```bash
  Run the app on Android:
  npx react-native run-android
```

#### Backend (Spring Boot)
- Clone the backend repository and Open the backend project in IntelliJ IDEA.
- Configure MongoDB Atlas
- Run the backend application locally:

#### MongoDB Atlas Setup
- Create a MongoDB cluster on MongoDB Atlas.
- Get the connection string and set it in the backend application.properties.
- Ensure proper user roles and IP whitelist settings are configured for access.