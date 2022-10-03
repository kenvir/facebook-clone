import classNames from 'classnames/bind';

import styles from './SuggestsGroup.module.scss';

const cx = classNames.bind(styles);

function SuggestsGroup() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                {/* <image xlinkHref="https://flash.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"></image> */}
                <img className={cx('avatar')} src='https://flash.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg' alt='avatar'></img>
            </div>
            <div className={cx('name')}>
                <span>J2Team Community</span>
            </div>
        </div>
    );
}

export default SuggestsGroup;
