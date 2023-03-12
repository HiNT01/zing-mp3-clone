import style from './NewSong.module.scss';
import { Button } from 'antd';

import clsx from 'clsx';
function NewSong() {
    return (
        <div className={clsx(style.NewSong)}>
            <div className={clsx(style.NewSong_top)}>
                <h3>Nhạc mới</h3>
                <a>
                    tất cả <i className="fa-solid fa-chevron-right"></i>
                </a>
            </div>
            <div className={clsx(style.NewSong_bottom)}>
                <div className={clsx(style.NewSong_bottom_item)}>
                    <div className={clsx(style.NewSong_bottom_img)}>
                        <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/a/1/d/ba1dc4f790dedb967a397abff94ebc8f.jpg" />
                        <div>
                            <Button ghost>
                                <i className="fa-solid fa-play"></i>
                            </Button>
                        </div>
                    </div>
                    <div className={clsx(style.NewSong_bottom_info)}>
                        <div className={clsx(style.NewSong_bottom_info_top)}>
                            <h3>ngoai 30</h3>
                            <span>thai hoc</span>
                        </div>
                        <div className={clsx(style.NewSong_bottom_info_bottom)}>
                            <h2>#1</h2>
                            <span>25.02.2023</span>
                        </div>
                    </div>
                </div>
                <div className={clsx(style.NewSong_bottom_item)}>
                    <div className={clsx(style.NewSong_bottom_img)}>
                        <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/a/1/d/ba1dc4f790dedb967a397abff94ebc8f.jpg" />
                        <div>
                            <Button ghost>
                                <i className="fa-solid fa-play"></i>
                            </Button>
                        </div>
                    </div>
                    <div className={clsx(style.NewSong_bottom_info)}>
                        <div className={clsx(style.NewSong_bottom_info_top)}>
                            <h3>ngoai 30</h3>
                            <span>thai hoc</span>
                        </div>
                        <div className={clsx(style.NewSong_bottom_info_bottom)}>
                            <h2>#1</h2>
                            <span>25.02.2023</span>
                        </div>
                    </div>
                </div>
                <div className={clsx(style.NewSong_bottom_item)}>
                    <div className={clsx(style.NewSong_bottom_img)}>
                        <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/a/1/d/ba1dc4f790dedb967a397abff94ebc8f.jpg" />
                        <div>
                            <Button ghost>
                                <i className="fa-solid fa-play"></i>
                            </Button>
                        </div>
                    </div>
                    <div className={clsx(style.NewSong_bottom_info)}>
                        <div className={clsx(style.NewSong_bottom_info_top)}>
                            <h3>ngoai 30</h3>
                            <span>thai hoc</span>
                        </div>
                        <div className={clsx(style.NewSong_bottom_info_bottom)}>
                            <h2>#1</h2>
                            <span>25.02.2023</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default NewSong;
