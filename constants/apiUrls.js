export default class ApiUrl {
    static baseURL = process.env.LAST_FM_API_URL;
    static apiKey = process.env.LAST_FM_API_KEY;

    static getTopArtists = (page, limit = 50) => {
        return `${process.env.NEXT_PUBLIC_LAST_FM_API_URL}method=chart.gettopartists&api_key=${process.env.NEXT_PUBLIC_LAST_FM_API_KEY}&page=${page}&limit=${limit}&format=json`;
    }

    static getTopAlbums = (mbid, page = 1, limit = 50) => {
        return `${ApiUrl.baseURL}method=artist.gettopalbums&api_key=${ApiUrl.apiKey}&mbid=${mbid}&page=${page}&limit=${limit}&format=json`;
    }

    static getTopTracks = (mbid, page = 1, limit = 50) => {
        return `${ApiUrl.baseURL}method=artist.gettoptracks&api_key=${ApiUrl.apiKey}&mbid=${mbid}&page=${page}&limit=${limit}&format=json`;
    }
}