#   CareCompass — Medical Healthcare System

<div align="center">

![Status](https://img.shields.io/badge/status-completed-success)
![Grade](https://img.shields.io/badge/grade-A-brightgreen)
![Tech](https://img.shields.io/badge/stack-MERN-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

**A full-stack healthcare platform connecting patients with doctors through smart appointment booking.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [Screenshots](#-screenshots) • [Contact](#-contact)

</div>

---

## About The Project

**CareCompass** is a comprehensive Medical Healthcare System designed to simplify the process of finding doctors and booking appointments online. It eliminates the need for physical visits or phone calls by providing a seamless digital platform for patients, doctors, and administrators.

The system features a unique **"2 patients per doctor per time slot"** rule, ensuring efficient utilization of doctor's time while maintaining quality patient care.

###  Project Highlights

-  **Final Year Project** — Graded **A**
-  **Full-Stack Web Application** built from scratch
-  **Unique Logic** — 2 patients per slot rule
-  **Role-Based Dashboards** — Patient, Doctor, Admin
-  **Responsive Design** — Works on all devices

---

##  Features

###  For Patients
-  Register and login securely
-  Browse 20+ doctors across 10 specialties
-  Book appointments with real-time availability checks
-  Make online payments with card validation
-  View appointment history and status
-  Cancel appointments anytime
-  Access disease information and medicine guides

###  For Doctors
-  Secure doctor login
-  View today's, upcoming, and all appointments
-  Update appointment status (Pending → Confirmed → Completed → Cancelled)
-  Add medical notes for patients

###  For Administrators
-  View all appointments in the system
-  Confirm or cancel any appointment
-  View all registered users
-  View all payment transactions
-  View contact messages from users

###  Unique Features
- **2 Patients Per Slot Rule** — Maximum 2 patients can book the same doctor at the same time
- **Smart Date Validation** — Cannot book past dates or dates beyond 30 days
- **Time Slot Validation** — Passed time slots are automatically disabled
- **Smart Redirect** — Remembers user intent before login
- **Auto-fill Doctor** — Selected doctor carries over from doctors page

---

##  Tech Stack

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)

### Database
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white)

### Tools
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)

---

##  Project Structure
CareCompass/
│
├── frontend/
│ ├── index.html # Home page
│ ├── about.html # About page
│ ├── contact.html # Contact page
│ ├── doctors.html # Doctors listing (20 doctors)
│ ├── appointment.html # Appointment booking form
│ ├── payment.html # Payment page
│ ├── login.html # Login page
│ ├── signup.html # Signup page
│ ├── dashboard.html # Patient dashboard
│ ├── doctor-dashboard.html # Doctor dashboard
│ ├── admin.html # Admin panel
│ ├── style.css # Global styles
│ └── images/ # All images
│
├── backend/
│ ├── server.js # Main server file
│ ├── .env # Environment variables
│ ├── package.json
│ ├── models/
│ │ ├── User.js # User schema
│ │ ├── Appointment.js # Appointment schema
│ │ ├── Payment.js # Payment schema
│ │ └── Contact.js # Contact schema
│ └── routes/
│ ├── auth.js # Authentication routes
│ ├── appointments.js # Appointment routes
│ ├── payments.js # Payment routes
│ └── contact.js # Contact routes
│└── README.md

---

##  Installation

### Prerequisites
- **Node.js** (v14 or higher) — [Download](https://nodejs.org/)
- **MongoDB** (local or Atlas) — [Download](https://www.mongodb.com/try/download/community)
- **Git** — [Download](https://git-scm.com/)



Step 1: Clone the Repository

bash
git clone https://github.com/yourusername/CareCompass.git
cd CareCompass

Step 2: Install Backend Dependencies

cd backend
npm install

Step 3: Set Up Environment Variables

Create a .env file in the backend folder:
MONGO_URI=mongodb://localhost:27017/carecompass
PORT=5000


Step 4: Start MongoDB

net start MongoDB

Step 5: Run the Backend Server

node server.js

You should see:
starting server
MongoDB connected
Server running on port 5000


Step 6: Run the Frontend
Open any HTML file from the frontend folder in your browser.

OR use Live Server in VS Code for a better experience.


## Usage


### For Patients

1.Go to Signup page and create an account
2.Login with your credentials
3.Browse Doctors and click Book Appointment
4.Fill in the appointment form (name, phone, gender, age, date, time, symptoms)
5.Click Book Appointment
6.Proceed to Payment and enter card details
7.View your appointments on the Patient Dashboard

### For Doctors

1.Login with doctor credentials
2.View Today's, Upcoming, and All Appointments
3.Update appointment status from the dropdown
4.Add Medical Notes for patients

### For Admins

1.Login with admin credentials
2.View All Appointments in the system
3.Confirm or Cancel any appointment
4.View Contact Messages and Payments


## What I Learned

Full-Stack Development — Building both frontend and backend
Database Design — MongoDB schema design and relationships
Authentication — Session management with localStorage
API Development — RESTful API design with Express
Problem Solving — Handling race conditions, validations
UI/UX Design — Creating responsive, user-friendly interfaces
Project Management — Documentation, testing, and deployment



## Future Enhancements

□ Email and SMS notifications for appointment reminders
□ Video consultation (Telemedicine)
□ Mobile application (Android & iOS)
□ AI-powered doctor recommendation
□ Electronic prescription management
□ Multi-language support
□ AI chatbot for customer support
□ Analytics dashboard for admins



## Author
### Ayesha Ikram
 BS Computer Science — Government Graduate College for Women, Samundri
 Full-Stack Web Developer
 Email: ayeshaikram0533@gmail.com
 LinkedIn: www.linkedin.com/in/ayesha-ikram-586826424
 GitHub: ayeshaikram0533-ops





### Supervisor: Miss Farhat Naz
Department: Computer Science, Government Graduate College for Women, Samundri
Project Partner: Saleha Rasheed, Sobia Naz
Special Thanks: First of All to Allah Almighty who made me capable of achiving something like this.
                And to the Prophet Hazrat Muhammad (S.A.W) who is my role model.
                To my Parentswho always stood by my side and supported me to choose my desired field of Study.
                To my friends Noor Fatima, Areeba Ayub, Saleha Rasheed and Sobia Naz
                who supported me throughout this jpurney,
                who turend every stressed day into happiest moment.






##  If you like this project, please give it a star! ⭐
Made with ❤️ by Ayesha Ikram







