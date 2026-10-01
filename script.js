/* ================= LOGIN ================= */

function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter Email ID and Password.");
        return;
    }

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainWebsite").style.display = "block";
}


function adminLogin() {

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainWebsite").style.display = "block";

}


function facultyLogin() {

    alert("Faculty Login will be available soon.");

}


function logout() {

    document.getElementById("mainWebsite").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";

}


/* ================= PAGE TABS ================= */

function showPage(pageId, button) {

    // Hide all pages
    let pages = document.querySelectorAll(".page-section");

    pages.forEach(function(page) {
        page.classList.remove("active-section");
    });


    // Show selected page
    document.getElementById(pageId).classList.add("active-section");


    // Remove active from buttons
    let buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });


    // Add active to clicked button
    if (button) {
        button.classList.add("active");
    }


    // Change top title
    let titles = {
        dashboard: "Dashboard",
        faculty: "Faculty Management",
        subjects: "Subject Management",
        classes: "Class & Section Management",
        rooms: "Classroom Management",
        timeslots: "Time Slot Management",
        generate: "Generate Timetable",
        timetable: "Generated Timetable"
    };

    document.getElementById("pageTitle").textContent =
        titles[pageId];

}


/* ================= FACULTY ================= */

let facultyList = [];


function addFaculty() {

    let name = document.getElementById("facultyName").value;
    let id = document.getElementById("facultyId").value;
    let department = document.getElementById("department").value;


    if (name === "" || id === "" || department === "") {

        alert("Please fill all faculty details.");

        return;
    }


    facultyList.push({
        name: name,
        id: id,
        department: department
    });


    displayFaculty();


    document.getElementById("facultyName").value = "";
    document.getElementById("facultyId").value = "";
    document.getElementById("department").value = "";

}


function displayFaculty() {

    let table = document.getElementById("facultyTable");

    table.innerHTML = "";


    facultyList.forEach(function(faculty, index) {

        let row = document.createElement("tr");


        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${faculty.id}</td>
            <td>${faculty.name}</td>
            <td>${faculty.department}</td>
            <td>
                <button
                    class="delete-button"
                    onclick="deleteFaculty(${index})">
                    Delete
                </button>
            </td>
        `;


        table.appendChild(row);

    });


    document.getElementById("facultyCount").textContent =
        facultyList.length;

    document.getElementById("facultyCountText").textContent =
        facultyList.length + " Faculty";

}


function deleteFaculty(index) {

    facultyList.splice(index, 1);

    displayFaculty();

}


/* ================= SUBJECTS ================= */

let subjectList = [];


function addSubject() {

    let name = document.getElementById("subjectName").value;
    let code = document.getElementById("subjectCode").value;
    let hours = document.getElementById("subjectHours").value;


    if (name === "" || code === "" || hours === "") {

        alert("Please fill all subject details.");

        return;
    }


    subjectList.push({
        name: name,
        code: code,
        hours: hours
    });


    displaySubjects();


    document.getElementById("subjectName").value = "";
    document.getElementById("subjectCode").value = "";
    document.getElementById("subjectHours").value = "";

}


function displaySubjects() {

    let table = document.getElementById("subjectTable");

    table.innerHTML = "";


    subjectList.forEach(function(subject, index) {

        let row = document.createElement("tr");


        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${subject.code}</td>
            <td>${subject.name}</td>
            <td>${subject.hours}</td>
            <td>
                <button
                    class="delete-button"
                    onclick="deleteSubject(${index})">
                    Delete
                </button>
            </td>
        `;


        table.appendChild(row);

    });


    document.getElementById("subjectCount").textContent =
        subjectList.length;

}


function deleteSubject(index) {

    subjectList.splice(index, 1);

    displaySubjects();

}


/* ================= CLASSES ================= */

let classList = [];


function addClass() {

    let className = document.getElementById("className").value;
    let section = document.getElementById("sectionName").value;
    let students = document.getElementById("studentCount").value;


    if (className === "" || section === "" || students === "") {

        alert("Please fill all class details.");

        return;
    }


    classList.push({
        className: className,
        section: section,
        students: students
    });


    displayClasses();


    document.getElementById("className").value = "";
    document.getElementById("sectionName").value = "";
    document.getElementById("studentCount").value = "";

}


function displayClasses() {

    let table = document.getElementById("classTable");

    table.innerHTML = "";


    classList.forEach(function(item, index) {

        let row = document.createElement("tr");


        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.className}</td>
            <td>${item.section}</td>
            <td>${item.students}</td>
            <td>
                <button
                    class="delete-button"
                    onclick="deleteClass(${index})">
                    Delete
                </button>
            </td>
        `;


        table.appendChild(row);

    });


    document.getElementById("classCount").textContent =
        classList.length;

}


function deleteClass(index) {

    classList.splice(index, 1);

    displayClasses();

}


/* ================= ROOMS ================= */

let roomList = [];


function addRoom() {

    let room = document.getElementById("roomNumber").value;
    let capacity = document.getElementById("roomCapacity").value;
    let type = document.getElementById("roomType").value;


    if (room === "" || capacity === "" || type === "") {

        alert("Please fill all classroom details.");

        return;
    }


    roomList.push({
        room: room,
        capacity: capacity,
        type: type
    });


    displayRooms();


    document.getElementById("roomNumber").value = "";
    document.getElementById("roomCapacity").value = "";
    document.getElementById("roomType").value = "";

}


function displayRooms() {

    let table = document.getElementById("roomTable");

    table.innerHTML = "";


    roomList.forEach(function(room, index) {

        let row = document.createElement("tr");


        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${room.room}</td>
            <td>${room.capacity}</td>
            <td>${room.type}</td>
            <td>
                <button
                    class="delete-button"
                    onclick="deleteRoom(${index})">
                    Delete
                </button>
            </td>
        `;


        table.appendChild(row);

    });


    document.getElementById("roomCount").textContent =
        roomList.length;

}


function deleteRoom(index) {

    roomList.splice(index, 1);

    displayRooms();

}


/* ================= TIME SLOTS ================= */

let timeList = [];


function addTimeSlot() {

    let day = document.getElementById("day").value;
    let start = document.getElementById("startTime").value;
    let end = document.getElementById("endTime").value;


    if (day === "" || start === "" || end === "") {

        alert("Please fill all time slot details.");

        return;
    }


    timeList.push({
        day: day,
        start: start,
        end: end
    });


    displayTimeSlots();


    document.getElementById("day").value = "";
    document.getElementById("startTime").value = "";
    document.getElementById("endTime").value = "";

}


function displayTimeSlots() {

    let table = document.getElementById("timeTable");

    table.innerHTML = "";


    timeList.forEach(function(time, index) {

        let row = document.createElement("tr");


        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${time.day}</td>
            <td>${time.start}</td>
            <td>${time.end}</td>
            <td>
                <button
                    class="delete-button"
                    onclick="deleteTimeSlot(${index})">
                    Delete
                </button>
            </td>
        `;


        table.appendChild(row);

    });

}


function deleteTimeSlot(index) {

    timeList.splice(index, 1);

    displayTimeSlots();

}


/* ================= GENERATE TIMETABLE ================= */

function generateTimetable() {

    alert(
        "Timetable generated successfully!"
    );

    showPage("timetable");

    document.querySelectorAll(".nav-btn").forEach(function(btn) {
        btn.classList.remove("active");
    });

}