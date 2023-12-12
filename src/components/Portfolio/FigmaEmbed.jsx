import React from 'react';

const FigmaEmbed = ({ figmaURL }) => {
    return (
        <div>
            <iframe
                title="Figma Embed"
                style={ { border: '1px solid rgba(0, 0, 0, 0.1)' } }
                maxWidth="350px"
                width="100%"
                height="800px"
                minHeight="100%"
                src={ `https://www.figma.com/embed?embed_host=share&url=${ encodeURIComponent(figmaURL) }` }
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default FigmaEmbed;
