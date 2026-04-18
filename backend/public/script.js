const API = "/students";

const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

const form = document.getElementById("studentForm");
const studentsDiv = document.getElementById("students");

const nameInput = document.getElementById("name");
const courseInput = document.getElementById("course");
const imageInput = document.getElementById("image");

let editId = null;
let studentsData = []; // ✅ store data

// Open modal
openBtn.onclick = () => {
  modal.style.display = "block";
};

// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
  form.reset();
  editId = null;
};

// ================= FETCH =================
async function fetchStudents() {
  const res = await fetch(API);
  const data = await res.json();

  studentsData = data; // ✅ store globally

  studentsDiv.innerHTML = "";

  data.forEach(student => {
    studentsDiv.innerHTML += `
      <div class="card">
        <img src="${student.image}">
        <h3>${student.name}</h3>
        <p>${student.course}</p>

        <button class="delete-btn" onclick="deleteStudent('${student._id}')">🗑 Delete</button>
        <button class="edit-btn" onclick="editStudent('${student._id}')">✏️ Edit</button>
      </div>
    `;
  });
}

// ================= ADD + UPDATE =================
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (editId) {
    // UPDATE
    await fetch(`${API}/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nameInput.value,
        course: courseInput.value
      })
    });

    editId = null;
  } else {
    // ADD
    const formData = new FormData();
    formData.append("name", nameInput.value);
    formData.append("course", courseInput.value);
    formData.append("image", imageInput.files[0]);

    await fetch(API, {
      method: "POST",
      body: formData
    });
  }

  modal.style.display = "none";
  form.reset();
  fetchStudents();
});

// ================= DELETE =================
async function deleteStudent(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  fetchStudents();
}

// ================= EDIT =================
function editStudent(id) {
  modal.style.display = "block";

  const student = studentsData.find(s => s._id === id);

  if (student) {
    nameInput.value = student.name;
    courseInput.value = student.course;
    editId = id;
  }
}

fetchStudents();