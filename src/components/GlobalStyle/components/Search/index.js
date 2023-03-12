import clsx from 'clsx';
import style from './Search.module.scss';
import { useState, useEffect, useRef } from 'react';
import ResultSearch from '../ResultSearch';
import styled from 'styled-components';
import { Button } from 'antd';
import HeadlessTippy from '@tippyjs/react/headless';

function Search() {
    const [isOpenResult, setIsOpenResult] = useState(false);
    const [keyword, setKeyword] = useState();
    useEffect(() => {}, [keyword]);
    const inputRef = useRef();
    const handleOnChangeKeyword = (e) => {
        const { value } = e.target;
        setKeyword(value);
        setIsOpenResult(true);
    };
    // styled-components
    const ButtonSearch = styled(Button)`
        background-color: transparent;
        border: none;
        color: #fff;
    `;
    const handleHideResult = () => {
        setIsOpenResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={isOpenResult}
            render={(attrs) => (
                <div
                    className={clsx(style.content_top_result)}
                   
                    {...attrs}
                >
                    <h4>đề xuất cho bạn</h4>
                    <ResultSearch listResult={[1, 2, 3, 4, 5]} />
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div
                className={clsx(
                    style.content_top_search,
                    isOpenResult ? style.active : '',
                )}
            >
                <ButtonSearch>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </ButtonSearch>
                <input
                    type="text"
                    placeholder="tìm kiếm bài hát"
                    value={keyword}
                    onChange={handleOnChangeKeyword}
                    onClick={() => setIsOpenResult(true)}
                    useRef={inputRef}
                />
            </div>
        </HeadlessTippy>
    );
}

export default Search;
