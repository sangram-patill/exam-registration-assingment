let name = document.getElementById('name');
let email = document.getElementById('email');

let students = [];
let city = ['Pune', 'Mumbai', 'Delhi', 'Hyderabad', 'Bihar', 'UP'];

// function randomNumber(){
//     let number = Math.floor(Math.random() * city.length);
//     console.log(number);
// }

function sameStudent(){
    alert('Student already register..!');
}

function checkStudent(student){
    let check = students.filter((currentStudent)=>{
        return currentStudent.email == student.email;
    })
    if(check.length == 0){
        students.push(student);
    }
    else{
        sameStudent();
    }
    
}


function displayStudent(){
    let studentsConatainer = document.getElementById('students');
    studentsConatainer.innerHTML = ' ';
    students.map((stud)=>{
        let studentDiv = document.createElement('div');
        studentDiv.classList.add('student');
        let displayName = document.createElement('p');
        displayName.innerText = stud.name;
        let displayEmail = document.createElement('p');
        displayEmail.innerText = stud.email;
        let displayCity = document.createElement('p');
        displayCity.innerText = stud.city;

        studentsConatainer.appendChild(studentDiv);
        studentDiv.appendChild(displayName);
        studentDiv.appendChild(displayEmail);
        studentDiv.appendChild(displayCity);
    })
    
}

function addStudent(){
    let number = Math.floor(Math.random() * city.length);
    // console.log(number);
    let student = {
        name : name.value,
        email: email.value,
        city: city[number]
    }
    
    checkStudent(student);
    // students.push(student);
    console.log(students);
    displayStudent();
    
}