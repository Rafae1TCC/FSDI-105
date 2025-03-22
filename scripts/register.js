let pets = JSON.parse(localStorage.getItem("pets")) || [];
let service = JSON.parse(localStorage.getItem("services")) || [];
console.log(service);

function updateServiceList() {
  let select = $("#txtService");
  select.empty();
  $("#txtService").append(`<option value="Grooming">Grooming</option>`);
  $("#txtService").append(
    `<option value="Monthly Checkup">Monthly Checkup</option>`
  );
  $("#txtService").append(
    `<option value="Training Session">Training Session</option>`
  );
  service.forEach((service) => {
    select.append(`<option value="${service}">${service}</option>`);
  });
}

function Pet(name, animal, age, gender, breed, service, pay) {
  this.name = name;
  this.animal = animal;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.pay = pay;
}

function register() {
  let inputName = $("#txtName").val().trim();
  let inputAnimal = $("#txtAnimal").val().trim();
  let inputAge = $("#txtAge").val().trim();
  let inputGender = $("#txtGender").val().trim();
  let inputBreed = $("#txtBreed").val().trim();
  let inputService = $("#txtService").val().trim();
  let inputPay = $("#txtPay").val().trim();

  if (
    !inputName ||
    !inputAnimal ||
    !inputAge ||
    !inputGender ||
    !inputBreed ||
    !inputService ||
    !inputPay
  ) {
    alert("Please fill in all fields.");
    return;
  }

  let newPet = new Pet(
    inputName,
    inputAnimal,
    inputAge,
    inputGender,
    inputBreed,
    inputService,
    inputPay
  );
  pets.push(newPet);

  localStorage.setItem("pets", JSON.stringify(pets));
  console.log("Registered pets:", pets);

  $("#txtName").val("");
  $("#txtAnimal").val("");
  $("#txtAge").val("");
  $("#txtGender").val("");
  $("#txtBreed").val("");
  $("#txtService").val("");
  $("#txtPay").val("");

  $("#confirmation").html("Your pet has been registered successfully!");
}

function init() {
  if (pets.length === 0) {
    let pet1 = new Pet(
      "Scooby",
      "Dog",
      2,
      "Male",
      "Dane",
      "Grooming",
      "Credit Card"
    );
    let pet2 = new Pet(
      "Scrappy",
      "Cat",
      1,
      "Male",
      "Unknown",
      "Training",
      "Debit Card"
    );
    let pet3 = new Pet(
      "Speedy",
      "Bird",
      12,
      "Male",
      "Cockatoo",
      "Monthly Checkup",
      "Cash"
    );

    pets.push(pet1, pet2, pet3);
    localStorage.setItem("pets", JSON.stringify(pets));
  }
}

$("#txtName").on("input", function () {
  $("#confirmation").html("");
});

$(window).on("load", init);
$(document).ready(function () {
  updateServiceList();
});
