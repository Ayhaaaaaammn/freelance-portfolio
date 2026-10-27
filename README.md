# Портфолио фриланс-разработчика (React + Vite)

Лабораторная работа № 19 «Создание базовой структуры веб-приложения на React с использованием компонентов, JSX и управления состоянием».
Вариант 1 — «Портфолио фриланс-разработчика». Выполнил: Рахманкулов А., гр. 310101.

## Стек

- React 19 (функциональные компоненты, JSX, хук `useState`)
- Vite — сборка и dev-сервер
- CSS Modules (`*.module.css`) — инкапсулированные стили
- PropTypes — проверка типов `props`

Внешние библиотеки для управления состоянием (Redux, MobX, Zustand) не используются.

## Запуск

Требуется Node.js 18+ (рекомендуется 20 LTS).

```bash
git clone https://github.com/Ayhaaaaaammn/freelance-portfolio.git
cd freelance-portfolio
npm install
npm run dev
```

После запуска откройте адрес, который покажет Vite (по умолчанию http://localhost:5173).

Сборка production-версии: `npm run build`, просмотр сборки: `npm run preview`.

## Структура проекта

```
src/
├── assets/
│   ├── icons/            # SVG-иконки (поиск, почта, отправка, сердце и др.)
│   └── projects/         # SVG-превью проектов
├── components/
│   ├── Button/           # Button.jsx + Button.module.css
│   ├── InputField/       # InputField.jsx + InputField.module.css
│   ├── ProjectCard/      # ProjectCard.jsx + ProjectCard.module.css
│   └── Header/           # Header.jsx + Header.module.css
├── data/projects.js      # данные проектов
├── App.jsx               # главная страница, состояние приложения
├── App.module.css
├── index.css             # CSS-переменные и базовые стили
└── main.jsx              # точка входа
```

## Компоненты

| Компонент | Props | Локальное состояние |
|---|---|---|
| `Button` | `label`, `onClick`, `variant`, `icon`, `type`, `disabled` | — |
| `InputField` | `id`, `label`, `placeholder`, `type`, `icon`, `multiline`, `onChange` | `value` — текущее значение поля |
| `ProjectCard` | `title`, `description`, `image`, `tags`, `link`, `year` | `liked` — отметка «Нравится», `expanded` — раскрытое описание |
| `Header` | `name`, `links` | — |

`App` хранит `search` (строка поиска проектов), `message` (текст сообщения) и `sent` (признак отправки).

## Проверка интерактивности

1. Введите текст в поле «Сообщение» и нажмите «Отправить» — значение выводится в консоль браузера (F12 → Console).
2. Введите в поле поиска, например, `react` — список проектов фильтруется.
3. Нажмите на сердечко на карточке — отметка «Нравится» переключается; «Подробнее» раскрывает описание.
