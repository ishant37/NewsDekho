import React from "react";
import NewsItem from "./NewsItem";
import ErrorBoundary from "./ErrorBoundary";
import ClipLoader from "react-spinners/ClipLoader";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      pageSize: 5,
      totalResults: 0,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      console.log(`Category changed to ${this.props.category}`);
      this.setState(
        { page: 1, loading: true, error: null },
        this.fetchArticles
      );
    }
  }

  fetchArticles = () => {
    const { page, pageSize } = this.state;
    const { category } = this.props;

    if (!category) {
      console.error("Category is undefined");
      return;
    }

    console.log(
      `Fetching articles for category: ${category}, page: ${page}, pageSize: ${pageSize}`
    );

    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    
    // Check if API key exists
    if (!apiKey) {
      console.error("❌ API Key is missing! VITE_NEWS_API_KEY not found in environment variables.");
      this.setState({
        loading: false,
        error: "⚠️ API Key not configured. Please set VITE_NEWS_API_KEY in environment variables.",
      });
      return;
    }

    console.log("✅ API Key found, fetching news...");

    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`)
      .then((response) => {
        console.log(`Response status: ${response.status}`);
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("Invalid API Key. Please check your VITE_NEWS_API_KEY.");
          } else if (response.status === 429) {
            throw new Error("API rate limit exceeded. Please try again later.");
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "error") {
          throw new Error(data.message || "API returned an error");
        }
        console.log("✅ Fetched articles:", data.articles?.length || 0, "articles");
        this.setState({
          articles: data.articles || [],
          loading: false,
          totalResults: data.totalResults || 0,
        });
      })
      .catch((error) => {
        console.error("❌ Error fetching news:", error.message);
        this.setState({
          loading: false,
          error: error.message || "There was an error fetching the news. Please try again later.",
        });
      });
  };

  handleNextPage = () => {
    this.setState(
      (prevState) => ({
        page: Math.min(
          prevState.page + 1,
          Math.ceil(prevState.totalResults / prevState.pageSize)
        ),
        loading: true,
        error: null,
      }),
      this.fetchArticles
    );
  };

  handlePreviousPage = () => {
    this.setState(
      (prevState) => ({
        page: Math.max(prevState.page - 1, 1),
        loading: true,
        error: null,
      }),
      this.fetchArticles
    );
  };

  render() {
    const { articles, loading, page, pageSize, totalResults, error } =
      this.state;
    const totalPages = Math.ceil(totalResults / pageSize);

    return (
      <div>
        <div className="container">
          <h1 className="text-center mt-5">
            {this.props.category
              ? `${
                  this.props.category.charAt(0).toUpperCase() +
                  this.props.category.slice(1)
                } News`
              : "Top Headlines"}
          </h1>
          {loading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "50vh" }}
            >
              <ClipLoader color="blue" loading={true} size={50} speedMultiplier={1} />
            </div>
          ) : error ? (
            <div className="text-center my-5" style={{ padding: "2rem" }}>
              <div style={{ 
                background: "#fff3cd", 
                border: "1px solid #ffc107", 
                borderRadius: "12px", 
                padding: "2rem",
                maxWidth: "600px",
                margin: "0 auto"
              }}>
                <h3 style={{ color: "#856404", marginBottom: "1rem" }}>⚠️ Error</h3>
                <p style={{ color: "#856404", fontSize: "1.1rem", marginBottom: "1.5rem" }}>{error}</p>
                <button 
                  className="btn btn-dark" 
                  onClick={() => window.location.reload()}
                  style={{ marginTop: "1rem" }}
                >
                  🔄 Retry
                </button>
              </div>
            </div>
          ) : (
            <ErrorBoundary>
              <div className="row my-3">
                {articles?.length > 0 ? (
                  articles.map((article) => (
                    <div className="col-md-4" key={article.url}>
                      <NewsItem
                        title={article.title?.slice(0, 45) || ""}
                        description={article.description?.slice(0, 85) || ""}
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
