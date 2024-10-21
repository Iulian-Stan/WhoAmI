/**
 * Convert HTML to DOM object
 * @param {string} html
 * @returns {DocumentFragment}
 */
export function stringToDom(html) {
    return document.createRange().createContextualFragment(html);
}