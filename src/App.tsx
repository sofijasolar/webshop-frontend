import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router'
import ProductDetailPage from './pages/ProductDetailPage'
import NavigationBar from './components/shared/NavigationBar'
import { StoreProvider } from './contexts/StoreContext'

// add provider
// add navigation

function App() {

  return (
    <StoreProvider>
      <div className='flex flex-col min-h-screen'>
          <NavigationBar />

          <main className='flex-1 mt-20 mx-2 md:mx-4 lg:mx-12'>
            <Routes>
                <Route path="/" element={<HomePage />} /> 
                <Route path="/product/:id" element={<ProductDetailPage />} />
              </Routes>
          </main>
          
          </div>
    </StoreProvider>
   
  )
}

export default App
