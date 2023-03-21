import clsx from 'clsx';
import style from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '~/components/GlobalStyle/action';
import { listUser, loginStatus, toast } from '~/selectors';
import { useNavigate } from 'react-router-dom';
import Toast from '~/components/Toast';
function Login() {
    const [account, setAccount] = useState({
        userName: '',
        password: '',
    });
    const isLogin = useSelector(loginStatus);
    const dataToast = useSelector(toast);
    const navigate = useNavigate();
    useEffect(() => {
        if (isLogin) {
            navigate('/');
        } else {
            navigate('/login');
        }
    }, [isLogin]);
    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setAccount({ ...account, [name]: value });
    };
    const dispatch = useDispatch();
    return (
        <div className={clsx(style.wrapper)}>
            {/* <Toast dataToast={dataToast} /> */}
            <div className={clsx(style.login_box)}>
                <h2>Login</h2>

                <div className={style.login_box_content}>
                    <div className={clsx(style.user_box)}>
                        <input
                            type="text"
                            name="userName"
                            required=""
                            onChange={(e) => onChangeInput(e)}
                            value={account.userName}
                        />
                        <label>Username</label>
                    </div>
                    <div className={clsx(style.user_box)}>
                        <input
                            type="password"
                            name="password"
                            required=""
                            onChange={(e) => onChangeInput(e)}
                        />
                        <label>Password</label>
                    </div>
                    <div className={clsx(style.login_box_sign)}>
                        <span>Do not have an account .</span>{' '}
                        <Link to="/signup">signup</Link>
                    </div>

                    <button
                        className={clsx(style.login_btn_submit)}
                        onClick={() => dispatch(login(account))}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
