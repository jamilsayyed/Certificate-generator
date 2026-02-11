function updateLetter() {
    // Get inputs
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const date = document.getElementById('date').value;
    const salary = document.getElementById('salary').value;
    const issueDate = document.getElementById('issueDate').value;

    // Update HTML elements if input is not empty
    if(name) document.getElementById('displayName').innerText = name;
    if(role) document.getElementById('displayRole').innerText = role;
    if(date) document.getElementById('displayDate').innerText = date;
    if(issueDate) document.getElementById('displayIssueDate').innerText = issueDate;
    
    // Handle Salary Sentence logic
    const salaryElem = document.getElementById('displaySalary');
    const salarySentence = document.getElementById('salarySentence');
    
    if(salary) {
        salaryElem.innerText = salary;
        salarySentence.style.display = "inline"; // Show if user types salary
    } else {
        // Optional: Hide the salary sentence if no salary is provided to match image exactly
        salaryElem.innerText = "";
        // salarySentence.style.display = "none"; 
    }
}

function downloadPDF() {
    const element = document.getElementById('letter-content');
    const name = document.getElementById('name').value || "Offer_Letter";

    const opt = {
        margin:       0, // No margin because we did padding in CSS
        filename:     `${name}_RasheedFoundation_Offer.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}
