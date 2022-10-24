import {  BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { Dashboard } from './pages/Dashboard';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { UserPage } from './pages/UserPage';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/about' element={ <AboutPage /> } />
        <Route path='/users/:id' element={ <UserPage /> } />
        <Route path='/usuarios' element={ <Navigate to='/users/100' /> } />

        {/* <Route path='/dashboard/*' element={ <Dashboard /> }/> */}
        <Route path='/dashboard/*' element={ <Dashboard /> }>
          <Route path='welcome' element={ <p>welcome!</p> } />
          <Route path='goodbye' element={ <p>Good Bye!</p> } />
        </Route>

        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}