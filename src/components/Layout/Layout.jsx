import { Container, Header, Logo, Link } from './Layout.styled';
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Loader } from "../Loader/Loader";
import { ToastContainer } from 'react-toastify';

export const Layout = () => {
    return (
        <Container>
            <Header>
                <Logo>
                     Movie Search
                </Logo>
                <nav>
                    <Link to="/" end>Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </Header>
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            <ToastContainer/>
        </Container>
    )
}