import { useEffect, useState } from 'react'
import { useRef } from 'react';
import './sidebar.css'

export default function Sidebar(){

    let localWidth = localStorage.getItem('localWidth');

    const sidebarContainer = useRef(null);

    const [isResizing, setIsResizing] = useState(false);
    const [startX, setStartX] = useState(0);
    const [width, setWidth] = useState(localWidth);
    
    const handleMouseDown = (event) => {
        setIsResizing(true);
        setStartX(event.clientX);
    };
    
    const handleMouseUp = () => {
        console.log(width)
        localStorage.setItem('localWidth', String(width))
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('mousemove', handleMouseMove)
        setIsResizing(false);
    };
    
    const handleMouseMove = (event) => {
        if (isResizing) {
        const newWidth = width + event.clientX - startX;
        setWidth(newWidth);
        setStartX(event.clientX);
        }
    };

    useEffect(()=>{
        document.addEventListener('mouseup', handleMouseUp)
        isResizing ? document.addEventListener('mousemove', handleMouseMove) : document.removeEventListener('mousemove', handleMouseMove)
    }, [handleMouseUp])

    useEffect(()=>{
        if(localWidth){
            console.log(typeof(parseInt(localWidth)))
            console.log(localWidth)
            setWidth(parseInt(localWidth))
        }
    },[localWidth])


    return(
            <div className='sidebar_container' style={{width: `${width}px`}} ref={sidebarContainer}>
                <div className='sidebar'></div>
                <div className='sidebar_border'
                    onMouseDown={handleMouseDown}>
                    <div className='sidebar_border_minibar'></div>
                </div>
            </div>  
    )
}