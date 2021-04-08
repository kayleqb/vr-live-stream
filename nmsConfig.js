export const nmsConfig = {
    server: {
        secret: "aidsubd298db9aod",
        port : 4500
    },
    rtmp_server: {
        rtmp: {
            port: 4000,
            chunk_size: 60000,
            gop_cache: true,
            ping: 60,
            ping_timeout: 30
        },
        http: {
            port: 4800,
            mediaroot: './server/media',
            allow_origin: '*'
        },
        trans: {
            ffmpeg: 'ffmpeg',
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