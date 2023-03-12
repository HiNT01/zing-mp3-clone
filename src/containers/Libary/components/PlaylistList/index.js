import clsx from 'clsx';
import PlaylistItem from '../PlaylistItem';
import ckp from '~/assets/imgs/ckp.webp';
import style from './PlaylistList.module.scss';
import { Button } from 'antd';
function Playlist({ playlist }) {
    return (
        <div className={clsx(style.wrapper)}>
            <div className={clsx(style.top)}>
                <div>
                    <h2 className={clsx(style.title)}>playlist</h2>
                    <Button>
                        <i className="fa-solid fa-plus"></i>
                    </Button>
                </div>
                <Button>
                   tất cả <i className="fa-solid fa-chevron-right"></i>
                </Button>
            </div>
            <div className={clsx(style.list)}>
                {playlist.map((it) => (
                    <PlaylistItem
                        key={it}
                        dataPlaylist={{
                            src: ckp,
                            playlistName: 'nguyen trung hieu',
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Playlist;
