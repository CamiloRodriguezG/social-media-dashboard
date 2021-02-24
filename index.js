const body = document.querySelector("body");
const header = document.querySelector(".header");
const headerTitle = document.querySelector(".title");
const heardTotalText = document.querySelector(".total-f-text");
const darkModeText = document.querySelector(".toggle-sec p");
const toggle = document.querySelector(".toggle");
const toggleCircle = document.querySelector(".toggle-circle");
const mainCards = document.querySelectorAll(".main-card");
const usersArrobas = document.querySelectorAll(".card-user p");
const numberMainCards = document.querySelectorAll(".card-followers p");
const mainCardSpans = document.querySelectorAll(".card-followers span");
const todayContainerText = document.querySelector(".today-cards-container p");
const todayCards = document.querySelectorAll(".today-card");
const todayCardTitle = document.querySelectorAll(".today-card-inf p");
const todayCardNumber = document.querySelectorAll(".today-card-stadistic p");
const attribution = document.querySelector(".attribution");
function changeMode() {
  body.classList.toggle("dark-body");
  header.classList.toggle("dark-header");
  headerTitle.classList.toggle("title-dark");
  heardTotalText.classList.toggle("total-f-text-dark");
  darkModeText.classList.toggle("dark-mode");
  toggle.classList.toggle("dark-toggle");
  toggleCircle.classList.toggle("dark-toggle-circle");
  mainCards.forEach(function (mainCard) {
    mainCard.classList.toggle("main-card-dark");
  });
  usersArrobas.forEach(function (arroba) {
    arroba.classList.toggle("dark-mode");
  });
  numberMainCards.forEach(function (number) {
    number.classList.toggle("dark-number");
  });
  mainCardSpans.forEach(function (span) {
    span.classList.toggle("dark-mode");
  });
  todayContainerText.classList.toggle("title-dark");
  todayCards.forEach(function (todayCard) {
    todayCard.classList.toggle("today-card-dark");
  });
  todayCardTitle.forEach(function (title) {
    title.classList.toggle("dark-mode");
  });
  todayCardNumber.forEach(function (number) {
    number.classList.toggle("dark-number");
  });
  //atribution styles
  attribution.classList.toggle("dark-mode");
}
