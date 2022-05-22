import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p className="f3 b">
                {'This Application will detect faces from images using web API.'}
            </p>
            <div>
                <div className="form pa4 ma1 br2 shadow-5 w-80 center">
                    <form action="" method="post">
                    <input className="f4 pa2 w-80 center" type="url" name="" id="" required/>
                    <input type='submit' value={'Detect'} className="w-20 grow f4 link ph3 pv2 dib white bg-light-purple" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;