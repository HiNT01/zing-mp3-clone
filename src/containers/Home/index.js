import { dataURL, listSingerURL } from './dataURL';
import chart from './chart';
import Singers from './components/Singers';
import Slide from '~/components/Slide/index';
import NewSong from './components/NewSong';
import Category from './components/Category';
import clsx from 'clsx';
import { Button } from 'antd';
import { useEffect } from 'react';
import style from './Home.module.scss';
import ckp from '~/assets/imgs/ckp.webp';
var Highcharts = require('highcharts');
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);
// import clsx from 'clsx';
function Home() {
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
    return (
        <div className={clsx(style.wrapper)}>
            {/* slide */}
            <Slide dataURL={dataURL} />
            {/* new */}
            <div className={clsx(style.newSongCategory)}>
                <h3 className={clsx(style.newSongCategory_title)}>
                    mới phát hành
                </h3>
                <div className={clsx(style.newSongCategory_fillters)}>
                    <Button primary>Tất cả</Button>
                    <Button ghost>việt nam</Button>
                    <Button ghost>quốc tế</Button>
                </div>
                <div className={clsx(style.newSongCategory_list)}>
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
                    </div>
                </div>
            </div>
            {/*  category */}
            <Category />
            {/* singers */}
            <Singers listSingers={listSingerURL} />
            {/* new song */}
            <NewSong />
            {/* //// */}
            <figure class="highcharts-figure">
                <div id="container"></div>
            </figure>
        </div>
    );
}

export default Home;
