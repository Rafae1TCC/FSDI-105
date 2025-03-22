$(document).ready(function () {
  const options = {
    fruits: ["Apple", "Banana", "Orange"],
    vegetables: ["Carrot", "Broccoli", "Spinach"],
  };

  $("#category").change(function () {
    const selectedCategory = $(this).val();
    const itemsDropdown = $("#items");

    itemsDropdown.empty();
    itemsDropdown.append(
      `<option value="">Select your ${selectedCategory}</option>`
    );

    if (selectedCategory && options[selectedCategory]) {
      options[selectedCategory].forEach(function (item) {
        itemsDropdown.append(
          `<option value="${item.toLowerCase()}">${item}</option>`
        );
      });
    }
  });

  $("#theme-toggle").click(function () {
    $("body").toggleClass("dark-theme");
    $("p").toggleClass("dark-theme");
  });
});
