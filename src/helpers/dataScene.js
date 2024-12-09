import insideOne from "../images/ICARO_1.jpg";
import InsideTwo from "../images/ICARO_2.jpg";

const Scene = {
    insideOne: {
        title : "Sala Icaro #1",
        image : insideOne,
        pitch : -7.3786334658584245,
        yaw : 20.510191852521775,
        hfov : 100,
        hostSpots : {
            primer_punto : {
                type : 'info',
                pitch : -27.444191252389697,
                yaw : -67.97035163252423,
                text : 'Diego Molina',
                url : '#',
                cssClass : 'infoSpotElement'
            },
            segundo_punto : {
                type : 'info',
                pitch : 3.686998029243946,
                yaw :  88.58284696654769,
                text : 'Guillermo Hernandez',
                url : '#',
                cssClass : 'infoSpotElement'
            },
            nextScene : {
                type : 'custom',
                pitch : 3.0872778525346347,
                yaw :  -31.01389789005089,
                scene : 'insideTwo',
                cssClass : 'moveScene'
            }
        }
    },
    insideTwo : {
        title : "Sala Icaro #2",
        image : InsideTwo,
        pitch : -7.3786334658584245,
        yaw : 20.510191852521775,
        hfov : 100,
        hostSpots : {
            nextScene : {
                type : 'custom',
                pitch : -23.66393272150887,
                yaw : 167.160976259226,
                scene : 'insideOne',
                cssClass : 'moveScene'
            }
        }
    }
}

export default Scene;