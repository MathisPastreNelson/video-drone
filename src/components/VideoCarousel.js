import React from 'react'

export default function VideoCarousel() {
    return (
        <div>
            <iframe
                width="100%"
                height="600"
                src={"https://www.youtube.com/embed/8Ww47V7O4J0"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
}
