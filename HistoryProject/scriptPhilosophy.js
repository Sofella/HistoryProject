function myFunction() {
  let year = document.getElementById("inputRok").value;
  fetch('https://192.168.1.105:5001/historytimeline/GetByCategory/' + year + '?category=Philosophy').then(response => response.json()).then(data => draw(data));
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
document.getElementById("historytimeline").innerHTML = tab;
}
