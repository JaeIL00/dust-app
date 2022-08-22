import { Provider } from 'react-redux'
import store from './modules'
import { Link, Route, Routes } from 'react-router-dom'
import DustCard from './components/DustCard'

import AreaList from './components/AreaList'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import FavoritesTap from './components/FavoritesTap';



function App() {

  return (
    <Provider store={store}>
      <AreaList />
      <FavoritesTap />
    </Provider>
  )
}

export default App
