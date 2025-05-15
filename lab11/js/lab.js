// lab.js - JavaScript for the Web
// Author: Halle Fouche
// Date: May 14

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // Convert string to array, sort, and convert back to string
    return inputString.split('').sort().join('');
  }
  
  // Click listener for button
  $("#submit").click(function(){
    // Get value of input field
    const userName = $("#user-name").val();
  
    // Sort it
    const userNameSorted = sortString(userName);
  
    // Append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  });
  
  