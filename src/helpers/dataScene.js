import insideOne from '../images/ICARO_1.jpg';
import insideTwo from '../images/ICARO_2.jpg'; 

const Scene = {
    insideOne: {
        title : "Sala Principal",
        image : insideOne,
        pitch : -4.294711748894169,
        yaw : -22.505222725306716,
        hfov : 200,
        hostSpots : {
            primer_punto : {
                type: 'custom',
                pitch : -4.931478348322453,
                yaw :  -29.468378773273436,
                scene : 'insideTwo',
                cssClass : 'moveScene'
            },
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