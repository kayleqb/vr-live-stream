export const nmsConfig = {
    server: {
        secret: process.env.SESSION_SECRET,
        port : process.env.NMS_PORT || 4100
    },
    rtmp_server: {
        rtmp: {
            port: process.env.RTMP_PORT || 4200,
            chunk_size: 60000,
            gop_cache: true,
            ping: 60,
            ping_timeout: 30
        },
        http: {
            port: process.env.HTTP_PORT || 4300,
            mediaroot: './server/media',
            allow_origin: '*'
        },
        trans: {
            ffmpeg: process.env.FFMPEG_PATH || 'C:/Users/mccle/3D Objects/ffmpeg.exe',
            tasks: [
                {
                    app: 'live',
                    hls: true,
                    hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
                    dash: true,
                    dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
                }
            ]
        }
    }
};