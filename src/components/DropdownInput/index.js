import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function DropdownInput({ width, placeholder, icon, options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = value => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className={cx('container')} style={{ width }} onClick={handleDropdownClick}>
      <input
        type="text"
        className={cx('input')}
        value={selectedValue ? selectedValue : placeholder}
        readOnly
      />
      <div className={cx('icon')}>{icon}</div>

      {isOpen && (
        <ul className={cx('dropdown-menu')}>
          {options.map(option => (
            <li
              className={cx('dropdown-item')}
              key={option.id}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownInput;
