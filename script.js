const burgerBtn = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')
const body = document.querySelector('body')
const listWork = document.querySelectorAll('.work__list__item')
const analytic = document.querySelector('#analytic')
const prototype = document.querySelector('#prototype')
const design = document.querySelector('#design')
const program = document.querySelector('#program')
const test = document.querySelector('#test')
const previewWork = document.querySelector('.preview__work')
const previewTitle = document.querySelector('.preview__work__title')
const previewDescription = document.querySelector('.preview__work__description')
const openBtn = document.querySelectorAll('.open__modal__btn')
const modal = document.querySelector('.modal')
const modalContent= document.querySelector('.modal__block_content')
const modalBlock = document.querySelector('.modal__block')
const cross = document.querySelector('.cross')
const picturePreview = document.querySelector('.preview__work_img')

openBtn.forEach(element => {
    element.addEventListener('click', () => {
        modal.classList.add('active')
        body.classList.add("no__scroll")
    })
});
modal.addEventListener('click', (e) => {
    if(e.target == modalBlock) {
        modal.classList.remove('active')
        body.classList.remove("no__scroll")
    }
})
cross.addEventListener('click', (e) => {
    modal.classList.remove('active')
    body.classList.remove("no__scroll")
})

burgerBtn.addEventListener('click', () => {
    headerMenu.classList.toggle("active");
    burgerBtn.classList.toggle("active");
    body.classList.toggle("no__scroll")
})

analytic.addEventListener('click', () => {
    clearWorkList()
    analytic.classList.add('active')
    previewTitle.innerHTML = workContent[0].title
    previewDescription.innerHTML = workContent[0].description
    picturePreview.src = workContent[0].img
})
prototype.addEventListener('click', () => {
    clearWorkList()
    prototype.classList.add('active')
    previewTitle.innerHTML = workContent[1].title
    previewDescription.innerHTML = workContent[1].description
    picturePreview.src = workContent[1].img
})
design.addEventListener('click', () => {
    clearWorkList()
    design.classList.add('active')
    previewTitle.innerHTML = workContent[2].title
    previewDescription.innerHTML = workContent[2].description
    picturePreview.src = workContent[2].img
})
program.addEventListener('click', () => {
    clearWorkList()
    program.classList.add('active')
    previewTitle.innerHTML = workContent[3].title
    previewDescription.innerHTML = workContent[3].description
    picturePreview.src = workContent[3].img
})
test.addEventListener('click', () => {
    clearWorkList()
    test.classList.add('active')
    previewTitle.innerHTML = workContent[4].title
    previewDescription.innerHTML = workContent[4].description
    picturePreview.src = workContent[4].img
})

const workContent = [
    {
        title: 'Аналитика конкурентов',
        description: 'Аналитика бизнес-задач, планирование архитектуры, прототипирование и составление ТЗ.',
        img: 'img/markus-winkler-IrRbSND5EUc-unsplash.jpg',
    },
    {
        title: 'Создание прототипа',
        description: 'Подготовка структуры сайта. Составление ТЗ дизайнеру. Подготовка концепции и макета сайта',
        img: 'img/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg',
    },
    {
        title: 'Отрисовка дизайна',
        description: 'Делаем дизайн удобным и понятным, подавая информацию о ваших товарах и услугах в максимально эффективном виде.',
        img: 'img/32222.jpg',
    },
    {
        title: 'Разработка сайта',
        description: 'Разработаем сайта по техническому заданию и дизайну.  Адаптируем ваш сайт под все устройства',
        img: 'img/florian-olivo-4hbJ-eymZ1o-unsplash.jpg',
    },
    {
        title: 'Процесс тестирования',
        description: 'Тестируем все системы сайтa. настраиваем инструменты аналитики. наполнение контентом. Запускаем ваш сайт ',
        img: 'img/kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg',
    },
]
const clearWorkList = () => {
    listWork.forEach(element => {
        element.classList.remove('active')
    });
}
