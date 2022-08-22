import * as S from './style'
import { Route, Routes } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMapLocationDot, faStar } from '@fortawesome/free-solid-svg-icons'
import CardIndex from '../DustCard/CardIndex';
import { useDispatch, useSelector } from 'react-redux'
import DustCard from '../DustCard'
import { getAllArea } from '../../modules/favorites'

function FavoritesTap() {
  const { data } = useSelector((state) => state.favorites)
  const dispatch = useDispatch()
  
  // axios
  async function allArea(sido = '서울') {
    dispatch(getAllArea())
  }

  return (
  <>
    <section>
      <Routes path="" element={ <DustCard /> }>
        <Route index element={ <CardIndex AreaDustData={data} /> }></Route>
        <Route path="/all" element={ <CardIndex AreaDustData={data} /> }></Route>
        <Route path="/favorites" element={ <CardIndex AreaDustData={data} /> }></Route>
      </Routes>
    </section>
    
{/* 내지역, 전체지역, 즐겨찾기 라우트해서 프롭을 보내기 */}
    <S.TapContainer>
      <S.Button to="/">
        <FontAwesomeIcon icon={faLocationDot} />
        <S.text>내 지역보기</S.text>
      </S.Button>
      <S.Button to="all" onClick={allArea}>
        <FontAwesomeIcon icon={faMapLocationDot} />
        <S.text>전체 시도보기</S.text>
      </S.Button>
      <S.Button to="favorites">
        <FontAwesomeIcon icon={faStar} />
        <S.text>즐겨찾기</S.text>
      </S.Button>
    </S.TapContainer>
  </>
  )
}

export default FavoritesTap
