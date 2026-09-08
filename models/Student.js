const mongoose = require('mongoose');

// Course Sub-schema
const CourseSchema = new mongoose.Schema({
  code: { type: String, required: true },
  title: { type: String, required: true },
  instructor: { type: String },
  credits: { type: Number, default: 3 },
  grade: { type: String, default: 'Pending' },
  marks: { type: Number, default: 0 },
  status: { type: String, default: 'Ongoing' }
});

// Attendance Sub-schema
const AttendanceSchema = new mongoose.Schema({
  code: { type: String, required: true },
  title: { type: String, required: true },
  attended: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  pct: { type: Number, default: 0 }
});

// Timetable Sub-schema
const TimetableSchema = new mongoose.Schema({
  time: { type: String, required: true },
  mon: String,
  tue: String,
  wed: String,
  thu: String,
  fri: String
});

// Main Student Schema
const StudentSchema = new mongoose.Schema({
  rollNo: { 
    type: String, 
    required: true, 
    unique: true, 
    uppercase: true, 
    trim: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  phone: String,
  department: { 
    type: String, 
    default: 'Computer Science & Engineering' 
  },
  degree: String,
  semester: String,
  academicYear: String,
  cgpa: String,
  cgpaScore: Number,
  totalCredits: Number,
  attendancePct: Number,
  feeStatus: String,
  avatar: String,
  advisor: String,
  dob: String,
  bloodGroup: String,
  emergencyContact: String,
  courses: [CourseSchema],
  attendanceBreakdown: [AttendanceSchema],
  timetable: [TimetableSchema]
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Student', StudentSchema);
