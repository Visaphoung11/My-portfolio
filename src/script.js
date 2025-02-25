const roles = [
  "Web Enthusiast",
  "Anime Lover",
  "Frontend Developer",
  "UI/UX Designer",
  "English Teacher",
  "Financier and Banker",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const jobTitle = document.getElementById("jobTitle");

function typeWriterEffect() {
  const currentRole = roles[roleIndex];
  if (!isDeleting) {
    jobTitle.textContent = currentRole.slice(0, charIndex);
    charIndex++;
    if (charIndex > currentRole.length) {
      isDeleting = true;
      charIndex--;
    }
  } else {
    jobTitle.textContent = currentRole.slice(0, charIndex);
    charIndex--;
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      charIndex = 0;
    }
  }
  setTimeout(typeWriterEffect, 100); // Adjust speed as needed
}

typeWriterEffect();
