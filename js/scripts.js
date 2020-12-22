let todaysDate = new Date();
const currentYear = todaysDate.getFullYear();
const footer = document.querySelector('footer > p');
footer.innerHTML = `Patrick Cullen 2020 - ${currentYear}`;
