import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
