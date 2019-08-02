export function getEpisodesList(obj: any): any;
export function getInfoFromName(name: any, getBestMatch: any): any;
export function getInfoFromURL(url: any): any;
export function getNewsNoDetails(nbNews: any): any;
export function getResultsFromSearch(keyword: any): any;
export function getSeason(year: any, season: any): any;
export function getWatchListFromUser(user: any, after: any, type: any): any;
export class officialApi {
    constructor(credentials: any);
    actOnList(type: any, id: any, opts: any): any;
    checkCredentials(): any;
    search(type: any, name: any): any;
    setCredentials(credentials: any): void;
}
export namespace search {
    const helpers: {
        availableValues: {
            genre: {
                anime: any;
                manga: any;
            };
            p: {
                anime: any;
                manga: any;
            };
            r: any[];
            score: any[];
            status: any[];
            type: any[];
        };
        genresList: {
            anime: any[];
            manga: any[];
        };
        orderTypes: string[];
        producersList: {
            anime: any[];
            manga: any[];
        };
    };
    function search(type: any, opts: any): any;
}
