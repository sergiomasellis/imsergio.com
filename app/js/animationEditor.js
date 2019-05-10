import anime from 'animejs';

class AnimationEditor {
  constructor() {
    this.currentScene = 0;
    this.actors = [
      // Rect-1
      {
        selector: '.box',
        scenes: [
          {
            x: 137,
            y: 6
          },
          {
            x: 137,
            y: 325,
            scale: '1'
          },
          {
            x: 135,
            y: 708,
            scale: '0.48'
          },
          {
            x: 16,
            y: 1219,
            scale: 0.18
          }
        ]
      }
    ];

    // animation scene helper drag and drop
    this.enableAnimationHelper = true;
    const actors = document.querySelectorAll('.box');
    if (actors === null || actors.length === 0) return false;
    if (this.enableAnimationHelper) {
      var _eventHandlers = {}; // somewhere global
      function addListener(node, event, handler, capture) {
        if (!(node in _eventHandlers)) {
          // _eventHandlers stores references to nodes
          _eventHandlers[node] = {};
        }
        if (!(event in _eventHandlers[node])) {
          // each entry contains another entry for each event type
          _eventHandlers[node][event] = [];
        }
        // capture reference
        _eventHandlers[node][event].push([handler, capture]);
        node.addEventListener(event, handler, capture);
      }

      function removeAllListeners(node, event) {
        if (node in _eventHandlers) {
          var handlers = _eventHandlers[node];
          if (event in handlers) {
            var eventHandlers = handlers[event];
            for (var i = eventHandlers.length; i--; ) {
              var handler = eventHandlers[i];
              node.removeEventListener(event, handler[0], handler[1]);
            }
          }
        }
      }

      [...actors].forEach(actor => {
        actor.addEventListener('mousedown', event => {
          var move = event.currentTarget;

          var lastOffset = move.dataset.lastTransform
            ? JSON.parse(move.dataset.lastTransform)
            : 0;
          var lastOffsetX = lastOffset ? lastOffset.x : 0;
          var lastOffsetY = lastOffset ? lastOffset.y : 0;

          var startX = event.pageX - lastOffsetX;
          var startY = event.pageY - lastOffsetY;

          addListener(document, 'mousemove', e => {
            var newDx = e.pageX - startX;
            var newDy = e.pageY - startY;

            // console.log('dragging', e.pageX - startX, e.pageY - startY);
            move.style.transform =
              'translate(' + newDx + 'px, ' + newDy + 'px)';

            // we need to save last made offset
            move.dataset.lastTransform = JSON.stringify({
              x: newDx,
              y: newDy
            });
          });
        });
      });
      document.addEventListener('mouseup', () => {
        removeAllListeners(document, 'mousemove');
      });
    }

    this.play();

    const nextBtn = document.querySelector('.next-scene');

    nextBtn.addEventListener('click', e => {
      e.preventDefault();
      this.nextScene();
    });

    const prevBtn = document.querySelector('.prev-scene');
    prevBtn.addEventListener('click', e => {
      e.preventDefault();
      this.prevScene();
    });

    const saveBtn = document.querySelector('.save-scene');
    saveBtn.addEventListener('click', () => {
      [...actors].forEach(actor => {
        console.log(actor.className, JSON.parse(actor.dataset.lastTransform));
      });
    });
  }

  play() {
    this.actors.forEach(actor => {
      if (actor.scenes.length > this.currentScene) this.moveThisElement(actor);
    });
  }

  nextScene() {
    this.currentScene++;
    this.play();
  }

  prevScene() {
    if (this.currentScene != 0) this.currentScene--;
    this.play();
  }

  moveThisElement(actor) {
    return anime({
      targets: actor.selector,
      translateX: actor.scenes[this.currentScene].x || 0,
      translateY: actor.scenes[this.currentScene].y || 0,
      opacity: actor.scenes[this.currentScene].opacity || '1',
      scale: actor.scenes[this.currentScene].scale || '1',
      rotate: actor.scenes[this.currentScene].rotate || 0,
      easing: 'easeInOutSine',
      // rotate:actor.scenes[this.currentScene].rotate || 'inherit',
      complete: anim => {
        anim.animatables['0'].target.dataset.lastTransform = JSON.stringify({
          x: actor.scenes[this.currentScene].x,
          y: actor.scenes[this.currentScene].y
        });
      }
    });
  }
}

export default AnimationEditor;
