const togglebtn = document.querySelector('.toggle-btn')
const toggleicon = document.querySelector('.toggle-btn i')
const dropmenu = document.querySelector('.drop-menu')

togglebtn.onclick = function(){
    dropmenu.classList.toggle('open')
}


// project scroll function

 
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5* 4;
    const boxes = document.querySelectorAll('.box');
    const boxe = document.querySelectorAll('.box1');

    boxes.forEach((box)=> {
        const boxTop = box.getBoundingClientRect().top;
        
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });

    boxe.forEach((box1)=> {
        const boxTop = box1.getBoundingClientRect().top;
        
        if (boxTop < triggerBottom) {
            box1.classList.add('show');
        } else {
            box1.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', checkBoxes);
checkBoxes(); // Initial check when page loads

// zoom in and zoom out

const {innerHeight} = window;

gsap.from("#zoom-out h1" , {
    scale: 5, stager: 0.5, duration: 1,
    scrollTrigger:{
        trigger:"#zoom-out",
        pin:true,
        end: `+=${innerHeight *1.3}`,
        scrub :1
    }
});
// gsap.to("#zoom-in h1" , {
//     scale:200,stager:0.25,duration: 2,
//     scrollTrigger:{
//         trigger:"#zoom-in",
//         pin:true,
//         end: `+=${innerHeight *0.1}`,
//         scrub :3 
//     }
// });


// time line program 

document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".container");
    const timelineLine = document.querySelector(".timeline::after");

    function revealOnScroll() {
        let anyVisible = false;
        containers.forEach(container => {
            const rect = container.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
                container.classList.add("show");
                container.classList.remove("hide");
                anyVisible = true;
            } else {
                container.classList.remove("show");
                container.classList.add("hide");
            }
        });

        if (anyVisible) {
            timelineLine.style.opacity = "1";
        } else {
            timelineLine.style.opacity = "0";
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});


document.getElementById("downloadBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "Mohamed. Abdul Ajees fullstack py 2024.pdf"; // Replace with your actual resume file path
    link.download = "Abdul Ajees fullstack py2024.pdf"; // Change the file name as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});