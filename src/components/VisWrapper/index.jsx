import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { PatternRect } from '../VisComps';
import ResizeObserver from 'rc-resize-observer';

import styles from './VisWrapper.less';

const VisWrapper = (props, ref) => {
    console.log("VisWrapper", props);
    const { config } = props
    return <div className={styles.visWrapper} style={{ width:config.width, height:config.height }} >
        <ResizeObserver
            onResize={() => {
                console.log('resized!');
            }}
        >
            <PatternRect />
        </ResizeObserver>
        
    </div>
}
export default forwardRef(VisWrapper)