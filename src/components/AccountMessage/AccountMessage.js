import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEllipsis } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountMessage.module.scss';
import Image from '../Images/Images';

const cx = classNames.bind(styles);

function AccountMessage() {
    return (
        <Link className={cx('wrapper')} to={`path`}>
            <Image className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>The Viet</span>
                </h4>
                <h4 className={cx('message')}>
                    <span className={cx('content')}>Hi day la chat test Facebook Messenger!!!! </span>
                    <span className={cx('time')}>.1m</span>
                </h4>
            </div>
            <FontAwesomeIcon className={cx('options')} icon={faEllipsis}></FontAwesomeIcon>
            <FontAwesomeIcon className={cx('check')} icon={faCheck} />
        </Link>
    );
}

AccountMessage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountMessage;
