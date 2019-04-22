import axios from 'axios'
import { getQueryFromObj } from '@/scripts/utils'

export const getStep = (queryObj) => {
    return axios.get(`http://www.junanchi.com/ctcd/steps?${getQueryFromObj(queryObj)}`)
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