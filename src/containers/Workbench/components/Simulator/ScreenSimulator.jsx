// 场景模拟器
import { useRef, forwardRef, useImperativeHandle } from 'react';
const ScreenSimulator = (props, ref) => {
    const { comp: Comp, children } = props
    console.log("ScreenSimulator", Comp);
    const compRef = useRef(null);


    return <div>
        <Comp ref={compRef} >
            {children}
        </Comp>
    </div>
}
export default forwardRef(ScreenSimulator)