function toggleBox(id) {
  const box = document.getElementById(id);
  const content = box.querySelector('.content');
  const isVisible = content.style.display === 'block';
  content.style.display = isVisible ? 'none' : 'block';
}
