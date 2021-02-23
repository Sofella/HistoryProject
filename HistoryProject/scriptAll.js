function myFunction() {
  let year = document.getElementById("inputRok").value;
  fetch('https://192.168.1.105:5001/historytimeline/GetByType/' + year + '?type=Event').then(response => response.json()).then(data => drawevents(data));
  fetch('https://192.168.1.105:5001/historytimeline/GetByType/' + year + '?type=Long.last').then(response => response.json()).then(data => drawlong(data));
  fetch('https://192.168.1.105:5001/historytimeline/GetByType/' + year + '?type=Person').then(response => response.json()).then(data => drawpeople(data));
   fetch('https://192.168.1.105:5001/historytimeline/GetByType/' + year + '?type=Invention').then(response => response.json()).then(data => drawinvention(data));
  fetch('https://192.168.1.105:5001/ruler/' + year).then(response => response.json()).then(data => put(data));
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


function drawlong(data) {
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
    <td class="infoTable">${CheckDate(data[i].dateFinish)}</td>           
</tr>`;
    }
    tab += `</tbody>`
document.getElementById("eventslong").innerHTML = tab;
}


function drawevents(data) {
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
</tr>`;
    }
    tab += `</tbody>`
document.getElementById("events").innerHTML = tab;
}

function put(data) {
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
    <td class="infoTable">${data[i].country}</td>
    <td class="infoTable">-></td> 
    <td class="infoTable">${data[i].name} </td> 
    <td class="infoTable">(${new Date(data[i].dateStart).toLocaleDateString("cs")}</td>
    <td class="infoTable">-</td> 
    <td class="infoTable">${CheckDate(data[i].dateEnd)})</td>           
</tr>`;
    }
    tab += `</tbody>`
document.getElementById("rulers").innerHTML = tab;
}

function drawpeople(data) {
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
    <td class="infoTable">${CheckDate(data[i].dateFinish)}</td>           
</tr>`;
    }
    tab += `</tbody>`
document.getElementById("people").innerHTML = tab;
}
