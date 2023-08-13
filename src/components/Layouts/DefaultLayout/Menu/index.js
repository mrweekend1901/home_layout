import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import TourItem from '../../../TourItem';
import images from '../../../../assets/img';
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Menu({ OnClose }) {
  return (
    <nav className={cx('menu_nav')}>
      <div className={cx('close_nav')}>
        <button className={cx('btn_close')} onClick={OnClose}>
          <FontAwesomeIcon className={cx('close_icon')} icon={faX} />
        </button>
      </div>

      <ul className={cx('menu_nav-list')}>
        <li className={cx('menu_nav-item')}>
          <Link className={cx('item_link')} to={'#'}>
            Home
          </Link>
        </li>
        <li className={cx('menu_nav-item')}>
          <Link className={cx('item_link')} to={'#'}>
            About
          </Link>
        </li>
        <li className={cx('menu_nav-item')}>
          <Link className={cx('item_link')} to={'#'}>
            Product
          </Link>
        </li>
        <li className={cx('menu_nav-item')}>
          <Link className={cx('item_link')} to={'#'}>
            Contact
          </Link>
        </li>
      </ul>

      <div className={cx('menu_nav-tour')}>
        <TourItem img={images.Tour1} name={'Swiss Alps Trip'} newPrice={'$3900'} />
        <TourItem
          img={images.Tour2}
          name={'5 Lake of Fuji San'}
          oldPrice={'$4900'}
          newPrice={'$4200'}
        />
      </div>
      <div className={cx('menu_nav-contact')}>
        <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
        <FontAwesomeIcon className={cx('icon')} icon={faTwitter} />
        <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
        <FontAwesomeIcon className={cx('icon')} icon={faPinterest} />
        <FontAwesomeIcon className={cx('icon')} icon={faInstagram} />
      </div>
    </nav>
  );
}

export default Menu;
