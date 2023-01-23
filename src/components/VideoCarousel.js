import React from 'react'
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

export default function VideoCarousel() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (
        <div>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'orange',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                    },
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'orange',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`<`}</span>,
                }}
                responsiveProps={[
                    {
                        itemsToShow: 1,
                        itemsToScroll: 2,
                        minWidth: 768,
                    },
                ]}
                speed={500}
                easing="linear"
            >

                <iframe
                    height="600"
                    src={"https://www.youtube.com/embed/8Ww47V7O4J0"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <iframe
                    height="600"
                    src={"https://www.youtube.com/embed/FL8gPkxZQX4&ab"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <iframe
                    height="600"
                    src={"https://www.youtube.com/embed/59bdEkTLvBs"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </ReactSimplyCarousel>
        </div>
    )
}
