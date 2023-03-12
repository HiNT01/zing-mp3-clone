import clsx from 'clsx';
import style from './SongLibariList.module.scss';
import SongLibariItem from '../SongLibariItem';
import { useState } from 'react';
import { Button } from 'antd';
function SongLibariList({ listSongLibary }) {
    const [listChecked, setListChecked] = useState([0]);
    const handleOnCheck = (id) => {
        const condition = listChecked.includes(id);
        if (condition) {
            setListChecked(listChecked.filter((it) => it !== id));
        } else {
            setListChecked([...listChecked, id]);
        }
    };
    return (
        <div className={clsx(style.wrapper)}>
            <h2>bài hát yêu thích</h2>
            <div>
                {listChecked.length ? (
                    <div className={clsx(style.checkAll)}>
                        <input type="checkbox" />
                        <Button>thêm vào danh sách phát</Button>
                    </div>
                ) : (
                    <span>bài hát</span>
                )}

                <span>album</span>
                <span>thời gian</span>
            </div>
            {listSongLibary.map((it) => (
                <SongLibariItem
                    key={it}
                    data={{ isChecked: listChecked.includes(it), id: it }}
                    onClick={handleOnCheck}
                />
            ))}
        </div>
    );
}

export default SongLibariList;
