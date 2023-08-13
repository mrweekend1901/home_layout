import classNames from 'classnames/bind';
import styles from './Tour.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function TourItem({ img, oldPrice, newPrice, name }) {
  return (
    <div className={cx('tour_group')}>
      <div className={cx('tour_img')}>
        <img src={img} alt="tour" />
      </div>
      <div className={cx('tour_box')}>
        <div className={cx('price')}>
          <p className={cx('old-price')}>{oldPrice}</p>
          <p className={cx('new-price')}>{newPrice}</p>
        </div>
        <p className={cx('tour_name')}>{name}</p>
        <span className={cx('group_rating')}>
          <FontAwesomeIcon className={cx('star', 'active')} icon={faStarSolid} />
          <FontAwesomeIcon className={cx('star', 'active')} icon={faStarSolid} />
          <FontAwesomeIcon className={cx('star', 'active')} icon={faStarSolid} />
          <FontAwesomeIcon className={cx('star', 'active')} icon={faStarSolid} />
          <FontAwesomeIcon className={cx('star')} icon={faStarRegular} />
        </span>
      </div>
    </div>
  );
}

export default TourItem;
