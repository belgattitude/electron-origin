import React from 'react';
import Ffmpeg from '@src/lib/FFMpeg/FFMpeg';
import ElectronConfig from '@src/Config';
import {ConvertOptionsInterface} from '@src/lib/FFMpeg/ConvertPropsInterface';

interface Props {
    conversion: {
        srcFile: string,
        destFile: string,
        options: ConvertOptionsInterface
    };
}

class Converter extends React.Component<Props, {}> {

    async convertVideo() {

        const srcFile = this.props.conversion.srcFile;
        const destFile = this.props.conversion.destFile;
        const options = this.props.conversion.options;
        console.log('OPTIONS', this.props);
        const ffmpeg = new Ffmpeg(ElectronConfig.getFFBinariesConfig().ffmpeg);
        const convert = ffmpeg.convert(srcFile, destFile, options).then(
            () => {
                console.log('CONVERTED !!!!');
            }
        ).catch((reason: any) => {
            console.log('failed', reason);
        });
        console.log('convert', convert);
    }

    public render() {

        const conv = JSON.stringify(this.props.conversion);

        return (
            <div>
                <p>HELLO {conv}</p>
                <button onClick={() => {this.convertVideo();}}>Convert</button>
            </div>
        );
    }
}

export default Converter;
