import React, {CSSProperties} from 'react';

/**
 * @link https://blog.cloudboost.io/using-html5-canvas-with-react-ff7d93f5dc76
 */

class VideoCanvas extends React.Component<{}, {}> {

    state: {
        width: number,
        height: number,
        title: string
    }

    margin: number = 5;

    videoRef = () => { return this.refs.video as HTMLVideoElement };
    canvasRef = () => { return this.refs.canvas as HTMLCanvasElement };
    imageRef = () => { return this.refs.image as HTMLImageElement };

    constructor(props: {}) {
        super(props);
        this.state = {
            width: window.innerWidth - this.margin,
            height: window.innerHeight - this.margin,
            title: 'Hello world'
        }
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    animate(): void {

    }

    renderVideo(): void {

    }

    initAnimation(): void {
        window.addEventListener("resize", this.updateDimensions, false);
        window.addEventListener('orientationchange', this.updateDimensions, false);

    }


    componentDidMount() {

        this.initAnimation()


        const canvas = this.canvasRef();
        const img = this.imageRef();
        const video = this.videoRef();

        const ctx = canvas.getContext("2d");
        if (ctx === null) return;

        scaleCanvas(canvas, ctx, this.state.width, this.state.height);

        video.addEventListener('onmetadataloaded', (ev: Event) =>  {
            (ev.target as HTMLVideoElement).currentTime = 40;
        });

        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            /*
            ctx.drawImage(img, 0, 0, img.width, img.height,
                0, 0, canvas.width, canvas.height);
                */
            ctx.font = "40px Roboto"
            ctx.fillText(this.state.title, 210, 75)
        }
/*
        const draw = (): void => {

            if (video.paused || video.ended) {
                return;
            }

            const ratio = window.devicePixelRatio || 1;
            //ctx.drawImage(video, 0, 0, this.state.width, this.state.height);
            ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight,
                0, 0, canvas.width / ratio, canvas.height / ratio);

            requestAnimationFrame(draw);
        };
*/


        const drawScaled = (): void => {

            video.playbackRate = 0.3;

            if (video.paused || video.ended) {
                return;
            }

            const ratio = video.videoWidth / video.videoHeight;

            //console.log('RATIO', ratio);

            const hdpiRatio = window.devicePixelRatio || 1;
            //ctx.drawImage(video, 0, 0, this.state.width, this.state.height);
            ctx.drawImage(video, 0, 0, video.videoWidth, (video.videoHeight / ratio),
                0, 200, canvas.width / hdpiRatio, (canvas.height / ratio) / hdpiRatio);

            requestAnimationFrame(drawScaled);
        };



//        video.addEventListener("play", drawScaled, false);

        video.play();

        ctx.drawImage(video, 0, 0);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
        window.removeEventListener("orientationchange", this.updateDimensions);
        const deleteRefs = () => {
            if (this.refs.video instanceof HTMLVideoElement
                && this.refs.video.paused) {
                    this.refs.video.pause();
            }
        }
        deleteRefs();
    }

    updateDimensions() {
        this.setState(() => {
            return {
                width: window.innerWidth - this.margin,
                height: window.innerHeight - this.margin
            }
        })
    }

    render() {
        const img = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/9-colorful-elephant-kovacs-anna-brigitta.jpg';

        const hiddenStyle = {
            display: 'none',
        };

        const canvasContainerStyle: CSSProperties = {
            position: "fixed",
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            width: this.state.width,
            height: this.state.height,
            zIndex: -100

        };

        const canvasStyle: CSSProperties = {
            width: this.state.width,
            height: this.state.height,
            //filter: 'grayscale(1)'
            opacity: 0.6,


            //width: 800,
            //height: 250
        }

        //const videoSrc = "http://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv";
        const videoSrc = 'file:///home/sebastien/Videos/paola-bw.mp4';

        return(
            <div>
                <div style={canvasContainerStyle}>
                    <canvas ref="canvas"
                            style={canvasStyle}>
                        Your browser does not support canvas.
                    </canvas>
                </div>
                <div style={{fontFamily: 'Roboto', fontSize: '5em', color: 'white', fontWeight: 'bold', marginTop: 200, marginLeft: 300}}>
                    Title
                </div>
                <video ref="video"
                       src={videoSrc}
                       controls={true}
                       width="400"
                >
                </video>
                <img ref="image"
                     src={img} style={{width: '100%', height: 'auto', ...hiddenStyle}} />
            </div>
        )
    }
}
export default VideoCanvas;


export function scaleCanvas(canvas: HTMLCanvasElement, context: any, width: number, height: number) {
    // assume the device pixel ratio is 1 if the browser doesn't specify it
    const devicePixelRatio = window.devicePixelRatio || 1;

    // determine the 'backing store ratio' of the canvas context
    const backingStoreRatio = (
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1
    );

    // determine the actual ratio we want to draw at
    const ratio = devicePixelRatio / backingStoreRatio;

    if (devicePixelRatio !== backingStoreRatio) {
        // set the 'real' canvas size to the higher width/height
        canvas.width = width * ratio;
        canvas.height = height * ratio;

        // ...then scale it back down with CSS
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
    }
    else {
        // this is a normal 1:1 device; just scale it simply
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = '';
        canvas.style.height = '';
    }

    // scale the drawing context so everything will work at the higher ratio
    context.scale(ratio, ratio);
}