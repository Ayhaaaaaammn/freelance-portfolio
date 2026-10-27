import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';

/**
 * Поле ввода. Хранит своё значение в локальном состоянии (useState)
 * и сообщает о каждом изменении родителю через props.onChange.
 */
function InputField({ id, label, placeholder = '', type = 'text', icon = null, multiline = false, onChange }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  const Tag = multiline ? 'textarea' : 'input';

  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={`${styles.control} ${multiline ? styles.multiline : ''}`}>
        {icon && <img src={icon} alt="" className={styles.icon} aria-hidden="true" />}
        <Tag
          id={id}
          type={multiline ? undefined : type}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          rows={multiline ? 4 : undefined}
        />
      </div>
      <span className={styles.counter}>{value.length} симв.</span>
    </div>
  );
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'search']),
  icon: PropTypes.string,
  multiline: PropTypes.bool,
  onChange: PropTypes.func,
};

export default InputField;
