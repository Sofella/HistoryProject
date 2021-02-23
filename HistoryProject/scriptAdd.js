function myFunction() {
  let year = document.getElementById("inputRok").value;
  fetch('https://192.168.1.105:5001/historytimeline/' + year).then(response => response.json()).then(data => draw(data));
}

function addNew() {
  let myHeaders = new Headers();
  let password = document.getElementById("password").value;
  myHeaders.append("password", password);
  myHeaders.append("Content-Type", "application/json");

  let title = document.getElementById("inputTitle").value;
  let category = document.getElementById("inputCategory").value;
  let type = document.getElementById("inputType").value;
  let dateStart = document.getElementById("inputDateStart").value;
  let dateFinish = document.getElementById("inputDateFinish").value;

  let raw = JSON.stringify({"title":title,"category":category,"Type":type,"DateStart":dateStart,"DateFinish":dateFinish});

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://localhost:5001/historytimeline/addevent", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

function CheckDate(date){
  if (date != null)
  {
  return new Date(date).toLocaleDateString("cs");
  }
  else
  {
    return "Do současnosti";
  }
}

function draw(data) {
  let tab =
        `<thead>
        <tr> 
          <th class="titleTable"></th> 
          <th class="titleTable"></th>
          <th class="titleTable"></th> 
          <th class="titleTable"></th> 
         </tr>
         </thead>
         <tbody>`;

    for (let i  = 0; i < data.length; i++) {
        tab += `<tr>  
    <td class="infoTable">${data[i].title} </td> 
    <td class="infoTable">${new Date(data[i].dateStart).toLocaleDateString("cs")}</td>
    <td class="infoTable">-</td>    
    <td class="infoTable">${Date(data[i].dateFinish)}</td>           
</tr>`;
    }
    tab += `</tbody>`
document.getElementById("historytimeline").innerHTML = tab;
}