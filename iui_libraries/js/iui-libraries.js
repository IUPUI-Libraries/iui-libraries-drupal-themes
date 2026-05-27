/**
 * @file
 * IU Indianapolis Libraries behaviors.
 */
(function (Drupal, once) {

  'use strict';

  // 1. IMMEDIATE INITIALIZATION (Prevents Flash of Unstyled Content)
  // We determine the theme right away before the rest of the DOM behaviors trigger.
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', initialTheme);

  Drupal.behaviors.iuiLibraries = {
    attach(context) {
      // 2. DOM BINDING via core/once
      const switches = once('iuiColorModeToggle', '[data-rvt-switch="color-mode-switch"]', context);

      switches.forEach((switchEl) => {
        // Sync the visual/accessibility state of the Rivet switch to match our initial theme
        const currentTheme = document.documentElement.getAttribute('data-theme');
        switchEl.setAttribute('aria-checked', currentTheme === 'dark' ? 'true' : 'false');

        // 3. EXPLICIT OVERRIDE CLICK HANDLER
        switchEl.addEventListener('click', () => {
          const isDarkNow = document.documentElement.getAttribute('data-theme') === 'dark';
          const newTheme = isDarkNow ? 'light' : 'dark';

          // Force update the DOM attribute and override localStorage permanently
          document.documentElement.setAttribute('data-theme', newTheme);
          localStorage.setItem('theme', newTheme);

          // Update Rivet switch state
          switchEl.setAttribute('aria-checked', newTheme === 'dark' ? 'true' : 'false');
        });
      });
    }
  };

})(Drupal, once);
