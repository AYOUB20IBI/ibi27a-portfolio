let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

// const sr = ScrollReveal ({
//     distance:'40px',
//     duration:2500,
//     reset:true
// });

// sr.reveal('.logo',{delay:200, origin:'left'})
// sr.reveal('.navbar',{delay:400, origin:'top'})
// sr.reveal('.menu-btn',{delay:520, origin:'right'})

// sr.reveal('.home-text span',{delay:600, origin:'top'})
// sr.reveal('.home-text h1',{delay:680, origin:'left'})
// sr.reveal('.home-text p',{delay:750, origin:'right'})
// sr.reveal('.main-btn',{delay:860, origin:'left'})
// sr.reveal('.share',{delay:950, origin:'bottom'})
// sr.reveal('.home-img',{delay:1000, origin:'right'})
/* Created by Tivotal */

// mous trail effict

// let canvas = document.querySelector(".canvas");
// let ctx = canvas.getContext("2d");
// let spots = [];
// let hue = 0;

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let mouse = {
//   x: undefined,
//   y: undefined,
// };

// canvas.addEventListener("mousemove", function (event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
//   for (let i = 0; i < 3; i++) {
//     spots.push(new tile());
//   }
// });

// class tile {
//   constructor() {
//     this.x = mouse.x;
//     this.y = mouse.y;
//     this.size = Math.random() * 2 + 0.1;
//     this.speedX = Math.random() * 2 - 1;
//     this.speedY = Math.random() * 2 - 1;
//     this.color = "hsl(" + hue + " 100%, 50%)";
//   }
//   update() {
//     this.x += this.speedX;
//     this.y += this.speedY;
//     if (this.size > 0.1) this.size -= 0.03;
//   }
//   draw() {
//     ctx.fillStyle = this.color;
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//     ctx.fill();
//   }
// }

// function handletile() {
//   for (let i = 0; i < spots.length; i++) {
//     spots[i].update();
//     spots[i].draw();
//     for (let j = i; j < spots.length; j++) {
//       let dx = spots[i].x - spots[j].x;
//       let dy = spots[i].y - spots[j].y;

//       let distance = Math.sqrt(dx * dx + dy * dy);
//       if (distance < 90) {
//         ctx.beginPath();
//         ctx.strokeStyle = spots[i].color;
//         ctx.lineWidth = spots[i].size / 10;
//         ctx.moveTo(spots[i].x, spots[i].y);
//         ctx.lineTo(spots[j].x, spots[j].y);
//         ctx.stroke();
//       }
//     }

//     if (spots[i].size <= 0.3) {
//       spots.splice(i, 1);
//       i--;
//     }
//   }
// }

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   handletile();
//   hue++;
//   requestAnimationFrame(animate);
// }

// window.addEventListener("resize", function () {
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;
//   init();
// });

// window.addEventListener("mouseout", function () {
//   mouse.x = undefined;
//   mouse.y = undefined;
// });

// animate();
