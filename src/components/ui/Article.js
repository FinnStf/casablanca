import { Link } from 'react-router-dom'
import style from './Article.module.css'
import Button from './Button'

export default function Article(props) {

    return (
        <div className={style['article-box']}>
            <img className={style['article-header']} src={props.img} />
            <div className={style['article-content']}>
                <h4>{props.label}</h4>
                <p>{props.description}</p>
                <Link to={props.link}>
                    <Button className='transparent'>
                        Weiterlesen...
                    </Button>
                </Link>
            </div>
        </div>
    )
}