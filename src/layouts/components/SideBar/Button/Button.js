import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button() {
    return (
        <div className={cx('btn')}>
            <div className={cx('more')}>
                <FontAwesomeIcon className={cx('more-icon')} icon={faChevronDown}></FontAwesomeIcon>
                <p className={cx('more-btn')}>See more</p>
            </div>
            <div className={cx('less')}>
                <FontAwesomeIcon className={cx('less-icon')} icon={faChevronUp}></FontAwesomeIcon>
                <p className={cx('less-btn')}>See less</p>
            </div>
        </div>
    );
}

export default Button;
