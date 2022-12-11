import { Container, Spinner, ProgressBar } from 'react-bootstrap';
// import Spinner from 'react-bootstrap/Spinner';

const SpinnerWidget = () => {
  return (
    <Container className="container-fluid position-absolute top-50 start-50 translate-middle d-flex flex-column align-content-center align-items-center">
      <Spinner className="spinner" animation="border" role="status" variant="success">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
      <img className="spinner__img" src="https://res.cloudinary.com/ferjen/image/upload/v1670454765/veggieBox/img/logo/vb-logo-big_nc10mn.svg" alt="Veggie Box Logo" />
      <p className="spinner--message m-0 p-0">cargando..</p>
    </Container>
  );
};

export default SpinnerWidget;
