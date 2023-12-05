export default function createHomepage() {
  let mainElement = document.createElement("main");
  mainElement.setAttribute("id", "home-main");
  let firstDiv = document.createElement("div");
  firstDiv.setAttribute("id", "home-hero");

  let secondDiv = document.createElement("div");
  secondDiv.classList.add("hamburger-bg");

  let firstHeading = document.createElement("h2");
  firstHeading.innerText = "Restaurant Name";

  let secondHeading = document.createElement("h4");
  secondHeading.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus at ullam sed.";

  secondDiv.appendChild(firstHeading);
  secondDiv.appendChild(secondHeading);
  firstDiv.appendChild(secondDiv);
  mainElement.appendChild(firstDiv);

  return mainElement;
}
