/* eslint-disable react/style-prop-object */
import React from "react";
import { useParams } from 'react-router';

export default function VideoPlayer() {

    const { id } = useParams();

    return (
        <>
            <div>
                <iframe src={`https://player.vimeo.com/video/${id}?autoplay=1&amp;loop=1&amp;autopause=0&amp;playsinline=0`} frameBorder="0" Style={"position:absolute;top:0;left:0;width:100%;height:100%;"} allow="autoplay; fullscreen; picture-in-picture; clipboard-write" allowfullscreen title="Video Muestra">
                </iframe>
            </div>

            <script src="https://player.vimeo.com/api/player.js"> </script>
        </>
    );
}