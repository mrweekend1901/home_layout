import classNames from 'classnames/bind';
import styles from './ArticlesItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ArticlesItem({ img, date, name, desc }) {
  return (
    <div className={cx('articles_group')}>
      <div className={cx('group_img')}>
        <img className={cx('articles_img')} src={img} alt="trip1" />
      </div>
      <div className={cx('group_name')}>
        <div className={cx('gr_name')}>
          <p className={cx('articles_date')}>{date}</p>
          <p className={cx('articles_name')}>{name}</p>
          <p className={cx('articles_desc')}>{desc}</p>
        </div>
        <Link className={cx('btn_link')} to="#">
          <button className={cx('articles_btn')}>
            Read More
            <FontAwesomeIcon className={cx('articles_btn-icon')} icon={faChevronRight} />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ArticlesItem;
