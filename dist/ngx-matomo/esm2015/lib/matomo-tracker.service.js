/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Wrapper for functions available in the Matomo Javascript tracker.
 *
 * @export
 */
export class MatomoTracker {
    /**
     * Creates an instance of MatomoTracker.
     */
    constructor() {
        try {
            if (typeof window._paq === 'undefined') {
                console.warn('Matomo has not yet been initialized! (Did you forget to inject it?)');
            }
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Logs a visit to this page.
     *
     * @param {?=} customTitle
     * @return {?}
     */
    trackPageView(customTitle) {
        try {
            /** @type {?} */
            const args = [];
            if (!!customTitle) {
                args.push(customTitle);
            }
            window._paq.push(['trackPageView', ...args]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Logs an event with an event category (Videos, Music, Games…), an event action (Play, Pause, Duration,
     * Add Playlist, Downloaded, Clicked…), and an optional event name and optional numeric value.
     *
     * @param {?} category Category of the event.
     * @param {?} action Action of the event.
     * @param {?=} name
     * @param {?=} value
     * @return {?}
     */
    trackEvent(category, action, name, value) {
        try {
            /** @type {?} */
            const args = [category, action];
            if (!!name) {
                args.push(name);
            }
            if (typeof value === 'number') {
                args.push(value);
            }
            window._paq.push(['trackEvent', ...args]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Logs an internal site search for a specific keyword, in an optional category,
     * specifying the optional count of search results in the page.
     *
     * @param {?} keyword Keywords of the search query.
     * @param {?=} category
     * @param {?=} resultsCount
     * @return {?}
     */
    trackSiteSearch(keyword, category, resultsCount) {
        try {
            /** @type {?} */
            const args = [keyword];
            if (!!category) {
                args.push(category);
            }
            if (typeof resultsCount === 'number') {
                args.push(resultsCount);
            }
            window._paq.push(['trackSiteSearch', ...args]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Manually logs a conversion for the numeric goal ID, with an optional numeric custom revenue customRevenue.
     *
     * @param {?} idGoal numeric ID of the goal to log a conversion for.
     * @param {?=} customRevenue
     * @return {?}
     */
    trackGoal(idGoal, customRevenue) {
        try {
            /** @type {?} */
            const args = [idGoal];
            if (typeof customRevenue === 'number') {
                args.push(customRevenue);
            }
            window._paq.push(['trackGoal', ...args]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Manually logs a click from your own code.
     *
     * @param {?} url Full URL which is to be tracked as a click.
     * @param {?} linkType Either 'link' for an outlink or 'download' for a download.
     * @return {?}
     */
    trackLink(url, linkType) {
        try {
            window._paq.push(['trackLink', url, linkType]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Scans the entire DOM for all content blocks and tracks all impressions once the DOM ready event has been triggered.
     *
     * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     * @return {?}
     */
    trackAllContentImpressions() {
        try {
            window._paq.push(['trackAllContentImpressions']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Scans the entire DOM for all content blocks as soon as the page is loaded.<br />
     * It tracks an impression only if a content block is actually visible.
     *
     * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     * @param {?} checkOnScroll If true, checks for new content blocks while scrolling the page.
     * @param {?} timeInterval Duration, in milliseconds, between two checks upon scroll.
     * @return {?}
     */
    trackVisibleContentImpressions(checkOnScroll, timeInterval) {
        try {
            window._paq.push(['trackVisibleContentImpressions', checkOnScroll, timeInterval]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Scans the given DOM node and its children for content blocks and tracks an impression for them
     * if no impression was already tracked for it.
     *
     * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     * @param {?} node DOM node in which to look for content blocks which have not been previously tracked.
     * @return {?}
     */
    trackContentImpressionsWithinNode(node) {
        try {
            window._paq.push(['trackContentImpressionsWithinNode', node]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Tracks an interaction with the given DOM node/content block.
     *
     * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     * @param {?} node DOM node for which to track a content interaction.
     * @param {?} contentInteraction Name of the content interaction.
     * @return {?}
     */
    trackContentInteractionNode(node, contentInteraction) {
        try {
            window._paq.push(['trackContentInteractionNode', node, contentInteraction]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Tracks a content impression using the specified values.
     *
     * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     * @param {?} contentName Content name.
     * @param {?} contentPiece Content piece.
     * @param {?} contentTarget Content target.
     * @return {?}
     */
    trackContentImpression(contentName, contentPiece, contentTarget) {
        try {
            window._paq.push(['trackContentImpression', contentName, contentPiece, contentTarget]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Tracks a content interaction using the specified values.
     *
     * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     * @param {?} contentInteraction Content interaction.
     * @param {?} contentName Content name.
     * @param {?} contentPiece Content piece.
     * @param {?} contentTarget Content target.
     * @return {?}
     */
    trackContentInteraction(contentInteraction, contentName, contentPiece, contentTarget) {
        try {
            window._paq.push([
                'trackContentInteraction',
                contentInteraction,
                contentName,
                contentPiece,
                contentTarget
            ]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Logs all found content blocks within a page to the console. This is useful to debug / test content tracking.
     * @return {?}
     */
    logAllContentBlocksOnPage() {
        try {
            window._paq.push(['logAllContentBlocksOnPage']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Install a Heart beat timer that will regularly send requests to Matomo in order to better measure the time spent on the page.<br />
     * These requests will be sent only when the user is actively viewing the page (when the tab is active and in focus).<br />
     * These requests will not track additional actions or page views.<br />
     * By default, the delay is set to 15 seconds.
     *
     * @param {?} delay Delay, in seconds, between two heart beats to the server.
     * @return {?}
     */
    enableHeartBeatTimer(delay) {
        try {
            window._paq.push(['enableHeartBeatTimer', delay]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Installs link tracking on all applicable link elements.
     *
     * @param {?} enable Set the enable parameter to true to use pseudo click-handler (treat middle click and open contextmenu as
     * left click).<br />
     * A right click (or any click that opens the context menu) on a link will be tracked as clicked even if "Open in new tab"
     * is not selected.<br />
     * If "false" (default), nothing will be tracked on open context menu or middle click.
     * @return {?}
     */
    enableLinkTracking(enable) {
        try {
            window._paq.push(['enableLinkTracking', enable]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Enables cross domain linking. By default, the visitor ID that identifies a unique visitor is stored in the browser's
     * first party cookies.<br />
     * This means the cookie can only be accessed by pages on the same domain.<br />
     * If you own multiple domains and would like to track all the actions and pageviews of a specific visitor into the same visit,
     * you may enable cross domain linking.<br />
     * Whenever a user clicks on a link it will append a URL parameter pk_vid to the clicked URL which forwards the current
     * visitor ID value to the page of the different domain.
     *
     * @see {\@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
     * @return {?}
     */
    enableCrossDomainLinking() {
        try {
            window._paq.push(['enableCrossDomainLinking']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * By default, the two visits across domains will be linked together when the link is clicked and the page is loaded within
     * a 180 seconds timeout window.
     *
     * @see {\@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
     * @param {?} timeout Timeout, in seconds, between two actions across two domanes before creating a new visit.
     * @return {?}
     */
    setCrossDomainLinkingTimeout(timeout) {
        try {
            window._paq.push(['setCrossDomainLinkingTimeout', timeout]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Overrides document.title
     *
     * @param {?} title Title of the document.
     * @return {?}
     */
    setDocumentTitle(title) {
        try {
            window._paq.push(['setDocumentTitle', title]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets array of hostnames or domains to be treated as local.<br />
     * For wildcard subdomains, you can use: `setDomains('.example.com')`; or `setDomains('*.example.com');`.<br />
     * You can also specify a path along a domain: `setDomains('*.example.com/subsite1');`.
     *
     * @see {\@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
     * @param {?} domains List of hostnames or domains, with or without path, to be treated as local.
     * @return {?}
     */
    setDomains(domains) {
        try {
            window._paq.push(['setDomains', domains]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Override the page's reported URL.
     *
     * @param {?} url URL to be reported for the page.
     * @return {?}
     */
    setCustomUrl(url) {
        try {
            window._paq.push(['setCustomUrl', url]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Overrides the detected Http-Referer.
     *
     * @param {?} url URL to be reported for the referer.
     * @return {?}
     */
    setReferrerUrl(url) {
        try {
            window._paq.push(['setReferrerUrl', url]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Specifies the website ID.<br />
     * Redundant: can be specified in getTracker() constructor.
     *
     * @param {?} siteId Site ID for the tracker.
     * @return {?}
     */
    setSiteId(siteId) {
        try {
            window._paq.push(['setSiteId', siteId]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Specify the Matomo HTTP API URL endpoint. Points to the root directory of matomo,
     * e.g. http://matomo.example.org/ or https://example.org/matomo/.<br />
     * This function is only useful when the 'Overlay' report is not working.<br />
     * By default, you do not need to use this function.
     *
     * @param {?} url URL for Matomo HTTP API endpoint.
     * @return {?}
     */
    setApiUrl(url) {
        try {
            window._paq.push(['setApiUrl', url]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Specifies the Matomo server URL.<br />
     * Redundant: can be specified in getTracker() constructor.
     *
     * @param {?} url URL for the Matomo server.
     * @return {?}
     */
    setTrackerUrl(url) {
        try {
            window._paq.push(['setTrackerUrl', url]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Returns the Matomo server URL.
     *
     * @return {?} Promise for the Matomo server URL.
     */
    getPiwikUrl() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            try {
                window._paq.push([
                    (/**
                     * @return {?}
                     */
                    function () {
                        resolve(this.getPiwikUrl());
                    })
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        }));
    }
    /**
     * Returns the current url of the page that is currently being visited.<br />
     * If a custom URL was set before calling this method, the custom URL will be returned.
     *
     * @return {?} Promise for the URL of the current page.
     */
    getCurrentUrl() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            try {
                window._paq.push([
                    (/**
                     * @return {?}
                     */
                    function () {
                        resolve(this.getCurrentUrl());
                    })
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        }));
    }
    /**
     * Sets classes to be treated as downloads (in addition to piwik_download).
     *
     * @param {?} classes Class, or list of classes to be treated as downloads.
     * @return {?}
     */
    setDownloadClasses(classes) {
        try {
            window._paq.push(['setDownloadClasses', classes]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets list of file extensions to be recognized as downloads.<br />
     * Example: `'docx'` or `['docx', 'xlsx']`.
     *
     * @param {?} extensions Extension, or list of extensions to be recognized as downloads.
     * @return {?}
     */
    setDownloadExtensions(extensions) {
        try {
            window._paq.push(['setDownloadClasses', extensions]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets additional file extensions to be recognized as downloads.<br />
     * Example: `'docx'` or `['docx', 'xlsx']`.
     *
     * @param {?} extensions Extension, or list of extensions to be recognized as downloads.
     * @return {?}
     */
    addDownloadExtensions(extensions) {
        try {
            window._paq.push(['setDownloadClasses', extensions]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets file extensions to be removed from the list of download file extensions.<br />
     * Example: `'docx'` or `['docx', 'xlsx']`.
     *
     * @param {?} extensions Extension, or list of extensions not to be recognized as downloads.
     * @return {?}
     */
    removeDownloadExtensions(extensions) {
        try {
            window._paq.push(['setDownloadClasses', extensions]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets classes to be ignored if present in link (in addition to piwik_ignore).
     *
     * @param {?} classes Class, or list of classes to be ignored if present in link.
     * @return {?}
     */
    setIgnoreClasses(classes) {
        try {
            window._paq.push(['setDownloadClasses', classes]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Set classes to be treated as outlinks (in addition to piwik_link).
     *
     * @param {?} classes Class, or list of classes to be treated as outlinks.
     * @return {?}
     */
    setLinkClasses(classes) {
        try {
            window._paq.push(['setDownloadClasses', classes]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Set delay for link tracking (in milliseconds).
     *
     * @param {?} delay Delay, in milliseconds, for link tracking.
     * @return {?}
     */
    setLinkTrackingTimer(delay) {
        try {
            window._paq.push(['setLinkTrackingTimer', delay]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Returns delay for link tracking.
     *
     * @return {?} Promise for the delay in milliseconds.
     */
    getLinkTrackingTimer() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            try {
                window._paq.push([
                    (/**
                     * @return {?}
                     */
                    function () {
                        resolve(this.getLinkTrackingTimer());
                    })
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        }));
    }
    /**
     * Set to true to not record the hash tag (anchor) portion of URLs.
     *
     * @param {?} value If true, the hash tag portion of the URLs won't be recorded.
     * @return {?}
     */
    discardHashTag(value) {
        try {
            window._paq.push(['discardHashTag', value]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * By default Matomo uses the browser DOM Timing API to accurately determine the time it takes to generate and download
     * the page. You may overwrite this value with this function.
     *
     * @param {?} generationTime Time, in milliseconds, of the page generation.
     * @return {?}
     */
    setGenerationTimeMs(generationTime) {
        try {
            window._paq.push(['setGenerationTimeMs', generationTime]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Appends a custom string to the end of the HTTP request to piwik.php.
     *
     * @param {?} appendToUrl String to append to the end of the HTTP request to piwik.php/matomo.php.
     * @return {?}
     */
    appendToTrackingUrl(appendToUrl) {
        try {
            window._paq.push(['appendToTrackingUrl', appendToUrl]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Set to true to not track users who opt out of tracking using Mozilla's (proposed) Do Not Track setting.
     *
     * @see {\@link https://www.w3.org/TR/tracking-dnt/}
     * @param {?} doNotTrack If true, users who opted for Do Not Track in their settings won't be tracked.
     * @return {?}
     */
    setDoNotTrack(doNotTrack) {
        try {
            window._paq.push(['setDoNotTrack', doNotTrack]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Enables a frame-buster to prevent the tracked web page from being framed/iframed.
     * @return {?}
     */
    killFrame() {
        try {
            window._paq.push(['killFrame']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Forces the browser to load the live URL if the tracked web page is loaded from a local file
     * (e.g., saved to someone's desktop).
     *
     * @param {?} url URL to track instead of file:// URLs.
     * @return {?}
     */
    redirectFile(url) {
        try {
            window._paq.push(['redirectFile', url]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Records how long the page has been viewed if the minimumVisitLength is attained;
     * the heartBeatDelay determines how frequently to update the server.
     *
     * @param {?} minimumVisitLength Duration before notifying the server for the duration of the visit to a page.
     * @param {?} heartBeatDelay Delay, in seconds, between two updates to the server.
     * @return {?}
     */
    setHeartBeatTimer(minimumVisitLength, heartBeatDelay) {
        try {
            window._paq.push(['setHeartBeatTimer', minimumVisitLength, heartBeatDelay]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Returns the 16 characters ID for the visitor.
     *
     * @return {?} Promise for the the 16 characters ID for the visitor.
     */
    getVisitorId() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            try {
                window._paq.push([
                    (/**
                     * @return {?}
                     */
                    function () {
                        resolve(this.getVisitorId());
                    })
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        }));
    }
    /**
     * Returns the visitor cookie contents in an array.
     *
     * @return {?} Promise for the cookie contents in an array.
     */
    getVisitorInfo() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            try {
                window._paq.push([
                    (/**
                     * @return {?}
                     */
                    function () {
                        resolve(this.getVisitorInfo());
                    })
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        }));
    }
    /**
     * Returns the visitor attribution array (Referer information and/or Campaign name & keyword).<br />
     * Attribution information is used by Matomo to credit the correct referrer (first or last referrer)
     * used when a user triggers a goal conversion.
     *
     * @return {?} Promise for the visitor attribution array (Referer information and/or Campaign name & keyword).
     */
    getAttributionInfo() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            try {
                window._paq.push([
                    (/**
                     * @return {?}
                     */
                    function () {
                        resolve(this.getAttributionInfo());
                    })
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        }));
    }
    /**
     * Returns the attribution campaign name.
     *
     * @return {?} Promise for the the attribution campaign name.
     */
    getAttributionCampaignName() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            try {
                window._paq.push([
                    (/**
                     * @return {?}
                     */
                    function () {
                        resolve(this.getAttributionCampaignName());
                    })
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        }));
    }
    /**
     * Returns the attribution campaign keyword.
     *
     * @return {?} Promise for the attribution campaign keyword.
     */
    getAttributionCampaignKeyword() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            try {
                window._paq.push([
                    (/**
                     * @return {?}
                     */
                    function () {
                        resolve(this.getAttributionCampaignKeyword());
                    })
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        }));
    }
    /**
     * Returns the attribution referrer timestamp.
     *
     * @return {?} Promise for the attribution referrer timestamp (as string).
     */
    getAttributionReferrerTimestamp() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            try {
                window._paq.push([
                    (/**
                     * @return {?}
                     */
                    function () {
                        resolve(this.getAttributionReferrerTimestamp());
                    })
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        }));
    }
    /**
     * Returns the attribution referrer URL.
     *
     * @return {?} Promise for the attribution referrer URL
     */
    getAttributionReferrerUrl() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            try {
                window._paq.push([
                    (/**
                     * @return {?}
                     */
                    function () {
                        resolve(this.getAttributionReferrerUrl());
                    })
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        }));
    }
    /**
     * Returns the User ID string if it was set.
     *
     * @see {\@link https://matomo.org/docs/user-id/|Matomo User ID}
     * @return {?} Promise for the User ID for the visitor.
     */
    getUserId() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            try {
                window._paq.push([
                    (/**
                     * @return {?}
                     */
                    function () {
                        resolve(this.getUserId());
                    })
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        }));
    }
    /**
     * Sets a User ID to this user (such as an email address or a username).
     *
     * @see {\@link https://matomo.org/docs/user-id/|Matomo User ID}
     * @param {?} userId User ID to set for the current visitor.
     * @return {?}
     */
    setUserId(userId) {
        try {
            window._paq.push(['setUserId', userId]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Resets the User ID which also generates a new Visitor ID.
     *
     * @see {\@link https://matomo.org/docs/user-id/|Matomo User ID}
     * @return {?}
     */
    resetUserId() {
        try {
            window._paq.push(['resetUserId']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets a custom variable.
     *
     * @see {\@link https://matomo.org/docs/custom-variables/|Custom Variables}
     * @param {?} index Index, the number from 1 to 5 where this custom variable name is stored for the current page view.
     * @param {?} name Name, the name of the variable, for example: Category, Sub-category, UserType.
     * @param {?} value Value, for example: "Sports", "News", "World", "Business"…
     * @param {?} scope Scope of the custom variable:<br />
     * - "page" means the custom variable applies to the current page view.
     * - "visit" means the custom variable applies to the current visitor.
     * @return {?}
     */
    setCustomVariable(index, name, value, scope) {
        try {
            window._paq.push(['setCustomVariable', index, name, value, scope]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Deletes a custom variable.
     *
     * @see {\@link https://matomo.org/docs/custom-variables/|Custom Variables}
     * @param {?} index Index of the custom variable to delete.
     * @param {?} scope Scope of the custom variable to delete.
     * @return {?}
     */
    deleteCustomVariable(index, scope) {
        try {
            window._paq.push(['deleteCustomVariable', index, scope]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Deletes all custom variables.
     *
     * @see {\@link https://matomo.org/docs/custom-variables/|Custom Variables}
     * @param {?} scope Scope of the custom variables to delete.
     * @return {?}
     */
    deleteCustomVariables(scope) {
        try {
            window._paq.push(['deleteCustomVariables', scope]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Retrieves a custom variable.
     *
     * @see {\@link https://matomo.org/docs/custom-variables/|Custom Variables}
     * @param {?} index Index of the custom variable to retrieve.
     * @param {?} scope Scope of the custom variable to retrieve.
     * @return {?} Promise for the value of custom variable.
     */
    getCustomVariable(index, scope) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            try {
                window._paq.push([
                    (/**
                     * @return {?}
                     */
                    function () {
                        resolve(this.getCustomVariable(index, scope));
                    })
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        }));
    }
    /**
     * When called then the Custom Variables of scope "visit" will be stored (persisted) in a first party cookie
     * for the duration of the visit.<br />
     * This is useful if you want to call getCustomVariable later in the visit.<br />
     * (by default custom variables are not stored on the visitor's computer.)
     *
     * @see {\@link https://matomo.org/docs/custom-variables/|Custom Variables}
     * @return {?}
     */
    storeCustomVariablesInCookie() {
        try {
            window._paq.push(['storeCustomVariablesInCookie']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets a custom dimension.<br />
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @see {\@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
     * @param {?} customDimensionId ID of the custom dimension to set.
     * @param {?} customDimensionValue Value to be set.
     * @return {?}
     */
    setCustomDimension(customDimensionId, customDimensionValue) {
        try {
            window._paq.push(['setCustomDimension', customDimensionId, customDimensionValue]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Deletes a custom dimension.<br />
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @see {\@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
     * @param {?} customDimensionId ID of the custom dimension to delete.
     * @return {?}
     */
    deleteCustomDimension(customDimensionId) {
        try {
            window._paq.push(['deleteCustomDimension', customDimensionId]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Retrieve a custom dimension.<br />
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @see {\@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
     * @param {?} customDimensionId ID of the custom dimension to retrieve.
     * @return {?} Promise for the value for the requested custom dimension.
     */
    getCustomDimension(customDimensionId) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            try {
                window._paq.push([
                    (/**
                     * @return {?}
                     */
                    function () {
                        resolve(this.getCustomDimension(customDimensionId));
                    })
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        }));
    }
    /**
     * Sets campaign name parameter(s).
     *
     * @see {\@link https://matomo.org/docs/tracking-campaigns/|Campaigns}
     * @param {?} name Name of the campaign
     * @return {?}
     */
    setCampaignNameKey(name) {
        try {
            window._paq.push(['setCampaignNameKey', name]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets campaign keyword parameter(s).
     *
     * @see {\@link https://matomo.org/docs/tracking-campaigns/|Campaigns}
     * @param {?} keyword Keyword parameter(s) of the campaign.
     * @return {?}
     */
    setCampaignKeywordKey(keyword) {
        try {
            window._paq.push(['setCampaignKeywordKey', keyword]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Set to true to attribute a conversion to the first referrer.<br />
     * By default, conversion is attributed to the most recent referrer.
     *
     * @see {\@link https://matomo.org/docs/tracking-campaigns/|Campaigns} / {\@link https://matomo.org/faq/general/faq_106/#faq_106|Conversions to the first referrer}
     * @param {?} conversionToFirstReferrer If true, Matomo will attribute the Goal conversion to the first referrer used
     * instead of the last one.
     * @return {?}
     */
    setConversionAttributionFirstReferrer(conversionToFirstReferrer) {
        try {
            window._paq.push(['setConversionAttributionFirstReferrer', conversionToFirstReferrer]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the current page view as a product or category page view.<br />
     * When you call setEcommerceView, it must be followed by a call to trackPageView to record the product or category page view.
     *
     * @param {?} productSKU SKU of the viewed product.
     * @param {?} productName Name of the viewed product.
     * @param {?} productCategory Category of the viewed product.
     * @param {?} price Price of the viewed product.
     * @return {?}
     */
    setEcommerceView(productSKU, productName, productCategory, price) {
        try {
            window._paq.push(['setEcommerceView', productSKU, productName, productCategory, price]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Adds a product into the eCommerce order.<br />
     * Must be called for each product in the order.
     *
     * @param {?} productSKU SKU of the product to add.
     * @param {?=} productName
     * @param {?=} productCategory
     * @param {?=} price
     * @param {?=} quantity
     * @return {?}
     */
    addEcommerceItem(productSKU, productName, productCategory, price, quantity) {
        try {
            /** @type {?} */
            const args = [productSKU];
            if (!!productName) {
                args.push(productName);
            }
            if (!!productCategory) {
                args.push(productCategory);
            }
            if (typeof price === 'number') {
                args.push(price);
            }
            if (typeof quantity === 'number') {
                args.push(quantity);
            }
            window._paq.push(['addEcommerceItem', ...args]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Tracks a shopping cart.<br />
     * Call this javascript function every time a user is adding, updating or deleting a product from the cart.
     *
     * @param {?} grandTotal Grand total of the shopping cart.
     * @return {?}
     */
    trackEcommerceCartUpdate(grandTotal) {
        try {
            window._paq.push(['trackEcommerceCartUpdate', grandTotal]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Tracks an Ecommerce order, including any eCommerce item previously added to the order.<br />
     * orderId and grandTotal (ie.revenue) are required parameters.
     *
     * @param {?} orderId ID of the tracked order.
     * @param {?} grandTotal Grand total of the tracked order.
     * @param {?=} subTotal
     * @param {?=} tax
     * @param {?=} shipping
     * @param {?=} discount
     * @return {?}
     */
    trackEcommerceOrder(orderId, grandTotal, subTotal, tax, shipping, discount) {
        try {
            /** @type {?} */
            const args = [orderId, grandTotal];
            if (typeof subTotal === 'number') {
                args.push(subTotal);
            }
            if (typeof tax === 'number') {
                args.push(tax);
            }
            if (typeof shipping === 'number') {
                args.push(shipping);
            }
            if (typeof discount === 'number') {
                args.push(discount);
            }
            window._paq.push(['trackEcommerceOrder', ...args]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Disables all first party cookies.<br />
     * Existing Matomo cookies for this websites will be deleted on the next page view.
     * @return {?}
     */
    disableCookies() {
        try {
            window._paq.push(['disableCookies']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Deletes the tracking cookies currently set (useful when creating new visits).
     * @return {?}
     */
    deleteCookies() {
        try {
            window._paq.push(['deleteCookies']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Returns whether cookies are enabled and supported by this browser.
     *
     * @return {?} Promise for the support and activation of cookies.
     */
    hasCookies() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            try {
                window._paq.push([
                    (/**
                     * @return {?}
                     */
                    function () {
                        resolve(this.hasCookies());
                    })
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        }));
    }
    /**
     * Sets the tracking cookie name prefix.<br />
     * Default prefix is 'pk'.
     *
     * @param {?} prefix Prefix for the tracking cookie names.
     * @return {?}
     */
    setCookieNamePrefix(prefix) {
        try {
            window._paq.push(['setCookieNamePrefix', prefix]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the domain of the tracking cookies.<br />
     * Default is the document domain.<br />
     * If your website can be visited at both www.example.com and example.com, you would use: `'.example.com'` or `'*.example.com'`.
     *
     * @param {?} domain Domain of the tracking cookies.
     * @return {?}
     */
    setCookieDomain(domain) {
        try {
            window._paq.push(['setCookieDomain', domain]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the path of the tracking cookies.<br />
     * Default is '/'.
     *
     * @param {?} path Path of the tracking cookies.
     * @return {?}
     */
    setCookiePath(path) {
        try {
            window._paq.push(['setCookiePath', path]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Set to true to enable the Secure cookie flag on all first party cookies.<br />
     * This should be used when your website is only available under HTTPS so that all tracking cookies are always sent
     * over secure connection.
     *
     * @param {?} secure If true, the secure cookie flag will be set on all first party cookies.
     * @return {?}
     */
    setSecureCookie(secure) {
        try {
            window._paq.push(['setSecureCookie', secure]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the visitor cookie timeout.<br />
     * Default is 13 months.
     *
     * @param {?} timeout Timeout, in seconds, for the visitor cookie timeout.
     * @return {?}
     */
    setVisitorCookieTimeout(timeout) {
        try {
            window._paq.push(['setVisitorCookieTimeout', timeout]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the referral cookie timeout.<br />
     * Default is 6 months.
     *
     * @param {?} timeout Timeout, in seconds, for the referral cookie timeout.
     * @return {?}
     */
    setReferralCookieTimeout(timeout) {
        try {
            window._paq.push(['setReferralCookieTimeout', timeout]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the session cookie timeout.<br />
     * Default is 30 minutes.
     *
     * @param {?} timeout Timeout, in seconds, for the session cookie timeout.
     * @return {?}
     */
    setSessionCookieTimeout(timeout) {
        try {
            window._paq.push(['setSessionCookieTimeout', timeout]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Adds a click listener to a specific link element.<br />
     * When clicked, Matomo will log the click automatically.
     *
     * @param {?} element Element on which to add a click listener.
     * @return {?}
     */
    addListener(element) {
        try {
            window._paq.push(['addListener', element]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the request method to either "GET" or "POST". (The default is "GET".)<br />
     * To use the POST request method, either:<br />
     * 1) the Matomo host is the same as the tracked website host (Matomo installed in the same domain as your tracked website), or<br />
     * 2) if Matomo is not installed on the same host as your website, you need to enable CORS (Cross domain requests).
     *
     * @param {?} method HTTP method for sending information to the Matomo server.
     * @return {?}
     */
    setRequestMethod(method) {
        try {
            window._paq.push(['setRequestMethod', method]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets a function that will process the request content.<br />
     * The function will be called once the request (query parameters string) has been prepared, and before the request content is sent.
     *
     * @param {?} callback Function that will process the request content.
     * @return {?}
     */
    setCustomRequestProcessing(callback) {
        try {
            window._paq.push(['setCustomRequestProcessing', callback]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets request Content-Type header value.<br />
     * Applicable when "POST" request method is used via setRequestMethod.
     *
     * @param {?} contentType Value for Content-Type HTTP header.
     * @return {?}
     */
    setRequestContentType(contentType) {
        try {
            window._paq.push(['setRequestContentType', contentType]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
}
MatomoTracker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MatomoTracker.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0b21vLXRyYWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRvbW8vIiwic291cmNlcyI6WyJsaWIvbWF0b21vLXRyYWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBaUIzQyxNQUFNLE9BQU8sYUFBYTs7OztJQUl4QjtRQUNFLElBQUk7WUFDRixJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7Z0JBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUVBQXFFLENBQUMsQ0FBQzthQUNyRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUU7Z0JBQ2xDLE1BQU0sQ0FBQyxDQUFDO2FBQ1Q7U0FDRjtJQUNILENBQUM7Ozs7Ozs7SUFPRCxhQUFhLENBQUMsV0FBb0I7UUFDaEMsSUFBSTs7a0JBQ0ksSUFBSSxHQUFVLEVBQUU7WUFDdEIsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFO2dCQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3hCO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUU7Z0JBQ2xDLE1BQU0sQ0FBQyxDQUFDO2FBQ1Q7U0FDRjtJQUNILENBQUM7Ozs7Ozs7Ozs7O0lBV0QsVUFBVSxDQUFDLFFBQWdCLEVBQUUsTUFBYyxFQUFFLElBQWEsRUFBRSxLQUFjO1FBQ3hFLElBQUk7O2tCQUNJLElBQUksR0FBVSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7WUFDdEMsSUFBSSxDQUFD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QUN2QyxJQUFJO1lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQzFEO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUU7Z0JBQ2xDLE1BQU0sQ0FBQyxDQUFDO2FBQ1Q7U0FDRjtJQUNILENBQUM7OztZQWo4Q0YsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBY2Nlc3MgdG8gdGhlIGdsb2JhbCB3aW5kb3cgdmFyaWFibGUuXG4gKi9cbmRlY2xhcmUgdmFyIHdpbmRvdzoge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIHByb3RvdHlwZTogV2luZG93O1xuICBuZXcgKCk6IFdpbmRvdztcbn07XG5cbi8qKlxuICogV3JhcHBlciBmb3IgZnVuY3Rpb25zIGF2YWlsYWJsZSBpbiB0aGUgTWF0b21vIEphdmFzY3JpcHQgdHJhY2tlci5cbiAqXG4gKiBAZXhwb3J0XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNYXRvbW9UcmFja2VyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTWF0b21vVHJhY2tlci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5fcGFxID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ01hdG9tbyBoYXMgbm90IHlldCBiZWVuIGluaXRpYWxpemVkISAoRGlkIHlvdSBmb3JnZXQgdG8gaW5qZWN0IGl0PyknKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvZ3MgYSB2aXNpdCB0byB0aGlzIHBhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSBbY3VzdG9tVGl0bGVdIE9wdGlvbmFsIHRpdGxlIG9mIHRoZSB2aXNpdGVkIHBhZ2UuXG4gICAqL1xuICB0cmFja1BhZ2VWaWV3KGN1c3RvbVRpdGxlPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFyZ3M6IGFueVtdID0gW107XG4gICAgICBpZiAoISFjdXN0b21UaXRsZSkge1xuICAgICAgICBhcmdzLnB1c2goY3VzdG9tVGl0bGUpO1xuICAgICAgfVxuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3RyYWNrUGFnZVZpZXcnLCAuLi5hcmdzXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dzIGFuIGV2ZW50IHdpdGggYW4gZXZlbnQgY2F0ZWdvcnkgKFZpZGVvcywgTXVzaWMsIEdhbWVz4oCmKSwgYW4gZXZlbnQgYWN0aW9uIChQbGF5LCBQYXVzZSwgRHVyYXRpb24sXG4gICAqIEFkZCBQbGF5bGlzdCwgRG93bmxvYWRlZCwgQ2xpY2tlZOKApiksIGFuZCBhbiBvcHRpb25hbCBldmVudCBuYW1lIGFuZCBvcHRpb25hbCBudW1lcmljIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0gY2F0ZWdvcnkgQ2F0ZWdvcnkgb2YgdGhlIGV2ZW50LlxuICAgKiBAcGFyYW0gYWN0aW9uIEFjdGlvbiBvZiB0aGUgZXZlbnQuXG4gICAqIEBwYXJhbSBbbmFtZV0gT3B0aW9uYWwgbmFtZSBvZiB0aGUgZXZlbnQuXG4gICAqIEBwYXJhbSBbdmFsdWVdIE9wdGlvbmFsIHZhbHVlIGZvciB0aGUgZXZlbnQuXG4gICAqL1xuICB0cmFja0V2ZW50KGNhdGVnb3J5OiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCB2YWx1ZT86IG51bWJlcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhcmdzOiBhbnlbXSA9IFtjYXRlZ29yeSwgYWN0aW9uXTtcbiAgICAgIGlmICghIW5hbWUpIHtcbiAgICAgICAgYXJncy5wdXNoKG5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYXJncy5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWyd0cmFja0V2ZW50JywgLi4uYXJnc10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9ncyBhbiBpbnRlcm5hbCBzaXRlIHNlYXJjaCBmb3IgYSBzcGVjaWZpYyBrZXl3b3JkLCBpbiBhbiBvcHRpb25hbCBjYXRlZ29yeSxcbiAgICogc3BlY2lmeWluZyB0aGUgb3B0aW9uYWwgY291bnQgb2Ygc2VhcmNoIHJlc3VsdHMgaW4gdGhlIHBhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSBrZXl3b3JkIEtleXdvcmRzIG9mIHRoZSBzZWFyY2ggcXVlcnkuXG4gICAqIEBwYXJhbSBbY2F0ZWdvcnldIE9wdGlvbmFsIGNhdGVnb3J5IG9mIHRoZSBzZWFyY2ggcXVlcnkuXG4gICAqIEBwYXJhbSBbcmVzdWx0c0NvdW50XSBPcHRpb25hbCBudW1iZXIgb2YgcmVzdWx0cyByZXR1cm5lZCBieSB0aGUgc2VhcmNoIHF1ZXJ5LlxuICAgKi9cbiAgdHJhY2tTaXRlU2VhcmNoKGtleXdvcmQ6IHN0cmluZywgY2F0ZWdvcnk/OiBzdHJpbmcsIHJlc3VsdHNDb3VudD86IG51bWJlcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhcmdzOiBhbnlbXSA9IFtrZXl3b3JkXTtcbiAgICAgIGlmICghIWNhdGVnb3J5KSB7XG4gICAgICAgIGFyZ3MucHVzaChjYXRlZ29yeSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdHNDb3VudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYXJncy5wdXNoKHJlc3VsdHNDb3VudCk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuX3BhcS5wdXNoKFsndHJhY2tTaXRlU2VhcmNoJywgLi4uYXJnc10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFudWFsbHkgbG9ncyBhIGNvbnZlcnNpb24gZm9yIHRoZSBudW1lcmljIGdvYWwgSUQsIHdpdGggYW4gb3B0aW9uYWwgbnVtZXJpYyBjdXN0b20gcmV2ZW51ZSBjdXN0b21SZXZlbnVlLlxuICAgKlxuICAgKiBAcGFyYW0gaWRHb2FsIG51bWVyaWMgSUQgb2YgdGhlIGdvYWwgdG8gbG9nIGEgY29udmVyc2lvbiBmb3IuXG4gICAqIEBwYXJhbSBbY3VzdG9tUmV2ZW51ZV0gT3B0aW9uYWwgY3VzdG9tIHJldmVudWUgdG8gbG9nIGZvciB0aGUgZ29hbC5cbiAgICovXG4gIHRyYWNrR29hbChpZEdvYWw6IG51bWJlciwgY3VzdG9tUmV2ZW51ZT86IG51bWJlcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhcmdzOiBhbnlbXSA9IFtpZEdvYWxdO1xuICAgICAgaWYgKHR5cGVvZiBjdXN0b21SZXZlbnVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBhcmdzLnB1c2goY3VzdG9tUmV2ZW51ZSk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuX3BhcS5wdXNoKFsndHJhY2tHb2FsJywgLi4uYXJnc10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFudWFsbHkgbG9ncyBhIGNsaWNrIGZyb20geW91ciBvd24gY29kZS5cbiAgICpcbiAgICogQHBhcmFtIHVybCBGdWxsIFVSTCB3aGljaCBpcyB0byBiZSB0cmFja2VkIGFzIGEgY2xpY2suXG4gICAqIEBwYXJhbSBsaW5rVHlwZSBFaXRoZXIgJ2xpbmsnIGZvciBhbiBvdXRsaW5rIG9yICdkb3dubG9hZCcgZm9yIGEgZG93bmxvYWQuXG4gICAqL1xuICB0cmFja0xpbmsodXJsOiBzdHJpbmcsIGxpbmtUeXBlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3RyYWNrTGluaycsIHVybCwgbGlua1R5cGVdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNjYW5zIHRoZSBlbnRpcmUgRE9NIGZvciBhbGwgY29udGVudCBibG9ja3MgYW5kIHRyYWNrcyBhbGwgaW1wcmVzc2lvbnMgb25jZSB0aGUgRE9NIHJlYWR5IGV2ZW50IGhhcyBiZWVuIHRyaWdnZXJlZC5cbiAgICpcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubWF0b21vLm9yZy9ndWlkZXMvY29udGVudC10cmFja2luZ3xDb250ZW50IFRyYWNraW5nfVxuICAgKi9cbiAgdHJhY2tBbGxDb250ZW50SW1wcmVzc2lvbnMoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWyd0cmFja0FsbENvbnRlbnRJbXByZXNzaW9ucyddKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNjYW5zIHRoZSBlbnRpcmUgRE9NIGZvciBhbGwgY29udGVudCBibG9ja3MgYXMgc29vbiBhcyB0aGUgcGFnZSBpcyBsb2FkZWQuPGJyIC8+XG4gICAqIEl0IHRyYWNrcyBhbiBpbXByZXNzaW9uIG9ubHkgaWYgYSBjb250ZW50IGJsb2NrIGlzIGFjdHVhbGx5IHZpc2libGUuXG4gICAqXG4gICAqIEBwYXJhbSBjaGVja09uU2Nyb2xsIElmIHRydWUsIGNoZWNrcyBmb3IgbmV3IGNvbnRlbnQgYmxvY2tzIHdoaWxlIHNjcm9sbGluZyB0aGUgcGFnZS5cbiAgICogQHBhcmFtIHRpbWVJbnRlcnZhbCBEdXJhdGlvbiwgaW4gbWlsbGlzZWNvbmRzLCBiZXR3ZWVuIHR3byBjaGVja3MgdXBvbiBzY3JvbGwuXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1hdG9tby5vcmcvZ3VpZGVzL2NvbnRlbnQtdHJhY2tpbmd8Q29udGVudCBUcmFja2luZ31cbiAgICovXG4gIHRyYWNrVmlzaWJsZUNvbnRlbnRJbXByZXNzaW9ucyhjaGVja09uU2Nyb2xsOiBib29sZWFuLCB0aW1lSW50ZXJ2YWw6IG51bWJlcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuX3BhcS5wdXNoKFsndHJhY2tWaXNpYmxlQ29udGVudEltcHJlc3Npb25zJywgY2hlY2tPblNjcm9sbCwgdGltZUludGVydmFsXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTY2FucyB0aGUgZ2l2ZW4gRE9NIG5vZGUgYW5kIGl0cyBjaGlsZHJlbiBmb3IgY29udGVudCBibG9ja3MgYW5kIHRyYWNrcyBhbiBpbXByZXNzaW9uIGZvciB0aGVtXG4gICAqIGlmIG5vIGltcHJlc3Npb24gd2FzIGFscmVhZHkgdHJhY2tlZCBmb3IgaXQuXG4gICAqXG4gICAqIEBwYXJhbSBub2RlIERPTSBub2RlIGluIHdoaWNoIHRvIGxvb2sgZm9yIGNvbnRlbnQgYmxvY2tzIHdoaWNoIGhhdmUgbm90IGJlZW4gcHJldmlvdXNseSB0cmFja2VkLlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2RldmVsb3Blci5tYXRvbW8ub3JnL2d1aWRlcy9jb250ZW50LXRyYWNraW5nfENvbnRlbnQgVHJhY2tpbmd9XG4gICAqL1xuICB0cmFja0NvbnRlbnRJbXByZXNzaW9uc1dpdGhpbk5vZGUobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuX3BhcS5wdXNoKFsndHJhY2tDb250ZW50SW1wcmVzc2lvbnNXaXRoaW5Ob2RlJywgbm9kZV0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIGFuIGludGVyYWN0aW9uIHdpdGggdGhlIGdpdmVuIERPTSBub2RlL2NvbnRlbnQgYmxvY2suXG4gICAqXG4gICAqIEBwYXJhbSBub2RlIERPTSBub2RlIGZvciB3aGljaCB0byB0cmFjayBhIGNvbnRlbnQgaW50ZXJhY3Rpb24uXG4gICAqIEBwYXJhbSBjb250ZW50SW50ZXJhY3Rpb24gTmFtZSBvZiB0aGUgY29udGVudCBpbnRlcmFjdGlvbi5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubWF0b21vLm9yZy9ndWlkZXMvY29udGVudC10cmFja2luZ3xDb250ZW50IFRyYWNraW5nfVxuICAgKi9cbiAgdHJhY2tDb250ZW50SW50ZXJhY3Rpb25Ob2RlKG5vZGU6IE5vZGUsIGNvbnRlbnRJbnRlcmFjdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWyd0cmFja0NvbnRlbnRJbnRlcmFjdGlvbk5vZGUnLCBub2RlLCBjb250ZW50SW50ZXJhY3Rpb25dKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrcyBhIGNvbnRlbnQgaW1wcmVzc2lvbiB1c2luZyB0aGUgc3BlY2lmaWVkIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIGNvbnRlbnROYW1lIENvbnRlbnQgbmFtZS5cbiAgICogQHBhcmFtIGNvbnRlbnRQaWVjZSBDb250ZW50IHBpZWNlLlxuICAgKiBAcGFyYW0gY29udGVudFRhcmdldCBDb250ZW50IHRhcmdldC5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubWF0b21vLm9yZy9ndWlkZXMvY29udGVudC10cmFja2luZ3xDb250ZW50IFRyYWNraW5nfVxuICAgKi9cbiAgdHJhY2tDb250ZW50SW1wcmVzc2lvbihjb250ZW50TmFtZTogc3RyaW5nLCBjb250ZW50UGllY2U6IHN0cmluZywgY29udGVudFRhcmdldDogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWyd0cmFja0NvbnRlbnRJbXByZXNzaW9uJywgY29udGVudE5hbWUsIGNvbnRlbnRQaWVjZSwgY29udGVudFRhcmdldF0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIGEgY29udGVudCBpbnRlcmFjdGlvbiB1c2luZyB0aGUgc3BlY2lmaWVkIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIGNvbnRlbnRJbnRlcmFjdGlvbiBDb250ZW50IGludGVyYWN0aW9uLlxuICAgKiBAcGFyYW0gY29udGVudE5hbWUgQ29udGVudCBuYW1lLlxuICAgKiBAcGFyYW0gY29udGVudFBpZWNlIENvbnRlbnQgcGllY2UuXG4gICAqIEBwYXJhbSBjb250ZW50VGFyZ2V0IENvbnRlbnQgdGFyZ2V0LlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2RldmVsb3Blci5tYXRvbW8ub3JnL2d1aWRlcy9jb250ZW50LXRyYWNraW5nfENvbnRlbnQgVHJhY2tpbmd9XG4gICAqL1xuICB0cmFja0NvbnRlbnRJbnRlcmFjdGlvbihcbiAgICBjb250ZW50SW50ZXJhY3Rpb246IHN0cmluZyxcbiAgICBjb250ZW50TmFtZTogc3RyaW5nLFxuICAgIGNvbnRlbnRQaWVjZTogc3RyaW5nLFxuICAgIGNvbnRlbnRUYXJnZXQ6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbXG4gICAgICAgICd0cmFja0NvbnRlbnRJbnRlcmFjdGlvbicsXG4gICAgICAgIGNvbnRlbnRJbnRlcmFjdGlvbixcbiAgICAgICAgY29udGVudE5hbWUsXG4gICAgICAgIGNvbnRlbnRQaWVjZSxcbiAgICAgICAgY29udGVudFRhcmdldFxuICAgICAgXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dzIGFsbCBmb3VuZCBjb250ZW50IGJsb2NrcyB3aXRoaW4gYSBwYWdlIHRvIHRoZSBjb25zb2xlLiBUaGlzIGlzIHVzZWZ1bCB0byBkZWJ1ZyAvIHRlc3QgY29udGVudCB0cmFja2luZy5cbiAgICovXG4gIGxvZ0FsbENvbnRlbnRCbG9ja3NPblBhZ2UoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydsb2dBbGxDb250ZW50QmxvY2tzT25QYWdlJ10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5zdGFsbCBhIEhlYXJ0IGJlYXQgdGltZXIgdGhhdCB3aWxsIHJlZ3VsYXJseSBzZW5kIHJlcXVlc3RzIHRvIE1hdG9tbyBpbiBvcmRlciB0byBiZXR0ZXIgbWVhc3VyZSB0aGUgdGltZSBzcGVudCBvbiB0aGUgcGFnZS48YnIgLz5cbiAgICogVGhlc2UgcmVxdWVzdHMgd2lsbCBiZSBzZW50IG9ubHkgd2hlbiB0aGUgdXNlciBpcyBhY3RpdmVseSB2aWV3aW5nIHRoZSBwYWdlICh3aGVuIHRoZSB0YWIgaXMgYWN0aXZlIGFuZCBpbiBmb2N1cykuPGJyIC8+XG4gICAqIFRoZXNlIHJlcXVlc3RzIHdpbGwgbm90IHRyYWNrIGFkZGl0aW9uYWwgYWN0aW9ucyBvciBwYWdlIHZpZXdzLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgZGVsYXkgaXMgc2V0IHRvIDE1IHNlY29uZHMuXG4gICAqXG4gICAqIEBwYXJhbSBkZWxheSBEZWxheSwgaW4gc2Vjb25kcywgYmV0d2VlbiB0d28gaGVhcnQgYmVhdHMgdG8gdGhlIHNlcnZlci5cbiAgICovXG4gIGVuYWJsZUhlYXJ0QmVhdFRpbWVyKGRlbGF5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ2VuYWJsZUhlYXJ0QmVhdFRpbWVyJywgZGVsYXldKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluc3RhbGxzIGxpbmsgdHJhY2tpbmcgb24gYWxsIGFwcGxpY2FibGUgbGluayBlbGVtZW50cy5cbiAgICpcbiAgICogQHBhcmFtIGVuYWJsZSBTZXQgdGhlIGVuYWJsZSBwYXJhbWV0ZXIgdG8gdHJ1ZSB0byB1c2UgcHNldWRvIGNsaWNrLWhhbmRsZXIgKHRyZWF0IG1pZGRsZSBjbGljayBhbmQgb3BlbiBjb250ZXh0bWVudSBhc1xuICAgKiBsZWZ0IGNsaWNrKS48YnIgLz5cbiAgICogQSByaWdodCBjbGljayAob3IgYW55IGNsaWNrIHRoYXQgb3BlbnMgdGhlIGNvbnRleHQgbWVudSkgb24gYSBsaW5rIHdpbGwgYmUgdHJhY2tlZCBhcyBjbGlja2VkIGV2ZW4gaWYgXCJPcGVuIGluIG5ldyB0YWJcIlxuICAgKiBpcyBub3Qgc2VsZWN0ZWQuPGJyIC8+XG4gICAqIElmIFwiZmFsc2VcIiAoZGVmYXVsdCksIG5vdGhpbmcgd2lsbCBiZSB0cmFja2VkIG9uIG9wZW4gY29udGV4dCBtZW51IG9yIG1pZGRsZSBjbGljay5cbiAgICovXG4gIGVuYWJsZUxpbmtUcmFja2luZyhlbmFibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ2VuYWJsZUxpbmtUcmFja2luZycsIGVuYWJsZV0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyBjcm9zcyBkb21haW4gbGlua2luZy4gQnkgZGVmYXVsdCwgdGhlIHZpc2l0b3IgSUQgdGhhdCBpZGVudGlmaWVzIGEgdW5pcXVlIHZpc2l0b3IgaXMgc3RvcmVkIGluIHRoZSBicm93c2VyJ3NcbiAgICogZmlyc3QgcGFydHkgY29va2llcy48YnIgLz5cbiAgICogVGhpcyBtZWFucyB0aGUgY29va2llIGNhbiBvbmx5IGJlIGFjY2Vzc2VkIGJ5IHBhZ2VzIG9uIHRoZSBzYW1lIGRvbWFpbi48YnIgLz5cbiAgICogSWYgeW91IG93biBtdWx0aXBsZSBkb21haW5zIGFuZCB3b3VsZCBsaWtlIHRvIHRyYWNrIGFsbCB0aGUgYWN0aW9ucyBhbmQgcGFnZXZpZXdzIG9mIGEgc3BlY2lmaWMgdmlzaXRvciBpbnRvIHRoZSBzYW1lIHZpc2l0LFxuICAgKiB5b3UgbWF5IGVuYWJsZSBjcm9zcyBkb21haW4gbGlua2luZy48YnIgLz5cbiAgICogV2hlbmV2ZXIgYSB1c2VyIGNsaWNrcyBvbiBhIGxpbmsgaXQgd2lsbCBhcHBlbmQgYSBVUkwgcGFyYW1ldGVyIHBrX3ZpZCB0byB0aGUgY2xpY2tlZCBVUkwgd2hpY2ggZm9yd2FyZHMgdGhlIGN1cnJlbnRcbiAgICogdmlzaXRvciBJRCB2YWx1ZSB0byB0aGUgcGFnZSBvZiB0aGUgZGlmZmVyZW50IGRvbWFpbi5cbiAgICpcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9tYXRvbW8ub3JnL2ZhcS9ob3ctdG8vZmFxXzIzNjU0L3xDcm9zcyBEb21haW4gTGlua2luZ31cbiAgICovXG4gIGVuYWJsZUNyb3NzRG9tYWluTGlua2luZygpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ2VuYWJsZUNyb3NzRG9tYWluTGlua2luZyddKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSB0d28gdmlzaXRzIGFjcm9zcyBkb21haW5zIHdpbGwgYmUgbGlua2VkIHRvZ2V0aGVyIHdoZW4gdGhlIGxpbmsgaXMgY2xpY2tlZCBhbmQgdGhlIHBhZ2UgaXMgbG9hZGVkIHdpdGhpblxuICAgKiBhIDE4MCBzZWNvbmRzIHRpbWVvdXQgd2luZG93LlxuICAgKlxuICAgKiBAcGFyYW0gdGltZW91dCBUaW1lb3V0LCBpbiBzZWNvbmRzLCBiZXR3ZWVuIHR3byBhY3Rpb25zIGFjcm9zcyB0d28gZG9tYW5lcyBiZWZvcmUgY3JlYXRpbmcgYSBuZXcgdmlzaXQuXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbWF0b21vLm9yZy9mYXEvaG93LXRvL2ZhcV8yMzY1NC98Q3Jvc3MgRG9tYWluIExpbmtpbmd9XG4gICAqL1xuICBzZXRDcm9zc0RvbWFpbkxpbmtpbmdUaW1lb3V0KHRpbWVvdXQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuX3BhcS5wdXNoKFsnc2V0Q3Jvc3NEb21haW5MaW5raW5nVGltZW91dCcsIHRpbWVvdXRdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyBkb2N1bWVudC50aXRsZVxuICAgKlxuICAgKiBAcGFyYW0gdGl0bGUgVGl0bGUgb2YgdGhlIGRvY3VtZW50LlxuICAgKi9cbiAgc2V0RG9jdW1lbnRUaXRsZSh0aXRsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydzZXREb2N1bWVudFRpdGxlJywgdGl0bGVdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYXJyYXkgb2YgaG9zdG5hbWVzIG9yIGRvbWFpbnMgdG8gYmUgdHJlYXRlZCBhcyBsb2NhbC48YnIgLz5cbiAgICogRm9yIHdpbGRjYXJkIHN1YmRvbWFpbnMsIHlvdSBjYW4gdXNlOiBgc2V0RG9tYWlucygnLmV4YW1wbGUuY29tJylgOyBvciBgc2V0RG9tYWlucygnKi5leGFtcGxlLmNvbScpO2AuPGJyIC8+XG4gICAqIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IGEgcGF0aCBhbG9uZyBhIGRvbWFpbjogYHNldERvbWFpbnMoJyouZXhhbXBsZS5jb20vc3Vic2l0ZTEnKTtgLlxuICAgKlxuICAgKiBAcGFyYW0gZG9tYWlucyBMaXN0IG9mIGhvc3RuYW1lcyBvciBkb21haW5zLCB3aXRoIG9yIHdpdGhvdXQgcGF0aCwgdG8gYmUgdHJlYXRlZCBhcyBsb2NhbC5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9tYXRvbW8ub3JnL2ZhcS9ob3ctdG8vZmFxXzIzNjU0L3xDcm9zcyBEb21haW4gTGlua2luZ31cbiAgICovXG4gIHNldERvbWFpbnMoZG9tYWluczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldERvbWFpbnMnLCBkb21haW5zXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgcGFnZSdzIHJlcG9ydGVkIFVSTC5cbiAgICpcbiAgICogQHBhcmFtIHVybCBVUkwgdG8gYmUgcmVwb3J0ZWQgZm9yIHRoZSBwYWdlLlxuICAgKi9cbiAgc2V0Q3VzdG9tVXJsKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydzZXRDdXN0b21VcmwnLCB1cmxdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgZGV0ZWN0ZWQgSHR0cC1SZWZlcmVyLlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIFVSTCB0byBiZSByZXBvcnRlZCBmb3IgdGhlIHJlZmVyZXIuXG4gICAqL1xuICBzZXRSZWZlcnJlclVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuX3BhcS5wdXNoKFsnc2V0UmVmZXJyZXJVcmwnLCB1cmxdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgd2Vic2l0ZSBJRC48YnIgLz5cbiAgICogUmVkdW5kYW50OiBjYW4gYmUgc3BlY2lmaWVkIGluIGdldFRyYWNrZXIoKSBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHNpdGVJZCBTaXRlIElEIGZvciB0aGUgdHJhY2tlci5cbiAgICovXG4gIHNldFNpdGVJZChzaXRlSWQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuX3BhcS5wdXNoKFsnc2V0U2l0ZUlkJywgc2l0ZUlkXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBNYXRvbW8gSFRUUCBBUEkgVVJMIGVuZHBvaW50LiBQb2ludHMgdG8gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIG1hdG9tbyxcbiAgICogZS5nLiBodHRwOi8vbWF0b21vLmV4YW1wbGUub3JnLyBvciBodHRwczovL2V4YW1wbGUub3JnL21hdG9tby8uPGJyIC8+XG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgb25seSB1c2VmdWwgd2hlbiB0aGUgJ092ZXJsYXknIHJlcG9ydCBpcyBub3Qgd29ya2luZy48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgeW91IGRvIG5vdCBuZWVkIHRvIHVzZSB0aGlzIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIFVSTCBmb3IgTWF0b21vIEhUVFAgQVBJIGVuZHBvaW50LlxuICAgKi9cbiAgc2V0QXBpVXJsKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydzZXRBcGlVcmwnLCB1cmxdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgTWF0b21vIHNlcnZlciBVUkwuPGJyIC8+XG4gICAqIFJlZHVuZGFudDogY2FuIGJlIHNwZWNpZmllZCBpbiBnZXRUcmFja2VyKCkgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgVVJMIGZvciB0aGUgTWF0b21vIHNlcnZlci5cbiAgICovXG4gIHNldFRyYWNrZXJVcmwodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldFRyYWNrZXJVcmwnLCB1cmxdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIE1hdG9tbyBzZXJ2ZXIgVVJMLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIGZvciB0aGUgTWF0b21vIHNlcnZlciBVUkwuXG4gICAqL1xuICBnZXRQaXdpa1VybCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3cuX3BhcS5wdXNoKFtcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5nZXRQaXdpa1VybCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIF0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCB1cmwgb2YgdGhlIHBhZ2UgdGhhdCBpcyBjdXJyZW50bHkgYmVpbmcgdmlzaXRlZC48YnIgLz5cbiAgICogSWYgYSBjdXN0b20gVVJMIHdhcyBzZXQgYmVmb3JlIGNhbGxpbmcgdGhpcyBtZXRob2QsIHRoZSBjdXN0b20gVVJMIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIFByb21pc2UgZm9yIHRoZSBVUkwgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAgICovXG4gIGdldEN1cnJlbnRVcmwoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2luZG93Ll9wYXEucHVzaChbXG4gICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuZ2V0Q3VycmVudFVybCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIF0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBjbGFzc2VzIHRvIGJlIHRyZWF0ZWQgYXMgZG93bmxvYWRzIChpbiBhZGRpdGlvbiB0byBwaXdpa19kb3dubG9hZCkuXG4gICAqXG4gICAqIEBwYXJhbSBjbGFzc2VzIENsYXNzLCBvciBsaXN0IG9mIGNsYXNzZXMgdG8gYmUgdHJlYXRlZCBhcyBkb3dubG9hZHMuXG4gICAqL1xuICBzZXREb3dubG9hZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nIHwgc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldERvd25sb2FkQ2xhc3NlcycsIGNsYXNzZXNdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgbGlzdCBvZiBmaWxlIGV4dGVuc2lvbnMgdG8gYmUgcmVjb2duaXplZCBhcyBkb3dubG9hZHMuPGJyIC8+XG4gICAqIEV4YW1wbGU6IGAnZG9jeCdgIG9yIGBbJ2RvY3gnLCAneGxzeCddYC5cbiAgICpcbiAgICogQHBhcmFtIGV4dGVuc2lvbnMgRXh0ZW5zaW9uLCBvciBsaXN0IG9mIGV4dGVuc2lvbnMgdG8gYmUgcmVjb2duaXplZCBhcyBkb3dubG9hZHMuXG4gICAqL1xuICBzZXREb3dubG9hZEV4dGVuc2lvbnMoZXh0ZW5zaW9uczogc3RyaW5nIHwgc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldERvd25sb2FkQ2xhc3NlcycsIGV4dGVuc2lvbnNdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYWRkaXRpb25hbCBmaWxlIGV4dGVuc2lvbnMgdG8gYmUgcmVjb2duaXplZCBhcyBkb3dubG9hZHMuPGJyIC8+XG4gICAqIEV4YW1wbGU6IGAnZG9jeCdgIG9yIGBbJ2RvY3gnLCAneGxzeCddYC5cbiAgICpcbiAgICogQHBhcmFtIGV4dGVuc2lvbnMgRXh0ZW5zaW9uLCBvciBsaXN0IG9mIGV4dGVuc2lvbnMgdG8gYmUgcmVjb2duaXplZCBhcyBkb3dubG9hZHMuXG4gICAqL1xuICBhZGREb3dubG9hZEV4dGVuc2lvbnMoZXh0ZW5zaW9uczogc3RyaW5nIHwgc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldERvd25sb2FkQ2xhc3NlcycsIGV4dGVuc2lvbnNdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgZmlsZSBleHRlbnNpb25zIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgbGlzdCBvZiBkb3dubG9hZCBmaWxlIGV4dGVuc2lvbnMuPGJyIC8+XG4gICAqIEV4YW1wbGU6IGAnZG9jeCdgIG9yIGBbJ2RvY3gnLCAneGxzeCddYC5cbiAgICpcbiAgICogQHBhcmFtIGV4dGVuc2lvbnMgRXh0ZW5zaW9uLCBvciBsaXN0IG9mIGV4dGVuc2lvbnMgbm90IHRvIGJlIHJlY29nbml6ZWQgYXMgZG93bmxvYWRzLlxuICAgKi9cbiAgcmVtb3ZlRG93bmxvYWRFeHRlbnNpb25zKGV4dGVuc2lvbnM6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydzZXREb3dubG9hZENsYXNzZXMnLCBleHRlbnNpb25zXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGNsYXNzZXMgdG8gYmUgaWdub3JlZCBpZiBwcmVzZW50IGluIGxpbmsgKGluIGFkZGl0aW9uIHRvIHBpd2lrX2lnbm9yZSkuXG4gICAqXG4gICAqIEBwYXJhbSBjbGFzc2VzIENsYXNzLCBvciBsaXN0IG9mIGNsYXNzZXMgdG8gYmUgaWdub3JlZCBpZiBwcmVzZW50IGluIGxpbmsuXG4gICAqL1xuICBzZXRJZ25vcmVDbGFzc2VzKGNsYXNzZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydzZXREb3dubG9hZENsYXNzZXMnLCBjbGFzc2VzXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY2xhc3NlcyB0byBiZSB0cmVhdGVkIGFzIG91dGxpbmtzIChpbiBhZGRpdGlvbiB0byBwaXdpa19saW5rKS5cbiAgICpcbiAgICogQHBhcmFtIGNsYXNzZXMgQ2xhc3MsIG9yIGxpc3Qgb2YgY2xhc3NlcyB0byBiZSB0cmVhdGVkIGFzIG91dGxpbmtzLlxuICAgKi9cbiAgc2V0TGlua0NsYXNzZXMoY2xhc3Nlczogc3RyaW5nIHwgc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldERvd25sb2FkQ2xhc3NlcycsIGNsYXNzZXNdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkZWxheSBmb3IgbGluayB0cmFja2luZyAoaW4gbWlsbGlzZWNvbmRzKS5cbiAgICpcbiAgICogQHBhcmFtIGRlbGF5IERlbGF5LCBpbiBtaWxsaXNlY29uZHMsIGZvciBsaW5rIHRyYWNraW5nLlxuICAgKi9cbiAgc2V0TGlua1RyYWNraW5nVGltZXIoZGVsYXk6IG51bWJlcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuX3BhcS5wdXNoKFsnc2V0TGlua1RyYWNraW5nVGltZXInLCBkZWxheV0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBkZWxheSBmb3IgbGluayB0cmFja2luZy5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSBmb3IgdGhlIGRlbGF5IGluIG1pbGxpc2Vjb25kcy5cbiAgICovXG4gIGdldExpbmtUcmFja2luZ1RpbWVyKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvdy5fcGFxLnB1c2goW1xuICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmdldExpbmtUcmFja2luZ1RpbWVyKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byBub3QgcmVjb3JkIHRoZSBoYXNoIHRhZyAoYW5jaG9yKSBwb3J0aW9uIG9mIFVSTHMuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBJZiB0cnVlLCB0aGUgaGFzaCB0YWcgcG9ydGlvbiBvZiB0aGUgVVJMcyB3b24ndCBiZSByZWNvcmRlZC5cbiAgICovXG4gIGRpc2NhcmRIYXNoVGFnKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydkaXNjYXJkSGFzaFRhZycsIHZhbHVlXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IE1hdG9tbyB1c2VzIHRoZSBicm93c2VyIERPTSBUaW1pbmcgQVBJIHRvIGFjY3VyYXRlbHkgZGV0ZXJtaW5lIHRoZSB0aW1lIGl0IHRha2VzIHRvIGdlbmVyYXRlIGFuZCBkb3dubG9hZFxuICAgKiB0aGUgcGFnZS4gWW91IG1heSBvdmVyd3JpdGUgdGhpcyB2YWx1ZSB3aXRoIHRoaXMgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSBnZW5lcmF0aW9uVGltZSBUaW1lLCBpbiBtaWxsaXNlY29uZHMsIG9mIHRoZSBwYWdlIGdlbmVyYXRpb24uXG4gICAqL1xuICBzZXRHZW5lcmF0aW9uVGltZU1zKGdlbmVyYXRpb25UaW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldEdlbmVyYXRpb25UaW1lTXMnLCBnZW5lcmF0aW9uVGltZV0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGN1c3RvbSBzdHJpbmcgdG8gdGhlIGVuZCBvZiB0aGUgSFRUUCByZXF1ZXN0IHRvIHBpd2lrLnBocC5cbiAgICpcbiAgICogQHBhcmFtIGFwcGVuZFRvVXJsIFN0cmluZyB0byBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgSFRUUCByZXF1ZXN0IHRvIHBpd2lrLnBocC9tYXRvbW8ucGhwLlxuICAgKi9cbiAgYXBwZW5kVG9UcmFja2luZ1VybChhcHBlbmRUb1VybDogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydhcHBlbmRUb1RyYWNraW5nVXJsJywgYXBwZW5kVG9VcmxdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIG5vdCB0cmFjayB1c2VycyB3aG8gb3B0IG91dCBvZiB0cmFja2luZyB1c2luZyBNb3ppbGxhJ3MgKHByb3Bvc2VkKSBEbyBOb3QgVHJhY2sgc2V0dGluZy5cbiAgICpcbiAgICogQHBhcmFtIGRvTm90VHJhY2sgSWYgdHJ1ZSwgdXNlcnMgd2hvIG9wdGVkIGZvciBEbyBOb3QgVHJhY2sgaW4gdGhlaXIgc2V0dGluZ3Mgd29uJ3QgYmUgdHJhY2tlZC5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSL3RyYWNraW5nLWRudC99XG4gICAqL1xuICBzZXREb05vdFRyYWNrKGRvTm90VHJhY2s6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldERvTm90VHJhY2snLCBkb05vdFRyYWNrXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIGEgZnJhbWUtYnVzdGVyIHRvIHByZXZlbnQgdGhlIHRyYWNrZWQgd2ViIHBhZ2UgZnJvbSBiZWluZyBmcmFtZWQvaWZyYW1lZC5cbiAgICovXG4gIGtpbGxGcmFtZSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ2tpbGxGcmFtZSddKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNlcyB0aGUgYnJvd3NlciB0byBsb2FkIHRoZSBsaXZlIFVSTCBpZiB0aGUgdHJhY2tlZCB3ZWIgcGFnZSBpcyBsb2FkZWQgZnJvbSBhIGxvY2FsIGZpbGVcbiAgICogKGUuZy4sIHNhdmVkIHRvIHNvbWVvbmUncyBkZXNrdG9wKS5cbiAgICpcbiAgICogQHBhcmFtIHVybCBVUkwgdG8gdHJhY2sgaW5zdGVhZCBvZiBmaWxlOi8vIFVSTHMuXG4gICAqL1xuICByZWRpcmVjdEZpbGUodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3JlZGlyZWN0RmlsZScsIHVybF0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVjb3JkcyBob3cgbG9uZyB0aGUgcGFnZSBoYXMgYmVlbiB2aWV3ZWQgaWYgdGhlIG1pbmltdW1WaXNpdExlbmd0aCBpcyBhdHRhaW5lZDtcbiAgICogdGhlIGhlYXJ0QmVhdERlbGF5IGRldGVybWluZXMgaG93IGZyZXF1ZW50bHkgdG8gdXBkYXRlIHRoZSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSBtaW5pbXVtVmlzaXRMZW5ndGggRHVyYXRpb24gYmVmb3JlIG5vdGlmeWluZyB0aGUgc2VydmVyIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHZpc2l0IHRvIGEgcGFnZS5cbiAgICogQHBhcmFtIGhlYXJ0QmVhdERlbGF5IERlbGF5LCBpbiBzZWNvbmRzLCBiZXR3ZWVuIHR3byB1cGRhdGVzIHRvIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBzZXRIZWFydEJlYXRUaW1lcihtaW5pbXVtVmlzaXRMZW5ndGg6IG51bWJlciwgaGVhcnRCZWF0RGVsYXk6IG51bWJlcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuX3BhcS5wdXNoKFsnc2V0SGVhcnRCZWF0VGltZXInLCBtaW5pbXVtVmlzaXRMZW5ndGgsIGhlYXJ0QmVhdERlbGF5XSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSAxNiBjaGFyYWN0ZXJzIElEIGZvciB0aGUgdmlzaXRvci5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSBmb3IgdGhlIHRoZSAxNiBjaGFyYWN0ZXJzIElEIGZvciB0aGUgdmlzaXRvci5cbiAgICovXG4gIGdldFZpc2l0b3JJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3cuX3BhcS5wdXNoKFtcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5nZXRWaXNpdG9ySWQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICBdKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZpc2l0b3IgY29va2llIGNvbnRlbnRzIGluIGFuIGFycmF5LlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIGZvciB0aGUgY29va2llIGNvbnRlbnRzIGluIGFuIGFycmF5LlxuICAgKi9cbiAgZ2V0VmlzaXRvckluZm8oKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3cuX3BhcS5wdXNoKFtcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5nZXRWaXNpdG9ySW5mbygpKTtcbiAgICAgICAgICB9XG4gICAgICAgIF0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmlzaXRvciBhdHRyaWJ1dGlvbiBhcnJheSAoUmVmZXJlciBpbmZvcm1hdGlvbiBhbmQvb3IgQ2FtcGFpZ24gbmFtZSAmIGtleXdvcmQpLjxiciAvPlxuICAgKiBBdHRyaWJ1dGlvbiBpbmZvcm1hdGlvbiBpcyB1c2VkIGJ5IE1hdG9tbyB0byBjcmVkaXQgdGhlIGNvcnJlY3QgcmVmZXJyZXIgKGZpcnN0IG9yIGxhc3QgcmVmZXJyZXIpXG4gICAqIHVzZWQgd2hlbiBhIHVzZXIgdHJpZ2dlcnMgYSBnb2FsIGNvbnZlcnNpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIFByb21pc2UgZm9yIHRoZSB2aXNpdG9yIGF0dHJpYnV0aW9uIGFycmF5IChSZWZlcmVyIGluZm9ybWF0aW9uIGFuZC9vciBDYW1wYWlnbiBuYW1lICYga2V5d29yZCkuXG4gICAqL1xuICBnZXRBdHRyaWJ1dGlvbkluZm8oKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3cuX3BhcS5wdXNoKFtcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5nZXRBdHRyaWJ1dGlvbkluZm8oKSk7XG4gICAgICAgICAgfVxuICAgICAgICBdKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGF0dHJpYnV0aW9uIGNhbXBhaWduIG5hbWUuXG4gICAqXG4gICAqIEByZXR1cm5zIFByb21pc2UgZm9yIHRoZSB0aGUgYXR0cmlidXRpb24gY2FtcGFpZ24gbmFtZS5cbiAgICovXG4gIGdldEF0dHJpYnV0aW9uQ2FtcGFpZ25OYW1lKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvdy5fcGFxLnB1c2goW1xuICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmdldEF0dHJpYnV0aW9uQ2FtcGFpZ25OYW1lKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhdHRyaWJ1dGlvbiBjYW1wYWlnbiBrZXl3b3JkLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIGZvciB0aGUgYXR0cmlidXRpb24gY2FtcGFpZ24ga2V5d29yZC5cbiAgICovXG4gIGdldEF0dHJpYnV0aW9uQ2FtcGFpZ25LZXl3b3JkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvdy5fcGFxLnB1c2goW1xuICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmdldEF0dHJpYnV0aW9uQ2FtcGFpZ25LZXl3b3JkKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhdHRyaWJ1dGlvbiByZWZlcnJlciB0aW1lc3RhbXAuXG4gICAqXG4gICAqIEByZXR1cm5zIFByb21pc2UgZm9yIHRoZSBhdHRyaWJ1dGlvbiByZWZlcnJlciB0aW1lc3RhbXAgKGFzIHN0cmluZykuXG4gICAqL1xuICBnZXRBdHRyaWJ1dGlvblJlZmVycmVyVGltZXN0YW1wKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvdy5fcGFxLnB1c2goW1xuICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmdldEF0dHJpYnV0aW9uUmVmZXJyZXJUaW1lc3RhbXAoKSk7XG4gICAgICAgICAgfVxuICAgICAgICBdKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGF0dHJpYnV0aW9uIHJlZmVycmVyIFVSTC5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSBmb3IgdGhlIGF0dHJpYnV0aW9uIHJlZmVycmVyIFVSTFxuICAgKi9cbiAgZ2V0QXR0cmlidXRpb25SZWZlcnJlclVybCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3cuX3BhcS5wdXNoKFtcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5nZXRBdHRyaWJ1dGlvblJlZmVycmVyVXJsKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBVc2VyIElEIHN0cmluZyBpZiBpdCB3YXMgc2V0LlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIGZvciB0aGUgVXNlciBJRCBmb3IgdGhlIHZpc2l0b3IuXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbWF0b21vLm9yZy9kb2NzL3VzZXItaWQvfE1hdG9tbyBVc2VyIElEfVxuICAgKi9cbiAgZ2V0VXNlcklkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvdy5fcGFxLnB1c2goW1xuICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmdldFVzZXJJZCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIF0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIFVzZXIgSUQgdG8gdGhpcyB1c2VyIChzdWNoIGFzIGFuIGVtYWlsIGFkZHJlc3Mgb3IgYSB1c2VybmFtZSkuXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWQgVXNlciBJRCB0byBzZXQgZm9yIHRoZSBjdXJyZW50IHZpc2l0b3IuXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbWF0b21vLm9yZy9kb2NzL3VzZXItaWQvfE1hdG9tbyBVc2VyIElEfVxuICAgKi9cbiAgc2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydzZXRVc2VySWQnLCB1c2VySWRdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgVXNlciBJRCB3aGljaCBhbHNvIGdlbmVyYXRlcyBhIG5ldyBWaXNpdG9yIElELlxuICAgKlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL21hdG9tby5vcmcvZG9jcy91c2VyLWlkL3xNYXRvbW8gVXNlciBJRH1cbiAgICovXG4gIHJlc2V0VXNlcklkKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuX3BhcS5wdXNoKFsncmVzZXRVc2VySWQnXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgY3VzdG9tIHZhcmlhYmxlLlxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXggSW5kZXgsIHRoZSBudW1iZXIgZnJvbSAxIHRvIDUgd2hlcmUgdGhpcyBjdXN0b20gdmFyaWFibGUgbmFtZSBpcyBzdG9yZWQgZm9yIHRoZSBjdXJyZW50IHBhZ2Ugdmlldy5cbiAgICogQHBhcmFtIG5hbWUgTmFtZSwgdGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlLCBmb3IgZXhhbXBsZTogQ2F0ZWdvcnksIFN1Yi1jYXRlZ29yeSwgVXNlclR5cGUuXG4gICAqIEBwYXJhbSB2YWx1ZSBWYWx1ZSwgZm9yIGV4YW1wbGU6IFwiU3BvcnRzXCIsIFwiTmV3c1wiLCBcIldvcmxkXCIsIFwiQnVzaW5lc3NcIuKAplxuICAgKiBAcGFyYW0gc2NvcGUgU2NvcGUgb2YgdGhlIGN1c3RvbSB2YXJpYWJsZTo8YnIgLz5cbiAgICogLSBcInBhZ2VcIiBtZWFucyB0aGUgY3VzdG9tIHZhcmlhYmxlIGFwcGxpZXMgdG8gdGhlIGN1cnJlbnQgcGFnZSB2aWV3LlxuICAgKiAtIFwidmlzaXRcIiBtZWFucyB0aGUgY3VzdG9tIHZhcmlhYmxlIGFwcGxpZXMgdG8gdGhlIGN1cnJlbnQgdmlzaXRvci5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9tYXRvbW8ub3JnL2RvY3MvY3VzdG9tLXZhcmlhYmxlcy98Q3VzdG9tIFZhcmlhYmxlc31cbiAgICovXG4gIHNldEN1c3RvbVZhcmlhYmxlKGluZGV4OiBudW1iZXIsIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgc2NvcGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuX3BhcS5wdXNoKFsnc2V0Q3VzdG9tVmFyaWFibGUnLCBpbmRleCwgbmFtZSwgdmFsdWUsIHNjb3BlXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY3VzdG9tIHZhcmlhYmxlLlxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgdGhlIGN1c3RvbSB2YXJpYWJsZSB0byBkZWxldGUuXG4gICAqIEBwYXJhbSBzY29wZSBTY29wZSBvZiB0aGUgY3VzdG9tIHZhcmlhYmxlIHRvIGRlbGV0ZS5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9tYXRvbW8ub3JnL2RvY3MvY3VzdG9tLXZhcmlhYmxlcy98Q3VzdG9tIFZhcmlhYmxlc31cbiAgICovXG4gIGRlbGV0ZUN1c3RvbVZhcmlhYmxlKGluZGV4OiBudW1iZXIsIHNjb3BlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ2RlbGV0ZUN1c3RvbVZhcmlhYmxlJywgaW5kZXgsIHNjb3BlXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGFsbCBjdXN0b20gdmFyaWFibGVzLlxuICAgKlxuICAgKiBAcGFyYW0gc2NvcGUgU2NvcGUgb2YgdGhlIGN1c3RvbSB2YXJpYWJsZXMgdG8gZGVsZXRlLlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL21hdG9tby5vcmcvZG9jcy9jdXN0b20tdmFyaWFibGVzL3xDdXN0b20gVmFyaWFibGVzfVxuICAgKi9cbiAgZGVsZXRlQ3VzdG9tVmFyaWFibGVzKHNjb3BlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ2RlbGV0ZUN1c3RvbVZhcmlhYmxlcycsIHNjb3BlXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYSBjdXN0b20gdmFyaWFibGUuXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgY3VzdG9tIHZhcmlhYmxlIHRvIHJldHJpZXZlLlxuICAgKiBAcGFyYW0gc2NvcGUgU2NvcGUgb2YgdGhlIGN1c3RvbSB2YXJpYWJsZSB0byByZXRyaWV2ZS5cbiAgICogQHJldHVybnMgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mIGN1c3RvbSB2YXJpYWJsZS5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9tYXRvbW8ub3JnL2RvY3MvY3VzdG9tLXZhcmlhYmxlcy98Q3VzdG9tIFZhcmlhYmxlc31cbiAgICovXG4gIGdldEN1c3RvbVZhcmlhYmxlKGluZGV4OiBudW1iZXIsIHNjb3BlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3cuX3BhcS5wdXNoKFtcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5nZXRDdXN0b21WYXJpYWJsZShpbmRleCwgc2NvcGUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIF0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBjYWxsZWQgdGhlbiB0aGUgQ3VzdG9tIFZhcmlhYmxlcyBvZiBzY29wZSBcInZpc2l0XCIgd2lsbCBiZSBzdG9yZWQgKHBlcnNpc3RlZCkgaW4gYSBmaXJzdCBwYXJ0eSBjb29raWVcbiAgICogZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgdmlzaXQuPGJyIC8+XG4gICAqIFRoaXMgaXMgdXNlZnVsIGlmIHlvdSB3YW50IHRvIGNhbGwgZ2V0Q3VzdG9tVmFyaWFibGUgbGF0ZXIgaW4gdGhlIHZpc2l0LjxiciAvPlxuICAgKiAoYnkgZGVmYXVsdCBjdXN0b20gdmFyaWFibGVzIGFyZSBub3Qgc3RvcmVkIG9uIHRoZSB2aXNpdG9yJ3MgY29tcHV0ZXIuKVxuICAgKlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL21hdG9tby5vcmcvZG9jcy9jdXN0b20tdmFyaWFibGVzL3xDdXN0b20gVmFyaWFibGVzfVxuICAgKi9cbiAgc3RvcmVDdXN0b21WYXJpYWJsZXNJbkNvb2tpZSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3N0b3JlQ3VzdG9tVmFyaWFibGVzSW5Db29raWUnXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgY3VzdG9tIGRpbWVuc2lvbi48YnIgLz5cbiAgICogKHJlcXVpcmVzIE1hdG9tbyAyLjE1LjEgKyBDdXN0b20gRGltZW5zaW9ucyBwbHVnaW4pXG4gICAqXG4gICAqIEBwYXJhbSBjdXN0b21EaW1lbnNpb25JZCBJRCBvZiB0aGUgY3VzdG9tIGRpbWVuc2lvbiB0byBzZXQuXG4gICAqIEBwYXJhbSBjdXN0b21EaW1lbnNpb25WYWx1ZSBWYWx1ZSB0byBiZSBzZXQuXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vcGx1Z2lucy5waXdpay5vcmcvQ3VzdG9tRGltZW5zaW9uc3xDdXN0b20gRGltZW5zaW9uc31cbiAgICovXG4gIHNldEN1c3RvbURpbWVuc2lvbihjdXN0b21EaW1lbnNpb25JZDogbnVtYmVyLCBjdXN0b21EaW1lbnNpb25WYWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydzZXRDdXN0b21EaW1lbnNpb24nLCBjdXN0b21EaW1lbnNpb25JZCwgY3VzdG9tRGltZW5zaW9uVmFsdWVdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjdXN0b20gZGltZW5zaW9uLjxiciAvPlxuICAgKiAocmVxdWlyZXMgTWF0b21vIDIuMTUuMSArIEN1c3RvbSBEaW1lbnNpb25zIHBsdWdpbilcbiAgICpcbiAgICogQHBhcmFtIGN1c3RvbURpbWVuc2lvbklkIElEIG9mIHRoZSBjdXN0b20gZGltZW5zaW9uIHRvIGRlbGV0ZS5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9wbHVnaW5zLnBpd2lrLm9yZy9DdXN0b21EaW1lbnNpb25zfEN1c3RvbSBEaW1lbnNpb25zfVxuICAgKi9cbiAgZGVsZXRlQ3VzdG9tRGltZW5zaW9uKGN1c3RvbURpbWVuc2lvbklkOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ2RlbGV0ZUN1c3RvbURpbWVuc2lvbicsIGN1c3RvbURpbWVuc2lvbklkXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhIGN1c3RvbSBkaW1lbnNpb24uPGJyIC8+XG4gICAqIChyZXF1aXJlcyBNYXRvbW8gMi4xNS4xICsgQ3VzdG9tIERpbWVuc2lvbnMgcGx1Z2luKVxuICAgKlxuICAgKiBAcGFyYW0gY3VzdG9tRGltZW5zaW9uSWQgSUQgb2YgdGhlIGN1c3RvbSBkaW1lbnNpb24gdG8gcmV0cmlldmUuXG4gICAqIEByZXR1cm5zIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCBjdXN0b20gZGltZW5zaW9uLlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL3BsdWdpbnMucGl3aWsub3JnL0N1c3RvbURpbWVuc2lvbnN8Q3VzdG9tIERpbWVuc2lvbnN9XG4gICAqL1xuICBnZXRDdXN0b21EaW1lbnNpb24oY3VzdG9tRGltZW5zaW9uSWQ6IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvdy5fcGFxLnB1c2goW1xuICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmdldEN1c3RvbURpbWVuc2lvbihjdXN0b21EaW1lbnNpb25JZCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGNhbXBhaWduIG5hbWUgcGFyYW1ldGVyKHMpLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBjYW1wYWlnblxuICAgKiBAc2VlIHtAbGluayBodHRwczovL21hdG9tby5vcmcvZG9jcy90cmFja2luZy1jYW1wYWlnbnMvfENhbXBhaWduc31cbiAgICovXG4gIHNldENhbXBhaWduTmFtZUtleShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldENhbXBhaWduTmFtZUtleScsIG5hbWVdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY2FtcGFpZ24ga2V5d29yZCBwYXJhbWV0ZXIocykuXG4gICAqXG4gICAqIEBwYXJhbSBrZXl3b3JkIEtleXdvcmQgcGFyYW1ldGVyKHMpIG9mIHRoZSBjYW1wYWlnbi5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9tYXRvbW8ub3JnL2RvY3MvdHJhY2tpbmctY2FtcGFpZ25zL3xDYW1wYWlnbnN9XG4gICAqL1xuICBzZXRDYW1wYWlnbktleXdvcmRLZXkoa2V5d29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydzZXRDYW1wYWlnbktleXdvcmRLZXknLCBrZXl3b3JkXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byBhdHRyaWJ1dGUgYSBjb252ZXJzaW9uIHRvIHRoZSBmaXJzdCByZWZlcnJlci48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgY29udmVyc2lvbiBpcyBhdHRyaWJ1dGVkIHRvIHRoZSBtb3N0IHJlY2VudCByZWZlcnJlci5cbiAgICpcbiAgICogQHBhcmFtIGNvbnZlcnNpb25Ub0ZpcnN0UmVmZXJyZXIgSWYgdHJ1ZSwgTWF0b21vIHdpbGwgYXR0cmlidXRlIHRoZSBHb2FsIGNvbnZlcnNpb24gdG8gdGhlIGZpcnN0IHJlZmVycmVyIHVzZWRcbiAgICogaW5zdGVhZCBvZiB0aGUgbGFzdCBvbmUuXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbWF0b21vLm9yZy9kb2NzL3RyYWNraW5nLWNhbXBhaWducy98Q2FtcGFpZ25zfVxuICAgKiBAc2VlIHtAbGluayBodHRwczovL21hdG9tby5vcmcvZmFxL2dlbmVyYWwvZmFxXzEwNi8jZmFxXzEwNnxDb252ZXJzaW9ucyB0byB0aGUgZmlyc3QgcmVmZXJyZXJ9XG4gICAqL1xuICBzZXRDb252ZXJzaW9uQXR0cmlidXRpb25GaXJzdFJlZmVycmVyKGNvbnZlcnNpb25Ub0ZpcnN0UmVmZXJyZXI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldENvbnZlcnNpb25BdHRyaWJ1dGlvbkZpcnN0UmVmZXJyZXInLCBjb252ZXJzaW9uVG9GaXJzdFJlZmVycmVyXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHBhZ2UgdmlldyBhcyBhIHByb2R1Y3Qgb3IgY2F0ZWdvcnkgcGFnZSB2aWV3LjxiciAvPlxuICAgKiBXaGVuIHlvdSBjYWxsIHNldEVjb21tZXJjZVZpZXcsIGl0IG11c3QgYmUgZm9sbG93ZWQgYnkgYSBjYWxsIHRvIHRyYWNrUGFnZVZpZXcgdG8gcmVjb3JkIHRoZSBwcm9kdWN0IG9yIGNhdGVnb3J5IHBhZ2Ugdmlldy5cbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RTS1UgU0tVIG9mIHRoZSB2aWV3ZWQgcHJvZHVjdC5cbiAgICogQHBhcmFtIHByb2R1Y3ROYW1lIE5hbWUgb2YgdGhlIHZpZXdlZCBwcm9kdWN0LlxuICAgKiBAcGFyYW0gcHJvZHVjdENhdGVnb3J5IENhdGVnb3J5IG9mIHRoZSB2aWV3ZWQgcHJvZHVjdC5cbiAgICogQHBhcmFtIHByaWNlIFByaWNlIG9mIHRoZSB2aWV3ZWQgcHJvZHVjdC5cbiAgICovXG4gIHNldEVjb21tZXJjZVZpZXcoXG4gICAgcHJvZHVjdFNLVTogc3RyaW5nLFxuICAgIHByb2R1Y3ROYW1lOiBzdHJpbmcsXG4gICAgcHJvZHVjdENhdGVnb3J5OiBzdHJpbmcsXG4gICAgcHJpY2U6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldEVjb21tZXJjZVZpZXcnLCBwcm9kdWN0U0tVLCBwcm9kdWN0TmFtZSwgcHJvZHVjdENhdGVnb3J5LCBwcmljZV0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHByb2R1Y3QgaW50byB0aGUgZUNvbW1lcmNlIG9yZGVyLjxiciAvPlxuICAgKiBNdXN0IGJlIGNhbGxlZCBmb3IgZWFjaCBwcm9kdWN0IGluIHRoZSBvcmRlci5cbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RTS1UgU0tVIG9mIHRoZSBwcm9kdWN0IHRvIGFkZC5cbiAgICogQHBhcmFtIFtwcm9kdWN0TmFtZV0gT3B0aW9uYWwgbmFtZSBvZiB0aGUgcHJvZHVjdCB0byBhZGQuXG4gICAqIEBwYXJhbSBbcHJvZHVjdENhdGVnb3J5XSBPcHRpb25hbCBjYXRlZ29yeSBvZiB0aGUgcHJvZHVjdCB0byBhZGQuXG4gICAqIEBwYXJhbSBbcHJpY2VdIE9wdGlvbmFsIHByaWNlIG9mIHRoZSBwcm9kdWN0IHRvIGFkZC5cbiAgICogQHBhcmFtIFtxdWFudGl0eV0gT3B0aW9uYWwgcXVhbnRpdHkgb2YgdGhlIHByb2R1Y3QgdG8gYWRkLlxuICAgKi9cbiAgYWRkRWNvbW1lcmNlSXRlbShcbiAgICBwcm9kdWN0U0tVOiBzdHJpbmcsXG4gICAgcHJvZHVjdE5hbWU/OiBzdHJpbmcsXG4gICAgcHJvZHVjdENhdGVnb3J5Pzogc3RyaW5nLFxuICAgIHByaWNlPzogbnVtYmVyLFxuICAgIHF1YW50aXR5PzogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhcmdzOiBhbnlbXSA9IFtwcm9kdWN0U0tVXTtcbiAgICAgIGlmICghIXByb2R1Y3ROYW1lKSB7XG4gICAgICAgIGFyZ3MucHVzaChwcm9kdWN0TmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoISFwcm9kdWN0Q2F0ZWdvcnkpIHtcbiAgICAgICAgYXJncy5wdXNoKHByb2R1Y3RDYXRlZ29yeSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHByaWNlID09PSAnbnVtYmVyJykge1xuICAgICAgICBhcmdzLnB1c2gocHJpY2UpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBxdWFudGl0eSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYXJncy5wdXNoKHF1YW50aXR5KTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydhZGRFY29tbWVyY2VJdGVtJywgLi4uYXJnc10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIGEgc2hvcHBpbmcgY2FydC48YnIgLz5cbiAgICogQ2FsbCB0aGlzIGphdmFzY3JpcHQgZnVuY3Rpb24gZXZlcnkgdGltZSBhIHVzZXIgaXMgYWRkaW5nLCB1cGRhdGluZyBvciBkZWxldGluZyBhIHByb2R1Y3QgZnJvbSB0aGUgY2FydC5cbiAgICpcbiAgICogQHBhcmFtIGdyYW5kVG90YWwgR3JhbmQgdG90YWwgb2YgdGhlIHNob3BwaW5nIGNhcnQuXG4gICAqL1xuICB0cmFja0Vjb21tZXJjZUNhcnRVcGRhdGUoZ3JhbmRUb3RhbDogbnVtYmVyKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWyd0cmFja0Vjb21tZXJjZUNhcnRVcGRhdGUnLCBncmFuZFRvdGFsXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFja3MgYW4gRWNvbW1lcmNlIG9yZGVyLCBpbmNsdWRpbmcgYW55IGVDb21tZXJjZSBpdGVtIHByZXZpb3VzbHkgYWRkZWQgdG8gdGhlIG9yZGVyLjxiciAvPlxuICAgKiBvcmRlcklkIGFuZCBncmFuZFRvdGFsIChpZS5yZXZlbnVlKSBhcmUgcmVxdWlyZWQgcGFyYW1ldGVycy5cbiAgICpcbiAgICogQHBhcmFtIG9yZGVySWQgSUQgb2YgdGhlIHRyYWNrZWQgb3JkZXIuXG4gICAqIEBwYXJhbSBncmFuZFRvdGFsIEdyYW5kIHRvdGFsIG9mIHRoZSB0cmFja2VkIG9yZGVyLlxuICAgKiBAcGFyYW0gW3N1YlRvdGFsXSBTdWIgdG90YWwgb2YgdGhlIHRyYWNrZWQgb3JkZXIuXG4gICAqIEBwYXJhbSBbdGF4XSBUYXhlcyBmb3IgdGhlIHRyYWNrZWQgb3JkZXIuXG4gICAqIEBwYXJhbSBbc2hpcHBpbmddIFNoaXBwaW5nIGZlZXMgZm9yIHRoZSB0cmFja2VkIG9yZGVyLlxuICAgKiBAcGFyYW0gW2Rpc2NvdW50XSBEaXNjb3VudCBncmFudGVkIGZvciB0aGUgdHJhY2tlZCBvcmRlci5cbiAgICovXG4gIHRyYWNrRWNvbW1lcmNlT3JkZXIoXG4gICAgb3JkZXJJZDogc3RyaW5nLFxuICAgIGdyYW5kVG90YWw6IG51bWJlcixcbiAgICBzdWJUb3RhbD86IG51bWJlcixcbiAgICB0YXg/OiBudW1iZXIsXG4gICAgc2hpcHBpbmc/OiBudW1iZXIsXG4gICAgZGlzY291bnQ/OiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFyZ3M6IGFueVtdID0gW29yZGVySWQsIGdyYW5kVG90YWxdO1xuICAgICAgaWYgKHR5cGVvZiBzdWJUb3RhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYXJncy5wdXNoKHN1YlRvdGFsKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGF4ID09PSAnbnVtYmVyJykge1xuICAgICAgICBhcmdzLnB1c2godGF4KTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygc2hpcHBpbmcgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGFyZ3MucHVzaChzaGlwcGluZyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGRpc2NvdW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICBhcmdzLnB1c2goZGlzY291bnQpO1xuICAgICAgfVxuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3RyYWNrRWNvbW1lcmNlT3JkZXInLCAuLi5hcmdzXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyBhbGwgZmlyc3QgcGFydHkgY29va2llcy48YnIgLz5cbiAgICogRXhpc3RpbmcgTWF0b21vIGNvb2tpZXMgZm9yIHRoaXMgd2Vic2l0ZXMgd2lsbCBiZSBkZWxldGVkIG9uIHRoZSBuZXh0IHBhZ2Ugdmlldy5cbiAgICovXG4gIGRpc2FibGVDb29raWVzKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuX3BhcS5wdXNoKFsnZGlzYWJsZUNvb2tpZXMnXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIHRoZSB0cmFja2luZyBjb29raWVzIGN1cnJlbnRseSBzZXQgKHVzZWZ1bCB3aGVuIGNyZWF0aW5nIG5ldyB2aXNpdHMpLlxuICAgKi9cbiAgZGVsZXRlQ29va2llcygpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ2RlbGV0ZUNvb2tpZXMnXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgY29va2llcyBhcmUgZW5hYmxlZCBhbmQgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3Nlci5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSBmb3IgdGhlIHN1cHBvcnQgYW5kIGFjdGl2YXRpb24gb2YgY29va2llcy5cbiAgICovXG4gIGhhc0Nvb2tpZXMoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvdy5fcGFxLnB1c2goW1xuICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmhhc0Nvb2tpZXMoKSk7XG4gICAgICAgICAgfVxuICAgICAgICBdKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRyYWNraW5nIGNvb2tpZSBuYW1lIHByZWZpeC48YnIgLz5cbiAgICogRGVmYXVsdCBwcmVmaXggaXMgJ3BrJy5cbiAgICpcbiAgICogQHBhcmFtIHByZWZpeCBQcmVmaXggZm9yIHRoZSB0cmFja2luZyBjb29raWUgbmFtZXMuXG4gICAqL1xuICBzZXRDb29raWVOYW1lUHJlZml4KHByZWZpeDogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydzZXRDb29raWVOYW1lUHJlZml4JywgcHJlZml4XSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkb21haW4gb2YgdGhlIHRyYWNraW5nIGNvb2tpZXMuPGJyIC8+XG4gICAqIERlZmF1bHQgaXMgdGhlIGRvY3VtZW50IGRvbWFpbi48YnIgLz5cbiAgICogSWYgeW91ciB3ZWJzaXRlIGNhbiBiZSB2aXNpdGVkIGF0IGJvdGggd3d3LmV4YW1wbGUuY29tIGFuZCBleGFtcGxlLmNvbSwgeW91IHdvdWxkIHVzZTogYCcuZXhhbXBsZS5jb20nYCBvciBgJyouZXhhbXBsZS5jb20nYC5cbiAgICpcbiAgICogQHBhcmFtIGRvbWFpbiBEb21haW4gb2YgdGhlIHRyYWNraW5nIGNvb2tpZXMuXG4gICAqL1xuICBzZXRDb29raWVEb21haW4oZG9tYWluOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldENvb2tpZURvbWFpbicsIGRvbWFpbl0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcGF0aCBvZiB0aGUgdHJhY2tpbmcgY29va2llcy48YnIgLz5cbiAgICogRGVmYXVsdCBpcyAnLycuXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIFBhdGggb2YgdGhlIHRyYWNraW5nIGNvb2tpZXMuXG4gICAqL1xuICBzZXRDb29raWVQYXRoKHBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuX3BhcS5wdXNoKFsnc2V0Q29va2llUGF0aCcsIHBhdGhdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIGVuYWJsZSB0aGUgU2VjdXJlIGNvb2tpZSBmbGFnIG9uIGFsbCBmaXJzdCBwYXJ0eSBjb29raWVzLjxiciAvPlxuICAgKiBUaGlzIHNob3VsZCBiZSB1c2VkIHdoZW4geW91ciB3ZWJzaXRlIGlzIG9ubHkgYXZhaWxhYmxlIHVuZGVyIEhUVFBTIHNvIHRoYXQgYWxsIHRyYWNraW5nIGNvb2tpZXMgYXJlIGFsd2F5cyBzZW50XG4gICAqIG92ZXIgc2VjdXJlIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSBzZWN1cmUgSWYgdHJ1ZSwgdGhlIHNlY3VyZSBjb29raWUgZmxhZyB3aWxsIGJlIHNldCBvbiBhbGwgZmlyc3QgcGFydHkgY29va2llcy5cbiAgICovXG4gIHNldFNlY3VyZUNvb2tpZShzZWN1cmU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldFNlY3VyZUNvb2tpZScsIHNlY3VyZV0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmlzaXRvciBjb29raWUgdGltZW91dC48YnIgLz5cbiAgICogRGVmYXVsdCBpcyAxMyBtb250aHMuXG4gICAqXG4gICAqIEBwYXJhbSB0aW1lb3V0IFRpbWVvdXQsIGluIHNlY29uZHMsIGZvciB0aGUgdmlzaXRvciBjb29raWUgdGltZW91dC5cbiAgICovXG4gIHNldFZpc2l0b3JDb29raWVUaW1lb3V0KHRpbWVvdXQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuX3BhcS5wdXNoKFsnc2V0VmlzaXRvckNvb2tpZVRpbWVvdXQnLCB0aW1lb3V0XSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSByZWZlcnJhbCBjb29raWUgdGltZW91dC48YnIgLz5cbiAgICogRGVmYXVsdCBpcyA2IG1vbnRocy5cbiAgICpcbiAgICogQHBhcmFtIHRpbWVvdXQgVGltZW91dCwgaW4gc2Vjb25kcywgZm9yIHRoZSByZWZlcnJhbCBjb29raWUgdGltZW91dC5cbiAgICovXG4gIHNldFJlZmVycmFsQ29va2llVGltZW91dCh0aW1lb3V0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldFJlZmVycmFsQ29va2llVGltZW91dCcsIHRpbWVvdXRdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNlc3Npb24gY29va2llIHRpbWVvdXQuPGJyIC8+XG4gICAqIERlZmF1bHQgaXMgMzAgbWludXRlcy5cbiAgICpcbiAgICogQHBhcmFtIHRpbWVvdXQgVGltZW91dCwgaW4gc2Vjb25kcywgZm9yIHRoZSBzZXNzaW9uIGNvb2tpZSB0aW1lb3V0LlxuICAgKi9cbiAgc2V0U2Vzc2lvbkNvb2tpZVRpbWVvdXQodGltZW91dDogbnVtYmVyKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydzZXRTZXNzaW9uQ29va2llVGltZW91dCcsIHRpbWVvdXRdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjbGljayBsaXN0ZW5lciB0byBhIHNwZWNpZmljIGxpbmsgZWxlbWVudC48YnIgLz5cbiAgICogV2hlbiBjbGlja2VkLCBNYXRvbW8gd2lsbCBsb2cgdGhlIGNsaWNrIGF1dG9tYXRpY2FsbHkuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgb24gd2hpY2ggdG8gYWRkIGEgY2xpY2sgbGlzdGVuZXIuXG4gICAqL1xuICBhZGRMaXN0ZW5lcihlbGVtZW50OiBFbGVtZW50KTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydhZGRMaXN0ZW5lcicsIGVsZW1lbnRdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHJlcXVlc3QgbWV0aG9kIHRvIGVpdGhlciBcIkdFVFwiIG9yIFwiUE9TVFwiLiAoVGhlIGRlZmF1bHQgaXMgXCJHRVRcIi4pPGJyIC8+XG4gICAqIFRvIHVzZSB0aGUgUE9TVCByZXF1ZXN0IG1ldGhvZCwgZWl0aGVyOjxiciAvPlxuICAgKiAxKSB0aGUgTWF0b21vIGhvc3QgaXMgdGhlIHNhbWUgYXMgdGhlIHRyYWNrZWQgd2Vic2l0ZSBob3N0IChNYXRvbW8gaW5zdGFsbGVkIGluIHRoZSBzYW1lIGRvbWFpbiBhcyB5b3VyIHRyYWNrZWQgd2Vic2l0ZSksIG9yPGJyIC8+XG4gICAqIDIpIGlmIE1hdG9tbyBpcyBub3QgaW5zdGFsbGVkIG9uIHRoZSBzYW1lIGhvc3QgYXMgeW91ciB3ZWJzaXRlLCB5b3UgbmVlZCB0byBlbmFibGUgQ09SUyAoQ3Jvc3MgZG9tYWluIHJlcXVlc3RzKS5cbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCBIVFRQIG1ldGhvZCBmb3Igc2VuZGluZyBpbmZvcm1hdGlvbiB0byB0aGUgTWF0b21vIHNlcnZlci5cbiAgICovXG4gIHNldFJlcXVlc3RNZXRob2QobWV0aG9kOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldFJlcXVlc3RNZXRob2QnLCBtZXRob2RdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcHJvY2VzcyB0aGUgcmVxdWVzdCBjb250ZW50LjxiciAvPlxuICAgKiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgb25jZSB0aGUgcmVxdWVzdCAocXVlcnkgcGFyYW1ldGVycyBzdHJpbmcpIGhhcyBiZWVuIHByZXBhcmVkLCBhbmQgYmVmb3JlIHRoZSByZXF1ZXN0IGNvbnRlbnQgaXMgc2VudC5cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrIEZ1bmN0aW9uIHRoYXQgd2lsbCBwcm9jZXNzIHRoZSByZXF1ZXN0IGNvbnRlbnQuXG4gICAqL1xuICBzZXRDdXN0b21SZXF1ZXN0UHJvY2Vzc2luZyhjYWxsYmFjazogKHF1ZXJ5UGFyYW1ldGVyczogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydzZXRDdXN0b21SZXF1ZXN0UHJvY2Vzc2luZycsIGNhbGxiYWNrXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHJlcXVlc3QgQ29udGVudC1UeXBlIGhlYWRlciB2YWx1ZS48YnIgLz5cbiAgICogQXBwbGljYWJsZSB3aGVuIFwiUE9TVFwiIHJlcXVlc3QgbWV0aG9kIGlzIHVzZWQgdmlhIHNldFJlcXVlc3RNZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSBjb250ZW50VHlwZSBWYWx1ZSBmb3IgQ29udGVudC1UeXBlIEhUVFAgaGVhZGVyLlxuICAgKi9cbiAgc2V0UmVxdWVzdENvbnRlbnRUeXBlKGNvbnRlbnRUeXBlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldFJlcXVlc3RDb250ZW50VHlwZScsIGNvbnRlbnRUeXBlXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19