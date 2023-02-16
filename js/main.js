disintegrate.init();

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

  // get elements to remove
  const elem = document.querySelector(classElem);
  //const elemVs = document.querySelector('.vs');

  //console.log(elemVs);

  // create disintegrate elements
  const disObj = disintegrate.getDisObj(elem);
  //const disObjVs = disintegrate.getDisObj(elemVs);

  // create disintegrate animation
  disintegrate.createSimultaneousParticles(disObj);
  //disintegrate.createSimultaneousParticles(disObjVs);

  // remove elements
  elem.remove();
  //elemVs.remove();
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
    option.className = "option option-1";
    option.setAttribute("data-option-discard", "2");

    const disObj = disintegrate.getDisObj(option);
    disintegrate.createSimultaneousParticles(disObj);
    createVote();
  }, 1700);
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

  //createVs();

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
