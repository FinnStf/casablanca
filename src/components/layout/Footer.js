import style from './Footer.module.css'
import LogoShort from '../icons/LogoShort'
import { useEffect, useState } from 'react'
export default function Footer() {
    const [currYear, setCurrYear] = useState();
    useEffect(() => {
        setCurrYear(new Date().getFullYear())
    }, [])
    return (
        <div className={style['footer-wrapper']}>
            <div className={style['footer-bottom']}>
                <span>
                    <LogoShort />
                    <a>johannes.ehrhart@casablanca.at</a>
                </span>
                <span>&copy; webrunner digital {currYear}</span>
                <span>
                    <a>Impressum</a>
                    <a>Presse</a>
                    <a>AGB</a>
                </span>
            </div>
        </div>
    )
}