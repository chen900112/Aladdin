// 场景模拟器
import { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
// import Ruler from "@scena/ruler";
import Ruler from "@scena/react-ruler";
import Guides from "@scena/react-guides";
import Dragger from "@daybrush/drag";
import styles from './ScreenSimulator.less';
const ScreenSimulator = (props, ref) => {
    const { comp: Comp, children } = props
    const compRef = useRef(null);

    const rulerRef = useRef(null)
    const hRulerRef = useRef(null);
    const vRulerRef = useRef(null);
    

    const hGuidesRef = useRef(null);
    const vGuidesRef = useRef(null);

    const [scroll, setScroll] = useState({x:0,y:0});
    // const [scale, setScale] = useState(0.2);
  

    // const hRulerInst = useRef(null)
    // const vRulerInst = useRef(null)
    
    useEffect(()=>{

        window.addEventListener("resize", () => {
            hRulerRef.current.resize();
            vRulerRef.current.resize();
        });

        window.addEventListener("wheel", e => {
            setScroll(state => {
                return {
                    x: scroll.x -= e.deltaX,
                    y: scroll.y -= e.deltaY
                }
            })

            // guides.scrollGuides(scrollY);
            // guides.scroll(scrollX);
        });
        new Dragger(rulerRef.current, {
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

    useEffect(()=>{
        console.log("hRulerInst.current", hRulerRef.current);
        hRulerRef.current.scroll(scroll.x);
        vRulerRef.current.scroll(scroll.y);
    }, [scroll])

    // console.log("config", props);
    return <div className={styles.screenSimulator}>
            <div className={styles.ruler} ref={rulerRef}></div>
            <div className={styles.hRuler} >
                {/* <Ruler
                    type="horizontal"
                    ref={e => hRulerRef.current = e}
                    backgroundColor="#181a24"
                // zoom={10}
                ></Ruler> */}

                <Guides
                    ref={e => hRulerRef.current = e}
                    type="horizontal"
                    backgroundColor="#181a24"
                    style={{ height: 30 }}
                range={[-10000, 10000]}
                    onChangeGuides={({ guides }) => {
                        console.log("horizontal", guides);
                    }}
                />
            </div>
            <div className={styles.vRuler} >
                {/* <Ruler
                    type='vertical'
                    ref={e => vRulerRef.current = e}
                    backgroundColor="#181a24"
              
                ></Ruler> */}

            <Guides
                ref={e => vRulerRef.current = e}
                type="vertical"
                backgroundColor="#181a24"
                style={{ width: 30 }}
                range={[-10000, 10000]}
                onChangeGuides={({ guides }) => {
                    console.log("vertical", guides);
                }}
            />
            </div>
        
          
       

        <div className={styles.viewport} >
            <div className={styles.viewportInner} style={{ transform: `translate(${-scroll.x}px, ${-scroll.y}px)` }}>
                <div className={styles.screenWrapper} /* style={{ width: 1920, height: 1080 }} */>
                    {/* Comp: ScreenCanvas */}
                    <Comp ref={compRef} >
                        {children}
                    </Comp>

                </div>
            </div>
            
        </div>
       
       
    </div>
}
export default forwardRef(ScreenSimulator)