import {Container, Button, Alert, Navbar} from 'react-bootstrap'
import DeliveryOrdersPage from './DeliveryOrdersPage.jsx'

export default function App() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Versta Delivery App</Navbar.Brand>
                </Container>
            </Navbar>
            <Container className="py-4">
                <DeliveryOrdersPage/>
            </Container></>
    )
}