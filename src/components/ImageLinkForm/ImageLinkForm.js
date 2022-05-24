import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className="f3 b white">
                {'This Application will detect faces from images using web API.'}
                
            </p>
            <p className="white">
            {'Sample Img: https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg'}
            </p>
            <div>
                <div className="form pa4 ma1 br2 shadow-5 w-80 center">
                    <input className="f4 pa2 w-80 center" type="url" name="" id="" onChange={onInputChange} required/>
                    <input type='submit' value={'Detect'}
                    className="w-20 grow f4 link ph3 pv2 dib white bg-light-purple"
                    onClick={onButtonSubmit}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;