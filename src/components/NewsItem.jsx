import React from 'react';
import PropTypes from 'prop-types';

class NewsItem extends React.Component {
  render() {
    const { title, description, imgURl, newsurl } = this.props;
    return (
      <div className="my-3">
        <div className="card mx-3" style={{ width: "20rem", margin: "0 auto", minHeight: "420px", boxShadow: "0 4px 24px rgba(34,34,59,0.08)", background: "#fff" }}>
          <img
            src={imgURl ? imgURl : "https://ichef.bbci.co.uk/news/1024/branded_news/8b7d/live/d811cab0-e39d-11ef-92d4-311e54879602.png"}
            className="card-img-top"
            style={{ height: "200px", objectFit: "cover", borderTopLeftRadius: "18px", borderTopRightRadius: "18px" }}
            alt="news"
          />
          <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "200px" }}>
            <h5 className="card-title" style={{ fontWeight: 600, color: "#22223b" }}>{title}...</h5>
            <p className="card-text" style={{ color: "#4a4e69" }}>{description}...</p>
            <a href={newsurl} target='_blank' rel="noopener noreferrer" className="btn btn-dark" style={{ alignSelf: "flex-end", marginTop: "auto" }}>Read more</a>
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
 