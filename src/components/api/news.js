export default async function handler(req, res) {
    const { category, page = 1, pageSize = 5 } = req.query;
  
    if (!category || category === "undefined") {
      return res.status(400).json({ error: "Category is required" });
    }
  
    const apiKey = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
  
    console.log("Fetching NewsAPI URL:", url); // ADD THIS
  
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Accept": "application/json",
        },
      });
  
      const contentType = response.headers.get("content-type");
  
      if (!response.ok) {
        const errorBody = await response.text();
        console.error(`API Error ${response.status}:`, errorBody);
        throw new Error(`Failed to fetch news. Status: ${response.status}`);
      }
  
      if (!contentType || !contentType.includes("application/json")) {
        const errorBody = await response.text();
        console.error(`Non-JSON response:`, errorBody);
        throw new Error("Response is not JSON (HTML error page detected)");
      }
  
      const data = await response.json();
  
      if (!data.articles || data.articles.length === 0) {
        return res.status(404).json({ error: "No articles found" });
      }
  
      res.status(200).json({
        articles: data.articles,
        totalResults: data.totalResults,
      });
    } catch (error) {
      console.error("Error fetching news:", error.message);
      res.status(500).json({ error: error.message });
    }
  }
  