import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';
// import ReactDOM from 'react-dom';

const ImageList = (props) => {
    // We pluck out the values we want from image such as description id and urls so we dont have repeat ourselves inside our return for our map function
    const images = props.images.map(image => {
        // We should put the key in the element that we are returning from a list of records so if we were wrapped in a div we would put the key in the outer most div
        // Adding the alt tag and using the description from the image will get rid pf the alt warning in dev tools
        return <ImageCard key={image.id} image={image}/>
        // console.log(description, id, urls)
    })
    // console.log(images);
    return (
        <div className="image-list">
            {images}
        </div>
    )
}

export default ImageList;