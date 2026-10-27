import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';
import heartIcon from '../../assets/icons/heart.svg';
import heartFilledIcon from '../../assets/icons/heart-filled.svg';
import externalIcon from '../../assets/icons/external.svg';

/**
 * Карточка проекта. Все данные (заголовок, описание, изображение,
 * технологии, ссылка) приходят через props.
 * Локальное состояние: отметка «Нравится» и раскрытие описания.
 */
function ProjectCard({ title, description, image, tags = [], link = '#', year }) {
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={`Превью проекта «${title}»`} className={styles.image} />
        <button
          type="button"
          className={styles.like}
          onClick={() => setLiked((prev) => !prev)}
          aria-pressed={liked}
          aria-label={liked ? 'Убрать из понравившихся' : 'Отметить как понравившийся'}
        >
          <img src={liked ? heartFilledIcon : heartIcon} alt="" />
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {year && <span className={styles.year}>{year}</span>}
        </div>

        <p className={`${styles.description} ${expanded ? styles.expanded : ''}`}>{description}</p>
        <button type="button" className={styles.more} onClick={() => setExpanded((prev) => !prev)}>
          {expanded ? 'Свернуть' : 'Подробнее'}
        </button>

        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>

        <a href={link} className={styles.link} target="_blank" rel="noreferrer">
          Открыть проект
          <img src={externalIcon} alt="" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
  year: PropTypes.number,
};

export default ProjectCard;
