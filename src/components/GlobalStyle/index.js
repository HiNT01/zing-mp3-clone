import { useState, useRef, useEffect } from 'react';
import logo from '~/assets/imgs/ZingMP3logo.svg.png';
import NavItem from './components/NavItem';
import clsx from 'clsx';
import style from './GlobalStyle.module.scss';
import { Button, Modal } from 'antd';
import {
    icons,
    iconLibaris,
} from '~/components/GlobalStyle/components/NavItem/icons';
import HeaderContent from './components/HeaderContent';
import { useHref } from 'react-router-dom';
import { secondsToMinutes } from './actionAudio';
import ListPlay from './components/ListPlay';
import Toast from '~/components/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { loginStatus, toast, song, play } from '~/selectors';
import { useNavigate } from 'react-router-dom';
import { isPlay, songPlay } from './action';
import { getListSong } from '~/containers/Home/action';

function GlobalStyle({ children }) {
    const [audioInfo, setAudioInfo] = useState({
        // isPlay : false,
        // isRepeat : false,
        // isRandom : false,
        currentTime: `00:00`,
        duration: `00:00`,
        // url: 'https://firebasestorage.googleapis.com/v0/b/music-app-d9617.appspot.com/o/ChiaCachBinhYen_0402.mp3?alt=media&token=abb0905d-e28b-40ef-a0dc-619ca75f3278',
    });
    // const [isPlay, setIsPlay] = useState(false);
    const [listOptionModal, setListOptionModal] = useState({
        repeat: false,
        random: false,
    });
    const [volume, setVolume] = useState(10);
    const [typeListPlay, setTypeListPlay] = useState(1); // 1 : danh sach phat , 0 : nghe gan day

    const [isShowListPlay, setIsShowListPlay] = useState(false);
    // selector
    const dataToast = useSelector(toast);
    const isLogin = useSelector(loginStatus);
    const songPlay = useSelector(song);
    const isPlay = useSelector(play);
    //
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let audioRef = useRef(new Audio(songPlay.audioURL));
    const path = useHref();
    // modal create playlist
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    useEffect(() => {
        if (!isLogin) navigate('/login');
        dispatch(getListSong());
    }, []);
    useEffect(() => {
        audioRef.current.src = songPlay.audioURL;
    }, [songPlay]);
    useEffect(() => {
        audioRef.current.src = songPlay.audioURL;
        const audio = audioRef.current;
        const progressInput = document.getElementById('progress');
        const handleTimeUpdate = () => {
            const newCurrentTime = secondsToMinutes(audio.currentTime);
            const newDuration = secondsToMinutes(audio.duration);
            setAudioInfo({
                ...audioInfo,
                currentTime: newCurrentTime,
                duration: newDuration,
            });
        };
        if (isPlay) {
            audio.play();
            audio.addEventListener('timeupdate', handleTimeUpdate);
        } else {
            audio.pause();
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        }
    }, [isPlay]);
    useEffect(() => {
        const progressInput = document.getElementById('progress');
        progressInput.value = handleProgress();
    }, [audioInfo.currentTime]);

    // function audio

    const handleProgress = () => {
        const { currentTime, duration } = audioRef.current;
        const percent = Math.ceil((currentTime * 500) / duration);
        return percent || 0;
    };
    const seekTime = (e) => {
        const { duration } = audioRef.current;
        const { value } = e.target;
        const newCurrentTime = (value * duration) / 500;
        audioRef.current.currentTime = newCurrentTime;
    };
    const handleVolume = (e) => {
        const { value } = e.target;
        setVolume(value);
        const newVolume = value / 10;
        audioRef.current.volume = newVolume;
    };
    // function modal
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    //
    const a = [
        {
            type: 'disable',
            songInfo: 0,
            isLibary: false,
        },
        {
            type: 'disable',
            songInfo: 1,
            isLibary: false,
        },
        {
            type: 'disable',
            songInfo: 2,
            isLibary: false,
        },
        {
            type: 'disable',
            songInfo: 3,
            isLibary: false,
        },
        {
            type: 'disable',
            songInfo: 4,
            isLibary: false,
        },
        {
            type: 'default',
            songInfo: 5,
            isLibary: false,
        },
        {
            type: 'active',
            songInfo: 6,
            isLibary: false,
        },
        {
            type: 'default',
            songInfo: 7,
            isLibary: true,
        },
        {
            type: 'default',
            songInfo: 8,
            isLibary: false,
        },
    ];
    return (
        <div className={clsx(style.wrapper)}>
            <Toast dataToast={dataToast} />
            {/* navbar */}
            <div className={clsx(style.slider)}>
                <div className={clsx(style.slider_logo)}>
                    <img width={'120px'} height={'40px'} src={logo} />
                </div>
                <div className={clsx(style.slider_nav)}>
                    <div className={clsx(style.slider_nav_top)}>
                        {icons.slice(0, 5).map((it) => (
                            <NavItem
                                key={it.id}
                                title={it.title}
                                children={it.icon}
                                isActive={path === it.path}
                                path={it.path}
                            />
                        ))}
                        <div className={clsx(style.slider_nav_line)}></div>
                    </div>
                    <div className={clsx(style.slider_nav_bottom)}>
                        {icons.slice(5).map((it) => (
                            <NavItem
                                key={it.id}
                                title={it.title}
                                children={it.icon}
                                isActive={it.isActive}
                            />
                        ))}
                        <h4>thư viện</h4>
                        {iconLibaris.map((it) => (
                            <NavItem
                                key={it.id}
                                title={it.title}
                                children={it.icon}
                                isActive={it.isActive}
                            />
                        ))}
                    </div>
                </div>
                <Button
                    className={clsx(style.slider_btn_add)}
                    ghost
                    onClick={showModal}
                >
                    <i className="fa-solid fa-plus"></i>Tạo playlist mới
                </Button>
            </div>
            {/* content */}
            <div className={clsx(style.content)}>
                {/* header content */}
                <HeaderContent />
                {/* content */}
                <div className={clsx(style.content_center)}>
                    {/* page */}
                    {children}
                </div>
                {/* list play */}
                <div
                    className={clsx(
                        style.listPlay_wrapper,
                        isShowListPlay ? style.active : style.notActive,
                    )}
                >
                    <div className={clsx(style.listPlay_top)}>
                        <div className={clsx(style.listPlay_topWrapper)}>
                            <div
                                className={clsx(
                                    style.listPlay_top_item,
                                    typeListPlay ? style.active : '',
                                )}
                            >
                                danh sách phát
                            </div>
                            <div
                                className={clsx(
                                    style.listPlay_top_item,
                                    !typeListPlay ? style.active : '',
                                )}
                            >
                                phát gần đây
                            </div>
                        </div>
                    </div>
                    <div className={clsx(style.listPlay_list)}>
                        <ListPlay listPlay={a} />
                    </div>
                </div>
            </div>
            {/* song */}
            <div className={clsx(style.songPlay)}>
                <div className={clsx(style.songPlay_info)}>
                    <img src={songPlay.imgURL} />
                    <div className={clsx(style.songPlay_info_name)}>
                        <h5>{songPlay.songName}</h5>
                        <span>{songPlay.singer}</span>
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
                                dispatch(play(!isPlay));
                            }}
                        >
                            <span className={isPlay ? 'visible' : 'invisible'}>
                                <i className="fa-solid fa-pause"></i>
                            </span>
                            <span className={!isPlay ? 'visible' : 'invisible'}>
                                <i className="fa-solid fa-play"></i>
                            </span>
                        </Button>

                        <Button style={{ border: 'none' }} ghost={true}>
                            <i className="fa-solid fa-forward-step"></i>
                        </Button>
                        <Button style={{ border: 'none' }} ghost={true}>
                            <i className="fa-solid fa-repeat"></i>
                        </Button>
                    </div>
                    <div className={clsx(style.songPlay_controls_time)}>
                        <span>{audioInfo.currentTime}</span>
                        <input
                            id="progress"
                            className={clsx(style.progress)}
                            type="range"
                            step="1"
                            min="0"
                            max="500"
                            onChange={(e) => seekTime(e)}
                        />
                        <span>{audioInfo.duration}</span>
                    </div>
                </div>
                <div className={clsx(style.songPlay_list)}>
                    <Button
                        className={+volume ? 'visible' : 'invisible'}
                        style={{ border: 'none' }}
                        ghost={true}
                    >
                        <i className="fa-solid fa-volume-high"></i>
                    </Button>
                    <Button
                        className={!+volume ? 'visible' : 'invisible'}
                        style={{ border: 'none' }}
                        ghost={true}
                    >
                        <i className="fa-solid fa-volume-xmark"></i>
                    </Button>

                    <input
                        id="volume"
                        className={clsx(style.songPlay_volume)}
                        type="range"
                        step="1"
                        min="0"
                        max="10"
                        value={volume}
                        onChange={(e) => handleVolume(e)}
                    />
                    <Button
                        style={{ border: 'none' }}
                        ghost={true}
                        onClick={() => setIsShowListPlay(!isShowListPlay)}
                    >
                        <i className="fa-solid fa-list-ol"></i>
                    </Button>
                </div>
            </div>
            {/* modal create playlist */}
            <Modal
                // title="Tạo playlist mới"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                className={clsx(style.modal_wrapper)}
            >
                <h3 className={clsx(style.modal_title)}>Tạo playlist mới</h3>
                <input type="text" value="" placeholder="Nhập tên playlist" />
                <div className={clsx(style.modal_option)}>
                    <div>
                        <h4 className={clsx(style.modal_option_title)}>
                            Phát ngẫu nhiên
                        </h4>
                        <span className={clsx(style.modal_option_note)}>
                            Luôn phát ngẫu nhiên tất cả bài hát
                        </span>
                    </div>
                    <div
                        className={clsx(
                            style.modal_option_btn,
                            listOptionModal.random ? style.active : '',
                        )}
                        onClick={() =>
                            setListOptionModal({
                                ...listOptionModal,
                                random: !listOptionModal.random,
                            })
                        }
                    >
                        <span></span>
                    </div>
                </div>
                <div className={clsx(style.modal_option)}>
                    <div>
                        <h4 className={clsx(style.modal_option_title)}>
                            Lặp lại
                        </h4>
                        <span className={clsx(style.modal_option_note)}>
                            Luôn Lặp lại tất cả bài hát
                        </span>
                    </div>
                    <div
                        className={clsx(
                            style.modal_option_btn,
                            listOptionModal.repeat ? style.active : '',
                        )}
                        onClick={() =>
                            setListOptionModal({
                                ...listOptionModal,
                                repeat: !listOptionModal.repeat,
                            })
                        }
                    >
                        <span></span>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default GlobalStyle;
