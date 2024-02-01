import { theme } from 'antd';
import { type ConfigProviderProps } from 'antd/es/config-provider';

const { defaultAlgorithm, defaultSeed } = theme;

const customTheme = {
    token: {
        colorPrimary: '#5945ec',
        colorInfo: '#5945ec',
    },
} as ConfigProviderProps['theme'];

const mapToken = defaultAlgorithm({ ...defaultSeed, ...customTheme?.token });

export { customTheme, mapToken };
