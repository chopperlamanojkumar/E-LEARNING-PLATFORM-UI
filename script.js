// Animate progress bars based on data attribute
document.querySelectorAll('.course').forEach(course => {
  const progress = course.getAttribute('data-progress');
  const fill = course.querySelector('.progress-bar-fill');
  fill.style.width = progress + '%';
});