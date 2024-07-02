const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3',
    params: { language: 'en-US' },
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }
};

export default options;