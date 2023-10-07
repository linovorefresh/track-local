import { api } from './config.js'

export const salesAPI = {
    preRegister: async function () {
        const response = await api.request({
            url: `/pre-register`,
            method: "POST",
        })

        return response
    }
}