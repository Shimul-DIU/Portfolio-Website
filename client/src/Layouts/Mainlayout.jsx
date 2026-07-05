
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import { Outlet } from 'react-router-dom';
import SignUpWithGoogle from '../firebase/auth/SignUpWithGoogle';

const Mainlayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                
                <Outlet />

            </main>
            <Footer />

        </div>
    );
};

export default Mainlayout;