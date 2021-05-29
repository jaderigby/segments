class panelWrapper extends HTMLElement {}
window.customElements.define('panel-wrapper', panelWrapper);

class panelInner extends HTMLElement {
  connectedCallback() {
    if (this.hasAttribute('whitespace')) {
      var VAL = this.getAttribute('whitespace');
      this.style.paddingTop = VAL + "px";
      this.style.paddingBottom = VAL + "px";
    }
  }
}
window.customElements.define('panel-inner', panelInner);

class segmentElem extends HTMLElement {}
window.customElements.define('x-seg', segmentElem);

class primeSegment extends HTMLElement {}
window.customElements.define('x-prime', primeSegment);

class segMajor extends HTMLElement {}
window.customElements.define('x-major', segMajor);

class segMinor extends HTMLElement {}
window.customElements.define('x-minor', segMinor);

class segCell extends HTMLElement {}
window.customElements.define('x-cell', segCell);
