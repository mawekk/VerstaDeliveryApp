import {Card, Row, Col} from 'react-bootstrap'
import {useState, useEffect} from 'react';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale';
import {getOrders} from './AxiosService.js'

export const generateOrderNumber = (pickupDate, id) => {
    const date = new Date(pickupDate).toISOString().slice(0, 10).replaceAll('-', '');
    return `ORD-${date}-${id}`;
}

export const formatDate = (date) => {
    return format(new Date(date), 'd MMMM yyyy', {locale: ru});
}

export default function DeliveryOrdersPage() {
    const [orders, setOrders] = useState([]);

    const fetchOrders = () => {
        getOrders().then(response => setOrders(response.data));
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <>
            <h1 className="mb-3">Список заказов</h1>

            <Row className="g-3">
                {orders.map(order => (
                    <Col key={order.id} xs={12} sm={6}>
                        <Card>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Заказ №{generateOrderNumber(order.pickupDate, order.id)}
                                </Card.Subtitle>
                                <Card.Title>{order.senderCity} → {order.receiverCity}</Card.Title>
                                <Card.Text>
                                    <strong>Адрес отправителя:</strong> {order.senderCity}, {order.senderAddress}<br/>
                                    <strong>Адрес
                                        получателя:</strong> {order.receiverCity}, {order.receiverAddress}<br/>
                                    <strong>Вес груза:</strong> {order.cargoWeight} кг<br/>
                                    <strong>Дата забора груза:</strong> {formatDate(order.pickupDate)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}