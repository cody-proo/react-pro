import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { FC, ReactNode } from 'react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { DIRECTION_KEY } from '../core/languages/keys';

const cacheRtl = createCache({
 key: 'muirtl',
 stylisPlugins: [prefixer, rtlPlugin],
});

const direction = window.localStorage.getItem(DIRECTION_KEY);

const RtlProvider: FC<{ children: ReactNode }> = ({ children }) => {
 if (direction === 'ltr') return <>{children}</>;
 return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export default RtlProvider;
