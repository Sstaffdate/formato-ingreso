var selectedRow = null;

function showAlert(menssage, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() =>  document.querySelector(".alert").remove(), 3000);


}

function clearfildes(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#rollNo").value = "";
}

document.querySelector("#student-from").addEventListener("submit", (e) => {
    e.preventDefault(); 

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNo = document.querySelector("#rollNo").value;


    if(firstName == "" || lastName == "" || rollNo == ""){
        showAlert("plese fill in all field", "danger");
    }
    else{
    if(selectedRow == null){
        const list = document.querySelector("#student-list");
        const row = document.createElement("tr"); 

        row.innerHTML = `
         <td>${firstName}</td>
         <td>${lastName}</td>
         <td>${rollNo}</td>

         <td>
         <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete"  >delete</a>
      

        
        
        `;
        list.appendChild(row);
        selectedRow = null;
        showAlert("Student add", "success");

           }
           else{
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = rollNo;
            selectedRow = null;
            showAlert("Student info edited", "info");

           }
           clearfildes();


    }
}); 

document.querySelector("#student-list").addEventListener("click", (e) =>{
    targer = e.target;
    if(targer.classList.contains("edit")){
        selectedRow = targer.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#lastName").value = selectedRow.children[1].textContent;
        document.querySelector("#rollNo").value = selectedRow.children[2].textContent;
 
    }
})
 
   
document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("student data deleted", "danger");

    }
})