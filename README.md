# Task Manager App

## Description
A simple full-stack Task Manager application that allows users to create, view, update, and delete tasks.  
This project demonstrates frontend-backend integration using REST APIs and focuses on clean structure and functionality.

---

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Flask (Python)  
- **API:** RESTful API  

---

## Setup Instructions

### 1. Backend Setup
```bash
cd backend
pip install flask flask-cors
python app.py

---
## Feature Section
- Add new tasks  
- View all tasks  
- Mark tasks as completed  
- Delete tasks  
- Filter tasks (All / Completed / Pending)
---

## Project Structure
task-manager-app/
│
├── backend/
│ └── app.py
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
└── README.md
---

## API Endpoints

| Method | Endpoint       | Description        |
|--------|--------------|--------------------|
| GET    | /tasks       | Get all tasks      |
| POST   | /tasks       | Create new task    |
| PATCH  | /tasks/:id   | Update task status |
| DELETE | /tasks/:id   | Delete task        |
