import Carousel from 'react-bootstrap/Carousel';
import style from './Slider.module.css'
function Slider(props) {

  return (
    <Carousel className={style[props.className]}>
    {props.content.map((item, index)=>
      <Carousel.Item key={`carousel_${index}`}>
        <img
          className={style['slider-image']}
          src={item.img}
          alt={item.alt}
        />
        <Carousel.Caption className={style.caption}>
          <h3>{item.label}</h3>
          <p>{item.description}</p>
        </Carousel.Caption>
    </Carousel.Item>
    )}
    </Carousel>
  );
}

export default Slider;