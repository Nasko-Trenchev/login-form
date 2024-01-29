
import { Outlet } from 'react-router-dom';

export default function RootLayout() {

    return (
        <>
            <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
                <Outlet />
            </main>
        </>
    )
}