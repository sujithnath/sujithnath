import Typed from 'typed.js';

let setInitialHeight = function(){
  document.getElementById('header').style.minHeight = (window.outerHeight-150)+"px";
}

let alterCursor = function(em){
  em.showCursor = false;
  em.el.nextSibling.remove()
}

let startTypEffect = function(){
  let speed = 20;
  new Typed('#name', {
    strings: ["Hey, I'm Sujeith Gopinath"],
    typeSpeed: speed,
    startDelay: 5,
    onComplete: (self) => {
      alterCursor(self);
      new Typed('#org', {
        strings: ["Frontend Developer"],
        typeSpeed: speed,
        startDelay: 2,
        onComplete: (self) => {
          alterCursor(self);
          new Typed('#desc', {
            stringsElement: '#descValue',
            typeSpeed: 0,
            startDelay: 1,
            onComplete: (self) => {
              alterCursor(self);
              new Typed('#descPrint1', {
                stringsElement: '#description1',
                typeSpeed: speed,
                startDelay: 1,
                onComplete: (self) => {
                  alterCursor(self);
                  new Typed('#descPrint2', {
                    stringsElement: '#description2',
                    typeSpeed: speed,
                    startDelay: 1,
                    onComplete: (self) => {
                      alterCursor(self);
                    },
                  });
                },
              });
            },
          });
        },
      });
    },
  });
}

let initFunctions = function(){
    setInitialHeight();
    startTypEffect();
}

window.onload = initFunctions();
