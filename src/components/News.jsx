import React from "react";
import NewsItem from "./NewsItem";
import ErrorBoundary from "./ErrorBoundary";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      pageSize: 5,
      totalResults: 0,
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      console.log(`Category changed to ${this.props.category}`);
      this.setState({ page: 1, loading: true }, this.fetchArticles);
    }
  }

  fetchArticles = () => {
    const { page, pageSize } = this.state;
    const { category } = this.props;
    if (!category) {
      console.error('Category is undefined');
      return;
    }

    console.log(`Fetching articles for category: ${category}, page: ${page}, pageSize: ${pageSize}`);
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=16a838815bd848ed828b976340735419&page=${page}&pageSize=${pageSize}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched articles:', data.articles);
        this.setState({
          articles: data.articles,
          loading: false,
          totalResults: data.totalResults,
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
        <div className="container">
          <h1 className="text-center mt-5">{this.props.category ? `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} News` : 'Top Headlines'}</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ErrorBoundary>
              <div className="row my-3">
                {articles && articles.length > 0 ? (
                  articles.map((article) => (
                    <div className="col-md-4" key={article.url}>
                      <NewsItem
                        title={article.title ? article.title.slice(0, 45) : ""}
                        description={article.description ? article.description.slice(0, 85) : ""}
                        imgURl={article.urlToImage}
                        newsurl={article.url}
                      />
                    </div>
                  ))
                ) : (
                  <p>No articles found.</p>
                )}
              </div>
            </ErrorBoundary>
          )}
          <div className="container d-flex justify-content-between fixed-bottom mb-3">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePreviousPage}
              disabled={page <= 1}
            >
              &laquo; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextPage}
              disabled={page >= totalPages}
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
