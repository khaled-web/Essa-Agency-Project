/* Set Year */
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
 link.addEventListener("click", e => {
  // prevent default
  e.preventDefault();

  const id = e.target.getAttribute("href").slice(1);
  const element = document.getElementById(id);
  //
  let position = element.offsetTop - 62;

  window.scrollTo({
   left: 0,
   top: element.offsetTop,
   top: position,
   behavior: "smooth"
  });
 });
});