const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		'X-RapidAPI-Key': 'ee3138d3edmsh66822d6313423a9p1632b7jsnf49a20e560ab',
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi,options);
    const data = await response.json();
    return data;
}

(async () => {
    
})();