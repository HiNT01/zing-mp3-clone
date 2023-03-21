import './style.css';
import toast from './funtion';
import { useEffect } from 'react';

function Toast({ dataToast }) {
    const { isShow } = dataToast;
    useEffect(() => {
        if (isShow) toast(dataToast);
    }, [dataToast]);
    return (
        <div>
            <div id="toast"></div>
        </div>
    );
}

export default Toast;
