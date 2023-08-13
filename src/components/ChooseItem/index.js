import classNames from 'classnames/bind';
import styles from './ChooseItem.module.scss';

const cx = classNames.bind(styles);

function ChooseItem({ img, name, desc }) {
  return (
    <div className={cx('choose_group')}>
      <div className={cx('choose_img')}>
        <img className={cx('img_logo')} src={img} alt="choose_img" />
      </div>
      <p className={cx('choose_first')}>{name}</p>
      <p className={cx('choose_second')}>{desc}</p>
    </div>
  );
}

export default ChooseItem;
