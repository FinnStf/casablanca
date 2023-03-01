import Button from './Button'
import style from './FloatingButton.module.css'
import { useContext, useState, useEffect } from 'react'
import viewportContext from '../../store/viewportContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


export default function FloatingButton() {
    const { width, offset } = useContext(viewportContext);
    const [fadeInEffect, setFadeInEffect] = useState(false)

    useEffect(() => {
     if(offset>200){
        setFadeInEffect(true)
     }else{
       if(fadeInEffect){
        setFadeInEffect(false)
       }
     }
    }, [offset])

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    const btnStyles = `${style['floating-container']} ${fadeInEffect && style.in}`
    return (
        <div className={btnStyles}>
            <Button onClick={backToTop} padding='small' className='solid'>
                <FontAwesomeIcon icon={faArrowUp} />
                <span>TO THE TOP</span>
            </Button>
        </div>
    )
}