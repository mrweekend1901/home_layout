import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const InputComponent = ({ width, placeholder, icon }) => {
  return (
    <div className={cx('container')} style={{ width }}>
      <input type="text" className={cx('input')} placeholder={placeholder} />
      <div className={cx('icon')}>{icon}</div>
    </div>
  );
};

export default InputComponent;
