import { ObjectType } from '../../../pages/types/portfolioTypes'
import './Scrolling.css'

interface ScrollingProps {
    items: ObjectType<string>[]
}

const Scrolling = ({items}: ScrollingProps) => {
  return (
    <div className="scrolling-container">
        <div className="scrolling-content">
            {items.map((item, index) => (
            <div key={index} className="scrolling-item">
                <div className="scrolling-item-list">
                    <div className='bold'>{item.year}</div>
                    <div className="scrolling-item-list__sublist">
                        <div>
                            <img src={item.image}/>
                        </div>
                        <div>
                            <div className='bold'>{item.company}</div>
                            <div className='scrolling-item-list__sublist__position'>{item.position}</div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
            {items.map((item, index) => (
                <div key={index + items.length} className="scrolling-item">
                    <div className="scrolling-item-list">
                        <div className='bold'>{item.year}</div>
                        <div className="scrolling-item-list__sublist">
                            <div>
                                <img src={item.image}/>
                            </div>
                            <div>
                                <div className='bold'>{item.company}</div>
                                <div className='scrolling-item-list__sublist__position'>{item.position}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Scrolling