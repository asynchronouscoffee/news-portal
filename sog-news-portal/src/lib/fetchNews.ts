// API Key for GNews API, fetched from environment variables.
// This key is essential for authenticating requests to the GNews service.
const GNEWS_API_KEY = process.env.GNEWS_API_KEY;

/**
 * Fetches news articles from the gnews.io API based on a search query and other parameters.
 *
 * Requires the GNEWS_API_KEY environment variable to be set.
 *
 * @param {string} [search=""] - The search query for news articles. If empty, returns an empty array.
 * @param {string} [language="en"] - The language for the news articles (e.g., "en", "es").
 * @param {string} [country="us"] - The country for the news articles (e.g., "us", "gb").
 * @param {number} [max=10] - The maximum number of articles to return.
 * @returns {Promise<Array<object>>} A promise that resolves to an array of article objects.
 *                                   Returns an empty array if the search query is empty.
 * @throws {Error} If the GNEWS_API_KEY environment variable is not set.
 * @throws {Error} If the network request fails or the API returns an error status.
 */
const fetchNews = async (search: string = "", language: string = "en", country: string = "us", max: number = 10) => {
    if (!GNEWS_API_KEY) {
        // Throw an error if the API key is not configured, preventing API calls.
        throw new Error('GNEWS_API_KEY is not set. Please set it as an environment variable.');
    }
    if (!search) return []; // Return empty if search query is empty, as per original logic.
    
    try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=${search}&lang=${language}&country=${country}&max=${max}&apikey=${GNEWS_API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.articles || [];
    } catch (error) {
        console.error('Failed to fetch news data in fetchNews:', error); // Optional: log before re-throwing
        throw error; // Re-throw the error
    }
};

export default fetchNews;