function showPets() {
  let pets = JSON.parse(localStorage.getItem("pets")) || [];
  let petTable = $("#petTable");
  let petCount = $("#petCount");
  let petAverageAge = $("#petAverageAge");

  petTable.empty();
  petCount.text(`Total pets: ${pets.length}`);

  pets.forEach((pet, index) => {
    let tr = $("<tr>");

    let tdName = $("<td>").text(pet.name);
    let tdAnimal = $("<td>").text(pet.animal);
    let tdAge = $("<td>").text(pet.age);
    let tdGender = $("<td>").text(pet.gender);
    let tdBreed = $("<td>").text(pet.breed);
    let tdService = $("<td>").text(pet.service);
    let tdPay = $("<td>").text(pet.pay);

    let tdAction = $("<td>");
    let editButton = $("<button>")
      .text("Edit")
      .addClass("btn btn-warning btn-sm me-2")
      .on("click", function () {
        enableEdit(tr, index);
      });

    let deleteButton = $("<button>")
      .text("Delete")
      .addClass("btn btn-danger btn-sm")
      .on("click", function () {
        deletePet(index);
      });

    tdAction.append(editButton).append(deleteButton);

    tr.append(
      tdName,
      tdAnimal,
      tdAge,
      tdGender,
      tdBreed,
      tdService,
      tdPay,
      tdAction
    );
    petTable.append(tr);
  });

  calculateAverageAge(pets, petAverageAge);
}

function enableEdit(tr, index) {
  let cells = tr.find("td");

  cells.each(function (i) {
    if (i < cells.length - 1) {
      let cell = $(this);
      let currentValue = cell.text();
      cell.html(
        `<input type="text" value="${currentValue}" class="form-control">`
      );
    }
  });

  let editButton = tr.find("button.btn-warning");
  editButton
    .text("Save")
    .removeClass("btn-warning")
    .addClass("btn-success")
    .off("click")
    .on("click", function () {
      saveEdit(tr, index);
    });
}

function saveEdit(tr, index) {
  let pets = JSON.parse(localStorage.getItem("pets")) || [];
  let cells = tr.find("td");

  pets[index] = {
    name: cells.eq(0).find("input").val(),
    animal: cells.eq(1).find("input").val(),
    age: cells.eq(2).find("input").val(),
    gender: cells.eq(3).find("input").val(),
    breed: cells.eq(4).find("input").val(),
    service: cells.eq(5).find("input").val(),
    pay: cells.eq(6).find("input").val(),
  };

  localStorage.setItem("pets", JSON.stringify(pets));
  showPets();
}

function deletePet(index) {
  let pets = JSON.parse(localStorage.getItem("pets")) || [];
  pets.splice(index, 1);
  localStorage.setItem("pets", JSON.stringify(pets));
  showPets();
}

function calculateAverageAge(pets, displayElement) {
  if (pets.length === 0) {
    displayElement.text("Average age: N/A");
    return;
  }

  let totalAge = pets.reduce((sum, pet) => sum + parseFloat(pet.age), 0);
  let averageAge = (totalAge / pets.length).toFixed(2);

  displayElement.text(`Average age: ${averageAge} years`);
}

$(window).on("load", showPets);
