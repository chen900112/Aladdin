// 场景模拟器
import { useRef, useState, useEffect, forwardRef } from 'react';
import Guides from "@scena/react-guides";
import styles from './Ruler.less';


const Ruler = (props, ref) => {
    const { scale, startX, startY, range } = props


    const hRulerRef = useRef(null);
    const vRulerRef = useRef(null);

    const getGridSize = (scale) => {
        if (scale <= 0.25) return 500
        if (scale <= 0.5) return 250 // 0.25
        if (scale <= 1) return 100  // 0.5
        if (scale <= 2) return 50  // 1
        if (scale <= 4) return 20  // 2
        if (scale <= 6) return 10  // 4
        return 1
    }

    const getScale = (scaleValue) => {
        return {
            zoom: scaleValue,
            unit: getGridSize(scaleValue)
        }
    }

    const [rulerSize, setRulerSize] = useState(getScale(scale))
    
    useEffect(() => {
        window.addEventListener("resize", () => {
            hRulerRef.current.resize();
            vRulerRef.current.resize();
        });
    }, [])

    useEffect(() => {
        vRulerRef.current.scrollGuides(startX);
        hRulerRef.current.scrollGuides(startY);

        hRulerRef.current.scroll(startX);
        vRulerRef.current.scroll(startY);
    }, [startX, startY])

    
    useEffect(() => {
        setRulerSize((state) => {
            return getScale(scale)
        })
    }, [scale])

   
    // console.log("config", props);
    return <div className={styles.ruler}>
                {/* <div className={styles.mask} ref={maskRef}></div> */}
                <div className={styles.hRuler} >
                    <Guides
                        ref={e => hRulerRef.current = e}
                        type="horizontal"
                        backgroundColor="#181a24"
                        style={{ height: 30 }}
                        range={range}
                        // snapThreshold={5}
                        zoom={rulerSize.zoom}
                        unit={rulerSize.unit}
                        onChangeGuides={({ guides }) => {
                            console.log("horizontal", guides);
                        }}
                    />
                </div>
                <div className={styles.vRuler} >
                    <Guides
                        ref={e => vRulerRef.current = e}
                        type="vertical"
                        backgroundColor="#181a24"
                        style={{ width: 30 }}
                        zoom={rulerSize.zoom}
                        unit={rulerSize.unit}
                        range={range}
                        onChangeGuides={({ guides }) => {
                            console.log("vertical", guides);
                        }}
                    />
                </div>
            </div>
}
export default forwardRef(Ruler)