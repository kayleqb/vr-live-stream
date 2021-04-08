import {nmsConfig} from './nmsConfig.js'
import NodeMediaServer from 'node-media-server';

const nms = new NodeMediaServer(nmsConfig.rtmp_server);

nms.on('prePublish', async (id, StreamPath, args) => {
    console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

export default nms