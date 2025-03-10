// import insideOne from '../images/ICARO_1.jpg';
import insideTest from '../images/SALA_2.jpg';
import insideTwo from '../images/SALA_1.jpg'; 
import pasilloDos from '../images/PASILLO_2.jpg';

const Scene = {
    insideOne: {
        title : "Sala STEM",
        image : insideTest,
        pitch : -4.294711748894169,
        yaw : -22.505222725306716,
        hfov : 200,
        hostSpots : {
            /*primer_punto : {
                type: 'info',
                pitch : -21.696123267455846,
                yaw :  -37.20072163589748,
                text : 'CPU DELL',
                url : 'https://articulo.mercadolibre.com.ve/MLV-561942865-computadora-dell-cpu-intel-i5-8gb-500gb-optiplex-tienda-_JM#polycard_client=search-nordic&position=1&search_layout=grid&type=item&tracking_id=47dcf0e7-c1e1-4fc1-bfa7-88d9b8ed8e91',
                cssClass : 'infoSpotElement'
            },
            segundo_punto : {
                type : 'custom',
                pitch : -14.102829964881176,
                yaw: 80.27662741602644,
                url : 'https://youtu.be/FVtBk4OrzcA',
                cssClass : 'hotSpotElement',
            },
            sala_inmersiva : {
                type: 'custom',
                pitch : -21.312180708800273,
                yaw : 179.19588347346135,
                url : 'https://framevr.io/cme-microscopia-mincyt',
                cssClass : 'inmersiveClass'
            },*/
            pasillo_2_scene : {
                type : 'custom',
                pitch :-5.967546874205235,
                yaw : -46.1698115182981,
                scene : 'pasillo2',
                cssClass :'moveScene'
            },
        }
    }, 
    pasillo2 : {
        title : "Pasillo ICARO",
        image : pasilloDos,
        pitch : -4.294711748894169,
        yaw : -22.505222725306716,
        hfov: 200,
        hostSpots:{
            primer_punto : {
                type: 'custom',
                pitch : -2.878806796347889,
                yaw :  -19.20670989114869,
                scene : 'insideOne',
                cssClass : 'moveScene'
            },
            segundo_punto : {
                type:'custom',
                pitch :-4.500891359210941,
                yaw :24.88489381500314,
                scene:'insideTwo',
                cssClass:'moveScene',
            }
        }
    }, 
    insideTwo: {
        title : "Sala ICARO",
        image: insideTwo,
        pitch : -4.294711748894169,
        yaw : -22.505222725306716,
        hfov: 200,
        hostSpots:{
            primer_punto : {
                type: 'custom',
                pitch : -4.335589370748943,
                yaw :  -56.42130847445762,
                scene : 'pasillo2',
                cssClass : 'moveScene'
            }
        }
    },
};

export default Scene;