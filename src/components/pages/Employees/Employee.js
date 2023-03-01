import Avatar from '@mui/material/Avatar';
import style from './Employee.module.css'
import Chip from '@mui/material/Chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Employee(props) {
    return (
        <div className={style.card}>
            <Avatar className={style.avatar} alt={props.first_name} src={props.avatar} />
            <div className={style.content}>
                <span>{props.first_name} {props.last_name}</span>
                <Chip icon={<FontAwesomeIcon icon={faEnvelope} />} label={props.email} />
            </div>
        </div>
    )
}