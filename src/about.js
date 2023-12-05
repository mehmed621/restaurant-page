export default function createAboutPage() {
  let aboutMainElement = document.createElement("main");
  aboutMainElement.setAttribute("id", "about-main");

  let secondDiv = document.createElement("div");
  secondDiv.setAttribute("id", "about");

  let firstHeader = document.createElement("h3");
  firstHeader.innerText = "About";

  let thirdDiv = document.createElement("div");
  thirdDiv.setAttribute("id", "about-texts");

  let firstParag = document.createElement("p");
  firstParag.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur animi maxime rem sint quam repudiandae assumenda accusantium excepturi? Dolore deleniti quas ea, ab aut doloremque quaerat iure, est saepe modi sunt cupiditate quam quae quisquam maxime molestias voluptatum quod obcaecati soluta enim. Nam explicabo laboriosam voluptate, non totam modi. Assumenda?";

  let secondParag = document.createElement("p");
  secondParag.innerText =
    "Laborum excepturi, nulla velit dignissimos delectus sapiente a quis, labore sunt facere vel reprehenderit praesentium quos hic repellendus. Ipsum officiis, quae nam, aperiam dolore accusamus impedit harum alias fuga dicta illum facere nisi totam, laudantium enim ipsa pariatur culpa. Maxime ipsum impedit quas quis excepturi quidem.";

  let fourthDiv = document.createElement("div");
  fourthDiv.setAttribute("id", "some-about-images");
  fourthDiv.innerText = "About Image";

  thirdDiv.appendChild(firstParag);
  thirdDiv.appendChild(secondParag);
  thirdDiv.appendChild(fourthDiv);

  secondDiv.appendChild(firstHeader);
  secondDiv.appendChild(thirdDiv);

  aboutMainElement.appendChild(secondDiv);

  return aboutMainElement;
}
