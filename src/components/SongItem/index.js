import clsx from 'clsx';
import style from './SongItem.module.scss';
import defaultIMG from '~/assets/imgs/default.webp';
import { Global } from '~/components/GlobalStyle';
import { useContext } from 'react';
import ButtonAddToPlaylist from '~/components/ButtonAddToPlaylist';
import { dataUser } from '~/selectors';
import { useSelector } from 'react-redux';
function SongItem(props) {
    const {
        data,
        onClick,
        handleChangeSong,
        handleAddSongToList,
        handleUpdateUser,
        dataTheme,
    } = props;
    const { isChecked, song, isActive } = data;
    const { playlists } = useSelector(dataUser);
    return (
        <div className={clsx(style.wrapper, isChecked ? style.active : '')}>
            <div className={style.left}>
                <div className={style.leftFirst}>
                    <i className="fa-solid fa-music"></i>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => onClick(song.id)}
                    />
                </div>

                <div className={style.leftImg}>
                    <img src={song.imgURL || defaultIMG} />
                    <div onClick={() => handleChangeSong(song)}>
                        <i className="fa-solid fa-play"></i>
                    </div>
                </div>
                <div className={clsx(style.info)}>
                    <h4>{song.songName}</h4>
                    <span className={clsx(style.textSmall)}>{song.singer}</span>
                </div>
            </div>
            <div className={clsx(style.center)}>
                <span className={clsx(style.textSmall)}>{song.album}</span>
            </div>
            <div className={clsx(style.right)}>
                {/* <div
                    className={clsx(
                        style.rightBtn,
                        isActive ? style.active : '',
                    )}
                    onClick={() => handleUpdateUser(song.id, 'updateMySong')}
                >
                    <i className="fa-solid fa-heart"></i>
                </div> */}
                {isActive ? (
                    <div
                        className={clsx(style.rightBtn, style.active)}
                        onClick={() => handleUpdateUser(it.id, 'updateMySong')}
                        style={{
                            color: `${dataTheme.bgColorBtn}`,
                        }}
                    >
                        <i className="fa-solid fa-heart"></i>
                    </div>
                ) : (
                    <div
                        className={clsx(style.style.rightBtn)}
                        onClick={() => handleUpdateUser(it.id, 'updateMySong')}
                    >
                        <i className="fa-solid fa-heart"></i>
                    </div>
                )}
                <ButtonAddToPlaylist
                    listPlaylist={playlists}
                    handleAddSongToList={handleAddSongToList}
                    song={song}
                    handleUpdateUser={handleUpdateUser}
                    isItemLastRow={true}
                    dataTheme={dataTheme}
                />
            </div>
        </div>
    );
}

export default SongItem;
