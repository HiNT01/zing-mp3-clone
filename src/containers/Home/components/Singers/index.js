import style from './Singers.module.scss';
import clsx from 'clsx';
function Singers({listSingers}) {
    return <div className={clsx(style.Singers)}>
        {listSingers.map(it => <img src= {it.url} />)}
    </div>;
}

export default Singers;
