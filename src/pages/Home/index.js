import images from '../../assets/img';
import InputComponent from '../../components/InputComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faChevronDown,
  faChevronUp,
  faDollarSign,
  faLocationDot,
  faMagnifyingGlass,
  faMobileScreenButton,
  faRightLeft,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import DropdownInput from '../../components/DropdownInput';
import { useEffect, useState } from 'react';
import ArticlesItem from '../../components/ArticlesItem';
import DestinantionItem from '../../components/DestinationItem';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import TripItem from '../../components/TripItem';
import ChooseItem from '../../components/ChooseItem';

const cx = classNames.bind(styles);

const optionsMonth = [
  { id: '1', label: 'January', value: 'January' },
  { id: '2', label: 'February', value: 'February' },
  { id: '3', label: 'March', value: 'March' },
  { id: '4', label: 'April', value: 'April' },
  { id: '5', label: 'May', value: 'May' },
  { id: '6', label: 'June', value: 'June' },
  { id: '7', label: 'July', value: 'July' },
  { id: '8', label: 'August', value: 'August' },
  { id: '9', label: 'September', value: 'September' },
  { id: '10', label: 'October', value: 'October' },
  { id: '11', label: 'November', value: 'November' },
  { id: '12', label: 'December', value: 'December' },
];

const optionsFilter = [
  { id: '1', label: 'Price Low to High', value: 'Price Low to High' },
  { id: '2', label: 'Price High to Low', value: 'Price High to Low' },
  { id: '3', label: 'Sort By Name', value: 'Sort By Name' },
  { id: '4', label: 'Sort By Popularity', value: 'Sort By Popularity' },
  { id: '5', label: 'Sort By Review Score', value: 'Sort By Review Score' },
];

const optionsCategories = [
  { id: '1', label: 'Mountain', value: 'Mountain' },
  { id: '2', label: 'Rural', value: 'Rural' },
  { id: '3', label: 'Snow & Ice', value: 'Snow & Ice' },
  { id: '4', label: 'Wildlife', value: 'Wildlife' },
];

const optionsDestinations = [
  { id: '1', label: 'Tokyo', value: 'Tokyo' },
  { id: '2', label: 'Seoul', value: 'Seoul' },
  { id: '3', label: 'Paris', value: 'Paris' },
  { id: '4', label: 'London', value: 'London' },
  { id: '5', label: 'Venice', value: 'Venice' },
  { id: '6', label: 'Miami', value: 'Miami' },
  { id: '7', label: 'Rome', value: 'Rome' },
  { id: '8', label: 'Prague', value: 'Prague' },
  { id: '9', label: 'California', value: 'California' },
  { id: '10', label: 'Kyoto', value: 'Kyoto' },
  { id: '11', label: 'Hong Kong', value: 'Hong Kong' },
  { id: '12', label: 'Santorini', value: 'Santorini' },
];

function Home() {
  const [dropDownValue, setdropDownValue] = useState('');
  const [isShow, setIsShow] = useState(false);

  // Xử lý chọn dropdown
  const handleDropdownSelect = selectedValue => {
    setdropDownValue(selectedValue);
  };

  const handleShowMore = () => {
    setIsShow(!isShow);
  };

  // Quay lại đầu trang btn
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={cx('home_page')}>
      <div className={cx('home_slider')}>
        <video className={cx('slider_video')} autoPlay loop muted>
          <source src={images.video} type="video/mp4"></source>
        </video>
        {/* Slider */}
        <div className={cx('grid wide')}>
          <div className={cx('slider_container')}>
            <div className={cx('row')}>
              <header className={cx('slider_title')}>
                <div className={cx('title_first')}>Where do you want to go?</div>
                <div className={cx('title_second')}>
                  Trips, experiences, and places. All in one service.
                </div>
              </header>
            </div>
            <div className={cx('row')}>
              <div className={cx('col l-3 m-3 c-12')}>
                <div className={cx('slider_search-group')}>
                  <InputComponent
                    width="100%"
                    placeholder="Destinantion, city"
                    icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                  />
                </div>
              </div>
              <div className={cx('col l-3 m-3 c-12')}>
                <div className={cx('slider_search-group')}>
                  <DropdownInput
                    width="100%"
                    placeholder="Any Month"
                    icon={<FontAwesomeIcon icon={faCalendar} />}
                    options={optionsMonth}
                    onSelect={handleDropdownSelect}
                  />
                </div>
              </div>
              <div className={cx('col l-3 m-3 c-12')}>
                <div className={cx('slider_search-group')}>
                  <DropdownInput
                    width="100%"
                    placeholder="Sort By Date"
                    icon={<FontAwesomeIcon className={cx('rotate-icon')} icon={faRightLeft} />}
                    options={optionsFilter}
                    onSelect={handleDropdownSelect}
                  />
                </div>
              </div>
              <div className={cx('col l-3 m-3 c-12')}>
                <div className={cx('slider_search-group')}>
                  <button className={cx('btn')}>Search</button>
                </div>
              </div>
            </div>

            {isShow && (
              <div className={cx('row')}>
                <div className={cx('col l-3 m-3 c-12')}>
                  <div className={cx('slider_search-group')}>
                    <DropdownInput
                      width="100%"
                      placeholder="All Categories"
                      icon={<FontAwesomeIcon icon={faChevronDown} />}
                      options={optionsCategories}
                      onSelect={handleDropdownSelect}
                    />
                  </div>
                </div>
                <div className={cx('col l-3 m-3 c-12')}>
                  <div className={cx('slider_search-group')}>
                    <DropdownInput
                      width="100%"
                      placeholder="Any Destinations"
                      icon={<FontAwesomeIcon icon={faChevronDown} />}
                      options={optionsDestinations}
                      onSelect={handleDropdownSelect}
                    />
                  </div>
                </div>
                <div className={cx('col l-3 m-3 c-12')}>
                  <div className={cx('slider_search-group')}>
                    <InputComponent
                      width="100%"
                      placeholder="Max budget ex. 500"
                      icon={<FontAwesomeIcon icon={faDollarSign} />}
                    />
                  </div>
                </div>
              </div>
            )}

            <button className={cx('btn_show-more')} onClick={handleShowMore}>
              <div className={cx('btn_show-more-icon')}>
                {isShow ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </div>
              Advanced Search
            </button>
          </div>
        </div>
        <div className={cx('grid wide')}>
          {/* Destinations */}
          <div className={cx('destinations_container')}>
            <div className={cx('row')}>
              <header className={cx('destinations_title')}>
                <div className={cx('title_first')}>Popular Destinations</div>
                <div className={cx('title_second')}>World's best tourist destinations</div>
              </header>
            </div>
            <div className={cx('row')}>
              <div className={cx('col l-3 m-3 c-12')}>
                <DestinantionItem img={images.tokyo} name={'Tokyo'} />
              </div>
              <div className={cx('col l-3 m-3 c-12')}>
                <DestinantionItem img={images.seoul} name={'Seoul'} />
              </div>
              <div className={cx('col l-3 m-3 c-12')}>
                <DestinantionItem img={images.paris} name={'Paris'} />
              </div>
              <div className={cx('col l-3 m-3 c-12')}>
                <DestinantionItem img={images.london} name={'London'} />
              </div>
            </div>
          </div>

          {/* Trip */}
          <div className={cx('trips_container')}>
            <div className={cx('row')}>
              <header className={cx('trips_title')}>
                <div className={cx('title_first')}>Best Value Trips</div>
                <div className={cx('title_second')}>Best offers trips from us</div>
              </header>
            </div>
            <div className={cx('row')}>
              <div className={cx('col l-4 m-4 c-12')}>
                <TripItem
                  img={images.trip1}
                  name={'French Autumn'}
                  price={'$5000'}
                  desc={'City Tours, Urban'}
                />
              </div>
              <div className={cx('col l-4 m-4 c-12')}>
                <TripItem
                  img={images.trip2}
                  name={'Grand Switzerland'}
                  price={'$6000'}
                  desc={'Shopping, Mountain, Snow & Ice'}
                />
              </div>
              <div className={cx('col l-4 m-4 c-12')}>
                <TripItem
                  img={images.trip3}
                  name={'Discover Japan'}
                  oldPrice={'$3000'}
                  price={'$2500'}
                  desc={'City Tours, Iconic'}
                  isSale={true}
                />
              </div>
            </div>
          </div>

          {/* Choose Us */}
          <div className={cx('choose_container')}>
            <div className={cx('row')}>
              <header className={cx('choose_title')}>
                <div className={cx('title_first')}>Why Choose Us</div>
                <div className={cx('title_second')}>
                  Here are reasons you should plan trip with us
                </div>
              </header>
            </div>

            <div className={cx('row')}>
              <div className={cx('col l-4 m-4 c-12')}>
                <ChooseItem
                  img={images.hotel}
                  name={'Handpicked Hotels'}
                  desc={
                    'Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
                  }
                />
              </div>

              <div className={cx('col l-4 m-4 c-12')}>
                <ChooseItem
                  img={images.service}
                  name={'World Class Service'}
                  desc={
                    'Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
                  }
                />
              </div>

              <div className={cx('col l-4 m-4 c-12')}>
                <ChooseItem
                  img={images.price}
                  name={'Best Price Guarantee'}
                  desc={
                    'Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className={cx('bg_full')}></div>

        {/* Articles & Tips */}
        <div className={cx('grid wide')}>
          <div className={cx('articles_container')}>
            <div className={cx('row')}>
              <header className={cx('articles_title')}>
                <div className={cx('title_first')}>Articles & Tips</div>
                <div className={cx('title_second')}>
                  Explore some of the best tips from around the world
                </div>
              </header>
            </div>
            <div className={cx('row')}>
              <div className={cx('col l-4 m-4 c-12')}>
                <ArticlesItem
                  img={images.art1}
                  date={'December 10, 2016'}
                  name={'Memorial Day to Someone Told Me to Travel'}
                  desc={
                    'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...'
                  }
                />
              </div>
              <div className={cx('col l-4 m-4 c-12')}>
                <ArticlesItem
                  img={images.art2}
                  date={'December 10, 2016'}
                  name={'7 Tips For Nomads On A Budget Trips'}
                  desc={
                    'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...'
                  }
                />
              </div>
              <div className={cx('col l-4 m-4 c-12')}>
                <ArticlesItem
                  img={images.art3}
                  date={'December 10, 2016'}
                  name={'Taking A Travel Blog Victory Lap'}
                  desc={
                    'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...'
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={cx('footer')}>
          <div className={cx('grid wide')}>
            <div className={cx('row')}>
              <div className={cx('col l-4 m-4 c-12')}>
                <div className={cx('footer_group')}>
                  <p className={cx('footer_name')}>Our Awards</p>
                  <p className={cx('footer_desc')}>
                    London is a megalopolis of people, ideas and frenetic energy. The capital and
                    largest city of the United Kingdom.
                  </p>
                  <div className={cx('footer_group-img')}>
                    <img className={cx('img')} src={images.award} alt="award" />
                  </div>
                </div>
              </div>
              <div className={cx('col l-4 m-4 c-12')}>
                <div className={cx('footer_group')}>
                  <p className={cx('footer_name')}>Contact Info</p>
                  <p className={cx('footer_info')}>
                    <FontAwesomeIcon className={cx('info_icon')} icon={faMobileScreenButton} />
                    1-567-124-44227
                  </p>
                  <p className={cx('footer_info')}>
                    <FontAwesomeIcon className={cx('info_icon')} icon={faLocationDot} />
                    184 Main Street East Perl Habour 8007
                  </p>
                  <p className={cx('footer_info')}>
                    <FontAwesomeIcon className={cx('info_icon')} icon={faStopwatch} />
                    Mon - Sat 8.00 - 18.00 Sunday CLOSED
                  </p>
                  <div className={cx('footer_group-contact')}>
                    <div className={cx('contact_icon')} style={{ backgroundColor: '#2D5F9A' }}>
                      <FontAwesomeIcon className={cx('icon')} icon={faFacebookF} />
                    </div>
                    <div className={cx('contact_icon')} style={{ backgroundColor: '#00C3F3' }}>
                      <FontAwesomeIcon className={cx('icon')} icon={faTwitter} />
                    </div>
                    <div className={cx('contact_icon')} style={{ backgroundColor: '#cc181e' }}>
                      <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
                    </div>
                    <div className={cx('contact_icon')} style={{ backgroundColor: '#bd081c' }}>
                      <FontAwesomeIcon className={cx('icon')} icon={faPinterest} />
                    </div>
                    <div className={cx('contact_icon')} style={{ backgroundColor: '#405de6' }}>
                      <FontAwesomeIcon className={cx('icon')} icon={faInstagram} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('col l-4 m-4 c-12')}>
                <div className={cx('footer_group')}>
                  <p className={cx('footer_name')}>Recent Trips</p>
                  <div className={cx('footer_group-img-trip')}>
                    <div className={cx('row')}>
                      <div className={cx('col l-4 m-4 c-4')} style={{ padding: '4px' }}>
                        <span className={cx('footer_img')}>
                          <img src={images.ft1} alt="ft1" />
                        </span>
                      </div>
                      <div className={cx('col l-4 m-4 c-4')} style={{ padding: '4px' }}>
                        <span className={cx('footer_img')}>
                          <img src={images.ft2} alt="ft2" />
                        </span>
                      </div>
                      <div className={cx('col l-4 m-4 c-4')} style={{ padding: '4px' }}>
                        <span className={cx('footer_img')}>
                          <img src={images.ft3} alt="ft3" />
                        </span>
                      </div>
                    </div>
                    <div className={cx('row')}>
                      <div className={cx('col l-4 m-4 c-4')} style={{ padding: '4px' }}>
                        <span className={cx('footer_img')}>
                          <img src={images.ft4} alt="ft4" />
                        </span>
                      </div>
                      <div className={cx('col l-4 m-4 c-4')} style={{ padding: '4px' }}>
                        <span className={cx('footer_img')}>
                          <img src={images.ft5} alt="ft5" />
                        </span>
                      </div>
                      <div className={cx('col l-4 m-4 c-4')} style={{ padding: '4px' }}>
                        <span className={cx('footer_img')}>
                          <img src={images.ft6} alt="ft6" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Up to top */}
      {showButton && (
        <button className={cx('back-to-top-button')} onClick={() => scrollToTop()}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      )}
    </div>
  );
}

export default Home;
