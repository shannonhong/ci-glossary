
var SPREADSHEET_ID = "1XZC9m5wIjx9_sIfdM8fEL0QNVcxh3AFWPoWScbAGnys";
var TAB_NAME = "Glossary";

$(document).ready(function () {
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID + "/" + TAB_NAME, function (data) {
    
    console.log(data); 
    
     // go over everything in data and run the code below
    data.forEach(function (entry, index) {
      
      console.log(entry);
      
      $(`<tr> 
            <td>` + entry.Term + `</td>
            <td>` + entry.Type + `</td>
            <td>` + entry.Definition + `</td>
            <td>` + entry["tl;dr"] + `</td>
            <td>` + entry["AKA"] + `</td>
            <td>` + entry["Specific Citation"] + `</td>
         </tr>`)
        .appendTo("table");
  
    });
  });  
});
  


// thank you https://github.com/benborgers/opensheet
//  Thank you to Chia Amiasola for Sheetsites! 