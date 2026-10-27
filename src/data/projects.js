import shopImage from '../assets/projects/shop.svg';
import dashboardImage from '../assets/projects/dashboard.svg';
import mobileImage from '../assets/projects/mobile.svg';
import landingImage from '../assets/projects/landing.svg';

// Данные проектов — передаются в ProjectCard через props.
const projects = [
  {
    id: 1,
    title: 'Интернет-магазин электроники',
    description:
      'Каталог товаров с фильтрами, корзиной и оформлением заказа. Адаптивная вёрстка, интеграция с платёжным сервисом и личный кабинет покупателя.',
    image: shopImage,
    tags: ['React', 'Redux', 'REST API'],
    link: 'https://github.com/',
    year: 2026,
  },
  {
    id: 2,
    title: 'Дашборд аналитики продаж',
    description:
      'Панель с ключевыми показателями, интерактивными графиками и выгрузкой отчётов в Excel для отдела продаж небольшой компании.',
    image: dashboardImage,
    tags: ['React', 'Chart.js', 'ASP.NET Core'],
    link: 'https://github.com/',
    year: 2025,
  },
  {
    id: 3,
    title: 'Мобильное приложение доставки',
    description:
      'Приложение для заказа еды: меню ресторанов, отслеживание курьера на карте и push-уведомления о статусе заказа.',
    image: mobileImage,
    tags: ['React Native', 'Firebase'],
    link: 'https://github.com/',
    year: 2025,
  },
  {
    id: 4,
    title: 'Лендинг студии дизайна',
    description:
      'Одностраничный сайт с анимациями, портфолио работ и формой заявки. Оптимизирован под SEO, оценка Lighthouse — 98 баллов.',
    image: landingImage,
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/',
    year: 2024,
  },
];

export default projects;
