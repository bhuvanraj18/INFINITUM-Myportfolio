const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const hoverSign = document.querySelector(".hover-sign");

//Side Bar elements
const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");

const videoList = [video1, video2, video3];

videoList.forEach(function(video) {
  video.addEventListener("mouseover", function() {
    video.play();
    hoverSign.classList.add("active");
  });
  video.addEventListener("mouseout", function() {
    video.pause();
    hoverSign.classList.remove("active");
  });
});

//Sidebar elements
menu.addEventListener("click", function() {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});
close.addEventListener("click", function() {
  sideBar.classList.add("close-sidebar");
  sideBar.classList.remove("open-sidebar");
});

// --- Amazing Scroll Animations (bi-directional) ---


document.addEventListener("DOMContentLoaded", function() {
  const amazingClasses = ["fadeIn", "slideUp", "zoomIn", "rotateIn", "blurIn"];

  amazingClasses.forEach(cls => {
    document.querySelectorAll(`.${cls}`).forEach(el => {
      el.classList.add("scroll-animate-init");
    });
  });

  const allAnimatedClasses = [
    ...amazingClasses,
    "autoBlur",
    "autoDisplay",
    "fadeInRight"
  ];

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        allAnimatedClasses.forEach(cls => {
          if (entry.target.classList.contains(cls)) {
            if (entry.isIntersecting) {
              entry.target.classList.remove("scroll-animate-init");
              entry.target.classList.add("scroll-animate-active");
            } else {
              entry.target.classList.remove("scroll-animate-active");
              entry.target.classList.add("scroll-animate-init");
            }
          }
        });
      });
    },
    { threshold: 0.2 }
  );

  allAnimatedClasses.forEach(cls => {
    document.querySelectorAll(`.${cls}`).forEach(el => {
      observer.observe(el);
    });
  });
});

// Hide loader overlay with smooth transition when page is fully loaded
window.addEventListener('load', function() {
  var loader = document.getElementById('loader-overlay');
  var mainContent = document.querySelector('body > .container'); // adjust selector if needed
  if (mainContent) {
    mainContent.style.transition = 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)';
    mainContent.style.opacity = '0';
  }
  if (loader) {
    loader.style.transition = 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)';
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    setTimeout(function() {
      loader.style.display = 'none';
      if (mainContent) {
        mainContent.style.opacity = '1';
      }
    }, 700);
  } else if (mainContent) {
    // fallback if loader not found
    mainContent.style.opacity = '1';
  }
});

// On DOMContentLoaded, hide main content until loader is gone
window.addEventListener('DOMContentLoaded', function() {
  var mainContent = document.querySelector('body > .container');
  if (mainContent) {
    mainContent.style.opacity = '0';
  }
});

