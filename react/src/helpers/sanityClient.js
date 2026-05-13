import { createClient } from '@sanity/client'

export const sanityClient = createClient({
    projectId: 'wht3j0zu',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2026-04-22',
    token: 'skZaaeR7Lx4qJUKlhujF1R4yo4QVjv4hg5ai0BJr0xNbG5EB7T33dfKROAJllB8dpDAYIvV2OQaD0xTLjdivjPhn63X61S6QLEEzZxQ6sjeXytncHMTCO1Lnrlo44S8S0N5163vp6NJdANxqVvfBs3sGkx37ou5PGG58b65C2Mj826qfI0aG'
})

export default sanityClient