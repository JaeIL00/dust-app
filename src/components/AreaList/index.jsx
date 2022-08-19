import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorites } from '../../modules/favorites'

function AreaList() {
  const { data, loading, error } = useSelector((state) => state.favorites)
  const dispatch = useDispatch()

  useEffect(() => {
    !data && dispatch(getFavorites())
  }, [data, dispatch])

  if (loading) return <div>로딩중...</div>
  if (error) return <div>에러 발생</div>
  if (!data) return null

  return (
    <>
      {data.map((item, i) => (
        <p key={i}>{item.stationName}</p>
      ))}
    </>
  )
}

export default AreaList
