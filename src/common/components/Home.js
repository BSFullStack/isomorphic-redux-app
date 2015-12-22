import React, { Component } from 'react';
import { Carousel ,CarouselItem , Image } from 'react-bootstrap';
class Home extends Component {
  render() {
    return (
        <Carousel>
            <CarouselItem>
                  <Image  src="/img/carousel.png" responsive/>
                  <div className="carousel-caption">
                    <h3>电子图书馆</h3>
                    <p>基于Sass+React+Redux+React-Router+React-Bootstrap+Express MVC+MongoDB实现！</p>
                  </div>
            </CarouselItem>
            <CarouselItem>
              <Image  src="/img/carousel.png" responsive/>
              <div className="carousel-caption">
                    <h3>电子图书馆</h3>
                    <p>基于Sass+React+Redux+React-Router+React-Bootstrap+Express MVC+MongoDB实现！</p>
              </div>
            </CarouselItem>
            <CarouselItem>
               <Image  src="/img/carousel.png" responsive/>
              <div className="carousel-caption">
                    <h3>电子图书馆</h3>
                    <p>基于Sass+React+Redux+React-Router+React-Bootstrap+Express MVC+MongoDB实现！</p>
              </div>
            </CarouselItem>
        </Carousel>

    );
  }
}

export default Home;
