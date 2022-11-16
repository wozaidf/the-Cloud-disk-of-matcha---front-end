import request from "../api/request"

export const uploadImage = (data) => request({
    url: '/images/uploadImages',
    method: 'post',
    data
});

export const getImagesList = () => request({
    url: '/images/getImagesList',
    method: 'get'
})