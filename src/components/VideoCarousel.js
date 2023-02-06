import React from 'react'
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';


export default function VideoCarousel() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (
        <div className='video_Container'>
            <div>
                <p>Vidéo n° {activeSlideIndex + 1}/2</p>
            </div>
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
                            cursor: 'pointer',
                            fontSize: '20px',
                            lineHeight: 1,
                            textAlign: 'center',
                            padding: "0"
                        },
                        children: <span className='switchArrow'>{`>`}</span>,
                    }}
                    backwardBtnProps={{
                        //here you can also pass className, or any other button element attributes
                        style: {
                            alignSelf: 'center',
                            cursor: 'pointer',
                            fontSize: '20px',
                            lineHeight: 1,
                            textAlign: 'center',
                            padding: "0",

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
                        height="450px"
                        src={"https://www.youtube.com/embed/TmdLe_72Q0c"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        className='videoSize'
                    />
                    <iframe
                        height="450px"
                        src={"https://www.youtube.com/embed/2FHnTn3fMaw"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        className='videoSize'
                    />
                </ReactSimplyCarousel>
            </div>
        </div >
    )
}
