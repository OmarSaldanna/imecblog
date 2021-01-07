import React from 'react';
import { Link } from 'react-router-dom';
import instagram from '../assets/static/icons/instagram.png';
import twitter from '../assets/static/icons/twitter.png';
import facebook from '../assets/static/icons/facebook.png';
import youtube from '../assets/static/icons/youtube.png';
import github from '../assets/static/icons/github.png';
import '../assets/styles/components/MediaBlog.scss';

const MediaBlog = () => {
  return (
    <div className="media-blog">
      <div className="media-blog-item">
        <img src={instagram} alt="instagram" className="media-blog-icon"/>
        <Link to="#">
          En Instagram
        </Link>
      </div>
      <div className="media-blog-item">
        <img src={facebook} alt="facebook" className="media-blog-icon"/>
        <Link to="#">
          En Facebook
        </Link>
      </div>
      <div className="media-blog-item">
        <img src={twitter} alt="twitter" className="media-blog-icon"/>
        <Link to="#">
          En Twitter
        </Link>
      </div>
      <div className="media-blog-item">
        <img src={youtube} alt="youtube" className="media-blog-icon"/>
        <Link to="#">
          En YouTube
        </Link>
      </div>
      <div className="media-blog-item">
        <img src={github} alt="github" className="media-blog-icon"/>
        <Link to="#">
          En Github
        </Link>
      </div>
    </div>
  );
};

export default MediaBlog;