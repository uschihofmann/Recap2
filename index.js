/* // phew… not a lot going on here. Please add some code!
//toggle bookmarkbutton*/
const bookmarkbutton = document.querySelector('[data-js="bookmark-button"]');
console.log(bookmarkbutton);

bookmarkbutton.addEventListener("click", () => {
  console.log("action");
  bookmarkbutton.classList.toggle("bookmark--active");
});

//TOGGLE ANSWER BUTTON

const answerbutton = document.querySelector('[data-js="answer-button"]');
const answercard = document.querySelector('[data-js="card-answer"]');

answerbutton.addEventListener("click", () => {
  answercard.classList.toggle("card__answer--active");
  if (answercard.classList.contains("card__answer--active")) {
    answerbutton.textContent = "Hide answer";
  } else {
    answerbutton.textContent = "Show answer";
  }
});
