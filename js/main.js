disintegrate.init();

// Made a vote
function vote(event) {
  const parent = event.target.parentElement;
  parent.classList.add('option--voted');
  removeDiscardVote(parent.getAttribute("data-option-discard"));
}

// Remove option discarded
function removeDiscardVote(optionNumber) {
  let classElem = `.option-${optionNumber}`;

  // get elements to remove
  const elem = document.querySelector(classElem);
  const elemVs = document.querySelector('.vs');

  // create disintegrate elements
  const disObj = disintegrate.getDisObj(elem);
  const disObjVs = disintegrate.getDisObj(elemVs);

  // create disintegrate animation
  disintegrate.createSimultaneousParticles(disObj);
  disintegrate.createSimultaneousParticles(disObjVs);

  // remove elements
  elem.remove();
  elemVs.remove();
}
