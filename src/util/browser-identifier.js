/* eslint-disable */

export default class Browser {
  static isOpera() {
    return (
      (!!window.opr && !!opr.addons) ||
      !!window.opera ||
      navigator.userAgent.indexOf(' OPR/') >= 0
    );
  }

  static isFirefox() {
    return typeof InstallTrigger !== 'undefined';
  }

  static isSafari() {
    return (
      /constructor/i.test(window.HTMLElement) ||
      (function(p) {
        return p.toString() === '[object SafariRemoteNotification]';
      })(
        !window['safari'] ||
          (typeof safari !== 'undefined' && safari.pushNotification)
      )
    );
  }

  static isIE() {
    return /*@cc_on!@*/ false || !!document.documentMode;
  }

  static isEdge() {
    return !isIE && !!window.StyleMedia;
  }

  static isChrome() {
    return !!window.chrome && !!window.chrome.webstore;
  }

  static isBlink() {
    return (isChrome || isOpera) && !!window.CSS;
  }
}
