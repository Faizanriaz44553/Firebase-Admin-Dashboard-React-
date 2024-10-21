
import { Route, Routes } from 'react-router-dom'
import { RoutePage } from './routes/PageRoute'
import { DatePicker } from 'antd'


function App() {

  return (
    <div>
      <DatePicker />
     <Routes>
      {
       RoutePage.map(({path , element} , index)=>{
        return(<Route key={index} path={path} element={element} />)
       })
      }
     </Routes>
    </div>
  )
}

export default App
