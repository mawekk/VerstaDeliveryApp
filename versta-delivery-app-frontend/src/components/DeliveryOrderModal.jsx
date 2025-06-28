import {Button, Card, Col, Modal, Row, Form} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {ru} from 'date-fns/locale/ru';
import {createOrder} from '../AxiosService.js'
import CreateOrderForm from './CreateOrderForm.jsx'
import ViewOrderForm from './ViewOrderForm.jsx'

registerLocale('ru', ru);

export default function DeliveryOrdersModal({orderData, show, handleClose, onSave}) {
    const initialOrder = {
        senderCity: '',
        senderAddress: '',
        receiverCity: '',
        receiverAddress: '',
        cargoWeight: '',
        pickupDate: new Date()
    };
    const [order, setOrder] = useState(initialOrder);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            createOrder(order).then((response) => {
                if (response.status === 200) {
                    onSave();
                    onHide();
                } else {
                    alert(`Ошибка при создании заказа, статус: ${response.status}`);
                }
            });
        }
    };

    const onHide = () => {
        setValidated(false);
        setOrder(initialOrder);
        handleClose();
    };

    return (
        <Modal
            size="lg"
            show={show}
            onHide={onHide}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{orderData ? `Просмотр заказа №${orderData.number}` : "Создание нового заказа"}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="mx-2">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                    {orderData ? (<ViewOrderForm order={orderData}/>) : (<>
                        <CreateOrderForm order={order} setOrder={setOrder}/>

                        <Modal.Footer>
                            <Button variant="light" onClick={onHide}>
                                Отмена
                            </Button>
                            <Button type="submit" variant="primary">Сохранить</Button>
                        </Modal.Footer></>)}
                </Form>
            </Modal.Body>
        </Modal>
    )
}