import style from './SideMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHeadset, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function SideMenu(props) {
    return (
        <div className={style['side-menu']}>
            <a href='tel:+43 5418 5622' className={style.item}>
                    <span>+43 5418 5622</span>
                    <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href='mailto:johannes.ehrhart@casablanca.at' className={style.item}>
                <span>johannes.ehrhart@casablanca.at</span>
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href='https://get.teamviewer.com/' className={style.item}>
                <span>Fernwartung</span>
                <FontAwesomeIcon icon={faHeadset} />
            </a>
        </div>
    );
};
