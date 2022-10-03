import classNames from 'classnames/bind';

import styles from './Shortcuts.module.scss';
import SuggestsGroup from '../../layouts/components/SideBar/SuggestsGroup/SuggestsGroup';
import Button from '~/layouts/components/SideBar/Button/Button';

const cx = classNames.bind(styles);

function Shortcuts() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p className={cx('label')}>Your Shortcuts</p>
                <span className={cx('edit')}>Edit</span>
            </div>

            <SuggestsGroup />

            <Button />
        </div>
    );
}

export default Shortcuts;
