// Core
import { getFullApiUrl } from '../instruments';

const GROUP_ID = '97logdaump6s';
const TOKEN = 'd2cq98yqd0';
const url = 'https://lab.lectrum.io/react/api';
const api = getFullApiUrl(url, GROUP_ID);

export { GROUP_ID, TOKEN, api, url };