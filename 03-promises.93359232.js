!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector(".form");function l(n,t){var o=Math.random()>.3;setTimeout((function(){o?Promise.resolve({position:n,delay:t}).then((function(n){var t=n.position,o=n.delay;return e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})):Promise.reject({position:n,delay:t}).catch((function(n){var t=n.position,o=n.delay;return e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}),t)}u.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(u.elements.delay.value),t=Number(u.elements.step.value),o=Number(u.elements.amount.value),r=1;r<=o;r+=1)l(r,n),n+=t}))}();
//# sourceMappingURL=03-promises.93359232.js.map