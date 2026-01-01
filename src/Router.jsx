import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Download from './Download';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/download" element={<Download />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
