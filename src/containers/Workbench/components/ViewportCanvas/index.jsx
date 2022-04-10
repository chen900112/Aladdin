import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Ruler from "@scena/react-ruler";
import styles from './ViewportCanvas.less';
const ViewportCanvas = (props, ref) => {
    console.log("props.children", props.children);
    const hRulerRef = useRef(null);
    const vRulerRef = useRef(null);
    useEffect(()=>{
        // const hRuler = new Ruler(hRulerRef.current, {
        //     type: "horizontal",
        //     height: 20
        // });
        // const vRuler = new Ruler(vRulerRef.current, {
        //     type: "vertical",
        // });
    })
   
    return <div className={styles.viewportCanvas} >

        <div className={styles.hRuler} ref={hRulerRef}>
            <Ruler type="horizontal" width={1000-30} />
        </div>
        <div className={styles.vRuler} ref={vRulerRef}>
            <Ruler type="vertical" />
        </div>
        <div className={styles.canvas}>
            {props.children}
        </div>
 
    </div>
}
export default forwardRef(ViewportCanvas)