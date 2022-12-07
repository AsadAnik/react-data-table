import Axios from 'axios';

/**
 * ===== GET Data ======
 * @param URL 
 * @returns 
 */
export const getData = async (URL: string) => {
    try {
        const options: object = {
            method: 'GET',
            url: URL
        };

        const request = await Axios(options);
        return request;

    } catch (error) {
        console.log("ERR! Fetching time error -> ", error);
    }
};