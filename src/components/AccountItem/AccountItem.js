import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';
import Image from '../Images/Images';

const cx = classNames.bind(styles);

function AccountItem({ data = [] }) {
    return (
        <Link className={cx('wrapper')} to={`/@${data.nickname}`}>
            <Image className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('full-name')}>
                    <span>LCK Tieng Viet</span>
                </h4>
            </div>
            <FontAwesomeIcon className={cx('delete')} icon={faXmark} />
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
