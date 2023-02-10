function vote(event) {
  console.log(event);
  event.target.parentElement.classList.add('option--voted');
}
