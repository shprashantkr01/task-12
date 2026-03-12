
//student array with 4 fields nme, marks, class address.
const students = [
{ name: "Aarav Sharma", marks: 85, class: "12A", address: "Delhi" },
{ name: "Vivaan Verma", marks: 79, class: "12B", address: "Noida" },
{ name: "Aditya Singh", marks: 91, class: "12A", address: "Ghaziabad" },
{ name: "Vihaan Gupta", marks: 82, class: "11C", address: "Delhi" },
{ name: "Arjun Mehta", marks: 75, class: "11B", address: "Faridabad" },
{ name: "Sai Kumar", marks: 88, class: "12C", address: "Gurgaon" },
{ name: "Krishna Yadav", marks: 90, class: "12A", address: "Delhi" },
{ name: "Ishaan Mishra", marks: 76, class: "11A", address: "Lucknow" },
{ name: "Kabir Jain", marks: 83, class: "12B", address: "Jaipur" },
{ name: "Reyansh Patel", marks: 87, class: "11C", address: "Ahmedabad" },

{ name: "Aryan Kapoor", marks: 93, class: "12A", address: "Delhi" },
{ name: "Rohan Das", marks: 72, class: "11B", address: "Kolkata" },
{ name: "Kunal Sharma", marks: 81, class: "12C", address: "Delhi" },
{ name: "Manav Singh", marks: 78, class: "11A", address: "Patna" },
{ name: "Aman Verma", marks: 89, class: "12B", address: "Noida" },
{ name: "Rahul Gupta", marks: 74, class: "11C", address: "Delhi" },
{ name: "Ritik Yadav", marks: 86, class: "12A", address: "Agra" },
{ name: "Harsh Mishra", marks: 80, class: "11B", address: "Kanpur" },
{ name: "Nikhil Jain", marks: 92, class: "12C", address: "Jaipur" },
{ name: "Shivam Patel", marks: 73, class: "11A", address: "Ahmedabad" },

{ name: "Ankit Sharma", marks: 84, class: "12A", address: "Delhi" },
{ name: "Deepak Verma", marks: 77, class: "11B", address: "Noida" },
{ name: "Vikas Singh", marks: 94, class: "12C", address: "Lucknow" },
{ name: "Pankaj Gupta", marks: 71, class: "11A", address: "Delhi" },
{ name: "Mohit Mehta", marks: 83, class: "12B", address: "Mumbai" },
{ name: "Sandeep Kumar", marks: 82, class: "12A", address: "Chandigarh" },
{ name: "Varun Yadav", marks: 90, class: "12C", address: "Agra" },
{ name: "Abhishek Mishra", marks: 79, class: "11B", address: "Kanpur" },
{ name: "Tushar Jain", marks: 87, class: "12A", address: "Jaipur" },
{ name: "Yash Patel", marks: 85, class: "11C", address: "Ahmedabad" },

{ name: "Rajat Kapoor", marks: 92, class: "12B", address: "Delhi" },
{ name: "Lokesh Das", marks: 73, class: "11A", address: "Kolkata" },
{ name: "Sumit Sharma", marks: 84, class: "12C", address: "Delhi" },
{ name: "Gaurav Singh", marks: 76, class: "11B", address: "Patna" },
{ name: "Tarun Verma", marks: 88, class: "12A", address: "Noida" },
{ name: "Naveen Gupta", marks: 74, class: "11C", address: "Delhi" },
{ name: "Prateek Yadav", marks: 89, class: "12B", address: "Agra" },
{ name: "Ajay Mishra", marks: 78, class: "11A", address: "Kanpur" },
{ name: "Dev Jain", marks: 93, class: "12C", address: "Jaipur" },
{ name: "Rakesh Patel", marks: 70, class: "11B", address: "Ahmedabad" },

{ name: "Karan Sharma", marks: 82, class: "12A", address: "Delhi" },
{ name: "Manish Verma", marks: 79, class: "11C", address: "Noida" },
{ name: "Vivek Singh", marks: 91, class: "12B", address: "Lucknow" },
{ name: "Nitin Gupta", marks: 75, class: "11A", address: "Delhi" },
{ name: "Amit Mehta", marks: 86, class: "12C", address: "Mumbai" },
{ name: "Sunil Kumar", marks: 80, class: "11B", address: "Chandigarh" },
{ name: "Rohit Yadav", marks: 94, class: "12A", address: "Agra" },
{ name: "Anurag Mishra", marks: 72, class: "11C", address: "Kanpur" },
{ name: "Sahil Jain", marks: 83, class: "12B", address: "Jaipur" },
{ name: "Akhil Patel", marks: 87, class: "11A", address: "Ahmedabad" }
];

const container = document.getElementById("cardContainer");
// This function uses map method of arrays to iterate through whole students array and return an array 
// that contains the html strings to insert in card container
function displayCards(data) {

    const cards = data.map(student => {

        return `
      <div class="card">
        <h3>${student.name}</h3>
        <p><strong>Marks:</strong> ${student.marks}</p>
        <p><strong>Class:</strong> ${student.class}</p>
        <p><strong>Address:</strong> ${student.address}</p>
      </div>
    `;
    });

    container.innerHTML = cards.join("");

}
displayCards(students);

const searchBar = document.getElementById("searchBar");
/*  An event listener is attached to the searchbar which checks for the change in input value
    and executes the arrow function upon a triggered event. 
    the arrow function uses filter method to return an array filteredStudents with all the student entries witch matching
    input value.
*/

searchBar.addEventListener("input", ()=>{
    const searchValue = searchBar.value.toLowerCase();
    const filteredStudents = students.filter(student=>{
       return student.name.toLowerCase().includes(searchValue);
    })
    displayCards(filteredStudents);

})