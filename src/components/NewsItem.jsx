import React from 'react';
import PropTypes from 'prop-types';

class NewsItem extends React.Component {
  render() {
    const { title, description, imgURl, newsurl } = this.props;
    return (
      <div className='my-3'>
        <div className="card mx-3" style={{ width: "18rem", margin:"0px 0px 0px 70px"}}>
          <img src={imgURl ? imgURl : "https://ichef.bbci.co.uk/news/1024/branded_news/8b7d/live/d811cab0-e39d-11ef-92d4-311e54879602.png"} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} alt="news" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsurl} target='_blank' className="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgURl: PropTypes.string.isRequired,
  newsurl: PropTypes.string.isRequired
};

export default NewsItem;
 