export type Initiative = {
    name: string
    region: {
        wikidata: string
    }
    url: string
    cta?: {
        i18nKey: string
        url: string
    }
}