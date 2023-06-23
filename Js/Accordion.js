const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';

    const icon = header.querySelector('.icon');
    icon.textContent = content.style.display === 'none' ? '+' : '-';
  });
});
