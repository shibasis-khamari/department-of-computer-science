const mongoose = require('mongoose');
const Student = require('./models/Student');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/aura_department';

const studentsData = [
  {
    rollNo: "25MCA00PY0058",
    password: "student123",
    name: "Shibasis Khamari",
    email: "25mca00py0058@pondiuni.ac.in",
    phone: "+91 7749030298",
    department: "Computer Science",
    degree: "MCA",
    semester: "3th Semester",
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

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`Connected to MongoDB at ${MONGODB_URI}`);

    await Student.deleteMany({});
    console.log('Cleared existing student collection');

    const created = await Student.insertMany(studentsData);
    console.log(`Successfully seeded ${created.length} student documents into MongoDB database!`);

    process.exit(0);
  } catch (err) {
    console.error('Error seeding MongoDB:', err);
    process.exit(1);
  }
}

seed();
