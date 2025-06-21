import { Outlet } from 'react-router-dom';
import NavbarComponent from '../navbarComponent.jsx';
import Footer from '../footer.jsx';
import { Container } from 'react-bootstrap';

function MainLayout() {
    return (
        <>
            <NavbarComponent />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
}

export default MainLayout;
