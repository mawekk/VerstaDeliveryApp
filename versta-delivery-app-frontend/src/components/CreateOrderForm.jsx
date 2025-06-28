import {Col, Form, Row} from 'react-bootstrap';
import DatePicker from 'react-datepicker';

export default function CreateOrderForm({order, setOrder}) {
    const handleChange = (e) => {
        const {name, value} = e.target;

        setOrder((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <>
            <Row className="mb-4">
                <Col>
                    <h6 className="text-primary"><strong>Информация об отправителе</strong></h6>
                    <Form.Group className="mb-2">
                        <Form.Label>Город отправителя</Form.Label>
                        <Form.Control type="text" placeholder="Введите город" required
                                      name="senderCity" value={order.senderCity} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Адрес отправителя</Form.Label>
                        <Form.Control type="text" placeholder="Введите адрес" required
                                      name="senderAddress" value={order.senderAddress} onChange={handleChange}/>
                        <Form.Text className="text-muted">
                            Улица, дом
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <h6 className="text-primary"><strong>Информация о получателе</strong></h6>
                    <Form.Group className="mb-2">
                        <Form.Label>Город получателя</Form.Label>
                        <Form.Control type="text" placeholder="Введите город" required
                                      name="receiverCity" value={order.receiverCity} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Адрес получателя</Form.Label>
                        <Form.Control type="text" placeholder="Введите адрес" required
                                      name="receiverAddress" value={order.receiverAddress}
                                      onChange={handleChange}/>
                        <Form.Text className="text-muted">
                            Улица, дом
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <h6 className="text-primary"><strong>Информация о грузе</strong></h6>
                <Col>
                    <Form.Group>
                        <Form.Label>Вес груза</Form.Label>
                        <Form.Control style={{width: '203px'}} type="number" placeholder="Укажите вес груза"
                                      required name="cargoWeight" value={order.cargoWeight}
                                      onChange={handleChange}/>
                        <Form.Text className="text-muted">
                            В килограммах
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Дата забора груза</Form.Label>
                        <div className="custom-datepicker">
                            <DatePicker
                                selected={new Date(order.pickupDate)}
                                onChange={(date) => date && setOrder({...order, pickupDate: new Date(date)})}
                                locale="ru"
                                dateFormat="d MMMM yyyy"/>
                        </div>
                    </Form.Group>
                </Col>
            </Row>
        </>)
}