/**
 * Service for injecting the Matomo tracker in the application.
 *
 * @export
 */
export declare class MatomoInjector {
    private platformId;
    /**
     * Creates an instance of MatomoInjector.
     *
     * @param platformId Angular description of the platform.
     */
    constructor(platformId: any);
    /**
     * Injects the Matomo tracker in the DOM.
     *
     * @param url URL of the Matomo instance to connect to.
     * @param id SiteId for this application/site.
     * @param [scriptUrl] Optional URL for the `piwik.js`/`matomo.js` script in case it is not at its default location.
     * @param [skipTrackingInitialPageView] Optional boolean which, if true, will prevent tracking the initial page as part of init
     */
    init(url: string, id: number, scriptUrl?: string, skipTrackingInitialPageView?: boolean): void;
}
