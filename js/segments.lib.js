class panelWrapper extends HTMLElement {}
window.customElements.define('panel-wrapper', panelWrapper);

class panelInner extends HTMLElement {
  connectedCallback() {
    if (this.hasAttribute('space')) {
      var VAL = this.getAttribute('space');
      this.style.paddingTop = VAL + "px";
      this.style.paddingBottom = VAL + "px";
    }
  }
}
window.customElements.define('panel-inner', panelInner);

class segmentElem extends HTMLElement {
  connectedCallback() {
    if (this.hasAttribute('type')) {
      var SEG = this.getAttribute('type');
      var self = this;
      var classSeg = '';
      switch(SEG) {
        case '2':
          classSeg = 'half';
          break;
        case '3':
          classSeg = 'thirds';
          break;
        case '4':
          classSeg = 'fourths';
          break;
        case '5':
          classSeg = 'fifths';
          break;
        case '6':
          classSeg = 'sixths';
          break;
        case '7':
          classSeg = 'sevenths';
          break;
        case '8':
          classSeg = 'eighths';
          break;
      }
      if (classSeg) {
        self.classList.add(classSeg);
      }
    }
  }
}
window.customElements.define('x-seg', segmentElem);

class primeSegment extends HTMLElement {}
window.customElements.define('prime-seg', primeSegment);

class segMajor extends HTMLElement {}
window.customElements.define('x-major', segMajor);

class segMinor extends HTMLElement {}
window.customElements.define('x-minor', segMinor);

class segCell extends HTMLElement {}
window.customElements.define('x-cell', segCell);
