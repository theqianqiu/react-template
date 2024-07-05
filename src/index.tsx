import { createRoot } from 'react-dom/client';
import './assets/css/global.css';
import { Routers } from './router';
import { GlobalStore } from './store/globalStore';
import { initDayjs } from './utils/dayJsInit';

const init = () => {
    initDayjs();
};
init();

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <GlobalStore>
        <Routers />
    </GlobalStore>,
);
