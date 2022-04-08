import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import styles from './styles.less';


const ScrollPanel = (props, ref) => {
    const [state, setState]= useState({
        width:100,
        height:100
    })

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
                    width:state.width, 
                    height:state.height
                }} 
                className={styles.scrollPanel}
            >
                222
                {props.children}
            </div>
}
export default forwardRef(ScrollPanel)