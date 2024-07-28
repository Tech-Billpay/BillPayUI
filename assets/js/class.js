class Api {
    constructor (){}

    async apiRequest(e, apiUrl, requestType){
        e.preventDefault();

        const form = e.target;
        let formData = new FormData(form);

        const response = await fetch(apiUrl, {
            method: requestType,
            body: formData
        });

        const apiResponse = response.json();
        return apiResponse;
    }
}