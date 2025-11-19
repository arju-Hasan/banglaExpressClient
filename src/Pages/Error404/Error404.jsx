import React from 'react';
import './NotFound.css'; // Optional: if you want to keep CSS in a separate file
// Or just use inline styles as shown below

const Error404 = () => {
  return (
    <section
      className="page_404"
      style={{
        padding: '40px 0',
        background: '#fff',
        fontFamily: "'Arvo', serif",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 15px',
        }}
      >
        <div className="row">
          <div
            className="col-sm-12"
            style={{
              width: '100%',
              float: 'left',
            }}
          >
            <div
              className="col-sm-10 col-sm-offset-1 text-center"
              style={{
                maxWidth: '83.33333333%',
                marginLeft: 'auto',
                marginRight: 'auto',
                float: 'none',
              }}
            >
              {/* 404 Background with GIF */}
              <div
                className="four_zero_four_bg"
                style={{
                  backgroundImage:
                    'ur[](https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
                  height: '400px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <h1
                  style={{
                    textAlign: 'center',
                    fontSize: '80px',
                    margin: '0',
                    paddingTop: '60px',
                    color: '#fff',
                    textShadow: '2px 2px 10px rgba(0,0,0,0.6)',
                  }}
                >
                  
                </h1>
              </div>

              {/* Content Box */}
              <div
                className="contant_box_404"
                style={{
                  marginTop: '-50px',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    fontSize: '80px',
                    color性和: '#333',
                  }}
                >
                  Look like you're lost
                </h3>

                <p style={{ fontSize: '20px', color: '#666' }}>
                  The page you are looking for is not available!
                </p>
                <h3 className='text-center text-4xl'>404</h3>

                <a
                  href="/"
                  className="link_404 btn btn-secondary"
                //   style={{
                //     color: '#fff !important',
                //     padding: '10px 20px',
                //     background: '#39ac31',
                //     margin: '20px 0',
                //     display: 'inline-block',
                //     textDecoration: 'none',
                //     borderRadius: '4px',
                //     fontWeight: 'bold',
                //   }}
                >
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404;