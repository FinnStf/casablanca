import './App.css';
import Header from "./components/layout/Header";
import ViewportProvider from "./store/ViewportProvider";
import Referenzen from "./components/pages/Referenzen";
import News from "./components/pages/News/News";
import NotFoundPage from './components/pages/NotFoundPage';
import Footer from './components/layout/Footer'
import SideMenu from './components/ui/SideMenu';
import FloatingButton from './components/ui/FloatingButton';
import { Route, Routes, Navigate } from "react-router-dom";
import NewsBlog from './components/pages/News/NewsBlog';
import Employees from './components/pages/Employees/EmployeeList';
import Contact from './components/pages/Contact';


function App() {
    return (
        <ViewportProvider>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<Navigate to={'/Referenzen'} />} />
                        <Route path='/Referenzen' element={<Referenzen />} />
                        <Route path='/News'>
                            <Route index element={<News />}/>
                            <Route path=':id' element={<NewsBlog />} />
                        </Route>
                        <Route path='Mitarbeiter' element={<Employees/>}/>
                        <Route path='Kontakt' element={<Contact/>}/>
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                    <SideMenu />
                    <FloatingButton />
                </main>
                <Footer />
            </div>
        </ViewportProvider>
    );
}

export default App;
