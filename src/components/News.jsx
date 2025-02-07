import React from "react";
import NewsItem from "./NewsItem";
import ErrorBoundary from "./ErrorBoundary"; // Make sure to import the ErrorBoundary

export default class News extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1, // Add state to keep track of current page
      pageSize: 7, // Number of articles per page
      totalResults: 0, // Total number of articles
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    const { page, pageSize } = this.state;
    // Replace 'YOUR_API_URL' with your actual API endpoint
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=16a838815bd848ed828b976340735419&page=${page}&pageSize=${pageSize}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          articles: data.articles, 
          loading: false,
          totalResults: data.totalResults, // Update totalResults
        });
      })
      .catch(error => {
        console.error('Error fetching the news:', error);
      });
  };

  handleNextPage = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
        loading: true,
      }),
      this.fetchArticles
    );
  };

  handlePreviousPage = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page - 1,
        loading: true,
      }),
      this.fetchArticles
    );
  };

  render() {
    const { articles, loading, page, pageSize, totalResults } = this.state;
    const totalPages = Math.ceil(totalResults / pageSize);
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center">Top Headlines</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ErrorBoundary>
              <div className="row my-3">
                {articles.map((article) => (
                  <div className="col-md-4" key={article.url}>
                    <NewsItem
                      title={article.title ? article.title.slice(0, 45) : ""}
                      description={article.description ? article.description.slice(0, 85) : ""}
                      imgURl={article.urlToImage}
                      newsurl={article.url}
                    />
                  </div>
                ))}
              </div>   
            </ErrorBoundary>
          )}
          <div className="container d-flex justify-content-between fixed-bottom mb-3">
            <button type="button" 
                    className="btn btn-dark" 
                    onClick={this.handlePreviousPage} 
                    disabled={page <= 1}>
              &laquo; Previous
            </button>
            <button type="button" 
                    className="btn btn-dark" 
                    onClick={this.handleNextPage} 
                    disabled={page >= totalPages}>
              Next &raquo;
            </button>
          </div>
        </div>
      </div>
    );
  }  
}
