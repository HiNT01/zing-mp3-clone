import style from './Category.module.scss';
import clsx from 'clsx';
import { Typography, Button } from 'antd';
import styled from 'styled-components';
import saocungduoc from '~/assets/imgs/sao-cung-duoc.webp';
let { Title } = Typography;
Title = styled.h3`
    color: #fff;
    text-transform: capitalize;
`;
function Category() {
    return (
        <div className={clsx(style.wrapper)}>
            <Title level={3}>Yêu thích</Title>
            <div className={clsx(style.list)}>
                <div className={clsx(style.item)}>
                    <div className={clsx(style.item_img)}>
                        <img src={saocungduoc} />
                        <div className={clsx(style.item_img_before)}>
                            <Button ghost>
                                <i className="fa-regular fa-heart"></i>
                            </Button>
                            <Button ghost>
                                <i className="fa-solid fa-play"></i>
                            </Button>
                        </div>
                    </div>
                    <div className={clsx(style.item_text)}>
                        <h4>sao cũng được (signle)</h4>
                        <span>thành đạt</span>
                    </div>
                </div>
                {/*  */}
                <div className={clsx(style.item)}>
                    <div className={clsx(style.item_img)}>
                        <img src={saocungduoc} />
                        <div className={clsx(style.item_img_before)}>
                            <Button  ghost>
                                <i className="fa-regular fa-heart"></i>
                            </Button>
                            <Button ghost>
                                <i className="fa-solid fa-play"></i>
                            </Button>
                        </div>
                    </div>
                    <div className={clsx(style.item_text)}>
                        <h4>sao cũng được (signle)</h4>
                        <span>thành đạt</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
