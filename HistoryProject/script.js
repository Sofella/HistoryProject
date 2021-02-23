function myFunction() {
  let year = document.getElementById("inputRok").value;
  fetch('https://192.168.1.105:5001/historytimeline/' + year).then(response => response.json()).then(data => draw(data));
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
    <td class="infoTable">${CheckDate(data[i].dateFinish)}</td>           
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
    <td class="infoTable">-</td> 
    <td class="infoTable">${data[i].name} </td> 
    <td class="infoTable">${new Date(data[i].dateStart).toLocaleDateString("cs")}</td>
    <td class="infoTable">-</td> 
    <td class="infoTable">${CheckDate(data[i].dateEnd)}</td>           
</tr>`;
    }
    tab += `</tbody>`
document.getElementById("rulers").innerHTML = tab;
}

