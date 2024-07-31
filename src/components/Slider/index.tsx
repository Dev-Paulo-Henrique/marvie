import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export function Slider() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide text-center carousel-dark"
      data-mdb-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="rounded-circle shadow-1-strong mb-4"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
            alt="avatar"
            width={150}
          />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h5 className="mb-3">Maria Kate</h5>
              <p>Photographer</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </div>
          </div>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="far fa-star fa-sm"></i></li>
          </ul>
        </div>
        <div className="carousel-item">
          <img
            className="rounded-circle shadow-1-strong mb-4"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
            alt="avatar"
            width={150}
          />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h5 className="mb-3">John Doe</h5>
              <p>Web Developer</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis.
              </p>
            </div>
          </div>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="far fa-star fa-sm"></i></li>
          </ul>
        </div>
        <div className="carousel-item">
          <img
            className="rounded-circle shadow-1-strong mb-4"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            alt="avatar"
            width={150}
          />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h5 className="mb-3">Anna Deynah</h5>
              <p>UX Designer</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </div>
          </div>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="far fa-star fa-sm"></i></li>
          </ul>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselExampleControls"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon text-body" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselExampleControls"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon text-body" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
