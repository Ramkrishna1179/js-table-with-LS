let table = document.getElementsByTagName("table")[0];
let ar = [];
let sn;
function cfun(n, ln, e, c, g,val) {
  this.name = n;
  this.lname = ln;
  this.email = e;
  this.contact = c;
  this.gender = g;
  // this.srn = srn;
  this.val = val;
}
let arr = JSON.parse(localStorage.getItem("data")) || [];
let form = document.querySelector("#btn");
form.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.querySelector("#fname").value;

  let lname = document.querySelector("#lname").value;

  let email = document.querySelector("#email").value;

  let contact = document.querySelector("#contact").value;

  let gender = document.querySelector("#gender").value;

  // let srn = table.rows.length;

  let val = (parseInt(new Date().getTime().toString()));
  //   check(email,contact)
  //   function check(email,contact) {
  //     if(email==""){
  //         alert("Please input Email");
  //       }
  //       else if(email.indexOf('@')<=0){
  //         alert("Please enter Valid @ input");
  //       }
  //       else if((email.charAt(email.length-4)!==".")&&(email.charAt(email.length-3)!==".")){
  //         alert("Please enter a valid . input");
  //       }
  //       else if(email.includes("gmail")!==true){
  //         alert("Please enter a valid email address")
  //       }

  //       else if(contact==""){
  //         alert("Please input Mobile Number");
  //       }

  //       else if(isNaN(contact)){
  //         alert("Please input Number Value");
  //       }
  //       else if(contact.length <10){
  //         alert("Please input 10 Digit Number");
  //       }
  //       else if(contact.length >10){
  //         alert("Please input 10 Digit Number");
  //       }
  //       else if((contact.charAt(0) != 9) &&
  //         (contact.charAt(0) != 8) && (contact.charAt(0) != 7)){
  //         alert("Please Start Your Number with 9, 8, 7");
  //       }
  // else{
  //   let obj = new cfun(name,lname,email,contact,gender)
  //   arr.push(obj);
  //   localStorage.setItem("data",JSON.stringify(arr));
  //   location.reload();
  // }
  // }
  let obj = new cfun(name, lname, email, contact, gender, val);
  arr.push(obj);
  localStorage.setItem("data", JSON.stringify(arr));
  location.reload();
});
// This append function appending the user input to table
append(arr);
function append(arr) {
  arr.forEach((el, index) => {
    let tbody = document.getElementsByTagName("tbody")[0];
    let tr = document.createElement("tr");
    tr.setAttribute("id", "tr");
    tr.setAttribute("draggable", "true");
    tr.setAttribute("ondragstart", "start()");
    tr.setAttribute("ondragover", "dragover()");

    let sn = document.createElement("td");
    sn.innerHTML =table.rows.length;
    //  sn.setAttribute("id", "sn");

    let cb = document.createElement("input");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("value", el.val);
    cb.addEventListener("click", function (e) {
      //  debugger
      ar.push(Number(e.target.value));
      console.log(Number(e.target.value));
    });
    cb.setAttribute("class", "c");

    let td1 = document.createElement("td");
    td1.innerText = el.name;

    let td2 = document.createElement("td");
    td2.innerText = el.lname;

    let td21 = document.createElement("td");
    td21.innerText = el.gender;

    let td3 = document.createElement("td");
    td3.innerText = el.email;

    let td4 = document.createElement("td");
    td4.innerText = el.contact;
    td4.setAttribute("id", "td4");

    let td5 = document.createElement("td");
    td5.setAttribute("class", "td5");

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.setAttribute("id", "dltbtn");
    btn.addEventListener("click", () => {
      deletedata(arr, index);
    });

    let td6 = document.createElement("td");
    td6.setAttribute("class", "td5");
    let ubtn = document.createElement("button");
    ubtn.innerText = "Update";
    ubtn.setAttribute("data-bs-toggle", "modal");
    ubtn.setAttribute("data-bs-target", "#myModal");
    ubtn.setAttribute("id", "ubtn");
    ubtn.addEventListener("click", () => {
      // let msg = "Do you want to update this row's data?";
      // if(confirm(msg)===true) {
      let up_btn = document.getElementById("btn");
      up_btn.innerText = "Save Changes";
      let newData = arr.splice(index, 1);
      console.log(newData[0]);
      localStorage.setItem("data", JSON.stringify(arr));
      document.getElementById("fname").value = newData[0].name;
      document.getElementById("lname").value = newData[0].lname;
      document.getElementById("gender").value = newData[0].gender;
      document.getElementById("email").value = newData[0].email;
      document.getElementById("contact").value = newData[0].contact;
      // }
      // else{
      // alert("You have cancelled the operation");
      // }
     
    });
    td5.append(btn);
    td6.append(ubtn);
    tr.append(sn, cb, td1, td2, td21, td3, td4, td5, td6);
    tbody.append(tr);
  });
}
function deletedata(arr, index) {
  arr.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(arr));
  window.location.reload();
}
let row;
function start() {
  row = event.target;
}
function dragover() {
  // debugger
  // let tr = document.getElementsByTagName("tr");
  // for(let i = 0;i<tr.length;i++){
  //   tr[i].rowIndex = "";
  // }
  let e = event;
  // var x =e.target.parentElement.children;
  // console.log(x[0].textContent[0])
  e.preventDefault();
  let children = Array.from(e.target.parentNode.parentNode.children);
  if (children.indexOf(e.target.parentNode) > children.indexOf(row)) {
    // var x =e.target.parentElement.children[0].textContent[0];
    // x = '';
    e.target.parentNode.after(row);
    // var y = row.cells[0].innerHTML;
    // y = Number(y)
    // y = y+1;

    // for(let i = 0;i<x.length;i++){(x[i].textContent[0]) = (x[i].textContent[0])}
  } else {
    // var x =e.target.parentElement.children[0].textContent[0];
    // x = '';

    e.target.parentNode.before(row);
    // var y = row.cells[0].innerHTML;
    // y = Number(y)
    // y = y+1;
    // for(let i = 0;i<x.length;i++){(x[i].textContent[0]) =(x[i].textContent[0])}
  }
}
let remove = document.getElementById("multiple");
$("#multiple").on("click", function () {
  $("input:checked").not(".all").parents("tr").remove();
});
$(".all").on("click", function () {
  var $inputs = $("table").find("input");
  $inputs.prop("checked", "checked");
});
function deleterow() {
  for (let j = 0; j < ar.length; j++) {
    arr.forEach((ele, index) => {
      if (ele.val == ar[j]) {
        arr.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(arr));
        window.location.reload();
      }
    });
  }
  // let c = document.getElementsByClassName("c");
  // let arr = JSON.parse(localStorage.getItem("data"));
  // // debugger;
  // arr.forEach(function (index) {
  //   if (c.checked === true) {
  //     console.log("y");
  //   } else {
  //     let x = arr.splice(index, 1);
  //     console.log(x);
  //   }
  // });
}

// console.log(localstorage.key(1))

// let id = null;
//     if(localStorage.data !== undefined){
//     id = JSON.parse(localStorage.data).length+1
//    }
//    else{
//     id=1
//   }

function search(){
 let filter = document.getElementById("search").value.toUpperCase();
//  console.log(filter);
 let mytable = document.getElementsByTagName("table")[0];
// console.log(mytable);
 let tr = mytable.getElementsByTagName("tr");
// console.log(tr);
for(let i=0; i<tr.length; i++){
  let td = tr[i].getElementsByTagName("td")[1];
  // let td1 = tr[i].getElementsByTagName("td")[4];
  if(td){
     let tvalue = td.textContent;
     if(tvalue.toUpperCase().indexOf(filter)>-1){
      tr[i].style.display = "";
     }
     else{
      tr[i].style.display = "none";
     }
  }
}
}
// const dragArea = document.getElementsByTagName('tr');
// new Sortable(dragArea, {
//   animation: 350,
//   orderable: true,
// });
