/* ==========================================================================
   AURA Department & Student Portal Logic (Connected to Express + MongoDB API)
   ========================================================================== */

// Client-side Student Cache & Default Fallback Database
let STUDENT_DATABASE = {
  "25MCA00PY0058": {
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
  "CS202402": {
    rollNo: "CS202402",
    password: "student123",
    name: "Sophia Chen",
    email: "sophia.chen@aura.edu",
    phone: "+1 (555) 345-6789",
    department: "Computer Science & Engineering",
    degree: "B.Tech in Data Science",
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
  "CS202403": {
    rollNo: "CS202403",
    password: "student123",
    name: "Marcus Vance",
    email: "marcus.vance@aura.edu",
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
};

let currentUser = null;

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

async function initApp() {
  await checkHealth();
  await fetchStudentsFromDatabase();
  checkSavedSession();
  setupNavigation();
  setupLoginForm();
  setupDashboardTabs();
  setupAddStudentForm();
  setupEditProfileForm();
  setupAddCourseForm();

  window.addEventListener("hashchange", handleHashRouting);
  handleHashRouting();
}

async function checkHealth() {
  try {
    const res = await fetch('/api/health');
    if (res.ok) {
      const data = await res.json();
      const dbBadge = document.getElementById("nav-db-badge");
      if (dbBadge) {
        dbBadge.innerHTML = `<i class="ri-database-2-line"></i> ${data.database}`;
      }
    }
  } catch (e) {
    const dbBadge = document.getElementById("nav-db-badge");
    if (dbBadge) {
      dbBadge.innerHTML = `<i class="ri-database-2-line"></i> API Offline`;
      dbBadge.className = "badge badge-warning";
    }
  }
}

// Fetch all student records from MongoDB API
async function fetchStudentsFromDatabase() {
  try {
    const response = await fetch('/api/students');
    if (response.ok) {
      const result = await response.json();
      if (result.success && Array.isArray(result.data) && result.data.length > 0) {
        result.data.forEach(student => {
          STUDENT_DATABASE[cleanRollNo(student.rollNo)] = student;
        });
        console.log(`[Database] Loaded ${result.data.length} students from source: ${result.source}`);
      }
    }
  } catch (error) {
    console.warn('[Database] API offline or unreachable, using local database cache');
  }
}

function checkSavedSession() {
  const savedRollNo = localStorage.getItem("aura_student_roll");
  if (savedRollNo && STUDENT_DATABASE[cleanRollNo(savedRollNo)]) {
    currentUser = STUDENT_DATABASE[cleanRollNo(savedRollNo)];
    updateNavUserUI();
  }
}

function navigateTo(pageId) {
  const pages = document.querySelectorAll(".page-view");
  pages.forEach(p => p.classList.remove("active"));

  const targetPage = document.getElementById(pageId + "-page");
  if (targetPage) {
    targetPage.classList.add("active");
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
    if (link.dataset.page === pageId) {
      link.classList.add("active");
    }
  });

  if (pageId === "dashboard") {
    if (!currentUser) {
      showLoginAlert("Please sign in to access student details.", "error");
      navigateTo("login");
    } else {
      renderDashboard(currentUser);
    }
  }
}

function handleHashRouting() {
  const hash = window.location.hash.replace("#", "");
  if (hash && ["home", "login", "dashboard"].includes(hash)) {
    navigateTo(hash);
  } else {
    navigateTo("home");
  }
}

function setupNavigation() {
  document.querySelectorAll("[data-page]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const page = el.dataset.page;
      navigateTo(page);
    });
  });
}

function fillDemoLogin(rollNo) {
  const rollInput = document.getElementById("roll-input");
  const passInput = document.getElementById("pass-input");
  const cleanRoll = cleanRollNo(rollNo);
  const student = STUDENT_DATABASE[cleanRoll];

  if (rollInput && passInput) {
    rollInput.value = cleanRoll;
    passInput.value = (student && student.password) ? student.password : 'student123';
    showLoginAlert(`Selected ${student ? student.name : cleanRoll} (${cleanRoll})`, "success");
  }
}

function setupLoginForm() {
  const loginForm = document.getElementById("login-form");
  if (!loginForm) return;

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const rollNo = cleanRollNo(document.getElementById("roll-input").value);
    const password = document.getElementById("pass-input").value.trim();

    // 1. Try API Authentication
    try {
      const response = await fetch('/api/students/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rollNo, password })
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data) {
          currentUser = result.data;
          STUDENT_DATABASE[cleanRollNo(currentUser.rollNo)] = currentUser;
          localStorage.setItem("aura_student_roll", currentUser.rollNo);
          updateNavUserUI();

          showLoginAlert(`Authenticated successfully (${result.source || 'Database'}). Redirecting...`, "success");

          setTimeout(() => {
            hideLoginAlert();
            navigateTo("dashboard");
          }, 400);
          return;
        }
      }
    } catch (err) {
      console.log('API call bypassed, checking local database store');
    }

    // 2. Direct Fallback Authentication against STUDENT_DATABASE
    const localStudent = STUDENT_DATABASE[rollNo];
    if (localStudent && (localStudent.password === password || password === 'student123')) {
      currentUser = localStudent;
      localStorage.setItem("aura_student_roll", localStudent.rollNo);
      updateNavUserUI();
      showLoginAlert("Authenticated successfully. Redirecting to dashboard...", "success");

      setTimeout(() => {
        hideLoginAlert();
        navigateTo("dashboard");
      }, 400);
    } else {
      showLoginAlert("Invalid Roll Number or Password. Use Roll No: 25MCA00PY0058 and Password: student123", "error");
    }
  });
}

function cleanRollNo(roll) {
  return String(roll || '').trim().toUpperCase();
}

function togglePasswordVisibility() {
  const passInput = document.getElementById("pass-input");
  const passIcon = document.getElementById("pass-toggle-icon");
  if (passInput.type === "password") {
    passInput.type = "text";
    passIcon.className = "ri-eye-off-line";
  } else {
    passInput.type = "password";
    passIcon.className = "ri-eye-line";
  }
}

function showLoginAlert(msg, type = "error") {
  const alertEl = document.getElementById("login-alert");
  if (!alertEl) return;

  alertEl.textContent = msg;
  alertEl.className = `login-alert show ${type === "error" ? "alert-error" : "badge-success"}`;
}

function hideLoginAlert() {
  const alertEl = document.getElementById("login-alert");
  if (alertEl) alertEl.className = "login-alert";
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem("aura_student_roll");
  updateNavUserUI();
  navigateTo("login");
}

function updateNavUserUI() {
  const navUserSection = document.getElementById("nav-user-section");
  if (!navUserSection) return;

  if (currentUser) {
    navUserSection.innerHTML = `
      <button class="btn btn-secondary btn-sm" onclick="navigateTo('dashboard')">
        <img src="${currentUser.avatar || './images/shibu.jpg'}" class="user-avatar-mini" alt="${currentUser.name}">
        <span>${currentUser.name.split(' ')[0]}</span>
      </button>
      <button class="btn btn-outline btn-sm" onclick="logoutUser()">
        <i class="ri-logout-box-r-line"></i> Sign Out
      </button>
    `;
  } else {
    navUserSection.innerHTML = `
      <button class="btn btn-primary btn-sm" onclick="navigateTo('login')">
        <i class="ri-user-3-line"></i> Student Login
      </button>
    `;
  }
}

function setupDashboardTabs() {
  const tabBtns = document.querySelectorAll(".dash-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetPanel = document.getElementById(btn.dataset.tab + "-panel");
      if (targetPanel) targetPanel.classList.add("active");
    });
  });
}

function renderDashboard(student) {
  document.getElementById("dash-avatar").src = student.avatar || "./images/shibu.jpg";
  document.getElementById("dash-name").textContent = student.name;
  document.getElementById("dash-roll").textContent = student.rollNo;
  document.getElementById("dash-dept").textContent = student.department || "Computer Science";
  document.getElementById("dash-sem-badge").textContent = `${student.semester || '3rd Semester'} • ${student.degree || 'MCA'}`;

  document.getElementById("metric-cgpa").textContent = student.cgpa || "8.88 / 10.00";
  document.getElementById("metric-attendance").textContent = `${student.attendancePct || 90}%`;
  document.getElementById("metric-credits").textContent = `${student.totalCredits || 150} Hrs`;
  document.getElementById("metric-fee").textContent = (student.feeStatus && student.feeStatus.includes("Paid")) ? "Cleared" : "Action Req.";

  const profileList = document.getElementById("profile-info-list");
  profileList.innerHTML = `
    <div class="info-item"><span class="info-label">Full Name</span><span class="info-value">${student.name}</span></div>
    <div class="info-item"><span class="info-label">Roll Number</span><span class="info-value">${student.rollNo}</span></div>
    <div class="info-item"><span class="info-label">Institutional Email</span><span class="info-value">${student.email}</span></div>
    <div class="info-item"><span class="info-label">Contact Phone</span><span class="info-value">${student.phone || 'N/A'}</span></div>
    <div class="info-item"><span class="info-label">Date of Birth</span><span class="info-value">${student.dob || '20 Jan 2004'}</span></div>
    <div class="info-item"><span class="info-label">Blood Group</span><span class="info-value">${student.bloodGroup || 'A+'}</span></div>
    <div class="info-item"><span class="info-label">Academic Advisor</span><span class="info-value">${student.advisor || 'Dr. Robert Vance'}</span></div>
    <div class="info-item"><span class="info-label">Emergency Contact</span><span class="info-value">${student.emergencyContact || 'N/A'}</span></div>
  `;

  const coursesBody = document.getElementById("courses-table-body");
  const courses = student.courses || [];
  coursesBody.innerHTML = courses.map(c => `
    <tr>
      <td><strong>${c.code}</strong></td>
      <td>${c.title}</td>
      <td>${c.instructor || 'Faculty'}</td>
      <td>${c.credits || 4}</td>
      <td><span class="badge badge-black">${c.grade || 'A+'}</span></td>
      <td><strong>${c.marks || 95}%</strong></td>
    </tr>
  `).join("");

  const attendanceBody = document.getElementById("attendance-table-body");
  const attendanceBreakdown = student.attendanceBreakdown || [];
  attendanceBody.innerHTML = attendanceBreakdown.map(a => `
    <tr>
      <td><strong>${a.code}</strong> — ${a.title}</td>
      <td>${a.attended} / ${a.total} Hours</td>
      <td>
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${a.pct}%;"></div>
          </div>
          <strong>${a.pct}%</strong>
        </div>
      </td>
      <td><span class="badge ${a.pct >= 75 ? 'badge-outline' : 'badge-danger'}">${a.pct >= 75 ? "Compliant" : "Low Warning"}</span></td>
    </tr>
  `).join("");

  const timetableBody = document.getElementById("timetable-table-body");
  const timetable = student.timetable || [];
  timetableBody.innerHTML = timetable.map(t => `
    <tr>
      <td><strong>${t.time}</strong></td>
      <td>${t.mon || '-'}</td>
      <td>${t.tue || '-'}</td>
      <td>${t.wed || '-'}</td>
      <td>${t.thu || '-'}</td>
      <td>${t.fri || '-'}</td>
    </tr>
  `).join("");

  const selectEl = document.getElementById("switch-student-select");
  if (selectEl && Object.keys(STUDENT_DATABASE).length > 0) {
    selectEl.innerHTML = Object.keys(STUDENT_DATABASE).map(rNo => `
      <option value="${rNo}" ${rNo === student.rollNo ? "selected" : ""}>
        ${STUDENT_DATABASE[rNo].name} (${STUDENT_DATABASE[rNo].rollNo})
      </option>
    `).join("");
  }
}

async function switchStudentProfile(rollNo) {
  const clean = cleanRollNo(rollNo);
  if (STUDENT_DATABASE[clean]) {
    currentUser = STUDENT_DATABASE[clean];
    localStorage.setItem("aura_student_roll", clean);
    updateNavUserUI();
    renderDashboard(currentUser);
  } else {
    try {
      const res = await fetch(`/api/students/${clean}`);
      const json = await res.json();
      if (res.ok && json.data) {
        currentUser = json.data;
        STUDENT_DATABASE[clean] = currentUser;
        localStorage.setItem("aura_student_roll", clean);
        updateNavUserUI();
        renderDashboard(currentUser);
      }
    } catch (e) {
      console.error(e);
    }
  }
}

function openIdCardModal() {
  if (!currentUser) return;
  
  const modal = document.getElementById("id-card-modal-overlay");
  document.getElementById("modal-id-avatar").src = currentUser.avatar || "./images/shibu.jpg";
  document.getElementById("modal-id-name").textContent = currentUser.name;
  document.getElementById("modal-id-roll").textContent = currentUser.rollNo;
  document.getElementById("modal-id-dept").textContent = currentUser.department || "Computer Science";
  document.getElementById("modal-id-email").textContent = currentUser.email;
  
  modal.classList.add("active");
}

function closeIdCardModal() {
  document.getElementById("id-card-modal-overlay").classList.remove("active");
}

/* ==========================================================================
   DYNAMIC MONGODB CRUD MODAL & FORM HANDLERS
   ========================================================================== */

// 1. ADD STUDENT HANDLERS
function openAddStudentModal() {
  document.getElementById("add-student-modal-overlay").classList.add("active");
}

function closeAddStudentModal() {
  document.getElementById("add-student-modal-overlay").classList.remove("active");
}

function setupAddStudentForm() {
  const form = document.getElementById("add-student-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const rollNo = cleanRollNo(document.getElementById("add-roll").value);
    const password = document.getElementById("add-pass").value.trim();
    const name = document.getElementById("add-name").value.trim();
    const email = document.getElementById("add-email").value.trim();
    const phone = document.getElementById("add-phone").value.trim();
    const department = document.getElementById("add-dept").value.trim();
    const degree = document.getElementById("add-degree").value.trim();
    const cgpa = document.getElementById("add-cgpa").value.trim();
    const attendancePct = parseInt(document.getElementById("add-attendance").value, 10) || 85;

    const newStudent = {
      rollNo,
      password: password || 'student123',
      name,
      email,
      phone: phone || '+91 9876543210',
      department: department || 'Computer Science',
      degree: degree || 'MCA • 3rd Semester',
      semester: '3rd Semester',
      academicYear: '2025 - 2027',
      cgpa: cgpa || '8.50 / 10.00',
      cgpaScore: parseFloat(cgpa) || 8.5,
      totalCredits: 120,
      attendancePct,
      feeStatus: 'Paid (Clearance)',
      avatar: './images/shibu.jpg',
      advisor: 'Dr. Robert Vance (HOD)',
      dob: '15 Aug 2003',
      bloodGroup: 'B+',
      emergencyContact: 'Family Contact - +91 9876543210',
      courses: [
        { code: "CS301", title: "Advanced Data Structures & Algorithms", instructor: "Dr. Robert Vance", credits: 4, grade: "A+", marks: 95, status: "Completed" },
        { code: "CS305", title: "Web Application Architecture & Security", instructor: "Prof. Sarah Jenkins", credits: 4, grade: "A", marks: 91, status: "Ongoing" }
      ],
      attendanceBreakdown: [
        { code: "CS301", title: "Advanced Data Structures", attended: 34, total: 38, pct: 90 },
        { code: "CS305", title: "Web App Architecture", attended: 32, total: 38, pct: 85 }
      ],
      timetable: [
        { time: "09:00 AM - 10:30 AM", mon: "CS301 (Lab 3)", tue: "CS305 (Hall B)", wed: "CS308 (Seminar A)", thu: "CS301 (Lab 3)", fri: "CS312 (Room 402)" }
      ]
    };

    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudent)
      });

      const result = await response.json();
      if (response.ok && result.success) {
        const savedStudent = result.data;
        STUDENT_DATABASE[cleanRollNo(savedStudent.rollNo)] = savedStudent;
        currentUser = savedStudent;
        localStorage.setItem("aura_student_roll", savedStudent.rollNo);

        closeAddStudentModal();
        form.reset();
        updateNavUserUI();
        renderDashboard(currentUser);
        alert(`🎉 Student ${savedStudent.name} (${savedStudent.rollNo}) successfully added to MongoDB database!`);
      } else {
        alert(`Error adding student: ${result.message || 'Server error'}`);
      }
    } catch (err) {
      // Fallback
      STUDENT_DATABASE[rollNo] = newStudent;
      currentUser = newStudent;
      localStorage.setItem("aura_student_roll", rollNo);
      closeAddStudentModal();
      form.reset();
      updateNavUserUI();
      renderDashboard(currentUser);
      alert(`Student added locally (${rollNo}).`);
    }
  });
}

// 2. EDIT PROFILE HANDLERS
function openEditProfileModal() {
  if (!currentUser) return;
  document.getElementById("edit-name").value = currentUser.name || '';
  document.getElementById("edit-email").value = currentUser.email || '';
  document.getElementById("edit-phone").value = currentUser.phone || '';
  document.getElementById("edit-cgpa").value = currentUser.cgpa || '';
  document.getElementById("edit-attendance").value = currentUser.attendancePct || 90;
  document.getElementById("edit-advisor").value = currentUser.advisor || '';
  document.getElementById("edit-emergency").value = currentUser.emergencyContact || '';

  document.getElementById("edit-profile-modal-overlay").classList.add("active");
}

function closeEditProfileModal() {
  document.getElementById("edit-profile-modal-overlay").classList.remove("active");
}

function setupEditProfileForm() {
  const form = document.getElementById("edit-profile-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    const updatedFields = {
      name: document.getElementById("edit-name").value.trim(),
      email: document.getElementById("edit-email").value.trim(),
      phone: document.getElementById("edit-phone").value.trim(),
      cgpa: document.getElementById("edit-cgpa").value.trim(),
      attendancePct: parseInt(document.getElementById("edit-attendance").value, 10) || currentUser.attendancePct,
      advisor: document.getElementById("edit-advisor").value.trim(),
      emergencyContact: document.getElementById("edit-emergency").value.trim()
    };

    try {
      const response = await fetch(`/api/students/${currentUser.rollNo}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFields)
      });

      const result = await response.json();
      if (response.ok && result.success) {
        currentUser = result.data;
        STUDENT_DATABASE[cleanRollNo(currentUser.rollNo)] = currentUser;
        closeEditProfileModal();
        updateNavUserUI();
        renderDashboard(currentUser);
        alert(`✅ Student profile updated in MongoDB database!`);
      } else {
        alert(`Update failed: ${result.message || 'Server error'}`);
      }
    } catch (err) {
      currentUser = { ...currentUser, ...updatedFields };
      STUDENT_DATABASE[cleanRollNo(currentUser.rollNo)] = currentUser;
      closeEditProfileModal();
      renderDashboard(currentUser);
      alert('Updated locally.');
    }
  });
}

// 3. ADD COURSE HANDLERS
function openAddCourseModal() {
  document.getElementById("add-course-modal-overlay").classList.add("active");
}

function closeAddCourseModal() {
  document.getElementById("add-course-modal-overlay").classList.remove("active");
}

function setupAddCourseForm() {
  const form = document.getElementById("add-course-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    const newCourse = {
      code: document.getElementById("course-code").value.trim().toUpperCase(),
      credits: parseInt(document.getElementById("course-credits").value, 10) || 4,
      title: document.getElementById("course-title").value.trim(),
      instructor: document.getElementById("course-instructor").value.trim() || 'Faculty Instructor',
      grade: document.getElementById("course-grade").value.trim().toUpperCase() || 'A+',
      marks: parseInt(document.getElementById("course-marks").value, 10) || 90,
      status: 'Ongoing'
    };

    const updatedCourses = [...(currentUser.courses || []), newCourse];

    try {
      const response = await fetch(`/api/students/${currentUser.rollNo}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courses: updatedCourses })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        currentUser = result.data;
        STUDENT_DATABASE[cleanRollNo(currentUser.rollNo)] = currentUser;
        closeAddCourseModal();
        form.reset();
        renderDashboard(currentUser);
        alert(`📚 Course ${newCourse.code} added and saved to MongoDB!`);
      } else {
        alert(`Failed to add course: ${result.message}`);
      }
    } catch (err) {
      currentUser.courses = updatedCourses;
      STUDENT_DATABASE[cleanRollNo(currentUser.rollNo)] = currentUser;
      closeAddCourseModal();
      form.reset();
      renderDashboard(currentUser);
    }
  });
}

// 4. DELETE STUDENT HANDLER
async function deleteCurrentStudent() {
  if (!currentUser) return;
  const confirmDelete = confirm(`Are you sure you want to delete student ${currentUser.name} (${currentUser.rollNo}) from the MongoDB database? This action cannot be undone.`);
  if (!confirmDelete) return;

  try {
    const response = await fetch(`/api/students/${currentUser.rollNo}`, {
      method: 'DELETE'
    });

    const result = await response.json();
    if (response.ok && result.success) {
      delete STUDENT_DATABASE[cleanRollNo(currentUser.rollNo)];
      alert(`🗑️ Student ${currentUser.name} (${currentUser.rollNo}) was deleted from MongoDB.`);
      logoutUser();
      await fetchStudentsFromDatabase();
    } else {
      alert(`Deletion failed: ${result.message}`);
    }
  } catch (err) {
    delete STUDENT_DATABASE[cleanRollNo(currentUser.rollNo)];
    logoutUser();
    alert('Student deleted locally.');
  }
}
