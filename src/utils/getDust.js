import axios from 'axios'

const getParameters = {
  serviceKey: process.env.REACT_APP_SERVICE_KEY,
  returnType: 'json',
  numOfRows: '100',
  pageNo: '1',
  sidoName: '전국',
  ver: '1.0',
}

const fetchData = async () => {
  const response = await axios.get(
    'B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
    { params: getParameters }
  )
  //여기서 set 해주면 좋겠죠?
}
