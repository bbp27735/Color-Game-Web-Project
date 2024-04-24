import React from 'react';

const ProfilePicButton = ({ onClick, imageUrl, altText }) => {
    console.log("imageUrl:", imageUrl);
    return (
        
        <button className="profilePicButton" onClick={onClick}>
            <img src={imageUrl} alt={altText} />
        </button>
    );
};

export default ProfilePicButton;