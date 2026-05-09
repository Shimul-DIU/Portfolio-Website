
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import { Outlet } from 'react-router-dom';
import signUpWithGoogle from '../firebase/auth/signUpWithGoogle';

const Mainlayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <signUpWithGoogle></signUpWithGoogle>
                <Outlet />

            </main>
            <Footer />

        </div>
    );
};

export default Mainlayout;