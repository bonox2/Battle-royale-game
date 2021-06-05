const about_swiper = new Swiper('.about-swiper', {
  slidesPerView: 1,
  loop: true,
  effect: "coverflow",
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 50,
    slideShadows: false,
    modifier: 3,
  },
  navigation: {
    nextEl: '.about-slider-arrow-next',
  },
})

const accordion = document.getElementById('accordion')
const activeItem = accordion.querySelector('.active')
activeItem.lastElementChild.style.height = getComputedStyle(activeItem.lastElementChild.firstElementChild).height

accordion.addEventListener('click', e => {
  const title = e.target.closest('.accordion-title')
  if (title) {
    const item = title.parentElement
    const collapse = title.nextElementSibling
    const content = collapse.firstElementChild
    if (!item.classList.contains('active')) {
      collapse.style.height = getComputedStyle(content).height
      accordion.querySelectorAll('.active').forEach(item => {
        item.lastElementChild.style.height = 0
        item.classList.remove('active')
      })
      item.classList.add('active')
    } 
  }
})