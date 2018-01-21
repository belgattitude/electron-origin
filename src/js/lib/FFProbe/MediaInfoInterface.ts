export interface MediaFormatTagsInterface {
    compatible_brands: string;  // i.e: "isommp42"
    creation_time: string;      // i.e: "2014-01-10T10:15:23.000000Z"
    major_brand: string;        // i.e: "mp42"
    minor_version: number;       // i.e: "0"
}

export interface MediaFormatInterface {
    bit_rate: number; // ie: "414493"
    duration: number; // i.e "494.213333"
    filename: string;
    format_long_name: string; // i.e: "QuickTime / MOV"
    format_name: string; // i.e: "mov,mp4,m4a,3gp,3g2,mj2"
    nb_programs: number; // i.e: 0
    nb_streams: number; // i.e: 2
    probe_score: number; // i.e: 100
    size: number; // i.e: "25606048"
    start_time: number; // i.e: "0.000000"
    tags: MediaFormatTagsInterface;
}

export interface MediaStreamInterface {
    avg_frame_rate: string; // i.e: "25/1"
    bit_rate: number; // i.e: "316050"
    bits_per_raw_sample: number; // i.e: "8"
    chroma_location: string; // i.e: "left"
    codec_long_name: string; // i.e: "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10"
    codec_name: string; // i.e: "h264"
    codec_tag: string; // i.e: "0x31637661"
    codec_tag_string: string; // i.e: "avc1"
    codec_time_base: string; // i.e: "1/50"
    codec_type: string; // i.e: "video"
    coded_height: number; // i.e:   360
    coded_width: number; // i.e:  470
    display_aspect_ratio: string; // i.e: "0:1"
    disposition: object;
    duration: number; // i.e: "494.140000"
    duration_ts: number; // i.e: 24707
    has_b_frames: number; // i.e:  0
    height: number; // i.e: 360
    index: number; // i.e: 0
    is_avc: boolean;
    level: number; // i.e:  21
    nal_length_size: number; // i.e: "4"
    nb_frames: number; // i.e: "12354"
    pix_fmt: string; // i.e: "yuv420p"
    profile: string; // i.e: "Constrained Baseline"
    r_frame_rate: string; // i.e: "25/1"
    refs: number; // i.e: 1
    sample_aspect_ratio: string; // i.e: "0:1"
    start_pts: number; // i.e: 0
    start_time: number; // i.e:  "0.000000"
    tags: any;
    time_base: string; // i.e: "1/50"
    width: number; // i.e: 470
}

export interface MediaInfoInterface {
    format: MediaFormatInterface;
    streams: MediaStreamInterface[];
}
