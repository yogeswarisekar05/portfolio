var counterEl = document.querySelectorAll(".counter");
var barEl = document.querySelectorAll(".loading-bar-front");
var percentages = [100, 100, 80, 60];


counterEl.forEach((count, index) => {
  let value = 0;

  function updateNum() {
    count.innerText = value + "%";
    barEl[index].style.width = value + "%";

    value++;
    if (value <= percentages[index]) {
      setTimeout(updateNum, 20);
    }
  }

  updateNum(); 
});
document.querySelectorAll('.manu').forEach(menuItem => {
      menuItem.addEventListener('click', () => {
        const targetId = menuItem.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });











// var counterEl = document.querySelectorAll(".counter");
// // var counterE2 = document.querySelector(".counter1");
// // var counterE3 = document.querySelector(".counter2");
// // var counterE4 = document.querySelector(".counter3");
// var barEl = document.querySelectorAll(".loading-bar-front");
// // var barE2 = document.querySelector(".front1");
// // var barE3 = document.querySelector(".front2");
// // var barE4 = document.querySelector(".front3");
// var percentages = [100,100,80,60]
// counterE1.forEach((count ,index)=>{
//     let value = 0;



// function updateNum() {
//   count.innerText = value + "%";
//   barEl[index].style.width = value + "%";

//   value++;
//   if (value<=percentages[index]) {
//     setTimeout(updateNum, 20);
//   }
// }
// updateNum();
// });


// // let value2 = 0;
// // updateNum2();

// // function updateNum2() {
// //   counterE2.innerText = value + "%";
// //   barE2.style.width = value + "%";

// //   value++;
// //   if (value<=100) {
// //     setTimeout(updateNum2, 20);
// //   }
// // }

// // let value3 = 0;
// // updateNum3();

// // function updateNum3() {
// //   counterE3.innerText = value + "%";
// //   barE3.style.width = value + "%";

// //   value++;
// //   if (value<80) {
// //     setTimeout(updateNum3, 20);
// //   }
// // }

// // let value4 = 0;
// // updateNum4();

// // function updateNum4() {
// //   counterE4.innerText = value + "%";
// //   barE4.style.width = value + "%";

// //   value++;
// //   if (value<50) {
// //     setTimeout(updateNum4, 20);
// //   }
// // }

