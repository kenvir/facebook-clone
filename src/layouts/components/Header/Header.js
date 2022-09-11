import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLanguage,
    faGamepad,
    faHome,
    faStore,
    faUserGroup,
    faVideo,
    faGear,
    faLock,
    faMoon,
    faCircleQuestion,
    faEnvelope,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import Search from '../Search/Search';
import Actions from './Actions/Actions';
import { Popper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import config from '~/config';

const cx = classNames.bind(styles);

// const MENU_ITEMS = [
//     {
//         icon: <FontAwesomeIcon icon={faEarthAsia} />,
//         title: 'English',
//         children: {
//             title: 'Language',
//             data: [
//                 {
//                     type: 'language',
//                     code: 'en',
//                     title: 'English',
//                 },
//                 {
//                     type: 'language',
//                     code: 'vi',
//                     title: 'Tiếng Việt',
//                 },
//             ],
//         },
//     },
//     {
//         icon: <FontAwesomeIcon icon={faCircleQuestion} />,
//         title: 'Feedback and help',
//         to: './feedback',
//     },
//     {
//         icon: <FontAwesomeIcon icon={faKeyboard} />,
//         title: 'Keyboard shortcuts',
//     },
// ];

function Header() {
    // const [visible, setVisible] = useState(false);
    // const show = () => setVisible(true);
    // const hide = () => setVisible(false);

    // const handlMenuChange = (menuItem) => {
    //     switch (menuItem.type) {
    //         case 'language':
    //             //Handle change language
    //             break;
    //         default:
    //     }
    // };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings & privacy',
            children: {
                title: 'Settings & privacy',
                data: [
                    {
                        icon: <FontAwesomeIcon icon={faGear} />,
                        title: 'Settings',
                    },
                    {
                        icon: <FontAwesomeIcon icon={faLock} />,
                        title: 'Privacy checkup',
                    },
                    {
                        icon: <FontAwesomeIcon icon={faLanguage} />,
                        title: 'Language',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Help & support',
            children: {
                title: 'Help & support',
                data: [
                    {
                        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
                        title: 'Help centre',
                    },
                    {
                        icon: <FontAwesomeIcon icon={faEnvelope} />,
                        title: 'Support inbox',
                    },
                    {
                        icon: <FontAwesomeIcon icon={faLanguage} />,
                        title: 'Report a problem',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Settings & privacy',
            children: {
                title: 'Settings & privacy',
                data: [
                    {
                        icon: <FontAwesomeIcon icon={faGear} />,
                        title: 'Darkmode',
                    },
                    {
                        icon: <FontAwesomeIcon icon={faLock} />,
                        title: 'Compact mode',
                    },
                    {
                        icon: <FontAwesomeIcon icon={faLanguage} />,
                        title: 'Keyboard',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Give feedback',
            to: './Feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log Out',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('interative')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Facebook" />
                    </Link>
                    <Search />
                </div>

                <div className={cx('pages')}>
                    <Tippy
                        render={(attrs) => (
                            <div className={cx('pages-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper className={cx('pages-res')}>
                                    <h4 className={cx('pages-title')}>Home</h4>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('home')}>
                            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                        </div>
                    </Tippy>
                    <Tippy
                        render={(attrs) => (
                            <div className={cx('pages-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper className={cx('pages-res')}>
                                    <h4 className={cx('pages-title')}>Watch</h4>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('watch')}>
                            <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
                        </div>
                    </Tippy>
                    <Tippy
                        render={(attrs) => (
                            <div className={cx('pages-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper className={cx('pages-res')}>
                                    <h4 className={cx('pages-title')}>Marketplace</h4>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('market')}>
                            <FontAwesomeIcon icon={faStore}></FontAwesomeIcon>
                        </div>
                    </Tippy>
                    <Tippy
                        render={(attrs) => (
                            <div className={cx('pages-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper className={cx('pages-res')}>
                                    <h4 className={cx('pages-title')}>Groups</h4>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('group')}>
                            <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
                        </div>
                    </Tippy>
                    <Tippy
                        render={(attrs) => (
                            <div className={cx('pages-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper className={cx('pages-res')}>
                                    <h4 className={cx('pages-title')}>Game</h4>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('game')}>
                            <FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon>
                        </div>
                    </Tippy>
                </div>

                <Actions />
            </div>
        </header>
    );
}

export default Header;
