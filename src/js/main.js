import '../scss/main.scss';
import '../scss/queries.scss';
import $ from 'jquery';
import 'lightbox2';
import * as bootstrap from 'bootstrap';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faLocationDot,
  faPhone,
  faMailBulk,
  faBarsStaggered,
  faStar,
  faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
library.add(
  faLocationDot,
  faPhone,
  faMailBulk,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faBarsStaggered,
  faStar,
  faStarHalfStroke
);
dom.watch();

// Header scroll
var nav = document.querySelector('.navbar');
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add('header-scrolled');
  } else {
    nav.classList.remove('header-scrolled');
  }
};
// End of Header scroll

// Nav hide
var navBar = document.querySelectorAll('.nav-link');
var navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (e) {
  e.addEventListener('click', function () {
    navCollapse.classList.remove('show');
  });
});
// End of Nav hide

// Enable popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
// End of Enable popovers

// Enable tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// End of Enable tooltips

// Enable toasts
const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}
// End of Enable toasts

// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
// End of Set current year
