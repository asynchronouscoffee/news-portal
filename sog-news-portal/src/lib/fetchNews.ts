const API_KEY = 'ccfa6bfdd29840389fb857ed1fce5bf2';

const fetchNews = async (category: string = "", search: string = "") => {
    if (!search) return [];
    
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=ccfa6bfdd29840389fb857ed1fce5bf2`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.articles || [];
    } catch (error) {
        console.error('Failed to fetch news data', error);
        return [];
    }
};

export default fetchNews;