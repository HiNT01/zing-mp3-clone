import style from './ResultSearch.module.scss';
import clsx from 'clsx';
import ckp from '~/assets/imgs/ckp.webp';
import { Button } from 'antd';

function ResultSearch({ listResult }) {
    return (
        <div className={clsx(style.list)}>
            {listResult.map((it) => (
                <div key={it} className={clsx(style.newSongCategory_item)}>
                    <img src={ckp} alt="img" />
                    <div className={clsx(style.newSongCategory_item_info)}>
                        <b>ân tình sang trang</b>
                        <span>châu khải phong</span>
                    </div>
                    <div className={clsx(style.newSongCategory_item_before)}>
                        <Button
                            style={{
                                width: '30px',
                                height: '30px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '1rem',
                                padding: '0',
                            }}
                            ghost
                        >
                            <i className="fa-solid fa-play"></i>
                        </Button>
                        <Button ghost>
                            <i className="fa-solid fa-ellipsis"></i>
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ResultSearch;
