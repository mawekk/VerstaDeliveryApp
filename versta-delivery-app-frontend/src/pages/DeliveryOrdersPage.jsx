import {Card, Row, Col, Button} from 'react-bootstrap'
import {useState, useEffect} from 'react';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale';
import {getOrders} from '../AxiosService.js'
import DeliveryOrdersModal from '../components/DeliveryOrderModal.jsx'

export default function DeliveryOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [orderToView, setOrderToView] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setOrderToView(null);
        setShow(true);
    };

    const generateOrderNumber = (pickupDate, id) => {
        const date = new Date(pickupDate).toISOString().slice(0, 10).replaceAll('-', '');
        return `ORD-${date}-${id}`;
    }

    const formatDate = (date) => {
        return format(new Date(date), 'd MMMM yyyy', {locale: ru});
    }

    const fetchOrders = () => {
        getOrders().then(response => {
            setOrders(response.data.map(order => ({
                ...order,
                formattedPickupDate: formatDate(order.pickupDate),
                number: generateOrderNumber(order.pickupDate, order.id)
            })))
        });
    };

    const handleOrderClick = (order) => {
        setOrderToView(order);
        setShow(true);
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <>
            <Row className="mb-2 align-items-center">
                <Col><h1>Список заказов</h1></Col>
                <Col className="text-end"><Button variant="success" size="lg" onClick={handleShow}>Создать
                    заказ</Button></Col>
            </Row>


            <Row className="g-3">
                {orders.map(order => (
                    <Col key={order.id} xs={12} sm={6}>
                        <Card style={{cursor: 'pointer'}} onClick={() => handleOrderClick(order)}>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Заказ №{order.number}
                                </Card.Subtitle>
                                <Card.Title>{order.senderCity} → {order.receiverCity}</Card.Title>
                                <Card.Text>
                                    <strong>Адрес отправителя:</strong> {order.senderCity}, {order.senderAddress}<br/>
                                    <strong>Адрес
                                        получателя:</strong> {order.receiverCity}, {order.receiverAddress}<br/>
                                    <strong>Вес груза:</strong> {order.cargoWeight} кг<br/>
                                    <strong>Дата забора груза:</strong> {order.formattedPickupDate}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <DeliveryOrdersModal orderData={orderToView} show={show} handleClose={handleClose} onSave={fetchOrders}/>
        </>
    )
}