fetch('./scripts/db/users.json')
.then(response => response.json())
.then(res => console.log(res))