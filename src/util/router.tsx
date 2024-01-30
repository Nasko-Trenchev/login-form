import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/RootPage';
import Login from '../components/Login';
import ErrorBoundry from '../components/ErrorBoundry';
import TableView from '../components/TableView';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorBoundry />,
        children: [
            { index: true, element: <Login /> },
            { path: '/table', element: <TableView /> },
        ]

    }

])

export default router;