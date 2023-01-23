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
                        color: 'orange',
                        cursor: 'pointer',
                        fontSize: '20px',
                        lineHeight: 1,
                        textAlign: 'center',
                    },
                    children: <span className='switchArrow'>{`>`}</span>,
                }}
                backwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        color: 'orange',
                        cursor: 'pointer',
                        fontSize: '20px',
                        lineHeight: 1,
                        textAlign: 'center',
                    },
                    children: <span className='switchArrow'>{`<`}</span>,
                }}
                responsiveProps={[
                    {
                        itemsToShow: 1,
                        itemsToScroll: 1,
                        minWidth: "768",
                    },
                ]}
                speed={500}
                easing="linear"
            >

                <iframe
                    width="800px"
                    height="600"
                    src={"https://www.youtube.com/embed/8Ww47V7O4J0"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <iframe
                    width="800px"
                    height="600"
                    src={"https://www.youtube.com/embed/FL8gPkxZQX4&ab"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <iframe
                    width="800px"
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
