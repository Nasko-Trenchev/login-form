import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/RootPage';
import Login from '../components/Login';
import Table from '../components/Table';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Login /> },
            { path: '/table', element: <Table /> },
        ]

    }

])

export default router;