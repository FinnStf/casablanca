import style from './CardIcon.module.css'
export default function CardIcon(props){
return(
        <div id={style[props.id]} className={style['box']}>
              {props.children}
       </div>
)
}