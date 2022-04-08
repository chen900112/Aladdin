// 视觉组件模拟器

import { useRef, forwardRef, useImperativeHandle } from 'react';
const VisCompSimulator = (props, ref) => {
    const compRef = useRef(null);
    const { comp: Comp } = props
    return <div>
        <Comp ref={compRef} />
    </div>
}
export default forwardRef(VisCompSimulator)