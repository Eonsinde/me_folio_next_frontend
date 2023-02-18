import appSanityClient from './sanity-connect'

export const customSanityFetcher = (...args) => appSanityClient.fetch(...args).then(data => data)
export const customSanityParamFetcher = (...args) => appSanityClient.fetch(args[0], { id: args[1] }).then(data => data); 

