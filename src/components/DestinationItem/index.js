import classNames from 'classnames/bind';
import styles from './DestinationItem.module.scss';

const cx = classNames.bind(styles);

function DestinantionItem({ img, name }) {
  return (
    <div className={cx('destinations_group')}>
      <img className={cx('destinations_img')} src={img} alt="destination" />
      <p className={cx('destination_name')}>{name}</p>
    </div>
  );
}

export default DestinantionItem;
