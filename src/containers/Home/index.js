import { useDispatch, useSelector } from 'react-redux';
import { selectSong, song } from '~/selectors';
import { getListSong, songPlay } from './action';
import { dataURL, listSingerURL } from './dataURL';
import chart from './chart';
import Singers from './components/Singers';
import Slide from '~/components/Slide/index';
import NewSong from './components/NewSong';
import Category from './components/Category';
import clsx from 'clsx';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import style from './Home.module.scss';
var Highcharts = require('highcharts');

// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

function Home() {
    const [typeSong, setTypeSong] = useState('all');
    const dispatch = useDispatch();
    const listSong = useSelector(selectSong);
    const [lisSongCategory, setListSongCategory] = useState([]);
    useEffect(() => {
        Highcharts.chart('container', chart);
        Highcharts.setOptions({
            chart: {
                backgroundColor: 'rgb(22,42,89)',
                borderWidth: 0,
                plotBackgroundColor: 'rgb(22,42,89)',
                plotShadow: true,
                plotBorderWidth: 1,
            },
        });
    });
    // useEffect(() => {
    //     dispatch(getListSong());
    //     // dispatch(song(listSong[0]));
    // }, []);
    useEffect(() => {
        console.log(listSong);
        if (typeSong === 'all') {
            setListSongCategory(listSong);
        } else if (typeSong === 'vn') {
            const newLisSongCategory = listSong.filter((it) =>
                it.type.includes('Việt Nam'),
            );
            setListSongCategory(newLisSongCategory);
        } else {
            const newLisSongCategory = listSong.filter(
                (it) => !it.type.includes('Việt Nam'),
            );
            setListSongCategory(newLisSongCategory);
        }
    }, [typeSong]);

    return (
        <div className={clsx(style.wrapper)}>
            {/* slide */}
            <Slide dataURL={dataURL} />

            {/* new */}
            <div className={clsx(style.newSongCategory)}>
                <div className={clsx(style.newSongCategory_top)}>
                    <h3 className={clsx(style.newSongCategory_title)}>
                        mới phát hành
                    </h3>
                    <Button className={clsx(style.newSongCategory_top_btn)}>
                        tất cả <i className="fa-solid fa-chevron-right"></i>
                    </Button>
                </div>

                <div className={clsx(style.newSongCategory_fillters)}>
                    <Button
                        className={clsx(
                            style.newSongCategory_fillter,
                            typeSong === 'all' ? style.active : '',
                        )}
                        onClick={() => setTypeSong('all')}
                    >
                        Tất cả
                    </Button>
                    <Button
                        className={clsx(
                            style.newSongCategory_fillter,
                            typeSong === 'vn' ? style.active : '',
                        )}
                        onClick={() => setTypeSong('vn')}
                    >
                        việt nam
                    </Button>
                    <Button
                        className={clsx(
                            style.newSongCategory_fillter,
                            typeSong === 'nc' ? style.active : '',
                        )}
                        onClick={() => setTypeSong('nc')}
                    >
                        quốc tế
                    </Button>
                </div>
                <div className={clsx(style.newSongCategory_list)}>
                    {lisSongCategory.map((it) => (
                        <div className={clsx(style.newSongCategory_item)}>
                            <img src={it.imgURL} alt="img" />
                            <div
                                className={clsx(
                                    style.newSongCategory_item_info,
                                )}
                            >
                                <b>{it.songName}</b>
                                <span>{it.singer}</span>
                                <span>{it.releaseDate}</span>
                            </div>
                            <div
                                className={clsx(
                                    style.newSongCategory_item_before,
                                )}
                            >
                                <Button
                                    ghost
                                    onClick={() => dispatch(songPlay(it))}
                                >
                                    <i className="fa-solid fa-play"></i>
                                </Button>
                                <Button ghost>
                                    <i className="fa-solid fa-ellipsis"></i>
                                </Button>
                            </div>
                        </div>
                    ))}

                    {/* <div className={clsx(style.newSongCategory_item)}>
                        <img src={ckp} alt="img" />
                        <div className={clsx(style.newSongCategory_item_info)}>
                            <b>ân tình sang trang</b>
                            <span>châu khải phong</span>
                            <span>hôm nay</span>
                        </div>
                        <div
                            className={clsx(style.newSongCategory_item_before)}
                        >
                            <Button ghost>
                                <i className="fa-solid fa-play"></i>
                            </Button>
                            <Button ghost>
                                <i className="fa-solid fa-ellipsis"></i>
                            </Button>
                        </div>
                    </div>
                    <div className={clsx(style.newSongCategory_item)}>
                        <img src={ckp} alt="img" />
                        <div className={clsx(style.newSongCategory_item_info)}>
                            <b>ân tình sang trang</b>
                            <span>châu khải phong</span>
                            <span>hôm nay</span>
                        </div>
                        <div
                            className={clsx(style.newSongCategory_item_before)}
                        >
                            <Button ghost>
                                <i className="fa-solid fa-play"></i>
                            </Button>
                            <Button ghost>
                                <i className="fa-solid fa-ellipsis"></i>
                            </Button>
                        </div>
                    </div>
                    <div className={clsx(style.newSongCategory_item)}>
                        <img src={ckp} alt="img" />
                        <div className={clsx(style.newSongCategory_item_info)}>
                            <b>ân tình sang trang</b>
                            <span>châu khải phong</span>
                            <span>hôm nay</span>
                        </div>
                        <div
                            className={clsx(style.newSongCategory_item_before)}
                        >
                            <Button ghost>
                                <i className="fa-solid fa-play"></i>
                            </Button>
                            <Button ghost>
                                <i className="fa-solid fa-ellipsis"></i>
                            </Button>
                        </div>
                    </div> */}
                </div>
            </div>
            {/*  category */}
            <Category />
            {/* singers */}
            <Singers listSingers={listSingerURL} />
            {/* new song */}
            <NewSong />
            {/* //// */}
            <figure className="highcharts-figure">
                <div id="container"></div>
            </figure>
        </div>
    );
}

export default Home;
