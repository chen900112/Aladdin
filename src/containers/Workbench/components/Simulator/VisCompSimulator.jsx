// 视觉组件模拟器

import { useRef, forwardRef, useImperativeHandle } from 'react';
import Draggable from 'react-draggable';
const VisCompSimulator = (props, ref) => {
    const compRef = useRef(null);
    const { comp: Comp, ...restProps } = props
    const { config }  =restProps
    const handleStart = (e,data)=>{
        console.log("handleStart", e, data);
    }

    const handleDrag = (e, data) => {
        // console.log("handleDrag", e, data);
    }

    const handleStop = (e, data)=>{
        console.log("handleStop", e, data);
    }

    return <Draggable onDrag={handleDrag}>
        <div style={{ width: config.width, height: config.height }}>
            <Comp ref={compRef} {...restProps} />
        </div>
    </Draggable>
}
export default forwardRef(VisCompSimulator)