import './FaceDetector.css';

const FaceDetector = ({imageUrl, box}) => {
    return (
        <section className='center'>
            <div className="flex justify-center ma">
            <div className="absolute mt2">
                <div>
                    <div className='w-100'></div>
                    <img id="inputimage" src={imageUrl} alt="" width='500px' height='auto'/>
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol,  bottom: box.bottomRow, left: box.leftCol}}></div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default FaceDetector;