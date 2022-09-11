import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import { Popper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem/AccountItem';

const cx = classNames.bind(styles);

function Search() {
    // const [searchResult, setSearchResult] = useState([]);

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return (
        <Tippy
            interactive= {true}
            visible={visible}
            onClickOutside={hide}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('search-res')}>
                        <div className={cx('search-header')}>
                            <h4 className={cx('search-title')}>Recent searches</h4>
                            <h4 className={cx('search-edit')}>Edit</h4>
                        </div>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <FontAwesomeIcon className={cx('search-back')} icon={faArrowLeft}></FontAwesomeIcon>
                <FontAwesomeIcon className={cx('search-logo')} icon={faMagnifyingGlass}></FontAwesomeIcon>
                <input placeholder="Search Facebook" spellCheck={false} onClick={visible ? hide : show} />
            </div>
        </Tippy>
    );
}

export default Search;
