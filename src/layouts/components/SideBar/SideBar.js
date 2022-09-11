import classNames from 'classnames/bind';

import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem />
            </Menu>
        </aside>
    );
}

export default SideBar;
