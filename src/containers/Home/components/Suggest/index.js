import style from './Suggest.module.scss';
import clsx from 'clsx';
import { Typography, Button } from 'antd';
import styled from 'styled-components';
import { dataUser } from '~/selectors';
import { useSelector } from 'react-redux';
import defaultIMG from '~/assets/imgs/default.webp';
let { Title } = Typography;
Title = styled.h3`
    color: #fff;
    text-transform: capitalize;
`;
function Suggest({ listData, handleChangeSong, handleUpdateUser, dataTheme }) {
    const user = useSelector(dataUser);
    return (
        <div className={clsx(style.wrapper)}>
            <Title level={3}>Gợi ý cho bạn</Title>
            <div className={clsx(style.list)}>
                {listData.map((it, index) => (
                    <div key={index} className={clsx(style.item)}>
                        <div className={clsx(style.item_img)}>
                            <img src={it.imgURL || defaultIMG} />
                            <div className={clsx(style.item_img_before)}>
                                {user.mySong.includes(it.id) ? (
                                    <Button
                                        className={clsx(style.btn)}
                                        onClick={() =>
                                            handleUpdateUser(
                                                it.id,
                                                'updateMySong',
                                            )
                                        }
                                        style={{
                                            color: `${dataTheme.bgColorBtn}`,
                                        }}
                                    >
                                        <i className="fa-solid fa-heart"></i>
                                    </Button>
                                ) : (
                                    <Button
                                        className={clsx(style.btn)}
                                        onClick={() =>
                                            handleUpdateUser(
                                                it.id,
                                                'updateMySong',
                                            )
                                        }
                                    >
                                        <i className="fa-solid fa-heart"></i>
                                    </Button>
                                )}

                                <Button
                                    className={clsx(style.btn)}
                                    onClick={() => handleChangeSong(it)}
                                >
                                    <i className="fa-solid fa-play"></i>
                                </Button>
                            </div>
                        </div>
                        <div className={clsx(style.item_text)}>
                            <h4>{it.songName}</h4>
                            <span>{it.singer}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Suggest;
