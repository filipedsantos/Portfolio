'use strict';

/*=============== FILTERS TABS ===============*/
// const tabs = document.querySelectorAll('[data-target]');
// const tabContents = document.querySelectorAll('[data-content]');

// tabs.forEach(tab => {
//   tab.addEventListener('click', e => {
//     e.preventDefault();
//     const target = document.querySelector(tab.dataset.target);

//     tabContents.forEach(tc => {
//       tc.classList.remove('filters__active');
//     });
//     target.classList.add('filters__active');

//     tabs.forEach(t => {
//       t.classList.remove('filter-tab-active');
//     });
//     tab.classList.add('filter-tab-active');
//   });
// });

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'sunny-outline';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? (themeButton.name = 'moon-outline')
    : (themeButton.name = 'sunny-outline');

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'moon-outline' ? 'add' : 'remove'](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

// Skills section
const skillsHeaders = document.querySelectorAll('.skills__header');
const skillsContent = document.querySelectorAll('skills__content');
const skillsContainer = document.querySelector('.skills__container');

// Event delegation
skillsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  const clicked = e.target.closest('.skills__content');
  console.log(clicked);

  // guard clause
  if (!clicked) return;

  if (clicked.classList.contains('skills__open')) {
    clicked.classList.remove('skills__open');
    clicked.classList.add('skills__close');
  } else {
    clicked.classList.add('skills__open');
    clicked.classList.remove('skills__close');
  }
});

// Qualification tabs

const qualificationsTabs = document.querySelectorAll('[data-target]');
const qualificationsTabContents = document.querySelectorAll('[data-content]');

qualificationsTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    qualificationsTabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active');
    });
    target.classList.add('qualification__active');

    qualificationsTabs.forEach(tab => {
      tab.classList.remove('qualification__active');
    });
    tab.classList.add('qualification__active');
  });
});
