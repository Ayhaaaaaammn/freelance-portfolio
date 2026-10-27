import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Button from './components/Button/Button.jsx';
import InputField from './components/InputField/InputField.jsx';
import ProjectCard from './components/ProjectCard/ProjectCard.jsx';
import projects from './data/projects.js';
import searchIcon from './assets/icons/search.svg';
import mailIcon from './assets/icons/mail.svg';
import sendIcon from './assets/icons/send.svg';
import styles from './App.module.css';

const navLinks = [
  { href: '#projects', label: 'Проекты' },
  { href: '#contact', label: 'Контакты' },
];

function App() {
  // Состояние приложения (только useState, без внешних библиотек)
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const filteredProjects = projects.filter((project) => {
    const query = search.trim().toLowerCase();
    if (!query) return true;
    return (
      project.title.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  // Кнопка выводит в консоль значение из поля ввода
  const handleSend = () => {
    console.log('Сообщение из поля ввода:', message);
    setSent(true);
  };

  return (
    <>
      <Header name="Айхан Рахманкулов" links={navLinks} />

      <main className={styles.main} id="top">
        <section className={styles.hero}>
          <span className={styles.badge}>Открыт для новых проектов</span>
          <h1 className={styles.title}>
            Фронтенд-разработчик
            <br />
            на фрилансе
          </h1>
          <p className={styles.lead}>
            Создаю быстрые и удобные веб-приложения на React: от лендингов до сложных панелей
            управления.
          </p>
          <div className={styles.actions}>
            <Button label="Смотреть проекты" onClick={() => (window.location.hash = 'projects')} />
            <Button label="Связаться" variant="secondary" onClick={() => (window.location.hash = 'contact')} />
          </div>
        </section>

        <section className={styles.section} id="projects">
          <div className={styles.sectionHead}>
            <div>
              <h2 className={styles.sectionTitle}>Проекты</h2>
              <p className={styles.sectionText}>
                Найдено проектов: {filteredProjects.length} из {projects.length}
              </p>
            </div>
            <div className={styles.search}>
              <InputField
                id="search"
                type="search"
                placeholder="Поиск по названию или технологии"
                icon={searchIcon}
                onChange={setSearch}
              />
            </div>
          </div>

          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link={project.link}
                year={project.year}
              />
            ))}
          </div>
          {filteredProjects.length === 0 && <p className={styles.empty}>Ничего не найдено. Попробуйте другой запрос.</p>}
        </section>

        <section className={styles.section} id="contact">
          <div className={styles.contact}>
            <div>
              <h2 className={styles.sectionTitle}>Обсудим ваш проект?</h2>
              <p className={styles.sectionText}>
                Напишите пару слов о задаче — отвечу в течение дня.
              </p>
            </div>
            <div className={styles.form}>
              <InputField id="email" label="E-mail" type="email" placeholder="you@example.com" icon={mailIcon} />
              <InputField
                id="message"
                label="Сообщение"
                placeholder="Расскажите о проекте…"
                multiline
                onChange={(value) => {
                  setMessage(value);
                  setSent(false);
                }}
              />
              <Button label="Отправить" icon={sendIcon} onClick={handleSend} disabled={message.trim() === ''} />
              {sent && <p className={styles.success}>Сообщение выведено в консоль браузера (F12 → Console).</p>}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>© 2026 Айхан Рахманкулов · Портфолио фриланс-разработчика</footer>
    </>
  );
}

export default App;
