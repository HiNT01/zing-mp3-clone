import { useState, useEffect } from 'react';
import logo from '~/assets/imgs/ZingMP3logo.svg.png';
import ckp from '~/assets/imgs/ckp.webp';
import NavItem from '../NavItem';
import clsx from 'clsx';
import style from './GlobalStyle.module.css';
import { Button, Input, Avatar } from 'antd';
import styled from 'styled-components';
const { Search } = Input;
// import styled, {style} from 'styled-components'
function GlobalStyle({ children }) {
    const [isPlay, setIsPlay] = useState(true);
    const [keyword, setKeyword] = useState();
    // effect keyword
    useEffect(() => {}, [keyword]);
    const handleOnChangeKeyword = (e) => {
        const { value } = e.target;
        setKeyword(value);
    };
    //
    let tag;

    useEffect(() => {
        tag = document.getElementById('audio');
    }, []);

    // styled-components
    const ButtonSearch = styled(Button)`
        background-color: transparent;
        border: none;
        color: #fff;
    `;
    return (
        <div className={clsx(style.wrapper)}>
            <div className={clsx(style.slider)}>
                <div className={clsx(style.slider_logo)}>
                    <img width={'120px'} height={'40px'} src={logo} />
                </div>
                <div className={clsx(style.slider_nav)}>
                    <NavItem
                        title={'cá nhân'}
                        children={<i className="fa-solid fa-star"></i>}
                        isActive={false}
                    />
                    <NavItem
                        title={'khám phá'}
                        children={<i className="fa-solid fa-music"></i>}
                        isActive={true}
                    />{' '}
                    <NavItem
                        title={'#zingchart'}
                        children={<i className="fa-solid fa-chart-simple"></i>}
                        isActive={false}
                    />{' '}
                    <NavItem
                        title={'nhạc mới'}
                        children={<i className="fa-solid fa-guitar"></i>}
                        isActive={false}
                    />{' '}
                    <NavItem
                        title={'thể loại'}
                        children={<i className="fa-solid fa-list-ul"></i>}
                        isActive={false}
                    />
                </div>
            </div>
            <div className={clsx(style.content)}>
                <div className={clsx(style.content_top)}>
                    <div className={clsx(style.content_top_search)}>
                        <ButtonSearch>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </ButtonSearch>
                        <input
                            type="text"
                            placeholder="tìm kiếm bài hát"
                            value={keyword}
                            onChange={handleOnChangeKeyword}
                        />
                    </div>
                    <div className={clsx(style.content_top_btns)}>
                        <Button ghost>
                            <i className="fa-solid fa-palette"></i>
                        </Button>
                        <Avatar
                            size={40}
                            src={<img src={ckp} alt="avatar" />}
                        />
                    </div>
                </div>
                <div
                    style={{
                        padding: '0px 59px',
                        maxHeight: 'calc(100vh - 140px)',
                        overflow: 'auto',
                    }}
                >
                    {children}
                </div>
            </div>
            <div className={clsx(style.songPlay)}>
                <div className={clsx(style.songPlay_info)}>
                    <img src={ckp} />
                    <div className={clsx(style.songPlay_info_name)}>
                        <h5>an tinh sang trang</h5>
                        <span>chau khai phong</span>
                    </div>

                    <div>
                        <Button style={{ border: 'none' }} ghost={true}>
                            <i className="fa-solid fa-heart"></i>
                        </Button>
                        <Button style={{ border: 'none' }} ghost={true}>
                            <i className="fa-solid fa-comment"></i>
                        </Button>
                    </div>
                </div>
                <div className={clsx(style.songPlay_controls)}>
                    <div className={clsx(style.songPlay_controls_list)}>
                        <Button style={{ border: 'none' }} ghost={true}>
                            <i className="fa-solid fa-shuffle"></i>
                        </Button>
                        <Button style={{ border: 'none' }} ghost={true}>
                            <i className="fa-solid fa-backward-step"></i>
                        </Button>
                        <Button
                            style={{ border: 'none' }}
                            ghost={true}
                            onClick={() => {
                                tag.play();
                            }}
                        >
                            <i className="fa-solid fa-play"></i>
                        </Button>
                        <Button
                            style={{ border: 'none' }}
                            ghost={true}
                            onClick={() => {
                                tag.pause();
                            }}
                        >
                            <i className="fa-solid fa-pause"></i>
                        </Button>
                        <Button style={{ border: 'none' }} ghost={true}>
                            <i className="fa-solid fa-forward-step"></i>
                        </Button>
                        <Button style={{ border: 'none' }} ghost={true}>
                            <i className="fa-solid fa-repeat"></i>
                        </Button>
                    </div>
                    <div className={clsx('songPlay_controls_time')}>
                        <span>00:01</span>
                        <input
                            id="progress"
                            className={clsx('progress')}
                            type="range"
                            value="0"
                            step="1"
                            min="0"
                            max="500"
                            onChange={handleOnChangeKeyword}
                        />
                        <span>05:30</span>
                    </div>
                    <audio
                        className={clsx(style.audio)}
                        src="https://firebasestorage.googleapis.com/v0/b/music-app-d9617.appspot.com/o/AnTinhSangTrang_0542.mp3?alt=media&token=ad29fe90-c840-43de-8277-ebf64d345d4e"
                        id="audio"
                    />
                </div>
                <div className={clsx(style.songPlay_list)}>
                    <Button style={{ border: 'none' }} ghost={true}>
                        <i className="fa-solid fa-volume-high"></i>
                    </Button>
                    <Button style={{ border: 'none' }} ghost={true}>
                        <i className="fa-solid fa-list-ol"></i>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default GlobalStyle;
