'use strict';

// innerText polyfill for Firefox
((document) => {
  const dummy = document.createElement('div');
  if (dummy.innerText === void 0) {
    Object.defineProperty(HTMLElement.prototype, 'innerText', {
      get: function()  { return this.textContent },
      set: function(v) { this.textContent = v; }
    });
  }
})(document);
