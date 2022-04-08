import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
const ViewportCanvas = (props, ref) => {
    console.log("props.children", props.children);
    return <div >
        ViewportCanvas
        {props.children}
    </div>
}
export default forwardRef(ViewportCanvas)