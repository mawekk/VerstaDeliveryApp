import {Col, Row} from 'react-bootstrap';

export default function ViewOrderForm({order}) {
    console.log(order)
    return (
        <>
            <Row className="mb-4">
                <Col>
                    <h6 className="text-primary"><strong>Информация об отправителе</strong></h6>
                    <span className="fw-semibold">Город отправителя:</span> {order.senderCity}<br/>
                    <span className="fw-semibold">Адрес отправителя:</span> {order.senderAddress}
                </Col>
                <Col>
                    <h6 className="text-primary"><strong>Информация о получателе</strong></h6>
                    <span className="fw-semibold">Город получателя:</span> {order.receiverCity}<br/>
                    <span className="fw-semibold">Адрес получателя:</span> {order.receiverAddress}
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <h6 className="text-primary"><strong>Информация о грузе</strong></h6>
                    <span className="fw-semibold">Вес груза:</span> {order.cargoWeight} кг<br/>
                    <span className="fw-semibold">Дата забора груза:</span> {order.formattedPickupDate}
                </Col>
            </Row>
        </>
    )
}