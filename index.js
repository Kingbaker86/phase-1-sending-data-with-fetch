function submitData(name, email) {
    let formData = {
      name: name,
      email: email
    };
  
    let configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObject)
      .then(response => response.json())
      .then(data => {
        let id = data.id;
        document.body.append(id);
      })
      .catch(error => {
        document.body.append(error.message);
      });
  }
       