/**
 * JS File for UL Springshare Theme
 * Needs to reside at https://library.indianapolis.iu.edu/themes/custom/iui_libraries/js/iui-libguides.js
 * or https://demo.library.indianapolis.iu.edu/themes/custom/iui_libraries/js/iui-libguides.js
 */

// Javascript for LibGuides

// After page load, add a class to the HTML element for light or dark mode, based on the user's system preference.
document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.setAttribute('data-dark-mode', 'enabled');
    // Check for color cookie
    const colorCookie = getCookie('color-mode');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (colorCookie) {
        document.documentElement.setAttribute('data-theme', colorCookie);
        setColorModeSwitch(colorCookie); // Update the color mode switch based on the cookie value.
    } else if (prefersDarkScheme) {
        document.documentElement.setAttribute('data-theme', 'dark');
        setColorModeSwitch('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        setColorModeSwitch('light');
    }
});

// Add an event listener to a button to toggle dark mode when clicked
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('color-mode-switch');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleDarkMode);
    }
});

/**
 * Toggles the application theme between light and dark modes.
 * Updates the 'data-theme' attribute on the document element and syncs the switch UI.
 */
function toggleDarkMode() {
    const htmlElement = document.documentElement;
    if (htmlElement.getAttribute('data-theme') === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        setColorModeSwitch('light');
        setCookie('color-mode', 'light'); // Set cookie to remember user's preference
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        setColorModeSwitch('dark');
        setCookie('color-mode', 'dark'); // Set cookie to remember user's preference
    }
}

/**
 * Sets the visual and accessibility state of the color mode switch based on the provided mode.
 *
 * @param {string} mode - The color mode to set ('dark' or 'light').
 */
function setColorModeSwitch(mode) {
    const colorButtonSwitch = document.querySelector('#color-mode-switch');
    const colorModeOffSpan = document.querySelector('#color-mode-switch > span.rvt-switch__off');
    const colorModeOnSpan = document.querySelector('#color-mode-switch > span.rvt-switch__on');
    if (mode === 'dark') {
        colorButtonSwitch.setAttribute('aria-checked', 'true');
        colorModeOffSpan.setAttribute('aria-hidden', 'true');
        colorModeOnSpan.setAttribute('aria-hidden', 'false');
    } else {
        colorButtonSwitch.setAttribute('aria-checked', 'false');
        colorModeOffSpan.setAttribute('aria-hidden', 'false');
        colorModeOnSpan.setAttribute('aria-hidden', 'true');
    }
}

/**
 * Sets a cookie with the given name and value. 
 * Optionally, specify the number of days until the cookie expires.
 * 
 * @param {*} cname 
 * @param {*} cvalue 
 * @param {*} exdays 
 */
function setCookie(cname, cvalue, exdays=1) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * Gets the value of a cookie by its name. 
 * 
 * @param {*} cname 
 * @returns 
 */
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}