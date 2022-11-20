import { createClient } from 'microcms-js-sdk'

export const client = createClient({
    serviceDomain: 'ryoblogs',
    apiKey: process.env.API_KEY,
});