import { useState } from 'react'
import * as S from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import CardDetail from '../CardDetail'

function DustCard({AreaDustData}) {
  const [favoriteButton, setFavoriteButton] = useState(false)

function favoriteHandler()  {
    setFavoriteButton(!favoriteButton)
  }
  return (
    <S.CardContainer>
      <div onClick={favoriteHandler}>{favoriteButton ? <FontAwesomeIcon icon={farFaStar} /> : <FontAwesomeIcon icon={fasFaStar} />}</div>
      <CardDetail myAreaDustData={AreaDustData} />
    </S.CardContainer>
  )
}

export default DustCard
