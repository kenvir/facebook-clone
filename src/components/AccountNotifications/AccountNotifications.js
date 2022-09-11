import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountNotifications.module.scss';
import Image from '../Images/Images';

const cx = classNames.bind(styles);

function AccountNotifications() {
    return (
        <Link className={cx('wrapper')} to={`path`}>
            <Image className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>The Viet</span>
                </h4>
                <h4 className={cx('message')}>
                    <span className={cx('content')}>Hi day la test thong bao Facebook!!!! </span>
                    <span className={cx('time')}>46 minutes ago</span>
                </h4>
            </div>
            <FontAwesomeIcon className={cx('options')} icon={faEllipsis}></FontAwesomeIcon>
        </Link>
    );
}

AccountNotifications.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountNotifications;
