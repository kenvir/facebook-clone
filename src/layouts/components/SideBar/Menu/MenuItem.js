import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MenuItem() {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={`path`}>
            <span className={cx('icon')}>
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            </span>
            <span className={cx('title')}>Friends</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
