// 场景模拟器
import { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
// import Ruler from "@scena/ruler";
// import Ruler from "@scena/react-ruler";
// import Guides from "@scena/react-guides";
import Ruler from "../../../../components/Ruler";
import Dragger from "@daybrush/drag";
import { Button } from 'antd';
import styles from './ScreenSimulator.less';

// 20% = 0.2

// 100%  =  scale:1
// |8|8|
// 200% = scale:2
const ScreenSimulator = (props, ref) => {
    const { comp: Comp, children } = props
    const compRef = useRef(null);

    const maskRef = useRef(null)
    const [screenSize, setScreenSize] = useState({
        width:2000,
        height:1000
    })
    const [screenScale, setScreenScale] = useState(0.2)
    const [scroll, setScroll] = useState({x:0,y:0});
    
    useEffect(()=>{
        window.addEventListener("wheel", e => {
            setScroll(state => {
                return {
                    x: scroll.x -= e.deltaX,
                    y: scroll.y -= e.deltaY
                }
            })
        });

        new Dragger(maskRef.current, {
            drag: e => {
                setScroll(state => {
                    return {
                        x: scroll.x -= e.deltaX,
                        y: scroll.y -= e.deltaY
                    }
                })

            
            },
        });
      
    },[])

    const zoomA = ()=>{
        setScreenScale((state)=>  {
            return state + 0.02
        })
    }

    const zoomB = () => {
        setScreenScale((state) => {
            return state - 0.02
        })

        
    }
    return <div className={styles.screenSimulator}>
            <div className={styles.simulator}>
            <Ruler scale={screenScale} startX={scroll.x} startY={scroll.y}></Ruler>
            <div className={styles.mask} ref={maskRef} range={[-10000, 10000]}></div>
                <div className={styles.viewport} >
                    <div className={styles.viewportInner}>
                        <div className={styles.screenWrapper} style={{ transformOrigin: "0 0", transform: `scale(${screenScale}) translate(${-1 * scroll.x}px, ${-1 *scroll.y}px)`, width: screenSize.width, height: screenSize.height }}>
                            {/* Comp: ScreenCanvas */}
                            <Comp ref={compRef} >
                                {children}
                            </Comp>

                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bar}>
                <Button size='mini' onClick={zoomA}>放大</Button>
            <Button size='small' onClick={zoomB}>缩小</Button>
            </div>
    </div>
}
export default forwardRef(ScreenSimulator)