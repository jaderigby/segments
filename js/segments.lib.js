class PanelWrapper extends HTMLElement {}
window.customElements.define('panel-wrapper', PanelWrapper);

class PanelInner extends HTMLElement {
  connectedCallback() {
    if (this.hasAttribute('space')) {
      const VAL = this.getAttribute('space');
      const valList = VAL.split(',');
      if (valList.length > 1) {
        this.style.paddingTop = valList[0] + "px";
        this.style.paddingBottom = valList[1] + "px";
      }
      else {
        this.style.paddingTop = VAL + "px";
        this.style.paddingBottom = VAL + "px";
      }
    }
  }
}
window.customElements.define('panel-inner', PanelInner);

document.addEventListener('DOMContentLoaded', () => {

  class PanelComplete extends PanelWrapper {
    connectedCallback() {
      const VAL = this.getAttribute('space');
      const prepped = this.innerHTML;
      const valList = (VAL) ? VAL.split(',') : null;
      if (VAL) {
        if (valList.length > 1) {
          this.innerHTML = `<panel-inner space="${valList[0]},${valList[1]}">${prepped}</panel-inner>`;
        }
        else {
          this.innerHTML = `<panel-inner space="${valList[0]}">${prepped}</panel-inner>`;
        }
      }
      else {
        this.innerHTML = `<panel-inner>${prepped}</panel-inner>`;
      }
    }
  }

  window.customElements.define('x-panel', PanelComplete);

});

class clearWrap extends HTMLElement {
  connectedCallback() {
    if (this.hasAttribute('space')) {
      const VAL = this.getAttribute('space');
      const valList = VAL.split(',');
      if (valList.length > 1) {
        this.style.paddingTop = valList[0] + "px";
        this.style.paddingBottom = valList[1] + "px";
      }
      else {
        this.style.paddingTop = VAL + "px";
        this.style.paddingBottom = VAL + "px";
      }
    }
  }
}
window.customElements.define('clear-wrap', clearWrap);

class colorWrap extends HTMLElement {
  connectedCallback() {
    if (this.hasAttribute('space')) {
      const VAL = this.getAttribute('space');
      const valList = VAL.split(',');
      if (valList.length > 1) {
        this.style.paddingTop = valList[0] + "px";
        this.style.paddingBottom = valList[1] + "px";
      }
      else {
        this.style.paddingTop = VAL + "px";
        this.style.paddingBottom = VAL + "px";
      }
    }
  }
}
window.customElements.define('x-wrap', colorWrap);

class borderWrap extends HTMLElement {
  connectedCallback() {
    if (this.hasAttribute('space')) {
      const VAL = this.getAttribute('space');
      const valList = VAL.split(',');
      if (valList.length > 1) {
        this.style.paddingTop = valList[0] + "px";
        this.style.paddingBottom = valList[1] + "px";
      }
      else {
        this.style.paddingTop = VAL + "px";
        this.style.paddingBottom = VAL + "px";
      }
    }
  }
}
window.customElements.define('border-wrap', borderWrap);

class segmentElem extends HTMLElement {
  connectedCallback() {
    if (this.hasAttribute('of')) {
      const SEG = this.getAttribute('of');
      const self = this;
      let classSeg = '';
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
        default:
          classSeg = 'eighths';
          break;
      }
      if (classSeg) {
        self.classList.add(classSeg);
      }
    }
  }
}
window.customElements.define('x-segment', segmentElem);

class primeSegment extends HTMLElement {}
window.customElements.define('prime-seg', primeSegment);

class segMajor extends HTMLElement {}
window.customElements.define('x-major', segMajor);

class segMinor extends HTMLElement {}
window.customElements.define('x-minor', segMinor);

class segCell extends HTMLElement {}
window.customElements.define('x-cell', segCell);
