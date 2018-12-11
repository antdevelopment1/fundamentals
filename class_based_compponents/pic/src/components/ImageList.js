import React from 'react';
// import ReactDOM from 'react-dom';

const ImageList = (props) => {
    const images = props.images.map(image => {
        // We should put the key in the element that we are returning from a list of records so if we were wrapped in a div we would put the key in the outer most div
        // Adding the alt tag and using the description from the image will get rid pf the alt warning in dev tools
        return <img alt={image.description} key={image.id} src={image.urls.regular}/>
    })
    // console.log(images);
    return (
        <div>
            {images}
            hello
        </div>
    )
}

export default ImageList;