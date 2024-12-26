document.body.addEventListener('click', (e) => {
  let target = e.target;

  if(target.classList.contains('burger-mm')) showMenu(target);
  if(target.classList.contains('header-m-nav-item-sub')) showSubMenu(target);
  if (target.classList.contains('header-m-nav-item-submenu-title')) showSubSecondMenu(target);
})


function showMenu (target) {
  target.classList.toggle('open')
  const menu = document.querySelector('.header-m-bottom');
  menu.classList.toggle('active')
}

function showSubMenu(target) {
  const menu = target.querySelector('.header-m-nav-item-submenu');
  menu.classList.toggle('active');
}

function showSubSecondMenu (target) {
  const parent = target.closest('.header-m-nav-item-submenu-block');
  const menu = parent.querySelectorAll('.header-m-nav-item-submenu-nav');
  

  menu.forEach((el) => {
    el.classList.toggle('active');
  })
}