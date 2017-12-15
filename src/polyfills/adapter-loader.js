// this file is required to make Custom Elements work in both old & new browsers
// although being hacky, it's the only working solution as for the time of writing it
// Custom Elements require ES6 classes to work
// in order to enable babel processed code (ES6->ES5) work with Custom Elements, the original adapter below is required
// however, it's written itself in ES6, which would make IE fail. No comments.
// the only generic solution is to check if CustomElements are enabled or not.
// see details in: https://github.com/webcomponents/webcomponentsjs/issues/749

// use only pure ES5

(function(root){
  root.getScript = function(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.head.appendChild(script);
  }
}(window));

var customElementsES5Adapter = 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.21/custom-elements-es5-adapter.js';
if (window.customElements) { // gonna be ignored by IE
  console.log('loading');
  getScript(customElementsES5Adapter);
}
