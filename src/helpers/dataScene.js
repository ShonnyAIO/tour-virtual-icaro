import pasilloOne from '../images/IMAGEN_1.jpg';
import pasilloDos from '../images/IMAGEN_2.jpg';
import pasilloTres from '../images/IMAGEN_3.jpg';
import pasilloCuatro from '../images/IMAGEN_4.jpg';
import pasilloCinco from '../images/IMAGEN_5.jpg';
import pasilloSeis from '../images/IMAGEN_6.jpg';
import pasilloSiete from '../images/IMAGEN_7.jpg';

const Scene = {
    insideOne: {
        title : "Pasillo #1",
        image : pasilloOne,
        pitch : -10.556718134659032,
        yaw : -7.864193385119415,
        hfov : 200,
        hostSpots : {
            primer_punto : {
                type : 'custom',
                pitch : -26.86090132812523,
                yaw : -28.319564719102512,
                scene : 'insideTwo',
                cssClass :'moveScene'
            },
        }
    }, 
    insideTwo : {
        title : "Pasillo #2",
        image : pasilloDos,
        pitch : -12.603479259490388,
        yaw : -75.91483634574996,
        hfov: 200,
        hostSpots:{
            primer_punto : {
                type: 'custom',
                pitch : -32.56090297552278,
                yaw : 147.23760958440502,
                scene : 'insideOne',
                cssClass : 'moveScene'
            },
            segundo_punto : {
                type:'custom',
                pitch : -23.1261302617042,
                yaw : -60.66606845071878,
                scene:'insideThree',
                cssClass:'moveScene',
            },
            primer_microscopia : {
                type:'custom',
                pitch : -37.89156144076736,
                yaw : -133.13017696037247,
                scene:'insideFour',
                cssClass:'moveScene',
            }
        }
    },
    insideThree : {
        title : "Pasillo #3",
        image : pasilloTres,
        pitch : -9.64790699940735,
        yaw : -72.95684474869392,
        hfov: 200,
        hostSpots : {
            primer_punto : {
                type: 'custom',
                pitch : -27.953262290799998,
                yaw : -48.479875013308614,
                scene : 'insideFive',
                cssClass : 'moveScene'
            },
            segundo_punto : {
                type: 'custom',
                pitch : -20.083196414779472,
                yaw : -88.02650170883513,
                scene : 'insideSix',
                cssClass : 'moveScene'
            },
            tercer_punto : {
                type: 'custom',
                pitch : -31.071241108993195,
                yaw : 107.83431743444866,
                scene : 'insideTwo',
                cssClass : 'moveScene'
            }
        }
    },
    insideFour : {
        title : "MICROSCOPIA #1",
        image : pasilloCuatro,
        pitch : -14.019327143255927,
        yaw : 99.26161532664858,
        hfov: 200,
        hostSpots : {
            primer_punto : {
                type: 'custom',
                pitch : -39.47043038040548,
                yaw : -114.0017233969303,
                scene : 'insideTwo',
                cssClass : 'moveScene'
            },
        }
    },
    insideFive : {
        title : "MICROSCOPIA #2",
        image : pasilloCinco,
        pitch : -14.997940477572309,
        yaw : 55.202145483869074,
        hfov: 200,
        hostSpots : {
            primer_punto : {
                type: 'custom',
                pitch : -25.356034462772012,
                yaw : -93.5237643365297,
                scene : 'insideThree',
                cssClass : 'moveScene'
            },
        }
    },
    insideSix : {
        title : "Pasillo #4",
        image : pasilloSeis,
        pitch : -9.757886056027573,
        yaw : 175.21987359338388,
        hfov: 200,
        hostSpots : {
            primer_punto : {
                type: 'custom',
                pitch : -32.98310404286103,
                yaw : 162.86706640426985,
                scene : 'insideSeptimo',
                cssClass : 'moveScene'
            },
            segundo_punto : {
                type: 'custom',
                pitch : -16.494540732443614,
                yaw : -4.226706378735081,
                scene : 'insideThree',
                cssClass : 'moveScene'
            }
        }
    },
    insideSeptimo : {
        title : "MICROSCOPIA #3",
        image : pasilloSiete,
        pitch : -20.23571797792637,
        yaw : 175.77201333702857,
        hfov: 200,
        hostSpots : {
            primer_punto : {
                type: 'custom',
                pitch : -38.709093438103764,
                yaw :  18.986680883616756,
                scene : 'insideSix',
                cssClass : 'moveScene'
            },
        }
    }
};

export default Scene;