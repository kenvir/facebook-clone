import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faEllipsisVertical,
    faUserGroup,
    faVideo,
    faGear,
    faMoon,
    faCircleQuestion,
    faRightFromBracket,
    faEllipsis,
    faMaximize,
    faArrowLeft,
    faMagnifyingGlass,
    faAngleRight,
    faCircleInfo,
    faChevronRight,
    faBookOpen,
    faPenToSquare,
    faFlag,
    faBullhorn,
    faCalendarPlus,
    faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

import Image from '~/components/Images/Images';
import { Popper as PopperWrapper } from '~/components/Popper';
import styles from './Actions.module.scss';
import { LiveIcon } from '~/components/Icons';
import AccountMessage from '~/components/AccountMessage';
import AccountNotifications from '~/components/AccountNotifications';

const cx = classNames.bind(styles);

function Actions() {

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return (
        <div className={cx('actions')}>
            <Tippy
                appendTo={() => document.body}
                interactive={true}
                placement={'bottom'}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-res')}>
                            <div className={cx('menu-header')}>
                                <h4 className={cx('menu-title')}>Menu</h4>
                            </div>
                            <div className={cx('menu-content')}>
                                <div className={cx('content-left')}>
                                    <div className={cx('chat-search')}>
                                        <FontAwesomeIcon
                                            className={cx('search-logo')}
                                            icon={faMagnifyingGlass}
                                        ></FontAwesomeIcon>
                                        <input placeholder="Search menu" spellCheck={false} />
                                    </div>
                                    <div className={cx('left-content')}>
                                        <div className={cx('left-content-list')}>
                                            <span className={cx('left-content-title')}>Social</span>
                                            <div className={cx('social-list')}>
                                                <div className={cx('social-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('social-events')}>
                                                            <img
                                                                className={cx('social-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png"
                                                                alt="Events"
                                                            />
                                                            <div className={cx('social-events-content')}>
                                                                <div>
                                                                    <span className={cx('social-events-content-title')}>
                                                                        Events
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className={cx('social-events-content-cont')}>
                                                                        Organise or find events and other things to do
                                                                        online and nearby.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('social-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('social-events')}>
                                                            <img
                                                                className={cx('social-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
                                                                alt="Events"
                                                            />
                                                            <div className={cx('social-events-content')}>
                                                                <div>
                                                                    <span className={cx('social-events-content-title')}>
                                                                        Friends
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className={cx('social-events-content-cont')}>
                                                                        Search for friends or people you may know.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('social-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('social-events')}>
                                                            <img
                                                                className={cx('social-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
                                                                alt="Events"
                                                            />
                                                            <div className={cx('social-events-content')}>
                                                                <div>
                                                                    <span className={cx('social-events-content-title')}>
                                                                        Groups
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className={cx('social-events-content-cont')}>
                                                                        Connect with people who share your intersests.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('social-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('social-events')}>
                                                            <img
                                                                className={cx('social-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/DOal__ng_AH.png"
                                                                alt="News feed"
                                                            />
                                                            <div className={cx('social-events-content')}>
                                                                <div>
                                                                    <span className={cx('social-events-content-title')}>
                                                                        News feed
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className={cx('social-events-content-cont')}>
                                                                        See relevant posts from people and pages that
                                                                        you follow.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('social-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('social-events')}>
                                                            <img
                                                                className={cx('social-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Zy9sJGThmCS.png"
                                                                alt="Favourites"
                                                            />
                                                            <div className={cx('social-events-content')}>
                                                                <div>
                                                                    <span className={cx('social-events-content-title')}>
                                                                        Favourites
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className={cx('social-events-content-cont')}>
                                                                        View posts by Favorites.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('social-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('social-events')}>
                                                            <img
                                                                className={cx('social-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png"
                                                                alt="Most recent"
                                                            />
                                                            <div className={cx('social-events-content')}>
                                                                <div>
                                                                    <span className={cx('social-events-content-title')}>
                                                                        Most recent
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className={cx('social-events-content-cont')}>
                                                                        See the most recent posts from your friends,
                                                                        group, Pages and more.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('social-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('social-events')}>
                                                            <img
                                                                className={cx('social-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png"
                                                                alt="Pages"
                                                            />
                                                            <div className={cx('social-events-content')}>
                                                                <div>
                                                                    <span className={cx('social-events-content-title')}>
                                                                        Pages
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className={cx('social-events-content-cont')}>
                                                                        Discover and correct with bussinesses on
                                                                        Facebook.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <hr className={cx('crossbar')}></hr>
                                            <span className={cx('left-content-title')}>Entertainment</span>
                                            <div className={cx('entertainment-list')}>
                                                <div className={cx('entertainment-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('entertainment-events')}>
                                                            <img
                                                                className={cx('entertainment-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/eVgQ0NIygAW.png"
                                                                alt="Gaming video"
                                                            />
                                                            <div className={cx('entertainment-events-content')}>
                                                                <div>
                                                                    <span
                                                                        className={cx(
                                                                            'entertainment-events-content-title',
                                                                        )}
                                                                    >
                                                                        Gaming video
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        className={cx(
                                                                            'entertainment-events-content-cont',
                                                                        )}
                                                                    >
                                                                        Watch and connect with your favourite games and
                                                                        streamers.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('entertainment-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('entertainment-events')}>
                                                            <img
                                                                className={cx('entertainment-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/XEWvxf1LQAG.png"
                                                                alt="Play games"
                                                            />
                                                            <div className={cx('entertainment-events-content')}>
                                                                <div>
                                                                    <span
                                                                        className={cx(
                                                                            'entertainment-events-content-title',
                                                                        )}
                                                                    >
                                                                        Play games
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        className={cx(
                                                                            'entertainment-events-content-cont',
                                                                        )}
                                                                    >
                                                                        Play your favourite games.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('entertainment-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('entertainment-events')}>
                                                            <img
                                                                className={cx('entertainment-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
                                                                alt="Watch"
                                                            />
                                                            <div className={cx('entertainment-events-content')}>
                                                                <div>
                                                                    <span
                                                                        className={cx(
                                                                            'entertainment-events-content-title',
                                                                        )}
                                                                    >
                                                                        Watch
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        className={cx(
                                                                            'entertainment-events-content-cont',
                                                                        )}
                                                                    >
                                                                        A video destination personalised to your
                                                                        interests and connections.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('entertainment-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('entertainment-events')}>
                                                            <img
                                                                className={cx('entertainment-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GmeV2VDbZTi.png"
                                                                alt="Live video"
                                                            />
                                                            <div className={cx('entertainment-events-content')}>
                                                                <div>
                                                                    <span
                                                                        className={cx(
                                                                            'entertainment-events-content-title',
                                                                        )}
                                                                    >
                                                                        Live videos
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        className={cx(
                                                                            'entertainment-events-content-cont',
                                                                        )}
                                                                    >
                                                                        Watch popular live videos from around the world.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <hr className={cx('crossbar')}></hr>
                                            <span className={cx('left-content-title')}>Shopping</span>
                                            <div className={cx('entertainment-list')}>
                                                <div className={cx('entertainment-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('entertainment-events')}>
                                                            <img
                                                                className={cx('entertainment-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xH4w-lk44we.png"
                                                                alt="Facebook Pay"
                                                            />
                                                            <div className={cx('entertainment-events-content')}>
                                                                <div>
                                                                    <span
                                                                        className={cx(
                                                                            'entertainment-events-content-title',
                                                                        )}
                                                                    >
                                                                        Facebook Pay
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        className={cx(
                                                                            'entertainment-events-content-cont',
                                                                        )}
                                                                    >
                                                                        A seamless, secure way to pay in the apps you
                                                                        already use.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('entertainment-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('entertainment-events')}>
                                                            <img
                                                                className={cx('entertainment-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
                                                                alt="Marketplace"
                                                            />
                                                            <div className={cx('entertainment-events-content')}>
                                                                <div>
                                                                    <span
                                                                        className={cx(
                                                                            'entertainment-events-content-title',
                                                                        )}
                                                                    >
                                                                        Marketplace
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        className={cx(
                                                                            'entertainment-events-content-cont',
                                                                        )}
                                                                    >
                                                                        Buy and sell in your community.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <hr className={cx('crossbar')}></hr>
                                            <span className={cx('left-content-title')}>Personal</span>
                                            <div className={cx('personal-list')}>
                                                <div className={cx('personal-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('personal-events')}>
                                                            <img
                                                                className={cx('personal-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/qR88GIDM38e.png"
                                                                alt="Ads Manager"
                                                            />
                                                            <div className={cx('personal-events-content')}>
                                                                <div>
                                                                    <span
                                                                        className={cx('personal-events-content-title')}
                                                                    >
                                                                        Ads Manager
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        className={cx('personal-events-content-cont')}
                                                                    >
                                                                        Create, manage and track the performance of your
                                                                        ads.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('personal-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('personal-events')}>
                                                            <img
                                                                className={cx('personal-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/_JPdPzLmp9j.png"
                                                                alt="Ad Centre"
                                                            />
                                                            <div className={cx('personal-events-content')}>
                                                                <div>
                                                                    <span
                                                                        className={cx('personal-events-content-title')}
                                                                    >
                                                                        Ad Centre
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        className={cx('personal-events-content-cont')}
                                                                    >
                                                                        Manage all of the ads that you create in Pages,
                                                                        with streamlined features.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <hr className={cx('crossbar')}></hr>
                                            <span className={cx('left-content-title')}>Community resources</span>
                                            <div className={cx('community-list')}>
                                                <div className={cx('community-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('community-events')}>
                                                            <img
                                                                className={cx('community-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/9LIH24rbn9J.png"
                                                                alt="Blood Donations"
                                                            />
                                                            <div className={cx('community-events-content')}>
                                                                <div>
                                                                    <span
                                                                        className={cx('community-events-content-title')}
                                                                    >
                                                                        Blood Donations
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        className={cx('community-events-content-cont')}
                                                                    >
                                                                        Get updates about donating blood near you.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('community-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('community-events')}>
                                                            <img
                                                                className={cx('community-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/tKwWVioirmj.png"
                                                                alt="Climate Science Centre"
                                                            />
                                                            <div className={cx('community-events-content')}>
                                                                <div>
                                                                    <span
                                                                        className={cx('community-events-content-title')}
                                                                    >
                                                                        Climate Science Centre
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        className={cx('community-events-content-cont')}
                                                                    >
                                                                        Learn about climate change and its effects.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('community-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('community-events')}>
                                                            <img
                                                                className={cx('community-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/y7p-dcTnGV_.png"
                                                                alt="Crisis Reponse"
                                                            />
                                                            <div className={cx('community-events-content')}>
                                                                <div>
                                                                    <span
                                                                        className={cx('community-events-content-title')}
                                                                    >
                                                                        Crisis Reponse
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        className={cx('community-events-content-cont')}
                                                                    >
                                                                        Find the latest updates for recent crises
                                                                        happening around the world.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('community-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('community-events')}>
                                                            <img
                                                                className={cx('community-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/GyZZ7Jrr5OV.png"
                                                                alt="Emotional Health"
                                                            />
                                                            <div className={cx('community-events-content')}>
                                                                <div>
                                                                    <span
                                                                        className={cx('community-events-content-title')}
                                                                    >
                                                                        Emotional Health
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        className={cx('community-events-content-cont')}
                                                                    ></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('community-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('community-events')}>
                                                            <img
                                                                className={cx('community-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png"
                                                                alt="Fundraisers"
                                                            />
                                                            <div className={cx('community-events-content')}>
                                                                <div>
                                                                    <span
                                                                        className={cx('community-events-content-title')}
                                                                    >
                                                                        Fundraisers
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        className={cx('community-events-content-cont')}
                                                                    >
                                                                        Donate and raise money for charities and
                                                                        personal causes.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <hr className={cx('crossbar')}></hr>
                                            <span className={cx('left-content-title')}>More from Meta</span>
                                            <div className={cx('more-list')}>
                                                <div className={cx('more-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('more-events')}>
                                                            <img
                                                                className={cx('more-events-img')}
                                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/YF1bztyGuX-.png"
                                                                alt="Messenger"
                                                            />
                                                            <div className={cx('more-events-content')}>
                                                                <div>
                                                                    <span className={cx('more-events-content-title')}>
                                                                        Messenger
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className={cx('more-events-content-cont')}>
                                                                        Chat to your friends and connections instantly.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('more-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('more-events')}>
                                                            <img
                                                                className={cx('more-events-img')}
                                                                src="	https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/HBcx-giUZ2Y.png"
                                                                alt="Messenger Kids"
                                                            />
                                                            <div className={cx('more-events-content')}>
                                                                <div>
                                                                    <span className={cx('more-events-content-title')}>
                                                                        Messenger Kids
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className={cx('more-events-content-cont')}>
                                                                        Let children message close friends and family.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('content-right')}>
                                    <div className={cx('right-content')}>
                                        <span className={cx('right-content-title')}>Create</span>
                                        <div className={cx('right-content-list')}>
                                            <div className={cx('create-list')}>
                                                <div className={cx('cr-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('cr-events')}>
                                                            <FontAwesomeIcon
                                                                className={cx('cr-events-icon')}
                                                                icon={faPenToSquare}
                                                            ></FontAwesomeIcon>
                                                            <div className={cx('cr-events-content')}>
                                                                <div>
                                                                    <span className={cx('cr-events-content-title')}>
                                                                        Post
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('cr-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('cr-events')}>
                                                            <FontAwesomeIcon
                                                                className={cx('cr-events-icon')}
                                                                icon={faBookOpen}
                                                            ></FontAwesomeIcon>
                                                            <div className={cx('cr-events-content')}>
                                                                <div>
                                                                    <span className={cx('cr-events-content-title')}>
                                                                        Story
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('cr-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('cr-events')}>
                                                            <FontAwesomeIcon
                                                                className={cx('cr-events-icon')}
                                                                icon={faVideo}
                                                            ></FontAwesomeIcon>
                                                            <div className={cx('cr-events-content')}>
                                                                <div>
                                                                    <span className={cx('cr-events-content-title')}>
                                                                        Room
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <hr className={cx('crossbar-right')}></hr>
                                                <div className={cx('cr-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('cr-events')}>
                                                            <FontAwesomeIcon
                                                                className={cx('cr-events-icon')}
                                                                icon={faFlag}
                                                            ></FontAwesomeIcon>
                                                            <div className={cx('cr-events-content')}>
                                                                <div>
                                                                    <span className={cx('cr-events-content-title')}>
                                                                        Page
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('cr-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('cr-events')}>
                                                            <FontAwesomeIcon
                                                                className={cx('cr-events-icon')}
                                                                icon={faBullhorn}
                                                            ></FontAwesomeIcon>
                                                            <div className={cx('cr-events-content')}>
                                                                <div>
                                                                    <span className={cx('cr-events-content-title')}>
                                                                        Ad
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('cr-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('cr-events')}>
                                                            <FontAwesomeIcon
                                                                className={cx('cr-events-icon')}
                                                                icon={faUserGroup}
                                                            ></FontAwesomeIcon>
                                                            <div className={cx('cr-events-content')}>
                                                                <div>
                                                                    <span className={cx('cr-events-content-title')}>
                                                                        Group
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('cr-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('cr-events')}>
                                                            <FontAwesomeIcon
                                                                className={cx('cr-events-icon')}
                                                                icon={faCalendarPlus}
                                                            ></FontAwesomeIcon>
                                                            <div className={cx('cr-events-content')}>
                                                                <div>
                                                                    <span className={cx('cr-events-content-title')}>
                                                                        Event
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={cx('cr-elements')}>
                                                    <a href="!#">
                                                        <div className={cx('cr-events')}>
                                                            <FontAwesomeIcon
                                                                className={cx('cr-events-icon')}
                                                                icon={faCartShopping}
                                                            ></FontAwesomeIcon>
                                                            <div className={cx('cr-events-content')}>
                                                                <div>
                                                                    <span className={cx('cr-events-content-title')}>
                                                                        Marketplace Listing
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('menu')}>
                    <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                    <h4 className={cx('actions-titl')}>Menu</h4>
                </div>
            </Tippy>

            <Tippy
                visible={visible}
                appendTo={() => document.body}
                interactive={true}
                onClickOutside={hide}
                render={(attrs) => (
                    <div className={cx('actions-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('chat-res')}>
                            <div className={cx('chat-header')}>
                                <h4 className={cx('chat-title')}>Chats</h4>
                                <div className={cx('chat-title-actions')}>
                                    <FontAwesomeIcon icon={faEllipsis} className={cx('chat-edit')}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faMaximize} className={cx('chat-see')}></FontAwesomeIcon>
                                    <LiveIcon className={cx('chat-video-call')} />
                                </div>
                            </div>
                            <div className={cx('chat-search')}>
                                <FontAwesomeIcon className={cx('search-back')} icon={faArrowLeft}></FontAwesomeIcon>
                                <FontAwesomeIcon
                                    className={cx('search-logo')}
                                    icon={faMagnifyingGlass}
                                ></FontAwesomeIcon>
                                <input placeholder="Search Messenger" spellCheck={false} />
                            </div>
                            <div className={cx('chat-content')}>
                                <div className={cx('chat-more')}>
                                    <Image className={cx('avatar')} src={`path`} alt="hi" />
                                    <div className={cx('info')}>
                                        <h4 className={cx('name')}>
                                            <span>New message requests</span>
                                        </h4>
                                        <span className={cx('content')}>From Mi Sa and 5 more</span>
                                    </div>
                                    <FontAwesomeIcon className={cx('more')} icon={faAngleRight} />
                                </div>
                                <AccountMessage />
                                <AccountMessage />
                                <AccountMessage />
                                <AccountMessage />
                                <AccountMessage />
                                <AccountMessage />
                            </div>
                            <span className={cx('chat-range')}></span>
                            <div className={cx('chat-all')}>
                                <span className={cx('see-all')}>See all in Messenger</span>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('messenger')} onClick={visible ? hide : show}>
                    <FontAwesomeIcon icon={faFacebookMessenger}></FontAwesomeIcon>
                    <h4 className={cx('actions-titl')}>Messenger</h4>
                </div>
            </Tippy>
            <Tippy
                appendTo={() => document.body}
                interactive={true}
                render={(attrs) => (
                    <div className={cx('actions-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('notifications-res')}>
                            <div className={cx('notifications-header')}>
                                <h4 className={cx('notifications-title')}>Notifications</h4>
                                <div className={cx('notifications-title-actions')}>
                                    <FontAwesomeIcon
                                        icon={faEllipsis}
                                        className={cx('notifications-edit')}
                                    ></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className={cx('notifications-filter')}>
                                <span className={cx('notifications-all')}>All</span>
                                <span className={cx('notifications-unread')}>Unread</span>
                            </div>
                            <div className={cx('notifications-see')}>
                                <span className={cx('notifications-news')}>New</span>
                                <span className={cx('notifications-see-all')}>See All</span>
                            </div>
                            <div className={cx('notifications-content')}>
                                <AccountNotifications />
                                <AccountNotifications />
                                <AccountNotifications />
                                <AccountNotifications />
                                <AccountNotifications />
                                <AccountNotifications />
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('notifications')}>
                    <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                    <h4 className={cx('actions-titl')}>Notifications</h4>
                </div>
            </Tippy>
            <Tippy
                appendTo={() => document.body}
                interactive={true}
                render={(attrs) => (
                    <div className={cx('actions-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('account-res')}>
                            <div className={cx('account-header')}>
                                <div className={cx('account-info')}>
                                    <Image className={cx('account-avatar')} />
                                    <h4 className={cx('account-name')}>The Viet</h4>
                                </div>
                                <span className={cx('account-range')}></span>
                                <span className={cx('all-profile')}>See all profiles</span>
                            </div>
                            <div className={cx('account-content')}>
                                <div className={cx('account-cont')}>
                                    <div className={cx('setting')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faGear}></FontAwesomeIcon>
                                        <span className={cx('icon-content')}>Settings & private</span>
                                        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    </div>
                                    <div className={cx('help')}>
                                        <FontAwesomeIcon
                                            className={cx('icon')}
                                            icon={faCircleQuestion}
                                        ></FontAwesomeIcon>
                                        <span className={cx('icon-content')}>Help & support</span>
                                        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    </div>
                                    <div className={cx('display')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faMoon}></FontAwesomeIcon>
                                        <span className={cx('icon-content')}>Display & accessibility</span>
                                        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    </div>
                                    <div className={cx('feedback')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faCircleInfo}></FontAwesomeIcon>
                                        <span className={cx('icon-content')}>Give feedback</span>
                                    </div>
                                    <div className={cx('logout')}>
                                        <FontAwesomeIcon
                                            className={cx('icon')}
                                            icon={faRightFromBracket}
                                        ></FontAwesomeIcon>
                                        <span className={cx('icon-content')}>Log Out</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('account-footer')}>
                                <span className={cx('account-more')}>
                                    <div className={cx('account-policy')}>
                                        <li className={cx('policy')}>Privacy</li>
                                        <li className={cx('policy')}> · Terms</li>
                                        <li className={cx('policy')}> · Advertising</li>
                                        <li className={cx('policy')}> · Ad choises</li>
                                        <li className={cx('policy')}> · Cookies</li>
                                    </div>
                                    More · Meta 2022
                                </span>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('account')}>
                    <Image
                        className={cx('user-avatar')}
                        src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-1/65993311_650800595423442_7608303117666353152_n.jpg?stp=c10.0.60.60a_cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SCZ8VfyfLVMAX-tEWfx&_nc_ht=scontent.fhan2-1.fna&oh=00_AT_ZulzxVdOpO79qJ8HEj2DeZsquwB6K9T3yFhBEXtF4zw&oe=6329FF3E"
                        alt="The Viet"
                    />
                    <h4 className={cx('actions-titl')}>Account</h4>
                </div>
            </Tippy>
        </div>
    );
}

export default Actions;
