function doForm () {
  var data = new FormData();
  var all = document.querySelectorAll("#userForm input");

  for (let field of all) {
    if (field.type !== "submit" && field.type !== "button") { 
      if (field.type === "radio" || field.type === "checkbox") {
        if (field.checked) {
          data.append(field.name, field.value); 
        }
      }
      else { data.append(field.name, field.value); }
    }
  }

  for (let [type, name] of data.entries()) { 
    console.log(type, name); 
  }
  
  return false;
}