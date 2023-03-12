import clsx from 'clsx';
import style from './SongLibariItem.module.scss';
import ckp from '~/assets/imgs/ckp.webp';
function SongLibariItem(props) {
    const { isChecked, id } = props.data;
    return (
        <div className={clsx(style.wrapper, isChecked ? style.active : '')}>
            <div className={style.left}>
                <div className={style.leftFirst}>
                    <i className="fa-solid fa-music"></i>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => props.onClick(id)}
                    />
                </div>

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
            <div className={clsx(style.center)}>
                <span className={clsx(style.textSmall)}>
                    em la ke dang thuong (single)
                </span>
            </div>
            <div className={clsx(style.right)}>
                <div className={clsx(style.rightBtn, style.active)}>
                    <i className="fa-solid fa-heart"></i>
                </div>
                <span className={clsx(style.textSmall)}>5:05</span>
            </div>
        </div>
    );
}

export default SongLibariItem;
