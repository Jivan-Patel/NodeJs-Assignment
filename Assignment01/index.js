const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());
const students = [
  {
    id: 1,
    name: "Aditya",
    branch: "CSE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 2,
    name: "Rohan",
    branch: "IT",
    semester: 4,
    cgpa: 7.8
  },
  {
    id: 3,
    name: "Sneha",
    branch: "ECE",
    semester: 6,
    cgpa: 8.9
  },
  {
    id: 4,
    name: "Karan",
    branch: "ME",
    semester: 8,
    cgpa: 7.2
  },
  {
    id: 5,
    name: "Priya",
    branch: "CSE",
    semester: 2,
    cgpa: 9.1
  },
  {
    id: 6,
    name: "Arjun",
    branch: "EE",
    semester: 4,
    cgpa: 7.5
  },
  {
    id: 7,
    name: "Meera",
    branch: "IT",
    semester: 6,
    cgpa: 8.0
  },
  {
    id: 8,
    name: "Vikram",
    branch: "Civil",
    semester: 8,
    cgpa: 6.9
  },
  {
    id: 9,
    name: "Ananya",
    branch: "CSE",
    semester: 4,
    cgpa: 9.3
  },
  {
    id: 10,
    name: "Rahul",
    branch: "ECE",
    semester: 2,
    cgpa: 7.7
  }
];

app.get("/", (req, res) => {
    res.send("Express server is running...");
});

app.get("/students", (req, res) => {
    res.status(200).json(students);
});
app.get("/students/topper", (req, res) => {
    let topper = students.reduce((max,student) => (max.cgpa < student.cgpa) ? student : max,students[0]);
    res.status(200).json(topper);
});
app.get("/students/average", (req, res) => {
    let avg = (students.reduce((sum,student) => sum + student.cgpa,0) / students.length).toFixed(2);
    res.status(200).json(avg);
});
app.get("/students/count", (req, res) => {
    res.status(200).json(students.length);
});
app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    let student = students.find(stu => stu.id === id);
    res.status(200).json(student);
});
app.get("/students/branch/:branchName", (req, res) => {
    const branchName = req.params.branchName.toLowerCase();
    let student = students.filter(stu => stu.branch.toLowerCase() == branchName);
    res.status(200).json(student);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});