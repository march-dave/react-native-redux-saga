// const apiHost = 'https://gist.githubusercontent.com/dsandin/c8ed6c5a9486f311f4725f221b912220/raw/8c6d2d8e1f339d02e0ff3d2990560a4862c4beae/users_page_list'

const apiHost2 = "https://gist.githubusercontent.com/dsandin/7b7cd2b834abd8c10908803cac5d1dd3/raw/9a8c0270e0f7a778409b2996419bacdbb06edc87/users_page1"


export default {
    async fetchInitialDeals() {
        try {
            // const response = await fetch(apiHost + '/api/deals');
            const response = await fetch(apiHost2);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    },

    async fetchDealDetail(page) {
        try {
            const response = await fetch(page);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    },
};