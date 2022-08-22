import React from 'react'

function CardDetail({myAreaDustData}) {
  return (
    <div>
      {myAreaDustData.map((item, i) => (
        <div key={i}>
          <p>{item.stationName}</p>
          <p>{item.sidoName}</p>
          <p>
            {item.pm10Grade === '1' && '좋음'}
            {item.pm10Grade === '2' && '보통'}
            {item.pm10Grade === '3' && '나쁨'}
            {item.pm10Grade === '4' && '매우나쁨'}
          </p>
          <p>{item.pm10Grade}</p>
          <p>{item.pm10Value}</p>
          <p>{item.dataTime}</p>
        </div>
      ))}
      
    </div>
  )
}

export default CardDetail