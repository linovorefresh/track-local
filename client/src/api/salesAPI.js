import { api } from './config.js'

export const salesAPI = {
    preRegister: async function (body) {
        const response = await api.request({
            url: `/pre-register`,
            method: "POST",
            data: body
        })

        return response;
    },

    register: async function (body) {
        const response = await api.request({
            url: `/register`,
            method: "POST",
            data: body
        })

        return response;
    }
}