import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { config } from '../../config';
import { RouterEnum } from '../../router/constans';
import style from './styles.scss';

export const Home: FC = () => {
    const navigate = useNavigate();

    const tologin = useCallback(() => {
        navigate(RouterEnum.LOGIN, { replace: true });
    }, [navigate]);

    return (
        <div className=" w-screen h-screen flex flex-col items-center justify-center">
            <p className="text-[24px] mb-6">Hello, welcome 👋 !!!</p>
            <p className="text-[24px] mb-6">
                {`Now your code ENV is `}
                <span className="text-[#FFD560]">{config.env} </span>
            </p>
            <p className="text-[24px] mb-6">Click the button below to jump router of login👇️</p>
            <button onClick={tologin} className={style.btn}>
                to login
            </button>
        </div>
    );
};
Home.displayName = 'Home';
