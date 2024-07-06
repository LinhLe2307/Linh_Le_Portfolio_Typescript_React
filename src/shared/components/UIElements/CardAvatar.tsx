// import { CardAvatarProps } from '../../../user/types/userTypes';
import './CardAvatar.css';

const CardAvatar = ({children, className}) => {
  return (
    <div className={`card ${className}`} 
    // style={style}
    >
        {children}
    </div>
  )
}

export default CardAvatar