import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import styles from './patten.less';
const PatternRect = (props, ref) => {

    return <div className={styles.patternRect}>
        矩形
    </div>
}
export default PatternRect