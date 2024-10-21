/**
 * Enable or disable dark theme
 * @param {boolean} enable
 * @returns {string}
 */
export function darkMode(enable) {
  if (enable ^ document.body.classList.contains('dark-mode')) {
    if (enable) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    return true;
  }
  return false;
}