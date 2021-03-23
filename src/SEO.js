import React from 'react';
import Helmet from 'react-helmet';

function SEO({ title, thumbnail, url }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:image" content={thumbnail} />
            <meta property="og:url" content={url} />
            <meta name="description" content="Helmet application" />
        </Helmet>
    )
}

export default SEO;
