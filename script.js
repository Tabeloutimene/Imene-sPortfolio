const skillSection = document.getElementById('skills');
const skills = document.querySelectorAll('.skill-level');

window.addEventListener('scroll', () => {
  const sectionTop = skillSection.offsetTop;
  const sectionHeight = skillSection.offsetHeight;
  const scrollPos = window.scrollY + window.innerHeight;

  if (scrollPos > sectionTop + sectionHeight / 4) {
    skills.forEach(skill => {
      const skillValue = skill.getAttribute('data-skill');
      skill.style.width = skillValue;
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('comment-form');
  const textarea = document.getElementById('comment-text');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    textarea.value = ''; 
  });
});