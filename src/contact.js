import './style.css';

export default function createContactPage() {
  let contactMainElement = document.createElement("main");
  contactMainElement.setAttribute("id", "contact-main");

  /* Contact Us Header */
  let firstDiv = document.createElement("div");
  firstDiv.setAttribute("id", "contact");

  let firstHeading = document.createElement("h3");
  firstHeading.innerText = "Contact Us";

  /* address div */
  let secondDiv = document.createElement("div");
  secondDiv.setAttribute("id", "address");
  let firstAddressHeading = document.createElement("h4");
  firstAddressHeading.innerText = "Phone: +123456789000";
  firstAddressHeading.classList.add("contact-infos");
  let secondAddressHeading = document.createElement("h4");
  secondAddressHeading.innerText =
    "Address: Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  secondAddressHeading.classList.add("contact-infos");
  let thirdAddressHeading = document.createElement("h4");
  thirdAddressHeading.innerText = "Email: restaurant.name@email,com";
  thirdAddressHeading.classList.add("contact-infos");
  secondDiv.appendChild(firstAddressHeading);
  secondDiv.appendChild(secondAddressHeading);
  secondDiv.appendChild(thirdAddressHeading);

  let formElement = document.createElement("form");
  formElement.setAttribute("action", "action.php");
  formElement.setAttribute("id", "restaurant-form-id");

  let inputsContainer = document.createElement("div");
  inputsContainer.setAttribute("id", "inputs");

  let firstLabelDiv = document.createElement("div");
  firstLabelDiv.classList.add("label-group");
  let label1 = document.createElement("label");
  label1.setAttribute("for", "name");
  label1.innerText = "Your Name: ";
  let input1 = document.createElement("input");
  input1.setAttribute("type", "text");
  input1.setAttribute("id", "name");
  firstLabelDiv.appendChild(label1);
  firstLabelDiv.appendChild(input1);

  let secondLabelDiv = document.createElement("div");
  secondLabelDiv.classList.add("label-group");
  let label2 = document.createElement("label");
  label2.setAttribute("for", "email");
  label2.innerText = "Your Email: ";

  let input2 = document.createElement("input");
  input2.setAttribute("type", "email");
  input2.setAttribute("id", "email");
  secondLabelDiv.appendChild(label2);
  secondLabelDiv.appendChild(input2);

  let thirdLabelDiv = document.createElement("div");
  thirdLabelDiv.classList.add("label-group");
  let label3 = document.createElement("label");
  label3.setAttribute("for", "phone");
  label3.innerText = "Your Phone: ";
  let input3 = document.createElement("input");
  input3.setAttribute("type", "text");
  input3.setAttribute("id", "phone");
  thirdLabelDiv.appendChild(label3);
  thirdLabelDiv.appendChild(input3);

  let fourthLabelDiv = document.createElement("div");
  fourthLabelDiv.classList.add("label-group");
  let label4 = document.createElement("label");
  label4.setAttribute("for", "your-address");
  label4.innerText = "Your Address: ";
  let input4 = document.createElement("input");
  input4.setAttribute("type", "text");
  input4.setAttribute("id", "your-address");
  fourthLabelDiv.appendChild(label4);
  fourthLabelDiv.appendChild(input4);

  let fifthFormDiv = document.createElement("div");
  fifthFormDiv.classList.add("label-group");
  let label5 = document.createElement("label");
  label5.setAttribute("for", "message");
  label5.setAttribute("id", "your-message");
  label5.innerText = "Your Message: ";
  let textarea1 = document.createElement("textarea");
  textarea1.setAttribute("name", "name-message");
  textarea1.setAttribute("id", "message");
  textarea1.setAttribute("cols", "40");
  textarea1.setAttribute("rows", "6");
  fifthFormDiv.appendChild(label5);
  fifthFormDiv.appendChild(textarea1);

  /* inputs */
  inputsContainer.appendChild(firstLabelDiv);
  inputsContainer.appendChild(secondLabelDiv);
  inputsContainer.appendChild(thirdLabelDiv);
  inputsContainer.appendChild(fourthLabelDiv);
  inputsContainer.appendChild(fifthFormDiv);

  /* button */
  let buttonElement = document.createElement("button");
  buttonElement.setAttribute("type", "submit");
  buttonElement.innerText = "Submit";

  formElement.appendChild(inputsContainer);
  formElement.appendChild(buttonElement);

  contactMainElement.appendChild(firstHeading);
  contactMainElement.appendChild(secondDiv);
  contactMainElement.appendChild(formElement);

  return contactMainElement;
}
