import clsx from 'clsx';
import style from './ListPlayItem.module.scss';
import ckp from '~/assets/imgs/ckp.webp';
function ListPlayItem(props) {
    const { type, songInfo, isLibary } = props.data;
    return (
        <div
            className={clsx(
                style.wrapper,
                type === 'active' ? style.active : '',
                type === 'disable' ? style.disable : '',
            )}
        >
            <div className={style.left}>
                <div className={style.leftImg}>
                    <img src={ckp} />
                    <div>
                        <i className="fa-solid fa-play"></i>
                    </div>
                </div>
                <div className={clsx(style.info)}>
                    <h4>em la ke dang thuong</h4>
                    <span className={clsx(style.textSmall)}>phat huy t4</span>
                </div>
            </div>
            <div className={clsx(style.right)}>
                <div
                    className={clsx(
                        style.rightBtn,
                        isLibary ? style.active : '',
                    )}
                >
                    <i className="fa-solid fa-heart"></i>
                </div>
            </div>
        </div>
    );
}

export default ListPlayItem;
