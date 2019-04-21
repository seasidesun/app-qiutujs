import axios from 'axios'

export const getStep = () => {
    return axios.get('http://www.junanchi.com/ctcd/steps?mId=6&sId=10')
    .then((res) => {
        if (res.data && res.data.code == '0')
            return res.data.data
        else
            throw new Error('api err')
    })
    .catch((err) => {
        throw new Error(err)
    })
}