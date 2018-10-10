var style = window.getComputedStyle(document.body);

// Colors
export const colorTitle = style.getPropertyValue('--main-blue');
export const colorLight = style.getPropertyValue('--main-grey');
export const colorLighter = style.getPropertyValue('--main-wgrey');
export const colorDark = style.getPropertyValue('--main-dark');
export const colorWhite = style.getPropertyValue('--main-white');

// Paddings
export const headerPad = style.getPropertyValue('--header-pad');
