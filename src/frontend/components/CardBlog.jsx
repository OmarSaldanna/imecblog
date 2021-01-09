import React from 'react';

const CardBlog = props => {
  return (
    <div className="item-blog col l5 offset-l1  m5 offset-m-edited s10 offset-s1">
      <div className="row">
       <div className="col s12 card-image">
        <img className="image" src="https://res.cloudinary.com/imec-blog/image/upload/v1610171090/drone_fomt3p.jpg" alt="imagen"/>
       </div>
      </div>
      <div className="card-content">
        <div className="content-title">
          <h3>
            Lorem ipsum dolor sit amet
          </h3>
        </div>
        <div className="content-text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quibusdam magni fugiat sapiente ad praesentium numquam id! Blanditiis, soluta aspernatur? Saepe esse id repellat distinctio, accusantium at cum impedit delectus?
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;