import axios from 'axios';

const uploader = async ({imageFile}) => {
    const apiKey ='4b7e5e02053158f5740957578357d576'
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

    const res = await axios.post(url, imageFile, {
        headers: {
            "content-type": "multipart/form-data",
        },
    });
    return res.data
};

export default uploader;