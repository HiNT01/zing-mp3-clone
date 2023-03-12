import clsx from 'clsx';
import style from './PlaylistItem.module.scss';
function PlaylistItem(props) {
    const { src, playlistName } = props.dataPlaylist;
    return (
        <div className={clsx(style.wrapper)}>
            <div className={clsx(style.thumb)}>
                <img src={src} />
            </div>
            <span>{playlistName}</span>
        </div>
    );
}

export default PlaylistItem;
