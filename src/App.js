import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { ProtectedHome, ProtectedLogin } from './context/ProtectedRoute';
import { Register } from './Components/Register/Register';
import { AuthProvider } from './context/authContext';
import { Footer } from './Components/Components/Footer';

function App() {
  const WebName = "ToDo-App"
  return (
    <>
      <main className="pb-16 lg:pb-24 min-h-screen">
        <AuthProvider>
          <Routes>
            <Route path='/' element={
              <ProtectedHome>
                <Home WebName={WebName} />
              </ProtectedHome>
            } />
            <Route path='/login' element={
              <ProtectedLogin>
                <Login />
              </ProtectedLogin>
            } />
            <Route path='/register' element={
              <ProtectedLogin>
                <Register />
              </ProtectedLogin>
            } />
          </Routes>
        </AuthProvider>
      </main>
      <Footer WebName={WebName} />
    </>
  );
}

export default App;
