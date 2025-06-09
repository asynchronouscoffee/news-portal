const API_KEY = '58b68271bcebbe4979c2a48a85127f22';

const fetchNews = async (category: string = "", search: string = "") => {
    if (!search) return [];
    
    try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&max=10&apikey=58b68271bcebbe4979c2a48a85127f22`);
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