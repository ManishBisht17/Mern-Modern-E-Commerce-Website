import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <RecoilRoot>
    <App />
  </RecoilRoot>
  </BrowserRouter>,
)
