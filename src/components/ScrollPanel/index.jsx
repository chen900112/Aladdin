import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import styles from './styles.less';


const ScrollPanel = (props, ref) => {
   
    const [width, setWidth] = useState(props.defaultWidth)


    useEffect(()=>{
        // setTimeout(() => {
        //     setState(state=>{
        //         return {
        //             ...state,
        //             height:800
        //         }
        //     })
        // }, 3000);
    })

    return <div 
                style={{
                    width: width, 
                }} 
                className={styles.scrollPanel}
            >
                222
                {props.children}
            </div>
}
export default forwardRef(ScrollPanel)