import axios from 'axios'

// GET_POSTS -> 요청을 보내니까 로딩이 걸리도록
// GET_POSTS_SUCCESS -> 요청 성공했으니까 응답 데이터를 저장하도록
// GET_POSTS_ERROR -> 요청 실채했으니 에러 저장하도록

const GET_PARAMETERS = {
  serviceKey: import.meta.REACT_APP_SERVICE_KEY,
  returnType: 'json',
  numOfRows: '100',
  pageNo: '1',
  sidoName: '서울',
  ver: '1.0',
}

const GET_FAVORITES = 'posts/GET_FAVORITES'
const GET_FAVORITES_SUCCESS = 'posts/GET_FAVORITES_SUCCESS'
const GET_FAVORITES_ERROR = 'posts/GET_FAVORITES_ERROR'

// const apiInstnance = axios.create({
//   baseUrl,
// })

// 액션 함수(객체 생성이 아니라, 바로 Dispatch하는 함수)
export const getFavorites = () => async (dispatch, getState) => {
  dispatch({ type: GET_FAVORITES })
  try {
    const response = await axios.get(
      '/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
      { baseURL: 'https://apis.data.go.kr/', params: GET_PARAMETERS }
    )
    dispatch({
      type: GET_FAVORITES_SUCCESS,
      payload: { favorites: response.data['response']['body']['items'] },
    })
  } catch (e) {
    dispatch({ type: GET_FAVORITES_ERROR, error: e })
  }
}

// 초기값
const initialState = {
  loading: false,
  data: null,
  error: null,
}

// 리듀서
export default function favorites(state = initialState, action) {
  switch (action.type) {
    case GET_FAVORITES:
      return {
        loading: true,
        data: null,
        error: null,
      }
    case GET_FAVORITES_SUCCESS:
      return {
        loading: false,
        data: action.payload.favorites,
        error: null,
      }
    case GET_FAVORITES_ERROR:
      return {
        loading: false,
        data: null,
        error: action.error,
      }
    default:
      return state
  }
}
