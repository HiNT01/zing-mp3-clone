import clsx from 'clsx';
import style from './NavItem.module.css';

function NavItem({ title, children, path, isActive }) {
    return (
        <div
            className={clsx(
                style.slider_nav_item,
                isActive ? style.active : '',
            )}
        >
            <div className={clsx(style.mark)}></div>
            {children}
            {title}
            <div className={clsx(style.slider_nav_item_play)}>
                <i className="fa-solid fa-circle-play"></i>
            </div>
        </div>
    );
}

export default NavItem;
