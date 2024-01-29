import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/RootPage';
import Index from '../components/Index';
import Table from '../components/Table';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Index /> },
            { path: '/table', element: <Table /> },
        ]

    }

])

export default router;