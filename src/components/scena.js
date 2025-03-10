import React, { useState } from "react";
import { Pannellum } from "pannellum-react";
import dataScene from "../helpers/dataScene";

export default function Scene() {

    const [scene, setScene] = useState(dataScene['insideOne']);

    const [sceneName, setsceneName] = useState('insideOne');
    const [previosScene, setPreviosScene] = useState([]);

    const hotSpots = (element, i) => {

        console.log('element', element);

        if ( (element.cssClass === 'hotSpotElement') || (element.cssClass === 'inmersiveClass') ) return (
            <Pannellum.Hotspot
                key={i}
                type={element.type}
                pitch={element.pitch}
                yaw={element.yaw}
                cssClass={element.cssClass}
                handleClick={() => {
                    window.open(element.url, "_blank");
                }}
            />
        );

        else if (element.cssClass === 'moveScene') return (
            <Pannellum.Hotspot
                key={i}
                type={element.type}
                pitch={element.pitch}
                yaw={element.yaw}
                cssClass={element.cssClass}
                handleClick={() => {
                    setPreviosScene(previosScene => [...previosScene, element.scene]);
                    setsceneName(element.scene);
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
                    hotspotDebug={false}
                >
                    {
                        Object.values(scene.hostSpots).map((element, i) =>
                            hotSpots(element, i)
                        )
                    }
                </Pannellum>

            {(previosScene.length > 0) ? <div className="return-recorrido" onClick={() => {

                if (previosScene[previosScene.length - 1] === sceneName) {
                    previosScene.pop();
                }

                if (previosScene.length > 0) {
                    setScene(dataScene[previosScene.pop()]);
                } else {
                    setScene(dataScene['insideOne']);
                }

            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>
            </div> : ''}

            <div className="reset-recorrido" onClick={() => {

                setScene(dataScene['insideOne']);
            }}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-reload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" /><path d="M20 4v5h-5" /></svg>
            </div>
        </>
    );
}