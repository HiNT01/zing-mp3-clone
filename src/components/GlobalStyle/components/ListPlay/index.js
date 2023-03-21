import ListPlayItem from '../ListPlayItem';
import { useState } from 'react';
function ListPlay({ listPlay }) {
    // let newListPlay = listPlay.map((it) => {
    //     if (it === 6) {
    //         return { type: 'active', songInfo: it };
    //     }else if(it < 5) {
    //         return { type: 'disable', songInfo: it };
    //     }
    //     return {
    //         type: 'default',
    //         songInfo: it,
    //     };
    // });
    return (
        <div>
            {listPlay.map((it) => (
                <ListPlayItem key={it.songInfo} data={it} />
            ))}
        </div>
    );
}

export default ListPlay;
