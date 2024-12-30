document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("loginButton");
  const closeButton = document.getElementById("closeButton");
  const loginPopup = document.getElementById("loginPopup");
  

  // Open popup
  loginButton.addEventListener("click", () => {
    loginPopup.classList.add("show")
    
  });

  // Close popup
  closeButton.addEventListener("click", () => {
    loginPopup.classList.remove("show")
    
  });

  // Close popup when clicking outside the content
  window.addEventListener("click", (event) => {
    if (event.target === loginPopup) {
      loginPopup.classList.remove("show");
      
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const terminalBody = document.getElementById("terminalBody");

  const commands = [
    "<span class='highlight'>User@iOS</span> :~$ Gotowy/a by zdać INFO.2?",
    "<span class='highlight'>Command:</span> cd /kompleksowe/przygotowanie",
    "<span class='highlight'>Output:</span> Directory changed to /wybierz kurs",
    "<span class='highlight'>Command:</span> python3 INF.02/INF.03.py",
    "<span class='highlight'>Output:</span> Server is running...",
  ];

  commands.forEach((command, index) => {
    const line = document.createElement("p");
    line.className = "line";
    line.style.top = `${index * 40}px`; // Space each line 40px apart to avoid overlap
    line.innerHTML = command;
    terminalBody.appendChild(line);
  });

  // Add animation to each line for bouncing horizontally
  const lines = document.querySelectorAll(".line");
  lines.forEach((line) => {
    let direction = 1; // 1 for moving right, -1 for moving left
    let position = 0; // Current position
    const speed = 5; // Pixels per frame

    function animate() {
      const containerWidth = terminalBody.offsetWidth;
      const textWidth = line.offsetWidth;

      if (position + textWidth >= containerWidth || position <= 0) {
        direction *= -1; // Reverse direction on hitting edges
      }

      position += speed * direction;
      line.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  });
});





const asciiArtElement = document.getElementById("ascii-art");

// Frames for the ASCII animation
const catFrames = [
  ` 
  /\\_/\\
 ( o.o )  W
  > ^ <  
`,
  ` 
  /\\_/\\
 ( o.o )  Wi
  > ^ <  
`,
  ` 
  /\\_/\\
 ( o.o )  Wit
  > ^ <  
`,
  ` 
  /\\_/\\
 ( o.o )  Wita
  > ^ <  
`,
  ` 
  /\\_/\\
 ( o.o )  Witaj!
  > ^ <  
`
];

let frameIndex = 0;

function animateCat() {
  asciiArtElement.textContent = catFrames[frameIndex];
  frameIndex = (frameIndex + 1) % catFrames.length; // Loop back to the first frame
}

// Set the animation interval (e.g., update every 500ms)
setInterval(animateCat, 500);












var lvalue= document.getElementById("rectangle").innerHTML;
var textLength = lvalue.length();



(function() {
  "use strict"; // Start of use strict

  function initParallax() {

    if (!('requestAnimationFrame' in window)) return;
    if (/Mobile|Android/.test(navigator.userAgent)) return;

    var parallaxItems = document.querySelectorAll('[data-bss-parallax]');

    if (!parallaxItems.length) return;

    var defaultSpeed = 0.5;
    var visible = [];
    var scheduled;

    window.addEventListener('scroll', scroll);
    window.addEventListener('resize', scroll);

    scroll();

    function scroll() {

      visible.length = 0;

      for (var i = 0; i < parallaxItems.length; i++) {
        var rect = parallaxItems[i].getBoundingClientRect();
        var speed = parseFloat(parallaxItems[i].getAttribute('data-bss-parallax-speed'), 10) || defaultSpeed;

        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          visible.push({
            speed: speed,
            node: parallaxItems[i]
          });
        }

      }

      cancelAnimationFrame(scheduled);

      if (visible.length) {
        scheduled = requestAnimationFrame(update);
      }

    }

    function update() {

      for (var i = 0; i < visible.length; i++) {
        var node = visible[i].node;
        var speed = visible[i].speed;

        node.style.transform = 'translate3d(0, ' + (-window.scrollY * speed) + 'px, 0)';
      }

    }
  }

  initParallax();
})(); // End of use strict

  // JavaScript to dynamically assign animation delays for each line
  const lines = document.querySelectorAll('.code-line');
  lines.forEach((line, index) => {
    line.style.animationDelay = `${index * 2}s`;
  });



  