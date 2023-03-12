import { useState, useRef, useEffect } from 'react';
import logo from '~/assets/imgs/ZingMP3logo.svg.png';
import ckp from '~/assets/imgs/ckp.webp';
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
function GlobalStyle({ children }) {
    const [isPlay, setIsPlay] = useState(false);
    // modal create playlist
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [listOptionModal, setListOptionModal] = useState({
        repeat: false,
        random: false,
    });
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
    useEffect(() => {
        const tagAudio = document.getElementById('audio');
        console.log(isPlay);
        if (isPlay) {
            tagAudio.play();
        } else {
            tagAudio.pause();
        }
    }, [isPlay]);
    const path = useHref();
    return (
        <div className={clsx(style.wrapper)}>
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
            </div>
            {/* song */}
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
                            onClick={() => setIsPlay(!isPlay)}
                        >
                            {isPlay ? (
                                <i className="fa-solid fa-pause"></i>
                            ) : (
                                <i className="fa-solid fa-play"></i>
                            )}
                        </Button>

                        <Button style={{ border: 'none' }} ghost={true}>
                            <i className="fa-solid fa-forward-step"></i>
                        </Button>
                        <Button style={{ border: 'none' }} ghost={true}>
                            <i className="fa-solid fa-repeat"></i>
                        </Button>
                    </div>
                    <div className={clsx(style.songPlay_controls_time)}>
                        <span>00:01</span>
                        <input
                            id="progress"
                            className={clsx(style.progress)}
                            type="range"
                            value="200"
                            step="10"
                            min="0"
                            max="500"
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
