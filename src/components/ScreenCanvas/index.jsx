// 渲染组件

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
const ScreenCanvas = (props, ref) => {
    useImperativeHandle(ref, () => ({
        update: () => {
            console.log("ScreenCanvas.update");
           
        }
    }))
    return <div>
        {props.children}
    </div>
}
export default forwardRef(ScreenCanvas)