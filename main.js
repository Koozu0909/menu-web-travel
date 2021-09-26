/********  SHOWBARS  *********/
const navMenu = document.getElementById('nav-menu');
const   navToggle =  document.getElementById('nav-toggle');
const    navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))





var swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    direction: getDirection(),
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      }
    }
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 260 ? "vertical" : "horizontal";

    return direction;
  }




const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};




const btnGoTop = document.getElementById("btn-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnGoTop.style.display = "block";
  } else {
    btnGoTop.style.display = "none";
  }
}

function goToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



const filterGuest = document.querySelector(".filter-guest")
const filterIcon = document.getElementById("filter-icon")
const filterAnyTime = document.querySelector(".filter-anytime")
const filterIcon1 = document.getElementById("filter-icon1")
const guestBlock = document.querySelector(".Guest-block")
const timeBlock = document.querySelector(".calendar-container")

filterGuest.addEventListener("click", function(){
  filterIcon1.classList.toggle("filter-icon");
  guestBlock.classList.toggle("active-guest-block");
} )

filterAnyTime.addEventListener("click", function(){
  filterIcon.classList.toggle("filter-icon");
  timeBlock.classList.toggle("active-guest-block");
} )



////// Adults count
let countAdult = 0;
const valueAdult = document.querySelector("#value1");
const btnAdults = document.querySelectorAll(".btn1");
const valueGuest = document.querySelector("#guest_value");

btnAdults.forEach(function (btnAdult) {
  btnAdult.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      countAdult--;
    } else if (styles.contains("increase")) {
      countAdult++;
    } else {
      countAdult = 0;
    }

    if (countAdult > 4) {
      countAdult =4;
    }
    if (countAdult < 0) {
      countAdult =0;
    }
    if (countAdult === 0) {
      valueAdult.style.color = "#222";
    }
    valueAdult.textContent = countAdult;
  });
});
////// Children count
let countChildren = 0;
const valueChildren = document.querySelector("#value2");
const btnChildrens = document.querySelectorAll(".btn2");


btnChildrens.forEach(function (btnChildren) {
  btnChildren.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease1")) {
      countChildren--;
    } else if (styles.contains("increase1")) {
      countChildren++;
    } else {
      countChildren = 0;
    }

    if (countChildren > 4) {
      countChildren =4;
    }
    if (countChildren < 0) {
      countChildren =0;
    }
    if (countChildren === 0) {
      valueChildren.style.color = "#222";
    }
    valueChildren.textContent = countChildren;
  });
});
//Infants count (Under 2)
let countInfant = 0;
const valueInfant = document.querySelector("#value3");
const btnInfants = document.querySelectorAll(".btn3");


  btnInfants .forEach(function (btnInfant) {
  btnInfant.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease2")) {
      countInfant--;
    } else if (styles.contains("increase2")) {
      countInfant++;
    } else {
      countInfant = 0;
    }

    if (countInfant > 4) {
      countInfant =4;
    }
    if (countInfant < 0) {
      countInfant =0;
    }
    if (countInfant === 0) {
      valueInfant.style.color = "#222";
    }
    valueInfant.textContent = countInfant;
  });
});


const date = new Date();

function renderCalendar() {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();