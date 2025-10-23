// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-container');

  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-ques');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of body
    groupBody.classList.toggle('open');

    // Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-body');
        const otherIcon = otherGroup.querySelector('.faq-ques i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
});

// // Mobile Menu
// document.addEventListener('DOMContentLoaded', () => {
//   const hamburgerButton = document.querySelector('.hamburger-button');
//   const mobileMenu = document.querySelector('.mobile-menu');

//   hamburgerButton.addEventListener('click', () =>
//     mobileMenu.classList.toggle('active')
//   );
// });
