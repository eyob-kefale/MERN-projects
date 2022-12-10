import { Routes } from 'react-router-dom'
import { Route } from 'react-router';
import Home from './component/routes/home/home.component';
import Navigation from './component/navigation/navigation.component'
import Shop from './component/Shop/shop.component'
import Authentication from './component/routes/authentication/authentication.component';



const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='Shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )

}

export default App;
