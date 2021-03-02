export default class RestoService {
    


    getMenuItems() {
        const getResource = async(url) => {
            const res = await fetch(url);
            
            if(!res.ok){
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }
    
            return await res.json();
        };
    
        

        return getResource("http://localhost:3004/menu")
            .then((data) => data);
    }
}