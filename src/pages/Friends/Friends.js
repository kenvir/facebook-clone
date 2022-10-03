import classNames from 'classnames/bind';
import styles from './Friends.module.scss';

const cx = classNames.bind(styles);

function Friends() {
    return (
        <div className={cx('wrapper')}>
            <h2>Friends page</h2>
        </div>
    );
}

export default Friends;
