import axios from 'axios'
import { useState } from 'react'


export function getArea(area) {
  return async (dispatch, getState) => {
    dispatch({
      type: 'GET_FAVORITES_SUCCESS',
      payload: { favorites: [area], sido: area.sidoName, townButton: true },
    })
  }
}

export function getAllArea() {
  return async (dispatch, getState) => {
    const res = getState()
    console.log(res.favorites.sido)

    const GET_PARAMETERS = {
      serviceKey: process.env.REACT_APP_SERVICE_KEY,
      returnType: 'json',
      numOfRows: '100',
      pageNo: '1',
      sidoName: res.favorites.sido,
      ver: '1.0',
    }

    const response = await axios.get(
      '/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
      { params: GET_PARAMETERS }
    )
    const resData = response.data['response']['body']['items']
    
    
    dispatch({
      type: 'GET_FAVORITES_SUCCESS',
      payload: { favorites: resData, townButton: false},
    })
  }
}

// 액션 함수
export function getFavorites(area) {
return async (dispatch, getState) => {
  const [favoriteArea, setFavoriteArea] = useState([])
  setFavoriteArea([...favoriteArea, area])
  
  dispatch({
    type: 'GET_FAVORITES_SUCCESS',
    payload: { favorites: favoriteArea },
  })
}}

// 초기값
const initialState = {
  townButton: false,
  data: [{stationName: ''}],
  sido: null,
}

// 리듀서
export default function favorites(state = initialState, action) {
  switch (action.type) {
    case 'GET_FAVORITES_SUCCESS':
      return {
        townButton: action.payload.townButton,
        data: action.payload.favorites,
        sido: action.payload.sido,
      }
    default:
      return state
  }
}
