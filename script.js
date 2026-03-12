const students = [
    { name: "Aarav Sharma", roll: 101, course: "CSE", gpa: 8.5 },
    { name: "Vivaan Verma", roll: 102, course: "IT", gpa: 7.9 },
    { name: "Aditya Singh", roll: 103, course: "ECE", gpa: 9.1 },
    { name: "Vihaan Gupta", roll: 104, course: "ME", gpa: 8.2 },
    { name: "Arjun Mehta", roll: 105, course: "CSE", gpa: 7.5 },
    { name: "Sai Kumar", roll: 106, course: "IT", gpa: 8.8 },
    { name: "Krishna Yadav", roll: 107, course: "ECE", gpa: 9.0 },
    { name: "Ishaan Mishra", roll: 108, course: "ME", gpa: 7.6 },
    { name: "Kabir Jain", roll: 109, course: "CSE", gpa: 8.3 },
    { name: "Reyansh Patel", roll: 110, course: "IT", gpa: 8.7 },

    { name: "Aryan Kapoor", roll: 111, course: "ECE", gpa: 9.3 },
    { name: "Rohan Das", roll: 112, course: "ME", gpa: 7.2 },
    { name: "Kunal Sharma", roll: 113, course: "CSE", gpa: 8.1 },
    { name: "Manav Singh", roll: 114, course: "IT", gpa: 7.8 },
    { name: "Aman Verma", roll: 115, course: "ECE", gpa: 8.9 },
    { name: "Rahul Gupta", roll: 116, course: "ME", gpa: 7.4 },
    { name: "Ritik Yadav", roll: 117, course: "CSE", gpa: 8.6 },
    { name: "Harsh Mishra", roll: 118, course: "IT", gpa: 8.0 },
    { name: "Nikhil Jain", roll: 119, course: "ECE", gpa: 9.2 },
    { name: "Shivam Patel", roll: 120, course: "ME", gpa: 7.3 },

    { name: "Ankit Sharma", roll: 121, course: "CSE", gpa: 8.4 },
    { name: "Deepak Verma", roll: 122, course: "IT", gpa: 7.7 },
    { name: "Vikas Singh", roll: 123, course: "ECE", gpa: 9.4 },
    { name: "Pankaj Gupta", roll: 124, course: "ME", gpa: 7.1 },
    { name: "Mohit Mehta", roll: 125, course: "CSE", gpa: 8.3 },
    { name: "Sandeep Kumar", roll: 126, course: "IT", gpa: 8.2 },
    { name: "Varun Yadav", roll: 127, course: "ECE", gpa: 9.0 },
    { name: "Abhishek Mishra", roll: 128, course: "ME", gpa: 7.9 },
    { name: "Tushar Jain", roll: 129, course: "CSE", gpa: 8.7 },
    { name: "Yash Patel", roll: 130, course: "IT", gpa: 8.5 },

    { name: "Rajat Kapoor", roll: 131, course: "ECE", gpa: 9.2 },
    { name: "Lokesh Das", roll: 132, course: "ME", gpa: 7.3 },
    { name: "Sumit Sharma", roll: 133, course: "CSE", gpa: 8.4 },
    { name: "Gaurav Singh", roll: 134, course: "IT", gpa: 7.6 },
    { name: "Tarun Verma", roll: 135, course: "ECE", gpa: 8.8 },
    { name: "Naveen Gupta", roll: 136, course: "ME", gpa: 7.4 },
    { name: "Prateek Yadav", roll: 137, course: "CSE", gpa: 8.9 },
    { name: "Ajay Mishra", roll: 138, course: "IT", gpa: 7.8 },
    { name: "Dev Jain", roll: 139, course: "ECE", gpa: 9.3 },
    { name: "Rakesh Patel", roll: 140, course: "ME", gpa: 7.0 },

    { name: "Karan Sharma", roll: 141, course: "CSE", gpa: 8.2 },
    { name: "Manish Verma", roll: 142, course: "IT", gpa: 7.9 },
    { name: "Vivek Singh", roll: 143, course: "ECE", gpa: 9.1 },
    { name: "Nitin Gupta", roll: 144, course: "ME", gpa: 7.5 },
    { name: "Amit Mehta", roll: 145, course: "CSE", gpa: 8.6 },
    { name: "Sunil Kumar", roll: 146, course: "IT", gpa: 8.0 },
    { name: "Rohit Yadav", roll: 147, course: "ECE", gpa: 9.4 },
    { name: "Anurag Mishra", roll: 148, course: "ME", gpa: 7.2 },
    { name: "Sahil Jain", roll: 149, course: "CSE", gpa: 8.3 },
    { name: "Akhil Patel", roll: 150, course: "IT", gpa: 8.7 },

];

// card container is accessed using document.getElementById
const container = document.getElementById("cardContainer");


// This function uses map function to iterate through whole students array and return an array that contains the html
// strings to insert in card container
// so basically map function returns an array that is initialized as cards
// which looks like this
// cards =[
//  <div><h3></h3><p></p><p></p><p></p></div>,
//  <div><h3></h3><p></p><p></p><p></p></div>,
//  <div><h3></h3><p></p><p></p><p></p></div>,
//  ..........
// ]
// AND THE JOIN FUNCTION IS USED TO ADD ALL THE DIVS TO THE CONTAINER AT ONCE.
function displayCards(data) {

    const cards = data.map(student => {

        return `
      <div class="card">
        <h3>${student.name}</h3>
        <p><strong>Roll:</strong> ${student.roll}</p>
        <p><strong>Course:</strong> ${student.course}</p>
        <p><strong>GPA:</strong> ${student.gpa}</p>
      </div>
    `;

    });

    container.innerHTML = cards.join("");

}
displayCards(students);

// searchbar input is used by the help of the function getElementById
const searchBar = document.getElementById("searchBar");


/* An event listener is attached to the searchbar which checks for the change in input value and executes the arrow function
    upon a triggered event. 
    the arrow function uses filter method to return an array filteredStudents with all the student entries witch matching
    input value.
    at last diplayCard function is called to render the cards on the screen.
*/

searchBar.addEventListener("input", ()=>{
    const searchValue = searchBar.value.toLowerCase();
    const filteredStudents = students.filter(student=>{
       return student.name.toLowerCase().includes(searchValue);
    })
    displayCards(filteredStudents);

})