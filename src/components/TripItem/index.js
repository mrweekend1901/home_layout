import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './TripItem.module.scss';

const cx = classNames.bind(styles);

function TripItem({ img, price, name, desc, oldPrice, isSale }) {
  return (
    <div className={cx('trips_group')}>
      <div className={cx('group_img')}>
        <img className={cx('trips_img')} src={img} alt="trip" />
        <div className={cx('trips_price-tag')}>
          <span className={cx('old-price')}>{oldPrice}</span>
          <span className={cx('new-price')}>{price}</span>
        </div>
      </div>
      <div className={cx('group_name')}>
        <div className={cx('group_name_top')}>
          <p className={cx('trips_name')}>{name}</p>
          <p className={cx('trips_desc')}>{desc}</p>
        </div>
        <div className={cx('group_review')}>
          <span className={cx('group_rating')}>
            <FontAwesomeIcon className={cx('star', 'active')} icon={faStarSolid} />
            <FontAwesomeIcon className={cx('star', 'active')} icon={faStarSolid} />
            <FontAwesomeIcon className={cx('star', 'active')} icon={faStarSolid} />
            <FontAwesomeIcon className={cx('star', 'active')} icon={faStarSolid} />
            <FontAwesomeIcon className={cx('star')} icon={faStarRegular} />

            <p className={cx('text_review')}>4 reviews</p>
          </span>
          <span className={cx('group_day')}>
            <FontAwesomeIcon className={cx('clock')} icon={faClock} />
            <p className={cx('text_review')}>5 days</p>
          </span>
        </div>
      </div>
      {isSale && <div className={cx('sale_tags')}>Sale</div>}
    </div>
  );
}

export default TripItem;
