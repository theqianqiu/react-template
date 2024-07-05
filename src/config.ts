type Config = {
    isDev: boolean;
    env: string;
    /** 路由路径（ngnix里配置的转发路径） */
    routePath: string;
    httpBaseurl: string;
    socketUrl: string;
};

const isLocal = process.env.ENV === 'dev';

export const config: Config = {
    isDev: isLocal,
    env: process.env.ENV || '',
    routePath: process.env.ROUTER_BASE || '',
    httpBaseurl: process.env.HTTP_BASE_URL || '',
    socketUrl: process.env.SOCKET_URL || '',
};
