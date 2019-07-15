function studentClick(event){
  event.preventDefault();

  const url = '/add-student';
  const data = {
    name: document.getElementById('name').value,
    skill: document.getElementById('skill-level').value
  };
  
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(response => window.location.replace("group.html"))
  .catch(error => console.error('Error:', error));

}

function adminClick(event){
  event.preventDefault();
    
  const url = '/admin';
  let random = false;
  if (document.getElementById('isRandom').value === "on") random = true;
  const data = {
    random,
    size: document.getElementById('group').value
  };
  
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => window.location.replace("group.html"))
  .catch(error => console.error('Error:', error));
}

function getNumberOfStudents(){
  fetch("/students")
  .then((response) => {
    return response.json();
  })
  .then((studentData) => {
    document.getElementById('num-students').innerHTML = studentData.length;
  })
  .catch(err => console.log(err));
}

getNumberOfStudents();
