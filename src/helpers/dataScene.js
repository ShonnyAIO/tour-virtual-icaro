// import insideOne from '../images/ICARO_1.jpg';
import insideTest from '../images/SALA_PRUEBA_2.jpg';
import insideTwo from '../images/ICARO_2.jpg'; 

const Scene = {
    insideOne: {
        title : "Sala STEM",
        image : insideTest,
        pitch : -4.294711748894169,
        yaw : -22.505222725306716,
        hfov : 200,
        hostSpots : {
            primer_punto : {
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
                cssClass : 'hotSpotElement'
            },
            sala_inmersiva : {
                type: 'custom',
                pitch : -21.312180708800273,
                yaw : 179.19588347346135,
                url : 'https://framevr.io/cme-microscopia-mincyt',
                cssClass : 'hotSpotElement'
            }
        }
    },
    insideTwo : {
        title : "Sala Secundaria",
        image : insideTwo,
        pitch : -10.242741460892963,
        yaw : -175.7908930798215,
        hfov : 200,
        hostSpots : {
            primer_punto : {
                type: 'custom',
                pitch : -19.768384220588374,
                yaw :  163.98341826404987,
                scene : 'insideOne',
                cssClass : 'moveScene'
            },
        }
    }
};

export default Scene;