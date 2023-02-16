disintegrate.init();

let optionRemoved;
const elemVs = document.querySelector(".vs");

// Made a vote
function vote(event) {
  const parent = event.target.parentElement;
  parent.classList.add('option--voted');
  removeDiscardVote(parent.getAttribute("data-option-discard"));
  addButtonNewVote();
}

// Remove option discarded
function removeDiscardVote(optionNumber) {
  let classElem = `.option-${optionNumber}`;
  console.log(classElem);

  // get elements to remove
  optionRemoved = document.querySelector(classElem);

  console.log(optionRemoved);

  // create disintegrate elements
  const disObj = disintegrate.getDisObj(optionRemoved);
  const disObjVs = disintegrate.getDisObj(elemVs);

  // create disintegrate animation
  disintegrate.createSimultaneousParticles(disObj);
  disintegrate.createSimultaneousParticles(disObjVs);

  // remove elements
  //elem.remove();
  //elemVs.remove();
  optionRemoved.style.display = "none";
  elemVs.style.display = "none";
}

function addButtonNewVote() {
  const button = document.createElement("button");
  button.classList.add("button-new-vote");
  button.innerHTML = 'Nueva Votación';
  button.onclick = newVote;

  const container = document.querySelector(".container");
  container.appendChild(button);
}

function newVote() {
  const option = document.querySelector(".option--voted");
  option.classList.add("option--return");

  setTimeout(() => {
    option.classList.remove("option--voted");
    option.classList.remove("option--return");

    const disObj = disintegrate.getDisObj(option);
    disintegrate.createSimultaneousParticles(disObj);
    createVote2();
  }, 1700);
}

function createVote2() {
  optionRemoved.style.display = "flex";
  elemVs.style.display = "block";
}

function createVote() {
  const voteElement = document.createElement("div");
  voteElement.setAttribute("data-dis-type", "simultaneous");
  voteElement.setAttribute("data-option-discard", "1");
  voteElement.classList.add("option");
  voteElement.classList.add("option-2");

  const voteContent = document.createElement("div");
  voteContent.classList.add("content-vote");

  const voteButton = document.createElement("div");
  voteButton.classList.add("vote");
  voteButton.innerHTML = "Votar";

  voteElement.appendChild(voteContent);
  voteElement.appendChild(voteButton);

  createVs();

  const container = document.querySelector(".container");
  container.appendChild(voteElement);
  
  voteButton.addEventListener("click", (event) => {
    vote(event);
  });
}

function createVs() {
  const vsElement = document.createElement("div");
  vsElement.setAttribute("data-dis-type", "simultaneous");
  vsElement.classList.add("vs");
  vsElement.innerHTML = "VS";

  const container = document.querySelector(".container");
  container.appendChild(vsElement);
}
