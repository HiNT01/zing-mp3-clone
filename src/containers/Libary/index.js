import clsx from 'clsx';
import style from './Libary.module.scss';
import { useSate } from 'react';
import SongLibariList from './components/SongLibariList';
import SingerLibariList from './components/SingerLibariList';
import Playlist from './components/PlaylistList';
function Libary() {
    return (
        <div className={clsx(style.wrapper)}>
            <h1>
                thư viện <i className="fa-solid fa-circle-play"></i>
            </h1>
            <SingerLibariList listSinger={[1,2,3,4,0]}/>
            <Playlist playlist = {[0,1,2,3,4]}/>
            <SongLibariList listSongLibary={[0, 1, 2, 3, 4, 5]} />
        </div>
    );
}

export default Libary;
