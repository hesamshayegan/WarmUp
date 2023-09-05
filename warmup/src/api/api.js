import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class. **/

class WarmUpApi {

    static token;


    static async request(endpoint, data = {}, method="get") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${WarmUpApi.token}`}
        const params = (method === "get")
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch(err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }
  
    // Individual API routes

    /** Get User. */

    static async getUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
    }

    /** Register New User. */

    static async registerUser(data) {
        let res = await this.request(`auth/register`, data, 'post');

        return res.token;
    }

    /** Login a user. */

    static async loginUser(data) {
        let res = await this.request(`auth/token`, data, 'post');
        return res.token;
    }


    /** Patch updated user. */

    static async updateUser(username, data) {
        let res = await this.request(`users/${username}`, data, 'patch');
        return res.user
    }

    /** Delete a user. */

    static async deleteUser(username) {
        let res = await this.request(`users/${username}`, {}, 'delete');
        return res.user
    }
    

    /** get all categories. */

    static async getAllCategories() {
        let res = await this.request(`questions/categories`, {}, 'get');
        return res.categories
    }


    /** get all questions for a complexity. */

    static async getQuestions({username, category}) {
        let res = await this.request(`questions/${username}/${category}`, {}, 'get');
        return res.questions
    }


    /** record a score. */

    static async recordScore({username, category}, data) {

        await this.request(`quiz/${username}/${category}`, data, 'post');
    }



}


export default WarmUpApi;