import {JsonLd} from "react-schemaorg";


export const StarProjectSchema = ({post}) => {
    return (
        <JsonLd
            item={{
                "@context": "https://schema.org",
                '@type': 'WebPage',
                author: post.author,
                name: post.title,
                abstract: post.excerpt,
            }}
        />
    )
}
