let serviceArr = JSON.parse(localStorage.getItem("services")) || [];

function add() {
  let service = $("#addService").val().trim();

  if (service === "") {
    alert("Por favor, ingresa un servicio válido.");
    return;
  }

  if (serviceArr.includes(service)) {
    alert("Este servicio ya existe.");
    return;
  }
  serviceArr.push(service);

  localStorage.setItem("services", JSON.stringify(serviceArr));
  $("#addService").val("");
}
