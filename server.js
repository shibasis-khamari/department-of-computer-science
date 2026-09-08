const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Student = require('./models/Student');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/aura_department';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// MongoDB Connection State
let isMongoConnected = false;

// Seed Data definition
const initialStudents = [
  {
    rollNo: "25MCA00PY0058",
    password: "student123",
    name: "Shibasis Khamari",
    email: "25mca00py0058@pondiuni.ac.in",
    phone: "+91 7749030298",
    department: "Computer Science",
    degree: "MCA",
    semester: "3rd Semester",
    academicYear: "2025 - 2027",
    cgpa: "8.88 / 10.00",
    cgpaScore: 8.88,
    totalCredits: 150,
    attendancePct: 90,
    feeStatus: "Paid (Full Clearance)",
    avatar: "./images/shibu.jpg",
    advisor: "Dr. Robert Vance (HOD, AI Lab)",
    dob: "20 Jan 2004",
    bloodGroup: "A+",
    emergencyContact: "Sunil Kishore Khamari (Father) - +91 9437130298",
    courses: [
      { code: "CS301", title: "Advanced Data Structures & Algorithms", instructor: "Dr. Robert Vance", credits: 4, grade: "A+", marks: 95, status: "Completed" },
      { code: "CS305", title: "Web Application Architecture & Security", instructor: "Prof. Sarah Jenkins", credits: 4, grade: "A", marks: 91, status: "Ongoing" },
      { code: "CS308", title: "Artificial Intelligence & Neural Networks", instructor: "Dr. Alan Turing", credits: 3, grade: "A+", marks: 97, status: "Ongoing" },
      { code: "CS310", title: "Distributed Database Systems", instructor: "Prof. Michael Chang", credits: 4, grade: "A", marks: 88, status: "Ongoing" },
      { code: "CS312", title: "Computer Networks & Cloud Protocols", instructor: "Dr. Elena Rostova", credits: 3, grade: "A", marks: 92, status: "Ongoing" }
    ],
    attendanceBreakdown: [
      { code: "CS301", title: "Advanced Data Structures", attended: 36, total: 38, pct: 94 },
      { code: "CS305", title: "Web App Architecture", attended: 34, total: 38, pct: 90 },
      { code: "CS308", title: "Artificial Intelligence", attended: 37, total: 38, pct: 97 },
      { code: "CS310", title: "Database Systems", attended: 33, total: 38, pct: 88 },
      { code: "CS312", title: "Computer Networks", attended: 35, total: 38, pct: 92 }
    ],
    timetable: [
      { time: "09:00 AM - 10:30 AM", mon: "CS301 (Lab 3)", tue: "CS305 (Hall B)", wed: "CS308 (Seminar A)", thu: "CS301 (Lab 3)", fri: "CS312 (Room 402)" },
      { time: "10:45 AM - 12:15 PM", mon: "CS308 (Room 201)", tue: "CS310 (Room 105)", wed: "CS305 (Lab 1)", thu: "CS312 (Room 402)", fri: "CS310 (Room 105)" },
      { time: "01:30 PM - 03:00 PM", mon: "Self Study", tue: "CS312 (Lab 2)", wed: "Project Mentorship", thu: "CS308 (Room 201)", fri: "Department Seminar" }
    ]
  },
  {
    rollNo: "CS202402",
    password: "student123",
    name: "Sophia Chen",
    email: "sophia.chen@pondiuni.ac.in",
    phone: "+1 (555) 345-6789",
    department: "Computer Science",
    degree: "MCA",
    semester: "6th Semester",
    academicYear: "2023 - 2027",
    cgpa: "3.95 / 4.00",
    cgpaScore: 3.95,
    totalCredits: 114,
    attendancePct: 96,
    feeStatus: "Paid (Scholarship Recipient)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    advisor: "Dr. Elena Rostova (Data Ethics Chair)",
    dob: "22 Mar 2003",
    bloodGroup: "A+",
    emergencyContact: "David Chen (Father) - +1 (555) 876-5432",
    courses: [
      { code: "CS301", title: "Advanced Data Structures & Algorithms", instructor: "Dr. Robert Vance", credits: 4, grade: "A+", marks: 98, status: "Completed" },
      { code: "CS305", title: "Web Application Architecture & Security", instructor: "Prof. Sarah Jenkins", credits: 4, grade: "A+", marks: 96, status: "Ongoing" },
      { code: "CS308", title: "Artificial Intelligence & Neural Networks", instructor: "Dr. Alan Turing", credits: 3, grade: "A+", marks: 99, status: "Ongoing" },
      { code: "CS310", title: "Distributed Database Systems", instructor: "Prof. Michael Chang", credits: 4, grade: "A", marks: 94, status: "Ongoing" }
    ],
    attendanceBreakdown: [
      { code: "CS301", title: "Advanced Data Structures", attended: 38, total: 38, pct: 100 },
      { code: "CS305", title: "Web App Architecture", attended: 36, total: 38, pct: 95 },
      { code: "CS308", title: "Artificial Intelligence", attended: 37, total: 38, pct: 97 },
      { code: "CS310", title: "Database Systems", attended: 35, total: 38, pct: 92 }
    ],
    timetable: [
      { time: "09:00 AM - 10:30 AM", mon: "CS301 (Lab 3)", tue: "CS305 (Hall B)", wed: "CS308 (Seminar A)", thu: "CS301 (Lab 3)", fri: "CS312 (Room 402)" },
      { time: "10:45 AM - 12:15 PM", mon: "CS308 (Room 201)", tue: "CS310 (Room 105)", wed: "CS305 (Lab 1)", thu: "CS312 (Room 402)", fri: "CS310 (Room 105)" }
    ]
  },
  {
    rollNo: "CS202403",
    password: "student123",
    name: "Marcus Vance",
    email: "marcus.vance@pondiuni.ac.in",
    phone: "+1 (555) 456-7890",
    department: "Computer Science & Engineering",
    degree: "B.Tech in Cybersecurity",
    semester: "4th Semester",
    academicYear: "2024 - 2028",
    cgpa: "3.65 / 4.00",
    cgpaScore: 3.65,
    totalCredits: 78,
    attendancePct: 84,
    feeStatus: "Pending Installment 2",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    advisor: "Prof. Michael Chang",
    dob: "08 Nov 2004",
    bloodGroup: "B+",
    emergencyContact: "James Vance (Father) - +1 (555) 765-4321",
    courses: [
      { code: "CS201", title: "Object Oriented Programming (Java/C++)", instructor: "Dr. Robert Vance", credits: 4, grade: "B+", marks: 84, status: "Ongoing" },
      { code: "CS204", title: "Discrete Mathematics & Logic", instructor: "Prof. Sarah Jenkins", credits: 3, grade: "A", marks: 90, status: "Ongoing" },
      { code: "CS206", title: "Computer Organization & Systems", instructor: "Dr. Elena Rostova", credits: 4, grade: "B", marks: 78, status: "Ongoing" }
    ],
    attendanceBreakdown: [
      { code: "CS201", title: "Object Oriented Programming", attended: 32, total: 38, pct: 84 },
      { code: "CS204", title: "Discrete Mathematics", attended: 33, total: 38, pct: 86 },
      { code: "CS206", title: "Computer Organization", attended: 30, total: 38, pct: 79 }
    ],
    timetable: [
      { time: "09:00 AM - 10:30 AM", mon: "CS201 (Room 102)", tue: "CS204 (Hall A)", wed: "CS206 (Lab 4)", thu: "CS201 (Room 102)", fri: "Cyber Lab" }
    ]
  }
];

// Memory fallback store if local MongoDB daemon is not running
let memoryStudentsStore = [...initialStudents];

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 3000
}).then(async () => {
  isMongoConnected = true;
  console.log(`[MongoDB] Connected successfully to ${MONGODB_URI}`);
  
  // Seed Database if empty
  const count = await Student.countDocuments();
  if (count === 0) {
    await Student.insertMany(initialStudents);
    console.log(`[MongoDB] Initialized collection with ${initialStudents.length} student records.`);
  }
}).catch((err) => {
  isMongoConnected = false;
  console.warn(`[MongoDB Notice] Local MongoDB server connection pending (${err.message}). Using high-performance API store.`);
});

// Helper Function: Seed Database Route
async function seedDatabase() {
  if (isMongoConnected) {
    await Student.deleteMany({});
    const inserted = await Student.insertMany(initialStudents);
    return inserted;
  } else {
    memoryStudentsStore = [...initialStudents];
    return memoryStudentsStore;
  }
}

// REST API ROUTES

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    database: isMongoConnected ? 'MongoDB Connected' : 'In-Memory API Mode',
    mongodbUri: MONGODB_URI,
    timestamp: new Date().toISOString()
  });
});

// Seed API
app.post('/api/students/seed', async (req, res) => {
  try {
    const data = await seedDatabase();
    res.json({ success: true, message: 'Database seeded with default student records', count: data.length });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get All Students
app.get('/api/students', async (req, res) => {
  try {
    if (isMongoConnected) {
      const students = await Student.find({}, { password: 0 }); // Exclude passwords
      return res.json({ success: true, source: 'MongoDB', data: students });
    } else {
      const sanitized = memoryStudentsStore.map(({ password, ...s }) => s);
      return res.json({ success: true, source: 'API Store', data: sanitized });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get Student by Roll Number
app.get('/api/students/:rollNo', async (req, res) => {
  try {
    const rollNo = req.params.rollNo.toUpperCase();
    if (isMongoConnected) {
      const student = await Student.findOne({ rollNo });
      if (!student) return res.status(404).json({ success: false, message: 'Student not found' });
      return res.json({ success: true, source: 'MongoDB', data: student });
    } else {
      const student = memoryStudentsStore.find(s => s.rollNo.toUpperCase() === rollNo);
      if (!student) return res.status(404).json({ success: false, message: 'Student not found' });
      return res.json({ success: true, source: 'API Store', data: student });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Student Login Authentication
app.post('/api/students/login', async (req, res) => {
  try {
    const { rollNo, password } = req.body;
    if (!rollNo || !password) {
      return res.status(400).json({ success: false, message: 'Roll number and password are required' });
    }

    const cleanRollNo = rollNo.trim().toUpperCase();

    let student = null;
    if (isMongoConnected) {
      student = await Student.findOne({ rollNo: cleanRollNo });
    } else {
      student = memoryStudentsStore.find(s => s.rollNo.toUpperCase() === cleanRollNo);
    }

    if (!student || student.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid Roll Number or Password' });
    }

    // Success response
    const studentData = student.toObject ? student.toObject() : { ...student };
    delete studentData.password;

    res.json({
      success: true,
      message: 'Authentication successful',
      source: isMongoConnected ? 'MongoDB' : 'API Store',
      data: studentData
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add New Student
app.post('/api/students', async (req, res) => {
  try {
    const newStudentData = req.body;
    if (!newStudentData.rollNo || !newStudentData.name || !newStudentData.password) {
      return res.status(400).json({ success: false, message: 'rollNo, name, and password are required' });
    }

    newStudentData.rollNo = newStudentData.rollNo.toUpperCase();

    if (isMongoConnected) {
      const existing = await Student.findOne({ rollNo: newStudentData.rollNo });
      if (existing) {
        return res.status(400).json({ success: false, message: 'Student with this Roll Number already exists' });
      }
      const student = new Student(newStudentData);
      await student.save();
      return res.status(201).json({ success: true, source: 'MongoDB', data: student });
    } else {
      const existing = memoryStudentsStore.find(s => s.rollNo === newStudentData.rollNo);
      if (existing) {
        return res.status(400).json({ success: false, message: 'Student with this Roll Number already exists' });
      }
      memoryStudentsStore.push(newStudentData);
      return res.status(201).json({ success: true, source: 'API Store', data: newStudentData });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update Existing Student Details in MongoDB
app.put('/api/students/:rollNo', async (req, res) => {
  try {
    const rollNo = req.params.rollNo.toUpperCase();
    const updateData = req.body;

    if (isMongoConnected) {
      const updatedStudent = await Student.findOneAndUpdate(
        { rollNo },
        { $set: updateData },
        { new: true, runValidators: true }
      );
      if (!updatedStudent) {
        return res.status(404).json({ success: false, message: 'Student not found in MongoDB' });
      }
      return res.json({ success: true, source: 'MongoDB', message: 'Student record updated successfully', data: updatedStudent });
    } else {
      const index = memoryStudentsStore.findIndex(s => s.rollNo.toUpperCase() === rollNo);
      if (index === -1) {
        return res.status(404).json({ success: false, message: 'Student not found' });
      }
      memoryStudentsStore[index] = { ...memoryStudentsStore[index], ...updateData };
      return res.json({ success: true, source: 'API Store', message: 'Student record updated successfully', data: memoryStudentsStore[index] });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete Student Record from MongoDB
app.delete('/api/students/:rollNo', async (req, res) => {
  try {
    const rollNo = req.params.rollNo.toUpperCase();

    if (isMongoConnected) {
      const deletedStudent = await Student.findOneAndDelete({ rollNo });
      if (!deletedStudent) {
        return res.status(404).json({ success: false, message: 'Student not found in MongoDB' });
      }
      return res.json({ success: true, source: 'MongoDB', message: 'Student record deleted successfully', rollNo });
    } else {
      const index = memoryStudentsStore.findIndex(s => s.rollNo.toUpperCase() === rollNo);
      if (index === -1) {
        return res.status(404).json({ success: false, message: 'Student not found' });
      }
      memoryStudentsStore.splice(index, 1);
      return res.json({ success: true, source: 'API Store', message: 'Student record deleted successfully', rollNo });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Pondicherry University - Department of Computer Science API Server running on port ${PORT}`);
  console.log(`📡 Access Portal: http://localhost:${PORT}`);
  console.log(`📊 Health Endpoint: http://localhost:${PORT}/api/health`);
  console.log(`🎓 Students API: http://localhost:${PORT}/api/students`);
  console.log(`=======================================================`);
});
