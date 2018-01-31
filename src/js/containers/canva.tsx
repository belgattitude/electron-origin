import React from 'react';

/**
 * @link https://blog.cloudboost.io/using-html5-canvas-with-react-ff7d93f5dc76
 */

class Canva extends React.Component<{}, {}> {


    componentDidMount() {

        window.addEventListener("resize", this.updateDimensions.bind(this));

        const text= 'Hello world';
        const canvas = this.refs.canvas as HTMLCanvasElement;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d")
        const img = this.refs.image as HTMLImageElement;

        if (ctx !== null) {
            img.onload = () => {
                ctx.drawImage(img, 0, 0)
                ctx.font = "40px Roboto"
                ctx.fillText(text, 210, 75)
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    updateDimensions() {
        // todo
    }

    render() {
        const img = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/9-colorful-elephant-kovacs-anna-brigitta.jpg';

        const style = {
            display: 'none'
        };

        return(
            <div>
                <canvas ref="canvas" width={640} height={425} />
                <img ref="image" src={img} style={style} />
            </div>
        )
    }
}
export default Canva;
