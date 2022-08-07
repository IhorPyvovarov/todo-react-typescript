import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Navbar} from "./components";
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";

import './index.scss'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container py-1">
                <Routes>
                    <Route index element={<TodosPage />} />
                    <Route path="information" element={<AboutPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
