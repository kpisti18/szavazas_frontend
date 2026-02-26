import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

// Hello2

//elobelo
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>

        /*Mindenki kész?
Igenis kapitány!
Hangosabban!
Igenis kapitány!

Hóóóóóóóóóóóóóóóóóóóóóóóóóóóóóó,

Ki lakik oda lenn, kit rejt a víz?
Spongyabob kocka!
Sárga színe és lyuk rajta tíz!
Spongyabob nadrág!
Kár, hogy a levegő csak szoba dísz!
Spongyabob kocka!
De az élet eleme csakis a víz!
Spongyabob nadrág!
Ki ő?
Kocka nadrág, kocka nadrág,kocka nadrág!!

Spongyabob kockanadrág!!
Spongyabob kockanadrág?
 */
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
