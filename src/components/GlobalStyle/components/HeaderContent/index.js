import clsx from 'clsx';
import style from './HeaderContent.module.scss';
import { Button, Avatar, Modal } from 'antd';
import ckp from '~/assets/imgs/ckp.webp';
import ResultSearch from '../ResultSearch';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; //
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Search from '../Search';

function HeaderContent() {
    const [isOpenTheme, setIsOpenTheme] = useState(false);
    return (
        <div className={clsx(style.content_top)}>
            <div>
                {/* ---------- controls */}
                <div className={clsx(style.content_top_controls)}>
                    <Button
                        className={clsx(
                            style.content_top_control,
                            style.not_active,
                        )}
                        disabled
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                    </Button>
                    <Button className={clsx(style.content_top_control)} ghost>
                        <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                </div>
                {/* ---------- search */}
                <Search />
            </div>
            {/* ------------------------------ */}
            <div className={clsx(style.content_top_btns)}>
                <Tippy content={<span>chủ đề</span>}>
                    <Button
                        className={clsx(style.content_top_btn)}
                        ghost
                        onClick={() => setIsOpenTheme(true)}
                    >
                        <i className="fa-solid fa-palette"></i>
                    </Button>
                </Tippy>
                <Tippy content={<span>cài đặt</span>}>
                    <Button className={clsx(style.content_top_btn)} ghost>
                        <i className="fa-solid fa-gear"></i>
                    </Button>
                </Tippy>
                <div className={clsx(style.content_top_account)}>
                    <Avatar size={40} src={<img src={ckp} alt="avatar" />} />
                    <div>
                        <Button>Logout</Button>
                    </div>
                </div>
            </div>
            {/* modal theme */}
            <Modal
                open={isOpenTheme}
                footer={null}
                onCancel={() => setIsOpenTheme(false)}
                className={clsx(style.modal_theme_wrapper)}
            >
                <h3 className={clsx(style.modal_theme_title)}>giao diện</h3>
                <div className={clsx(style.modal_theme_row)}>
                    <h4 className={clsx(style.modal_theme_row_title)}>
                        Dynamic
                    </h4>
                    <div className={clsx(style.modal_theme_row_list)}>
                        <div className={clsx(style.modal_theme_row_item)}>
                            <div className={clsx(style.modal_theme_row_img)}>
                                <img src={ckp} />
                                <div></div>
                                <div
                                    className={clsx(
                                        style.modal_theme_row_img_hover,
                                    )}
                                >
                                    <Button>áp dụng</Button>
                                    <Button>xem trước</Button>
                                </div>
                            </div>
                            <span>London</span>
                        </div>
                        <div className={clsx(style.modal_theme_row_item)}>
                            <div className={clsx(style.modal_theme_row_img)}>
                                <img src={ckp} />
                                <div></div>
                            </div>
                            <span>London</span>
                        </div>
                        <div className={clsx(style.modal_theme_row_item)}>
                            <div className={clsx(style.modal_theme_row_img)}>
                                <img src={ckp} />
                                <div></div>
                            </div>
                            <span>London</span>
                        </div>
                        <div className={clsx(style.modal_theme_row_item)}>
                            <div className={clsx(style.modal_theme_row_img)}>
                                <img src={ckp} />
                                <div></div>
                            </div>
                            <span>London</span>
                        </div>
                    </div>
                </div>
                <div className={clsx(style.modal_theme_row)}>
                    <h4 className={clsx(style.modal_theme_row_title)}>
                        Dynamic
                    </h4>
                    <div className={clsx(style.modal_theme_row_list)}>
                        <div className={clsx(style.modal_theme_row_item)}>
                            <div className={clsx(style.modal_theme_row_img)}>
                                <img src={ckp} />
                                <div></div>
                            </div>
                            <span>London</span>
                        </div>
                        <div className={clsx(style.modal_theme_row_item)}>
                            <div className={clsx(style.modal_theme_row_img)}>
                                <img src={ckp} />
                                <div></div>
                            </div>
                            <span>London</span>
                        </div>
                        <div className={clsx(style.modal_theme_row_item)}>
                            <div className={clsx(style.modal_theme_row_img)}>
                                <img src={ckp} />
                                <div></div>
                            </div>
                            <span>London</span>
                        </div>
                        <div className={clsx(style.modal_theme_row_item)}>
                            <div className={clsx(style.modal_theme_row_img)}>
                                <img src={ckp} />
                                <div></div>
                            </div>
                            <span>London</span>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default HeaderContent;
