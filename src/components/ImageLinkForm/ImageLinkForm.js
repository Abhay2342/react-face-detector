import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p className="f3 b">
                {'This Application will detect faces from images using web API.'}
            </p>
            <div>
                <div className="form pa4 ma1 br2 shadow-5 w-80 center">
                    <input className="f4 pa2 w-80 center" type="text" name="" id="" />
                    <button className="w-20 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;