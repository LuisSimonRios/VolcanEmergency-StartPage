//Validation code for log in

function login() {
  var user, pass;

  user = document.getElementById("email").value;
  pass = document.getElementById("password").value;

  if (user == "saludpublica" && pass == "saludpublica123") {
    window.open('https://aplicativos.manizalessiis.net/emergencias/actas_visitas/');
  }else{
    alert("Datos incorrectos, intente nuevamente");
  }
}



