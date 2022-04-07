import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
const AA = (props, ref) => {
    console.log(props);
    const [count, setCount] = useState(1)
    useImperativeHandle(ref, () => ({
        changeCount: () => {
            console.log("changeCount");
            setCount(prevCount => prevCount + 1)
        }
    }));

    return <div >
        AA,{count}
    </div>
}
export default forwardRef(AA)