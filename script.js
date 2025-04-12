
// Toggle menu for mobile
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle dropdowns on mobile
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.classList.toggle('active');
    }
  });
});

// dropdown-menu-bar show

const toggleBtn = document.querySelector('.menu-toggle')
const toggleBtnIcon = document.querySelector('.menu-toggle i')
const dropMenuBar = document.querySelector('.dropdown-menu-bar')

menuToggle.addEventListener('click', () => {
  dropMenuBar.classList.toggle('show');

  const isShow =dropMenuBar.classList.contains('show')

  toggleBtnIcon.classList = isShow
  ?'fa-solid fa-xmark'
  :'fa-solid fa-bars'

});

// End nav bar code -----------------End nav bar code 

// client review

const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    // console.log(entry);

    // if (entry.isIntersecting == false)
    if (!entry.isIntersecting) return;

const counterNum = document.querySelectorAll(".counter-numbers");

    const speed =20;

    counterNum.forEach((curElem) => {
      const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const incrementNumber = Math.trunc(targetNumber / speed);
        // console.log(incrementNumber);

        if (initialNum < targetNumber) {
          curElem.innerText = `${initialNum + incrementNumber}+`;
          setTimeout(updateNumber, 100);
        }
      };

      updateNumber();
    });

    observer.unobserve(workSection);
  },
  {
    root: null,
    threshold: 0,
  }
);

workObserver.observe(workSection);

let currentIndex = 0;
const slides = document.querySelectorAll(".review-slide");
const dot = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dot[i].classList.remove("active");
    });
    slides[index].classList.add("active");
    dot[index].classList.add("active");
    currentIndex = index;
}

// Auto-slide function
function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Change slide when clicking dot
function currentSlide(index) {
    showSlide(index);
}

// Auto-slide every 3 seconds
setInterval(autoSlide, 3000);