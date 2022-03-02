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
})
prototype.addEventListener('click', () => {
    clearWorkList()
    prototype.classList.add('active')
    previewTitle.innerHTML = workContent[1].title
    previewDescription.innerHTML = workContent[1].description
})
design.addEventListener('click', () => {
    clearWorkList()
    design.classList.add('active')
    previewTitle.innerHTML = workContent[2].title
    previewDescription.innerHTML = workContent[2].description
})
program.addEventListener('click', () => {
    clearWorkList()
    program.classList.add('active')
    previewTitle.innerHTML = workContent[3].title
    previewDescription.innerHTML = workContent[3].description
})
test.addEventListener('click', () => {
    clearWorkList()
    test.classList.add('active')
    previewTitle.innerHTML = workContent[4].title
    previewDescription.innerHTML = workContent[4].description
})

const workContent = [
    {
        title: 'Аналитика конкурентов',
        description: 'Аналитика бизнес-задач, планирование архитектуры, прототипирование и составление ТЗ.',
        img: '',
    },
    {
        title: 'Создание прототипа',
        description: 'Подготовка структуры сайта. Составление ТЗ дизайнеру. Подготовка концепции и макета сайта',
        img: '',
    },
    {
        title: 'Отрисовка дизайна',
        description: 'Делаем дизайн удобным и понятным, подавая информацию о ваших товарах и услугах в максимально эффективном виде.',
        img: '',
    },
    {
        title: 'Разработка сайта',
        description: 'Разработаем сайта по техническому заданию и дизайну.  Адаптируем ваш сайт под все устройства',
        img: '',
    },
    {
        title: 'Процесс тестирования',
        description: 'Тестируем все системы сайтa. настраиваем инструменты аналитики. наполнение контентом. Запускаем ваш сайт ',
        img: '',
    },
]
const clearWorkList = () => {
    listWork.forEach(element => {
        element.classList.remove('active')
    });
}
