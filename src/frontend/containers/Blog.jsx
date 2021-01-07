import React from 'react';
import '../assets/styles/components/Blog.scss';
import Subtitle from '../components/Subtitle';
import CardBlog from '../components/CardBlog';
import Button from '../components/Button';
import MediaBlog from '../components/MediaBlog';

const Blog = () => {
  return (
    <section>
      <div className="row section">
        <div className="left-part col l3 hide-on-med-and-down">
          
          <div className="col s8 offset-s2">
            <div className="card-text margin-top-">
              <Subtitle content={"Comparte!"} />
              <p>
                Envíanos tus proyectos o tutoriales para postearlos en el blog y poder compartirlso con nuestra comunidad.
              </p>
              <Button content="Compartenos Tu Proyecto" class="card-text-button" />
            </div>
            <div className="card-text">
              <Subtitle content={"Contáctanos!"} />
              <p>
                Contacta con nosotros si es que deseas hacer alguna colaboracion, tienes dudas o gustas compartirnos tus ideas.
              </p>
              <Button content="Cuentanos Tus Ideas" class="card-text-button" />
            </div>
            
            <div className="card-text">
              <Subtitle content={"Síguenos"} />
              <MediaBlog />
            </div>
          </div>

        </div>
        <div className="right-part col l9">
          <div className="col l11">

            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />

          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Blog;