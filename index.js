/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import Root from './src/view/root/Root'
import {name as appName} from './app.json';

//react native调试在谷歌浏览器中查看network信息
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

AppRegistry.registerComponent(appName, () => Root);
