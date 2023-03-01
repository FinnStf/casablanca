import LogoLong from '../icons/LogoLong'
import style from './Header.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <header className={style.header}>
            <div className={style['content-wrapper']}>
                <Link to='Referenzen' className={style.logo}><LogoLong /></Link>
                <button
                    className={`${style['mobile-nav-button']} ${mobileNavOpen ? style.open : ''}`}
                    onClick={() => {
                        setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
                    }}
                >
                    <div className={style['bar-one']} />
                    <div className={style['bar-two']} />
                    <div className={style['bar-three']} />
                </button>
                <div className={`${style.nav} ${mobileNavOpen ? style.open : ''}`}>
                    <Link to='Referenzen' className={style['subnav']}>
                        <span>Referenzen</span>
                    </Link>
                    <Link to='News' className={style['subnav']}>
                        <span>News</span>
                    </Link>
                    <div className={style['subnav-wrapper']}>
                        <Link to='Mitarbeiter' className={style['subnav']}>
                            <span>Unternehmen</span>
                        </Link>
                        <div className={style['subnav-content']}>
                            <Link to='Mitarbeiter' className={style['subnav']}>
                                <span>Team</span>
                            </Link>
                            <Link to='Mitarbeiter' className={style['subnav']}>
                                <span>Standorte</span>
                            </Link>
                        </div>
                    </div>
                    <Link to='Kontakt' className={style['subnav']}>
                        <span>Kontakt</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header