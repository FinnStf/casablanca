import style from './Referenzen.module.css'
import party_background from '../../assets/backgroundOne.jpg'
import Button from "../ui/Button";
import Slider from '../ui/Slider';
import Panel from '../layout/Panel'
import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.jpg'

export default function FirstPanel() {
  const projects = [
    {
      img: project1,
      alt: 'First Project',
      label: 'First Project Label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      img: project2,
      alt: 'Second Project',
      label: 'Second Project Label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      img: project3,
      alt: 'Third Project',
      label: 'Third Project Label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    }
  ]
  return (
    <>
      <div className={style['first-panel']}>
        <img className={style['background-image']} src={party_background} alt='People cellebrating background' />
        <div className={style['content-wrapper']}>
          <h2>Lorem - Ipsum</h2>
          <h4 className='text-color-blue'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod sed diam voluptua.</h4>
          <Button className='transparent'>Mehr erfahren</Button>
        </div>
      </div>
      <Panel>
        <h2>Referenz Projekte</h2>
        <Slider className='project-slider' content={projects} />
        <div className={style['text-wrapper']}>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At</span>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At</span>
        </div>
      </Panel>
    </>
  )
}