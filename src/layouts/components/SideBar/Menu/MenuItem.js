import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon }) {
    return (
        <NavLink className={(nav) => cx('menu-item')} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;

{
    /* <div className={cx('sidebar-item')}>
<img
    className={cx('icon')}
    src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
    alt=""
></img>
<span className={cx('title')}>Friends</span>
</div>
<div className={cx('sidebar-item')}>
<img
    className={cx('icon')}
    src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
    alt=""
></img>
<span className={cx('title')}>Groups</span>
</div>
<div className={cx('sidebar-item')}>
<img
    className={cx('icon')}
    src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
    alt=""
></img>
<span className={cx('title')}>Marketplace</span>
</div>
<div className={cx('sidebar-item')}>
<img
    className={cx('icon')}
    src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
    alt=""
></img>
<span className={cx('title')}>Watch</span>
</div>
<div className={cx('sidebar-item')}>
<img
    className={cx('icon')}
    src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png"
    alt=""
></img>
<span className={cx('title')}>Memories</span>
</div>
<div className={cx('sidebar-item')}>
<img
    className={cx('icon')}
    src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/_JPdPzLmp9j.png"
    alt=""
></img>
<span className={cx('title')}>Ad Centre</span>
</div>
<div className={cx('sidebar-item')}>
<img
    className={cx('icon')}
    src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/qR88GIDM38e.png"
    alt=""
></img>
<span className={cx('title')}>Ads Manager</span>
</div> */
}
