import React, { useState } from "react";
import { Pannellum } from "pannellum-react";
import dataScene from "../helpers/dataScene";

import '../styles/scene.css';
import '@google/model-viewer/dist/model-viewer';
// import Computer from '../objects/retro_computer.glb';

export default function Scene() {

    const [scene, setScene] = useState(dataScene['insideOne']);


    const hostSpots = (element, i) => {
        console.log(element);
        if (element.cssClass === 'hotSpotElement') return (
            <Pannellum.Hotspot
                key={i}
                type={element.type}
                pitch={element.pitch}
                yaw={element.yaw}
                handleClick={() => {
                    window.open(element.url, "_blank");
                }}
            />
        );

        else if ((element.cssClass === 'moveScene')) return (
            <Pannellum.Hotspot
                key={i}
                type={element.type}
                pitch={element.pitch}
                yaw={element.yaw}
                cssClass={element.cssClass}
                handleClick={() => {
                    setScene(dataScene[element.scene]);
                }}
            />
        );

        else if (element.cssClass === 'infoSpotElement') return (
            <Pannellum.Hotspot
                key={i}
                type={element.type}
                pitch={element.pitch}
                yaw={element.yaw}
                text={element.text}
                URL={element.url}
            />
        );
    }


    return (
        <>
            <Pannellum
                width={'100%'}
                height={'100vh'}
                title={scene.title}
                image={scene.image}
                pitch={scene.pitch}
                yaw={scene.yaw}
                hfov={scene.hfov}
                autoLoad
                showControls={false}
                showFullscreenCtrl={false}
                showZoomCtrl={false}
                orientationOnByDefault={true}
                hotspotDebug={true}
            >
                
                {
                    Object.values(scene.hostSpots).map((element, i) =>
                        hostSpots(element, i)
                    )
                }
            </Pannellum>
        </>
    );
}