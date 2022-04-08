import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { PatternRect } from '../VisComps';


const VisWrapper = (props, ref) => {

    return <div>
        VisWrapper
        <PatternRect />
    </div>
}
export default forwardRef(VisWrapper)