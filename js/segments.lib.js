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

class segmentElem extends HTMLElement {
  connectedCallback() {
    if (this.hasAttribute('cat')) {
      var CAT = this.getAttribute('cat');
      var self = this;
      var classCat = '';
      switch(CAT) {
        case '2':
          classCat = 'half';
          break;
        case '3':
          classCat = 'thirds';
          break;
        case '4':
          classCat = 'fourths';
          break;
        case '5':
          classCat = 'fifths';
          break;
        case '6':
          classCat = 'sixths';
          break;
        case '7':
          classCat = 'sevenths';
          break;
        case '8':
          classCat = 'eighths';
          break;
      }
      if (classCat) {
        self.classList.add(classCat);
      }
    }
  }
}
window.customElements.define('x-segment', segmentElem);

class primeSegment extends HTMLElement {}
window.customElements.define('x-prime', primeSegment);

class segMajor extends HTMLElement {}
window.customElements.define('x-major', segMajor);

class segMinor extends HTMLElement {}
window.customElements.define('x-minor', segMinor);

class segCell extends HTMLElement {}
window.customElements.define('x-cell', segCell);
