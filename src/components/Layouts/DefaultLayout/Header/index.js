import images from '../../../../assets/img';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Menu from '../Menu';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
  const [isShow, setIsShow] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  // const [isAtTop, setIsAtTop] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  const handleMenuClose = () => {
    setIsShow(false);
  };

  // Ngăn hành vi cuộn khi Menu đang hiển thị
  useEffect(() => {
    if (isShow) {
      document.body.classList.add(cx('no-scroll'));
    } else {
      document.body.classList.remove(cx('no-scroll'));
    }

    return () => {
      document.body.classList.remove(cx('no-scroll'));
    };
  }, [isShow]);

  // Ẩn header khi scroll
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    if (currentScrollPos === 0) {
      setIsScrolledUp(false);
    } else if (currentScrollPos > prevScrollPos) {
      setIsHidden(true);
      setIsScrolledUp(false);
    } else {
      setIsHidden(false);
      setIsScrolledUp(true);
    }

    if (currentScrollPos + windowHeight >= documentHeight) {
      setIsHidden(true);
      setIsScrolledUp(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log(prevScrollPos);
    };
  }, [prevScrollPos]);

  return (
    <header className={cx('header', { hidden: isHidden, bg: isScrolledUp })}>
      <div className={cx('header_logo')}>
        <img
          className={cx('logo_img')}
          src={isScrolledUp ? images.logo2 : images.logo}
          alt="logo"
        />
      </div>
      <div className={cx('header_nav')}>
        <div className={cx('nav_link-group')}>
          <Link className={cx('nav_link', { bg: isScrolledUp })} to="#">
            Home
            <span className={cx('nav_link-icon')}>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </Link>
          <Link className={cx('nav_link', { bg: isScrolledUp })} to="#">
            About
            <span className={cx('nav_link-icon')}>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </Link>
          <Link className={cx('nav_link', { bg: isScrolledUp })} to="#">
            Product
            <span className={cx('nav_link-icon')}>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </Link>
          <Link className={cx('nav_link', { bg: isScrolledUp })} to="#">
            Contact
            <span className={cx('nav_link-icon')}>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </Link>
        </div>
        <div className={cx('header_nav-icon', { bg: isScrolledUp })} onClick={handleShow}>
          <FontAwesomeIcon icon={faBars} />
          <div className={cx('cart')}>
            <FontAwesomeIcon icon={faCartShopping} />
            <div className={cx('cart_num')}>0</div>
          </div>
        </div>
      </div>
      {isShow && (
        <div className={cx('over-lay')}>
          <div className={cx('menu', { openMenu: isShow })}>
            <Menu OnClose={handleMenuClose} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
