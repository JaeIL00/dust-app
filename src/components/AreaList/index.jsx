import axios from 'axios'
import * as S from './style'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArea } from '../../modules/favorites'
import Dropdown from 'react-bootstrap/Dropdown';

function AreaList() {
  const {townButton} = useSelector((state) => state.favorites)
  const dispatch = useDispatch()
  const listSido = ['전국', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주', '세종']
  
  // 시/도
  const [sidoName, setSidoName] = useState('서울')
  function sidoHandler(sido) {
    getList(sido)
    setSidoName(sido)    
  }

  // 동네리스트
  const [axiosData, setAxiosData] = useState([])
  const [townName, setTownName] = useState('중구')
  function townHandler(name) { 
    setTownName(name)
    const res = axiosData.find(item => item.stationName === name)
    dispatch(getArea(res))
  }
  
  // axios
  async function getList(sido = '서울') {
    const GET_PARAMETERS = {
      serviceKey: process.env.REACT_APP_SERVICE_KEY,
      returnType: 'json',
      numOfRows: '100',
      pageNo: '1',
      sidoName: sido,
      ver: '1.0',
    }

    const response = await axios.get(
      '/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
      { params: GET_PARAMETERS }
    )
    const resData = response.data['response']['body']['items']
    setAxiosData(resData)   
    setTownName(resData[0].stationName)
    const res = resData.find(item => item.stationName === resData[0].stationName)
    dispatch(getArea(res)) 
  }

  useEffect(() => {
    getList()
  }, [])


  return (
    <>
    {/* 드롭다운 */}
      <S.AreaContainer>
        {/* 시,도 리스트 */}
        <Dropdown>
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            {sidoName}
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            {listSido.map(item => <Dropdown.Item key={item} onClick={() => sidoHandler(item)}>{item}</Dropdown.Item>)}
          </Dropdown.Menu>
        </Dropdown>

        {/* 동네리스트 */}
        {townButton ? 
          <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
              {townName}
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              {axiosData && axiosData.map((item, i) => <Dropdown.Item key={i} onClick={() => townHandler(item.stationName)}>{item.stationName}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown> : null}
        
      </S.AreaContainer>
    </>
  )
}

export default AreaList
