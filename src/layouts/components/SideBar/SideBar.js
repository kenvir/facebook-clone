import classNames from 'classnames/bind';

import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { FriendsIcon } from '~/components/Icons';
import Shortcuts from '~/components/Shortcuts';
import Button from '~/layouts/components/SideBar/Button/Button';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('pages')}>
                <div className={cx('profile')}>
                    <img
                        src="https://flash.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                        alt="avatar"
                        className={cx('avatar')}
                    ></img>
                    <span className={cx('name')}>The Viet</span>
                </div>
                <Menu>
                    <MenuItem title="Friends" to={config.routes.friends} icon={<FriendsIcon />} />
                    <MenuItem title="Groups" to={config.routes.groups} icon={<FriendsIcon />} />
                    <MenuItem title="Marketplace" to={config.routes.market} icon={<FriendsIcon />} />
                    <MenuItem title="Watch" to={config.routes.watch} icon={<FriendsIcon />} />
                    <MenuItem title="Memories" to={config.routes.home} icon={<FriendsIcon />} />
                    <Button />
                    <MenuItem title="Ad Centre" to={config.routes.home} icon={<FriendsIcon />} />
                    <MenuItem title="Ads Manager" to={config.routes.home} icon={<FriendsIcon />} />
                    <MenuItem title="Blood Donations" to={config.routes.home} icon={<FriendsIcon />} />
                    <MenuItem title="Climate Science Centre" to={config.routes.home} icon={<FriendsIcon />} />
                    <MenuItem title="Crisis Response" to={config.routes.home} icon={<FriendsIcon />} />
                    <MenuItem title="Emotional Health" to={config.routes.home} icon={<FriendsIcon />} />
                    <MenuItem title="Events" to={config.routes.home} icon={<FriendsIcon />} />
                    <MenuItem title="Facebook Pay" to={config.routes.home} icon={<FriendsIcon />} />
                    <MenuItem title="Favourites" to={config.routes.home} icon={<FriendsIcon />} />
                    <MenuItem title="Fundraisers" to={config.routes.home} icon={<FriendsIcon />} />
                    <MenuItem title="Gaming video" to={config.routes.home} icon={<FriendsIcon />} />
                </Menu>
            </div>

            <span class="Actions_chat-range__gbFVm"></span>

            <Shortcuts />
        </aside>
    );
}

export default SideBar;
