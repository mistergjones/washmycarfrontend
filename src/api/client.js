// apisauce will be used as a wrapper for axios
import { create } from "apisauce";
// api sauce allows the following
// api.get('/repos/skellock/apisauce/commits')
// api.head('/me')
// api.delete('/users/69')
// api.post('/todos', { note: 'jump around' }, { headers: { 'x-ray': 'machine' } })
// api.patch('/servers/1', { live: false })
// api.put('/servers/1', { live: true })

// define the api. as per apiSauce github
const apiClient = create({
    baseURL: "http://localhost:3000/api",
});

const getInfo = apiClient.get;
// .get accepts 3 parameters - url, params, axiosConfig
apiClient.get = async (url, params, axiosConfig) => {
    const response = await getInfo(url, params, axiosConfig);

    if (response.ok) {
        return response;
    }

    return response;
};

const postInfo = apiClient.post;
apiClient.post = async (url, data, axiosConfig) => {
    const response = await postInfo(url, data, axiosConfig);

    if (response.ok) {
        return response;
    }

    return response;
};

export default apiClient;
