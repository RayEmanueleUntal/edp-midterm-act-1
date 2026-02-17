const state = {
  formData: {
    studentType: "",
    religion: "",
    civilStatus: "",
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    contact: 0,
    birthdate: "",
    sex: "",
    email: "",
    nationality: "",
  },
  errors: {},
};

const nonEmptyInputs = [
  "studentType",
  "religion",
  "civilStatus",
  "firstName",
  "lastName",
  "contact",
  "birthdate",
  "sex",
  "email",
  "nationality",
];

const handleInputChange = (event) => {
  const { name, value } = event.target;

  // update state
  state.formData[name] = value;
  if (nonEmptyInputs.includes(name) && value.trim() === "") {
    state.errors[name] = "This field cannot be empty";
  } else {
    delete state.errors[name];
  }

  console.log("Current State: ", state.formData);
  console.log("Errors: ", state.errors);
};

const form = document.querySelector("#personal-information-form");
form.addEventListener("input", handleInputChange);

// Form Submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isFormValid = true;

  for (const key in state.formData) {
    if (nonEmptyInputs.includes(key) && state.formData[key] === "") {
      isFormValid = false;
      alert(`Error: ${key} cannot be empty!`);
      return;
    }
  }

  localStorage.setItem("userFormSubmission", JSON.stringify(state.formData));
  alert("Data saved successfully!");
});
