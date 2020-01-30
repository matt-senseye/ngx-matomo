(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-matomo', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-matomo'] = {}, global.ng.core, global.ng.common));
}(this, function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Service for injecting the Matomo tracker in the application.
     *
     * @export
     */
    var MatomoInjector = /** @class */ (function () {
        /**
         * Creates an instance of MatomoInjector.
         *
         * @param platformId Angular description of the platform.
         */
        function MatomoInjector(platformId) {
            this.platformId = platformId;
            if (common.isPlatformBrowser(this.platformId)) {
                window._paq = window._paq || [];
            }
            else {
                console.warn('MatomoInjector can\'t be used on server platform');
            }
        }
        /**
         * Injects the Matomo tracker in the DOM.
         *
         * @param url URL of the Matomo instance to connect to.
         * @param id SiteId for this application/site.
         * @param [scriptUrl] Optional URL for the `piwik.js`/`matomo.js` script in case it is not at its default location.
         * @param [skipTrackingInitialPageView] Optional boolean which, if true, will prevent tracking the initial page as part of init
         */
        /**
         * Injects the Matomo tracker in the DOM.
         *
         * @param {?} url URL of the Matomo instance to connect to.
         * @param {?} id SiteId for this application/site.
         * @param {?=} scriptUrl
         * @param {?=} skipTrackingInitialPageView
         * @return {?}
         */
        MatomoInjector.prototype.init = /**
         * Injects the Matomo tracker in the DOM.
         *
         * @param {?} url URL of the Matomo instance to connect to.
         * @param {?} id SiteId for this application/site.
         * @param {?=} scriptUrl
         * @param {?=} skipTrackingInitialPageView
         * @return {?}
         */
        function (url, id, scriptUrl, skipTrackingInitialPageView) {
            if (common.isPlatformBrowser(this.platformId)) {
                if (!skipTrackingInitialPageView) {
                    window._paq.push(['trackPageView']);
                }
                window._paq.push(['enableLinkTracking']);
                ((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var u = url;
                    window._paq.push(['setTrackerUrl', u + 'piwik.php']);
                    window._paq.push(['setSiteId', id.toString()]);
                    /** @type {?} */
                    var d = document;
                    /** @type {?} */
                    var g = d.createElement('script');
                    /** @type {?} */
                    var s = d.getElementsByTagName('script')[0];
                    g.type = 'text/javascript';
                    g.async = true;
                    g.defer = true;
                    g.src = !!scriptUrl ? scriptUrl : u + 'piwik.js';
                    s.parentNode.insertBefore(g, s);
                }))();
            }
        };
        MatomoInjector.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        MatomoInjector.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        return MatomoInjector;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Wrapper for functions available in the Matomo Javascript tracker.
     *
     * @export
     */
    var MatomoTracker = /** @class */ (function () {
        /**
         * Creates an instance of MatomoTracker.
         */
        function MatomoTracker() {
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
         * @param [customTitle] Optional title of the visited page.
         */
        /**
         * Logs a visit to this page.
         *
         * @param {?=} customTitle
         * @return {?}
         */
        MatomoTracker.prototype.trackPageView = /**
         * Logs a visit to this page.
         *
         * @param {?=} customTitle
         * @return {?}
         */
        function (customTitle) {
            try {
                /** @type {?} */
                var args = [];
                if (!!customTitle) {
                    args.push(customTitle);
                }
                window._paq.push(__spread(['trackPageView'], args));
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Logs an event with an event category (Videos, Music, Games…), an event action (Play, Pause, Duration,
         * Add Playlist, Downloaded, Clicked…), and an optional event name and optional numeric value.
         *
         * @param category Category of the event.
         * @param action Action of the event.
         * @param [name] Optional name of the event.
         * @param [value] Optional value for the event.
         */
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
        MatomoTracker.prototype.trackEvent = /**
         * Logs an event with an event category (Videos, Music, Games…), an event action (Play, Pause, Duration,
         * Add Playlist, Downloaded, Clicked…), and an optional event name and optional numeric value.
         *
         * @param {?} category Category of the event.
         * @param {?} action Action of the event.
         * @param {?=} name
         * @param {?=} value
         * @return {?}
         */
        function (category, action, name, value) {
            try {
                /** @type {?} */
                var args = [category, action];
                if (!!name) {
                    args.push(name);
                }
                if (typeof value === 'number') {
                    args.push(value);
                }
                window._paq.push(__spread(['trackEvent'], args));
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Logs an internal site search for a specific keyword, in an optional category,
         * specifying the optional count of search results in the page.
         *
         * @param keyword Keywords of the search query.
         * @param [category] Optional category of the search query.
         * @param [resultsCount] Optional number of results returned by the search query.
         */
        /**
         * Logs an internal site search for a specific keyword, in an optional category,
         * specifying the optional count of search results in the page.
         *
         * @param {?} keyword Keywords of the search query.
         * @param {?=} category
         * @param {?=} resultsCount
         * @return {?}
         */
        MatomoTracker.prototype.trackSiteSearch = /**
         * Logs an internal site search for a specific keyword, in an optional category,
         * specifying the optional count of search results in the page.
         *
         * @param {?} keyword Keywords of the search query.
         * @param {?=} category
         * @param {?=} resultsCount
         * @return {?}
         */
        function (keyword, category, resultsCount) {
            try {
                /** @type {?} */
                var args = [keyword];
                if (!!category) {
                    args.push(category);
                }
                if (typeof resultsCount === 'number') {
                    args.push(resultsCount);
                }
                window._paq.push(__spread(['trackSiteSearch'], args));
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Manually logs a conversion for the numeric goal ID, with an optional numeric custom revenue customRevenue.
         *
         * @param idGoal numeric ID of the goal to log a conversion for.
         * @param [customRevenue] Optional custom revenue to log for the goal.
         */
        /**
         * Manually logs a conversion for the numeric goal ID, with an optional numeric custom revenue customRevenue.
         *
         * @param {?} idGoal numeric ID of the goal to log a conversion for.
         * @param {?=} customRevenue
         * @return {?}
         */
        MatomoTracker.prototype.trackGoal = /**
         * Manually logs a conversion for the numeric goal ID, with an optional numeric custom revenue customRevenue.
         *
         * @param {?} idGoal numeric ID of the goal to log a conversion for.
         * @param {?=} customRevenue
         * @return {?}
         */
        function (idGoal, customRevenue) {
            try {
                /** @type {?} */
                var args = [idGoal];
                if (typeof customRevenue === 'number') {
                    args.push(customRevenue);
                }
                window._paq.push(__spread(['trackGoal'], args));
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Manually logs a click from your own code.
         *
         * @param url Full URL which is to be tracked as a click.
         * @param linkType Either 'link' for an outlink or 'download' for a download.
         */
        /**
         * Manually logs a click from your own code.
         *
         * @param {?} url Full URL which is to be tracked as a click.
         * @param {?} linkType Either 'link' for an outlink or 'download' for a download.
         * @return {?}
         */
        MatomoTracker.prototype.trackLink = /**
         * Manually logs a click from your own code.
         *
         * @param {?} url Full URL which is to be tracked as a click.
         * @param {?} linkType Either 'link' for an outlink or 'download' for a download.
         * @return {?}
         */
        function (url, linkType) {
            try {
                window._paq.push(['trackLink', url, linkType]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Scans the entire DOM for all content blocks and tracks all impressions once the DOM ready event has been triggered.
         *
         * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         */
        /**
         * Scans the entire DOM for all content blocks and tracks all impressions once the DOM ready event has been triggered.
         *
         * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         * @return {?}
         */
        MatomoTracker.prototype.trackAllContentImpressions = /**
         * Scans the entire DOM for all content blocks and tracks all impressions once the DOM ready event has been triggered.
         *
         * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         * @return {?}
         */
        function () {
            try {
                window._paq.push(['trackAllContentImpressions']);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Scans the entire DOM for all content blocks as soon as the page is loaded.<br />
         * It tracks an impression only if a content block is actually visible.
         *
         * @param checkOnScroll If true, checks for new content blocks while scrolling the page.
         * @param timeInterval Duration, in milliseconds, between two checks upon scroll.
         * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         */
        /**
         * Scans the entire DOM for all content blocks as soon as the page is loaded.<br />
         * It tracks an impression only if a content block is actually visible.
         *
         * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         * @param {?} checkOnScroll If true, checks for new content blocks while scrolling the page.
         * @param {?} timeInterval Duration, in milliseconds, between two checks upon scroll.
         * @return {?}
         */
        MatomoTracker.prototype.trackVisibleContentImpressions = /**
         * Scans the entire DOM for all content blocks as soon as the page is loaded.<br />
         * It tracks an impression only if a content block is actually visible.
         *
         * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         * @param {?} checkOnScroll If true, checks for new content blocks while scrolling the page.
         * @param {?} timeInterval Duration, in milliseconds, between two checks upon scroll.
         * @return {?}
         */
        function (checkOnScroll, timeInterval) {
            try {
                window._paq.push(['trackVisibleContentImpressions', checkOnScroll, timeInterval]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Scans the given DOM node and its children for content blocks and tracks an impression for them
         * if no impression was already tracked for it.
         *
         * @param node DOM node in which to look for content blocks which have not been previously tracked.
         * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         */
        /**
         * Scans the given DOM node and its children for content blocks and tracks an impression for them
         * if no impression was already tracked for it.
         *
         * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         * @param {?} node DOM node in which to look for content blocks which have not been previously tracked.
         * @return {?}
         */
        MatomoTracker.prototype.trackContentImpressionsWithinNode = /**
         * Scans the given DOM node and its children for content blocks and tracks an impression for them
         * if no impression was already tracked for it.
         *
         * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         * @param {?} node DOM node in which to look for content blocks which have not been previously tracked.
         * @return {?}
         */
        function (node) {
            try {
                window._paq.push(['trackContentImpressionsWithinNode', node]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Tracks an interaction with the given DOM node/content block.
         *
         * @param node DOM node for which to track a content interaction.
         * @param contentInteraction Name of the content interaction.
         * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         */
        /**
         * Tracks an interaction with the given DOM node/content block.
         *
         * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         * @param {?} node DOM node for which to track a content interaction.
         * @param {?} contentInteraction Name of the content interaction.
         * @return {?}
         */
        MatomoTracker.prototype.trackContentInteractionNode = /**
         * Tracks an interaction with the given DOM node/content block.
         *
         * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         * @param {?} node DOM node for which to track a content interaction.
         * @param {?} contentInteraction Name of the content interaction.
         * @return {?}
         */
        function (node, contentInteraction) {
            try {
                window._paq.push(['trackContentInteractionNode', node, contentInteraction]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Tracks a content impression using the specified values.
         *
         * @param contentName Content name.
         * @param contentPiece Content piece.
         * @param contentTarget Content target.
         * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         */
        /**
         * Tracks a content impression using the specified values.
         *
         * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         * @param {?} contentName Content name.
         * @param {?} contentPiece Content piece.
         * @param {?} contentTarget Content target.
         * @return {?}
         */
        MatomoTracker.prototype.trackContentImpression = /**
         * Tracks a content impression using the specified values.
         *
         * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         * @param {?} contentName Content name.
         * @param {?} contentPiece Content piece.
         * @param {?} contentTarget Content target.
         * @return {?}
         */
        function (contentName, contentPiece, contentTarget) {
            try {
                window._paq.push(['trackContentImpression', contentName, contentPiece, contentTarget]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Tracks a content interaction using the specified values.
         *
         * @param contentInteraction Content interaction.
         * @param contentName Content name.
         * @param contentPiece Content piece.
         * @param contentTarget Content target.
         * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         */
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
        MatomoTracker.prototype.trackContentInteraction = /**
         * Tracks a content interaction using the specified values.
         *
         * @see {\@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
         * @param {?} contentInteraction Content interaction.
         * @param {?} contentName Content name.
         * @param {?} contentPiece Content piece.
         * @param {?} contentTarget Content target.
         * @return {?}
         */
        function (contentInteraction, contentName, contentPiece, contentTarget) {
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
        };
        /**
         * Logs all found content blocks within a page to the console. This is useful to debug / test content tracking.
         */
        /**
         * Logs all found content blocks within a page to the console. This is useful to debug / test content tracking.
         * @return {?}
         */
        MatomoTracker.prototype.logAllContentBlocksOnPage = /**
         * Logs all found content blocks within a page to the console. This is useful to debug / test content tracking.
         * @return {?}
         */
        function () {
            try {
                window._paq.push(['logAllContentBlocksOnPage']);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Install a Heart beat timer that will regularly send requests to Matomo in order to better measure the time spent on the page.<br />
         * These requests will be sent only when the user is actively viewing the page (when the tab is active and in focus).<br />
         * These requests will not track additional actions or page views.<br />
         * By default, the delay is set to 15 seconds.
         *
         * @param delay Delay, in seconds, between two heart beats to the server.
         */
        /**
         * Install a Heart beat timer that will regularly send requests to Matomo in order to better measure the time spent on the page.<br />
         * These requests will be sent only when the user is actively viewing the page (when the tab is active and in focus).<br />
         * These requests will not track additional actions or page views.<br />
         * By default, the delay is set to 15 seconds.
         *
         * @param {?} delay Delay, in seconds, between two heart beats to the server.
         * @return {?}
         */
        MatomoTracker.prototype.enableHeartBeatTimer = /**
         * Install a Heart beat timer that will regularly send requests to Matomo in order to better measure the time spent on the page.<br />
         * These requests will be sent only when the user is actively viewing the page (when the tab is active and in focus).<br />
         * These requests will not track additional actions or page views.<br />
         * By default, the delay is set to 15 seconds.
         *
         * @param {?} delay Delay, in seconds, between two heart beats to the server.
         * @return {?}
         */
        function (delay) {
            try {
                window._paq.push(['enableHeartBeatTimer', delay]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Installs link tracking on all applicable link elements.
         *
         * @param enable Set the enable parameter to true to use pseudo click-handler (treat middle click and open contextmenu as
         * left click).<br />
         * A right click (or any click that opens the context menu) on a link will be tracked as clicked even if "Open in new tab"
         * is not selected.<br />
         * If "false" (default), nothing will be tracked on open context menu or middle click.
         */
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
        MatomoTracker.prototype.enableLinkTracking = /**
         * Installs link tracking on all applicable link elements.
         *
         * @param {?} enable Set the enable parameter to true to use pseudo click-handler (treat middle click and open contextmenu as
         * left click).<br />
         * A right click (or any click that opens the context menu) on a link will be tracked as clicked even if "Open in new tab"
         * is not selected.<br />
         * If "false" (default), nothing will be tracked on open context menu or middle click.
         * @return {?}
         */
        function (enable) {
            try {
                window._paq.push(['enableLinkTracking', enable]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Enables cross domain linking. By default, the visitor ID that identifies a unique visitor is stored in the browser's
         * first party cookies.<br />
         * This means the cookie can only be accessed by pages on the same domain.<br />
         * If you own multiple domains and would like to track all the actions and pageviews of a specific visitor into the same visit,
         * you may enable cross domain linking.<br />
         * Whenever a user clicks on a link it will append a URL parameter pk_vid to the clicked URL which forwards the current
         * visitor ID value to the page of the different domain.
         *
         * @see {@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
         */
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
        MatomoTracker.prototype.enableCrossDomainLinking = /**
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
        function () {
            try {
                window._paq.push(['enableCrossDomainLinking']);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * By default, the two visits across domains will be linked together when the link is clicked and the page is loaded within
         * a 180 seconds timeout window.
         *
         * @param timeout Timeout, in seconds, between two actions across two domanes before creating a new visit.
         * @see {@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
         */
        /**
         * By default, the two visits across domains will be linked together when the link is clicked and the page is loaded within
         * a 180 seconds timeout window.
         *
         * @see {\@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
         * @param {?} timeout Timeout, in seconds, between two actions across two domanes before creating a new visit.
         * @return {?}
         */
        MatomoTracker.prototype.setCrossDomainLinkingTimeout = /**
         * By default, the two visits across domains will be linked together when the link is clicked and the page is loaded within
         * a 180 seconds timeout window.
         *
         * @see {\@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
         * @param {?} timeout Timeout, in seconds, between two actions across two domanes before creating a new visit.
         * @return {?}
         */
        function (timeout) {
            try {
                window._paq.push(['setCrossDomainLinkingTimeout', timeout]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Overrides document.title
         *
         * @param title Title of the document.
         */
        /**
         * Overrides document.title
         *
         * @param {?} title Title of the document.
         * @return {?}
         */
        MatomoTracker.prototype.setDocumentTitle = /**
         * Overrides document.title
         *
         * @param {?} title Title of the document.
         * @return {?}
         */
        function (title) {
            try {
                window._paq.push(['setDocumentTitle', title]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets array of hostnames or domains to be treated as local.<br />
         * For wildcard subdomains, you can use: `setDomains('.example.com')`; or `setDomains('*.example.com');`.<br />
         * You can also specify a path along a domain: `setDomains('*.example.com/subsite1');`.
         *
         * @param domains List of hostnames or domains, with or without path, to be treated as local.
         * @see {@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
         */
        /**
         * Sets array of hostnames or domains to be treated as local.<br />
         * For wildcard subdomains, you can use: `setDomains('.example.com')`; or `setDomains('*.example.com');`.<br />
         * You can also specify a path along a domain: `setDomains('*.example.com/subsite1');`.
         *
         * @see {\@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
         * @param {?} domains List of hostnames or domains, with or without path, to be treated as local.
         * @return {?}
         */
        MatomoTracker.prototype.setDomains = /**
         * Sets array of hostnames or domains to be treated as local.<br />
         * For wildcard subdomains, you can use: `setDomains('.example.com')`; or `setDomains('*.example.com');`.<br />
         * You can also specify a path along a domain: `setDomains('*.example.com/subsite1');`.
         *
         * @see {\@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
         * @param {?} domains List of hostnames or domains, with or without path, to be treated as local.
         * @return {?}
         */
        function (domains) {
            try {
                window._paq.push(['setDomains', domains]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Override the page's reported URL.
         *
         * @param url URL to be reported for the page.
         */
        /**
         * Override the page's reported URL.
         *
         * @param {?} url URL to be reported for the page.
         * @return {?}
         */
        MatomoTracker.prototype.setCustomUrl = /**
         * Override the page's reported URL.
         *
         * @param {?} url URL to be reported for the page.
         * @return {?}
         */
        function (url) {
            try {
                window._paq.push(['setCustomUrl', url]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Overrides the detected Http-Referer.
         *
         * @param url URL to be reported for the referer.
         */
        /**
         * Overrides the detected Http-Referer.
         *
         * @param {?} url URL to be reported for the referer.
         * @return {?}
         */
        MatomoTracker.prototype.setReferrerUrl = /**
         * Overrides the detected Http-Referer.
         *
         * @param {?} url URL to be reported for the referer.
         * @return {?}
         */
        function (url) {
            try {
                window._paq.push(['setReferrerUrl', url]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Specifies the website ID.<br />
         * Redundant: can be specified in getTracker() constructor.
         *
         * @param siteId Site ID for the tracker.
         */
        /**
         * Specifies the website ID.<br />
         * Redundant: can be specified in getTracker() constructor.
         *
         * @param {?} siteId Site ID for the tracker.
         * @return {?}
         */
        MatomoTracker.prototype.setSiteId = /**
         * Specifies the website ID.<br />
         * Redundant: can be specified in getTracker() constructor.
         *
         * @param {?} siteId Site ID for the tracker.
         * @return {?}
         */
        function (siteId) {
            try {
                window._paq.push(['setSiteId', siteId]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Specify the Matomo HTTP API URL endpoint. Points to the root directory of matomo,
         * e.g. http://matomo.example.org/ or https://example.org/matomo/.<br />
         * This function is only useful when the 'Overlay' report is not working.<br />
         * By default, you do not need to use this function.
         *
         * @param url URL for Matomo HTTP API endpoint.
         */
        /**
         * Specify the Matomo HTTP API URL endpoint. Points to the root directory of matomo,
         * e.g. http://matomo.example.org/ or https://example.org/matomo/.<br />
         * This function is only useful when the 'Overlay' report is not working.<br />
         * By default, you do not need to use this function.
         *
         * @param {?} url URL for Matomo HTTP API endpoint.
         * @return {?}
         */
        MatomoTracker.prototype.setApiUrl = /**
         * Specify the Matomo HTTP API URL endpoint. Points to the root directory of matomo,
         * e.g. http://matomo.example.org/ or https://example.org/matomo/.<br />
         * This function is only useful when the 'Overlay' report is not working.<br />
         * By default, you do not need to use this function.
         *
         * @param {?} url URL for Matomo HTTP API endpoint.
         * @return {?}
         */
        function (url) {
            try {
                window._paq.push(['setApiUrl', url]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Specifies the Matomo server URL.<br />
         * Redundant: can be specified in getTracker() constructor.
         *
         * @param url URL for the Matomo server.
         */
        /**
         * Specifies the Matomo server URL.<br />
         * Redundant: can be specified in getTracker() constructor.
         *
         * @param {?} url URL for the Matomo server.
         * @return {?}
         */
        MatomoTracker.prototype.setTrackerUrl = /**
         * Specifies the Matomo server URL.<br />
         * Redundant: can be specified in getTracker() constructor.
         *
         * @param {?} url URL for the Matomo server.
         * @return {?}
         */
        function (url) {
            try {
                window._paq.push(['setTrackerUrl', url]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Returns the Matomo server URL.
         *
         * @returns Promise for the Matomo server URL.
         */
        /**
         * Returns the Matomo server URL.
         *
         * @return {?} Promise for the Matomo server URL.
         */
        MatomoTracker.prototype.getPiwikUrl = /**
         * Returns the Matomo server URL.
         *
         * @return {?} Promise for the Matomo server URL.
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
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
        };
        /**
         * Returns the current url of the page that is currently being visited.<br />
         * If a custom URL was set before calling this method, the custom URL will be returned.
         *
         * @returns Promise for the URL of the current page.
         */
        /**
         * Returns the current url of the page that is currently being visited.<br />
         * If a custom URL was set before calling this method, the custom URL will be returned.
         *
         * @return {?} Promise for the URL of the current page.
         */
        MatomoTracker.prototype.getCurrentUrl = /**
         * Returns the current url of the page that is currently being visited.<br />
         * If a custom URL was set before calling this method, the custom URL will be returned.
         *
         * @return {?} Promise for the URL of the current page.
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
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
        };
        /**
         * Sets classes to be treated as downloads (in addition to piwik_download).
         *
         * @param classes Class, or list of classes to be treated as downloads.
         */
        /**
         * Sets classes to be treated as downloads (in addition to piwik_download).
         *
         * @param {?} classes Class, or list of classes to be treated as downloads.
         * @return {?}
         */
        MatomoTracker.prototype.setDownloadClasses = /**
         * Sets classes to be treated as downloads (in addition to piwik_download).
         *
         * @param {?} classes Class, or list of classes to be treated as downloads.
         * @return {?}
         */
        function (classes) {
            try {
                window._paq.push(['setDownloadClasses', classes]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets list of file extensions to be recognized as downloads.<br />
         * Example: `'docx'` or `['docx', 'xlsx']`.
         *
         * @param extensions Extension, or list of extensions to be recognized as downloads.
         */
        /**
         * Sets list of file extensions to be recognized as downloads.<br />
         * Example: `'docx'` or `['docx', 'xlsx']`.
         *
         * @param {?} extensions Extension, or list of extensions to be recognized as downloads.
         * @return {?}
         */
        MatomoTracker.prototype.setDownloadExtensions = /**
         * Sets list of file extensions to be recognized as downloads.<br />
         * Example: `'docx'` or `['docx', 'xlsx']`.
         *
         * @param {?} extensions Extension, or list of extensions to be recognized as downloads.
         * @return {?}
         */
        function (extensions) {
            try {
                window._paq.push(['setDownloadClasses', extensions]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets additional file extensions to be recognized as downloads.<br />
         * Example: `'docx'` or `['docx', 'xlsx']`.
         *
         * @param extensions Extension, or list of extensions to be recognized as downloads.
         */
        /**
         * Sets additional file extensions to be recognized as downloads.<br />
         * Example: `'docx'` or `['docx', 'xlsx']`.
         *
         * @param {?} extensions Extension, or list of extensions to be recognized as downloads.
         * @return {?}
         */
        MatomoTracker.prototype.addDownloadExtensions = /**
         * Sets additional file extensions to be recognized as downloads.<br />
         * Example: `'docx'` or `['docx', 'xlsx']`.
         *
         * @param {?} extensions Extension, or list of extensions to be recognized as downloads.
         * @return {?}
         */
        function (extensions) {
            try {
                window._paq.push(['setDownloadClasses', extensions]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets file extensions to be removed from the list of download file extensions.<br />
         * Example: `'docx'` or `['docx', 'xlsx']`.
         *
         * @param extensions Extension, or list of extensions not to be recognized as downloads.
         */
        /**
         * Sets file extensions to be removed from the list of download file extensions.<br />
         * Example: `'docx'` or `['docx', 'xlsx']`.
         *
         * @param {?} extensions Extension, or list of extensions not to be recognized as downloads.
         * @return {?}
         */
        MatomoTracker.prototype.removeDownloadExtensions = /**
         * Sets file extensions to be removed from the list of download file extensions.<br />
         * Example: `'docx'` or `['docx', 'xlsx']`.
         *
         * @param {?} extensions Extension, or list of extensions not to be recognized as downloads.
         * @return {?}
         */
        function (extensions) {
            try {
                window._paq.push(['setDownloadClasses', extensions]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets classes to be ignored if present in link (in addition to piwik_ignore).
         *
         * @param classes Class, or list of classes to be ignored if present in link.
         */
        /**
         * Sets classes to be ignored if present in link (in addition to piwik_ignore).
         *
         * @param {?} classes Class, or list of classes to be ignored if present in link.
         * @return {?}
         */
        MatomoTracker.prototype.setIgnoreClasses = /**
         * Sets classes to be ignored if present in link (in addition to piwik_ignore).
         *
         * @param {?} classes Class, or list of classes to be ignored if present in link.
         * @return {?}
         */
        function (classes) {
            try {
                window._paq.push(['setDownloadClasses', classes]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Set classes to be treated as outlinks (in addition to piwik_link).
         *
         * @param classes Class, or list of classes to be treated as outlinks.
         */
        /**
         * Set classes to be treated as outlinks (in addition to piwik_link).
         *
         * @param {?} classes Class, or list of classes to be treated as outlinks.
         * @return {?}
         */
        MatomoTracker.prototype.setLinkClasses = /**
         * Set classes to be treated as outlinks (in addition to piwik_link).
         *
         * @param {?} classes Class, or list of classes to be treated as outlinks.
         * @return {?}
         */
        function (classes) {
            try {
                window._paq.push(['setDownloadClasses', classes]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Set delay for link tracking (in milliseconds).
         *
         * @param delay Delay, in milliseconds, for link tracking.
         */
        /**
         * Set delay for link tracking (in milliseconds).
         *
         * @param {?} delay Delay, in milliseconds, for link tracking.
         * @return {?}
         */
        MatomoTracker.prototype.setLinkTrackingTimer = /**
         * Set delay for link tracking (in milliseconds).
         *
         * @param {?} delay Delay, in milliseconds, for link tracking.
         * @return {?}
         */
        function (delay) {
            try {
                window._paq.push(['setLinkTrackingTimer', delay]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Returns delay for link tracking.
         *
         * @returns Promise for the delay in milliseconds.
         */
        /**
         * Returns delay for link tracking.
         *
         * @return {?} Promise for the delay in milliseconds.
         */
        MatomoTracker.prototype.getLinkTrackingTimer = /**
         * Returns delay for link tracking.
         *
         * @return {?} Promise for the delay in milliseconds.
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
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
        };
        /**
         * Set to true to not record the hash tag (anchor) portion of URLs.
         *
         * @param value If true, the hash tag portion of the URLs won't be recorded.
         */
        /**
         * Set to true to not record the hash tag (anchor) portion of URLs.
         *
         * @param {?} value If true, the hash tag portion of the URLs won't be recorded.
         * @return {?}
         */
        MatomoTracker.prototype.discardHashTag = /**
         * Set to true to not record the hash tag (anchor) portion of URLs.
         *
         * @param {?} value If true, the hash tag portion of the URLs won't be recorded.
         * @return {?}
         */
        function (value) {
            try {
                window._paq.push(['discardHashTag', value]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * By default Matomo uses the browser DOM Timing API to accurately determine the time it takes to generate and download
         * the page. You may overwrite this value with this function.
         *
         * @param generationTime Time, in milliseconds, of the page generation.
         */
        /**
         * By default Matomo uses the browser DOM Timing API to accurately determine the time it takes to generate and download
         * the page. You may overwrite this value with this function.
         *
         * @param {?} generationTime Time, in milliseconds, of the page generation.
         * @return {?}
         */
        MatomoTracker.prototype.setGenerationTimeMs = /**
         * By default Matomo uses the browser DOM Timing API to accurately determine the time it takes to generate and download
         * the page. You may overwrite this value with this function.
         *
         * @param {?} generationTime Time, in milliseconds, of the page generation.
         * @return {?}
         */
        function (generationTime) {
            try {
                window._paq.push(['setGenerationTimeMs', generationTime]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Appends a custom string to the end of the HTTP request to piwik.php.
         *
         * @param appendToUrl String to append to the end of the HTTP request to piwik.php/matomo.php.
         */
        /**
         * Appends a custom string to the end of the HTTP request to piwik.php.
         *
         * @param {?} appendToUrl String to append to the end of the HTTP request to piwik.php/matomo.php.
         * @return {?}
         */
        MatomoTracker.prototype.appendToTrackingUrl = /**
         * Appends a custom string to the end of the HTTP request to piwik.php.
         *
         * @param {?} appendToUrl String to append to the end of the HTTP request to piwik.php/matomo.php.
         * @return {?}
         */
        function (appendToUrl) {
            try {
                window._paq.push(['appendToTrackingUrl', appendToUrl]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Set to true to not track users who opt out of tracking using Mozilla's (proposed) Do Not Track setting.
         *
         * @param doNotTrack If true, users who opted for Do Not Track in their settings won't be tracked.
         * @see {@link https://www.w3.org/TR/tracking-dnt/}
         */
        /**
         * Set to true to not track users who opt out of tracking using Mozilla's (proposed) Do Not Track setting.
         *
         * @see {\@link https://www.w3.org/TR/tracking-dnt/}
         * @param {?} doNotTrack If true, users who opted for Do Not Track in their settings won't be tracked.
         * @return {?}
         */
        MatomoTracker.prototype.setDoNotTrack = /**
         * Set to true to not track users who opt out of tracking using Mozilla's (proposed) Do Not Track setting.
         *
         * @see {\@link https://www.w3.org/TR/tracking-dnt/}
         * @param {?} doNotTrack If true, users who opted for Do Not Track in their settings won't be tracked.
         * @return {?}
         */
        function (doNotTrack) {
            try {
                window._paq.push(['setDoNotTrack', doNotTrack]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Enables a frame-buster to prevent the tracked web page from being framed/iframed.
         */
        /**
         * Enables a frame-buster to prevent the tracked web page from being framed/iframed.
         * @return {?}
         */
        MatomoTracker.prototype.killFrame = /**
         * Enables a frame-buster to prevent the tracked web page from being framed/iframed.
         * @return {?}
         */
        function () {
            try {
                window._paq.push(['killFrame']);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Forces the browser to load the live URL if the tracked web page is loaded from a local file
         * (e.g., saved to someone's desktop).
         *
         * @param url URL to track instead of file:// URLs.
         */
        /**
         * Forces the browser to load the live URL if the tracked web page is loaded from a local file
         * (e.g., saved to someone's desktop).
         *
         * @param {?} url URL to track instead of file:// URLs.
         * @return {?}
         */
        MatomoTracker.prototype.redirectFile = /**
         * Forces the browser to load the live URL if the tracked web page is loaded from a local file
         * (e.g., saved to someone's desktop).
         *
         * @param {?} url URL to track instead of file:// URLs.
         * @return {?}
         */
        function (url) {
            try {
                window._paq.push(['redirectFile', url]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Records how long the page has been viewed if the minimumVisitLength is attained;
         * the heartBeatDelay determines how frequently to update the server.
         *
         * @param minimumVisitLength Duration before notifying the server for the duration of the visit to a page.
         * @param heartBeatDelay Delay, in seconds, between two updates to the server.
         */
        /**
         * Records how long the page has been viewed if the minimumVisitLength is attained;
         * the heartBeatDelay determines how frequently to update the server.
         *
         * @param {?} minimumVisitLength Duration before notifying the server for the duration of the visit to a page.
         * @param {?} heartBeatDelay Delay, in seconds, between two updates to the server.
         * @return {?}
         */
        MatomoTracker.prototype.setHeartBeatTimer = /**
         * Records how long the page has been viewed if the minimumVisitLength is attained;
         * the heartBeatDelay determines how frequently to update the server.
         *
         * @param {?} minimumVisitLength Duration before notifying the server for the duration of the visit to a page.
         * @param {?} heartBeatDelay Delay, in seconds, between two updates to the server.
         * @return {?}
         */
        function (minimumVisitLength, heartBeatDelay) {
            try {
                window._paq.push(['setHeartBeatTimer', minimumVisitLength, heartBeatDelay]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Returns the 16 characters ID for the visitor.
         *
         * @returns Promise for the the 16 characters ID for the visitor.
         */
        /**
         * Returns the 16 characters ID for the visitor.
         *
         * @return {?} Promise for the the 16 characters ID for the visitor.
         */
        MatomoTracker.prototype.getVisitorId = /**
         * Returns the 16 characters ID for the visitor.
         *
         * @return {?} Promise for the the 16 characters ID for the visitor.
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
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
        };
        /**
         * Returns the visitor cookie contents in an array.
         *
         * @returns Promise for the cookie contents in an array.
         */
        /**
         * Returns the visitor cookie contents in an array.
         *
         * @return {?} Promise for the cookie contents in an array.
         */
        MatomoTracker.prototype.getVisitorInfo = /**
         * Returns the visitor cookie contents in an array.
         *
         * @return {?} Promise for the cookie contents in an array.
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
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
        };
        /**
         * Returns the visitor attribution array (Referer information and/or Campaign name & keyword).<br />
         * Attribution information is used by Matomo to credit the correct referrer (first or last referrer)
         * used when a user triggers a goal conversion.
         *
         * @returns Promise for the visitor attribution array (Referer information and/or Campaign name & keyword).
         */
        /**
         * Returns the visitor attribution array (Referer information and/or Campaign name & keyword).<br />
         * Attribution information is used by Matomo to credit the correct referrer (first or last referrer)
         * used when a user triggers a goal conversion.
         *
         * @return {?} Promise for the visitor attribution array (Referer information and/or Campaign name & keyword).
         */
        MatomoTracker.prototype.getAttributionInfo = /**
         * Returns the visitor attribution array (Referer information and/or Campaign name & keyword).<br />
         * Attribution information is used by Matomo to credit the correct referrer (first or last referrer)
         * used when a user triggers a goal conversion.
         *
         * @return {?} Promise for the visitor attribution array (Referer information and/or Campaign name & keyword).
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
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
        };
        /**
         * Returns the attribution campaign name.
         *
         * @returns Promise for the the attribution campaign name.
         */
        /**
         * Returns the attribution campaign name.
         *
         * @return {?} Promise for the the attribution campaign name.
         */
        MatomoTracker.prototype.getAttributionCampaignName = /**
         * Returns the attribution campaign name.
         *
         * @return {?} Promise for the the attribution campaign name.
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
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
        };
        /**
         * Returns the attribution campaign keyword.
         *
         * @returns Promise for the attribution campaign keyword.
         */
        /**
         * Returns the attribution campaign keyword.
         *
         * @return {?} Promise for the attribution campaign keyword.
         */
        MatomoTracker.prototype.getAttributionCampaignKeyword = /**
         * Returns the attribution campaign keyword.
         *
         * @return {?} Promise for the attribution campaign keyword.
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
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
        };
        /**
         * Returns the attribution referrer timestamp.
         *
         * @returns Promise for the attribution referrer timestamp (as string).
         */
        /**
         * Returns the attribution referrer timestamp.
         *
         * @return {?} Promise for the attribution referrer timestamp (as string).
         */
        MatomoTracker.prototype.getAttributionReferrerTimestamp = /**
         * Returns the attribution referrer timestamp.
         *
         * @return {?} Promise for the attribution referrer timestamp (as string).
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
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
        };
        /**
         * Returns the attribution referrer URL.
         *
         * @returns Promise for the attribution referrer URL
         */
        /**
         * Returns the attribution referrer URL.
         *
         * @return {?} Promise for the attribution referrer URL
         */
        MatomoTracker.prototype.getAttributionReferrerUrl = /**
         * Returns the attribution referrer URL.
         *
         * @return {?} Promise for the attribution referrer URL
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
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
        };
        /**
         * Returns the User ID string if it was set.
         *
         * @returns Promise for the User ID for the visitor.
         * @see {@link https://matomo.org/docs/user-id/|Matomo User ID}
         */
        /**
         * Returns the User ID string if it was set.
         *
         * @see {\@link https://matomo.org/docs/user-id/|Matomo User ID}
         * @return {?} Promise for the User ID for the visitor.
         */
        MatomoTracker.prototype.getUserId = /**
         * Returns the User ID string if it was set.
         *
         * @see {\@link https://matomo.org/docs/user-id/|Matomo User ID}
         * @return {?} Promise for the User ID for the visitor.
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
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
        };
        /**
         * Sets a User ID to this user (such as an email address or a username).
         *
         * @param userId User ID to set for the current visitor.
         * @see {@link https://matomo.org/docs/user-id/|Matomo User ID}
         */
        /**
         * Sets a User ID to this user (such as an email address or a username).
         *
         * @see {\@link https://matomo.org/docs/user-id/|Matomo User ID}
         * @param {?} userId User ID to set for the current visitor.
         * @return {?}
         */
        MatomoTracker.prototype.setUserId = /**
         * Sets a User ID to this user (such as an email address or a username).
         *
         * @see {\@link https://matomo.org/docs/user-id/|Matomo User ID}
         * @param {?} userId User ID to set for the current visitor.
         * @return {?}
         */
        function (userId) {
            try {
                window._paq.push(['setUserId', userId]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Resets the User ID which also generates a new Visitor ID.
         *
         * @see {@link https://matomo.org/docs/user-id/|Matomo User ID}
         */
        /**
         * Resets the User ID which also generates a new Visitor ID.
         *
         * @see {\@link https://matomo.org/docs/user-id/|Matomo User ID}
         * @return {?}
         */
        MatomoTracker.prototype.resetUserId = /**
         * Resets the User ID which also generates a new Visitor ID.
         *
         * @see {\@link https://matomo.org/docs/user-id/|Matomo User ID}
         * @return {?}
         */
        function () {
            try {
                window._paq.push(['resetUserId']);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets a custom variable.
         *
         * @param index Index, the number from 1 to 5 where this custom variable name is stored for the current page view.
         * @param name Name, the name of the variable, for example: Category, Sub-category, UserType.
         * @param value Value, for example: "Sports", "News", "World", "Business"…
         * @param scope Scope of the custom variable:<br />
         * - "page" means the custom variable applies to the current page view.
         * - "visit" means the custom variable applies to the current visitor.
         * @see {@link https://matomo.org/docs/custom-variables/|Custom Variables}
         */
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
        MatomoTracker.prototype.setCustomVariable = /**
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
        function (index, name, value, scope) {
            try {
                window._paq.push(['setCustomVariable', index, name, value, scope]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Deletes a custom variable.
         *
         * @param index Index of the custom variable to delete.
         * @param scope Scope of the custom variable to delete.
         * @see {@link https://matomo.org/docs/custom-variables/|Custom Variables}
         */
        /**
         * Deletes a custom variable.
         *
         * @see {\@link https://matomo.org/docs/custom-variables/|Custom Variables}
         * @param {?} index Index of the custom variable to delete.
         * @param {?} scope Scope of the custom variable to delete.
         * @return {?}
         */
        MatomoTracker.prototype.deleteCustomVariable = /**
         * Deletes a custom variable.
         *
         * @see {\@link https://matomo.org/docs/custom-variables/|Custom Variables}
         * @param {?} index Index of the custom variable to delete.
         * @param {?} scope Scope of the custom variable to delete.
         * @return {?}
         */
        function (index, scope) {
            try {
                window._paq.push(['deleteCustomVariable', index, scope]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Deletes all custom variables.
         *
         * @param scope Scope of the custom variables to delete.
         * @see {@link https://matomo.org/docs/custom-variables/|Custom Variables}
         */
        /**
         * Deletes all custom variables.
         *
         * @see {\@link https://matomo.org/docs/custom-variables/|Custom Variables}
         * @param {?} scope Scope of the custom variables to delete.
         * @return {?}
         */
        MatomoTracker.prototype.deleteCustomVariables = /**
         * Deletes all custom variables.
         *
         * @see {\@link https://matomo.org/docs/custom-variables/|Custom Variables}
         * @param {?} scope Scope of the custom variables to delete.
         * @return {?}
         */
        function (scope) {
            try {
                window._paq.push(['deleteCustomVariables', scope]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Retrieves a custom variable.
         *
         * @param index Index of the custom variable to retrieve.
         * @param scope Scope of the custom variable to retrieve.
         * @returns Promise for the value of custom variable.
         * @see {@link https://matomo.org/docs/custom-variables/|Custom Variables}
         */
        /**
         * Retrieves a custom variable.
         *
         * @see {\@link https://matomo.org/docs/custom-variables/|Custom Variables}
         * @param {?} index Index of the custom variable to retrieve.
         * @param {?} scope Scope of the custom variable to retrieve.
         * @return {?} Promise for the value of custom variable.
         */
        MatomoTracker.prototype.getCustomVariable = /**
         * Retrieves a custom variable.
         *
         * @see {\@link https://matomo.org/docs/custom-variables/|Custom Variables}
         * @param {?} index Index of the custom variable to retrieve.
         * @param {?} scope Scope of the custom variable to retrieve.
         * @return {?} Promise for the value of custom variable.
         */
        function (index, scope) {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
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
        };
        /**
         * When called then the Custom Variables of scope "visit" will be stored (persisted) in a first party cookie
         * for the duration of the visit.<br />
         * This is useful if you want to call getCustomVariable later in the visit.<br />
         * (by default custom variables are not stored on the visitor's computer.)
         *
         * @see {@link https://matomo.org/docs/custom-variables/|Custom Variables}
         */
        /**
         * When called then the Custom Variables of scope "visit" will be stored (persisted) in a first party cookie
         * for the duration of the visit.<br />
         * This is useful if you want to call getCustomVariable later in the visit.<br />
         * (by default custom variables are not stored on the visitor's computer.)
         *
         * @see {\@link https://matomo.org/docs/custom-variables/|Custom Variables}
         * @return {?}
         */
        MatomoTracker.prototype.storeCustomVariablesInCookie = /**
         * When called then the Custom Variables of scope "visit" will be stored (persisted) in a first party cookie
         * for the duration of the visit.<br />
         * This is useful if you want to call getCustomVariable later in the visit.<br />
         * (by default custom variables are not stored on the visitor's computer.)
         *
         * @see {\@link https://matomo.org/docs/custom-variables/|Custom Variables}
         * @return {?}
         */
        function () {
            try {
                window._paq.push(['storeCustomVariablesInCookie']);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets a custom dimension.<br />
         * (requires Matomo 2.15.1 + Custom Dimensions plugin)
         *
         * @param customDimensionId ID of the custom dimension to set.
         * @param customDimensionValue Value to be set.
         * @see {@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
         */
        /**
         * Sets a custom dimension.<br />
         * (requires Matomo 2.15.1 + Custom Dimensions plugin)
         *
         * @see {\@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
         * @param {?} customDimensionId ID of the custom dimension to set.
         * @param {?} customDimensionValue Value to be set.
         * @return {?}
         */
        MatomoTracker.prototype.setCustomDimension = /**
         * Sets a custom dimension.<br />
         * (requires Matomo 2.15.1 + Custom Dimensions plugin)
         *
         * @see {\@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
         * @param {?} customDimensionId ID of the custom dimension to set.
         * @param {?} customDimensionValue Value to be set.
         * @return {?}
         */
        function (customDimensionId, customDimensionValue) {
            try {
                window._paq.push(['setCustomDimension', customDimensionId, customDimensionValue]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Deletes a custom dimension.<br />
         * (requires Matomo 2.15.1 + Custom Dimensions plugin)
         *
         * @param customDimensionId ID of the custom dimension to delete.
         * @see {@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
         */
        /**
         * Deletes a custom dimension.<br />
         * (requires Matomo 2.15.1 + Custom Dimensions plugin)
         *
         * @see {\@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
         * @param {?} customDimensionId ID of the custom dimension to delete.
         * @return {?}
         */
        MatomoTracker.prototype.deleteCustomDimension = /**
         * Deletes a custom dimension.<br />
         * (requires Matomo 2.15.1 + Custom Dimensions plugin)
         *
         * @see {\@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
         * @param {?} customDimensionId ID of the custom dimension to delete.
         * @return {?}
         */
        function (customDimensionId) {
            try {
                window._paq.push(['deleteCustomDimension', customDimensionId]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Retrieve a custom dimension.<br />
         * (requires Matomo 2.15.1 + Custom Dimensions plugin)
         *
         * @param customDimensionId ID of the custom dimension to retrieve.
         * @returns Promise for the value for the requested custom dimension.
         * @see {@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
         */
        /**
         * Retrieve a custom dimension.<br />
         * (requires Matomo 2.15.1 + Custom Dimensions plugin)
         *
         * @see {\@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
         * @param {?} customDimensionId ID of the custom dimension to retrieve.
         * @return {?} Promise for the value for the requested custom dimension.
         */
        MatomoTracker.prototype.getCustomDimension = /**
         * Retrieve a custom dimension.<br />
         * (requires Matomo 2.15.1 + Custom Dimensions plugin)
         *
         * @see {\@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
         * @param {?} customDimensionId ID of the custom dimension to retrieve.
         * @return {?} Promise for the value for the requested custom dimension.
         */
        function (customDimensionId) {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
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
        };
        /**
         * Sets campaign name parameter(s).
         *
         * @param name Name of the campaign
         * @see {@link https://matomo.org/docs/tracking-campaigns/|Campaigns}
         */
        /**
         * Sets campaign name parameter(s).
         *
         * @see {\@link https://matomo.org/docs/tracking-campaigns/|Campaigns}
         * @param {?} name Name of the campaign
         * @return {?}
         */
        MatomoTracker.prototype.setCampaignNameKey = /**
         * Sets campaign name parameter(s).
         *
         * @see {\@link https://matomo.org/docs/tracking-campaigns/|Campaigns}
         * @param {?} name Name of the campaign
         * @return {?}
         */
        function (name) {
            try {
                window._paq.push(['setCampaignNameKey', name]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets campaign keyword parameter(s).
         *
         * @param keyword Keyword parameter(s) of the campaign.
         * @see {@link https://matomo.org/docs/tracking-campaigns/|Campaigns}
         */
        /**
         * Sets campaign keyword parameter(s).
         *
         * @see {\@link https://matomo.org/docs/tracking-campaigns/|Campaigns}
         * @param {?} keyword Keyword parameter(s) of the campaign.
         * @return {?}
         */
        MatomoTracker.prototype.setCampaignKeywordKey = /**
         * Sets campaign keyword parameter(s).
         *
         * @see {\@link https://matomo.org/docs/tracking-campaigns/|Campaigns}
         * @param {?} keyword Keyword parameter(s) of the campaign.
         * @return {?}
         */
        function (keyword) {
            try {
                window._paq.push(['setCampaignKeywordKey', keyword]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Set to true to attribute a conversion to the first referrer.<br />
         * By default, conversion is attributed to the most recent referrer.
         *
         * @param conversionToFirstReferrer If true, Matomo will attribute the Goal conversion to the first referrer used
         * instead of the last one.
         * @see {@link https://matomo.org/docs/tracking-campaigns/|Campaigns}
         * @see {@link https://matomo.org/faq/general/faq_106/#faq_106|Conversions to the first referrer}
         */
        /**
         * Set to true to attribute a conversion to the first referrer.<br />
         * By default, conversion is attributed to the most recent referrer.
         *
         * @see {\@link https://matomo.org/docs/tracking-campaigns/|Campaigns} / {\@link https://matomo.org/faq/general/faq_106/#faq_106|Conversions to the first referrer}
         * @param {?} conversionToFirstReferrer If true, Matomo will attribute the Goal conversion to the first referrer used
         * instead of the last one.
         * @return {?}
         */
        MatomoTracker.prototype.setConversionAttributionFirstReferrer = /**
         * Set to true to attribute a conversion to the first referrer.<br />
         * By default, conversion is attributed to the most recent referrer.
         *
         * @see {\@link https://matomo.org/docs/tracking-campaigns/|Campaigns} / {\@link https://matomo.org/faq/general/faq_106/#faq_106|Conversions to the first referrer}
         * @param {?} conversionToFirstReferrer If true, Matomo will attribute the Goal conversion to the first referrer used
         * instead of the last one.
         * @return {?}
         */
        function (conversionToFirstReferrer) {
            try {
                window._paq.push(['setConversionAttributionFirstReferrer', conversionToFirstReferrer]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets the current page view as a product or category page view.<br />
         * When you call setEcommerceView, it must be followed by a call to trackPageView to record the product or category page view.
         *
         * @param productSKU SKU of the viewed product.
         * @param productName Name of the viewed product.
         * @param productCategory Category of the viewed product.
         * @param price Price of the viewed product.
         */
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
        MatomoTracker.prototype.setEcommerceView = /**
         * Sets the current page view as a product or category page view.<br />
         * When you call setEcommerceView, it must be followed by a call to trackPageView to record the product or category page view.
         *
         * @param {?} productSKU SKU of the viewed product.
         * @param {?} productName Name of the viewed product.
         * @param {?} productCategory Category of the viewed product.
         * @param {?} price Price of the viewed product.
         * @return {?}
         */
        function (productSKU, productName, productCategory, price) {
            try {
                window._paq.push(['setEcommerceView', productSKU, productName, productCategory, price]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Adds a product into the eCommerce order.<br />
         * Must be called for each product in the order.
         *
         * @param productSKU SKU of the product to add.
         * @param [productName] Optional name of the product to add.
         * @param [productCategory] Optional category of the product to add.
         * @param [price] Optional price of the product to add.
         * @param [quantity] Optional quantity of the product to add.
         */
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
        MatomoTracker.prototype.addEcommerceItem = /**
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
        function (productSKU, productName, productCategory, price, quantity) {
            try {
                /** @type {?} */
                var args = [productSKU];
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
                window._paq.push(__spread(['addEcommerceItem'], args));
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Tracks a shopping cart.<br />
         * Call this javascript function every time a user is adding, updating or deleting a product from the cart.
         *
         * @param grandTotal Grand total of the shopping cart.
         */
        /**
         * Tracks a shopping cart.<br />
         * Call this javascript function every time a user is adding, updating or deleting a product from the cart.
         *
         * @param {?} grandTotal Grand total of the shopping cart.
         * @return {?}
         */
        MatomoTracker.prototype.trackEcommerceCartUpdate = /**
         * Tracks a shopping cart.<br />
         * Call this javascript function every time a user is adding, updating or deleting a product from the cart.
         *
         * @param {?} grandTotal Grand total of the shopping cart.
         * @return {?}
         */
        function (grandTotal) {
            try {
                window._paq.push(['trackEcommerceCartUpdate', grandTotal]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Tracks an Ecommerce order, including any eCommerce item previously added to the order.<br />
         * orderId and grandTotal (ie.revenue) are required parameters.
         *
         * @param orderId ID of the tracked order.
         * @param grandTotal Grand total of the tracked order.
         * @param [subTotal] Sub total of the tracked order.
         * @param [tax] Taxes for the tracked order.
         * @param [shipping] Shipping fees for the tracked order.
         * @param [discount] Discount granted for the tracked order.
         */
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
        MatomoTracker.prototype.trackEcommerceOrder = /**
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
        function (orderId, grandTotal, subTotal, tax, shipping, discount) {
            try {
                /** @type {?} */
                var args = [orderId, grandTotal];
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
                window._paq.push(__spread(['trackEcommerceOrder'], args));
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Disables all first party cookies.<br />
         * Existing Matomo cookies for this websites will be deleted on the next page view.
         */
        /**
         * Disables all first party cookies.<br />
         * Existing Matomo cookies for this websites will be deleted on the next page view.
         * @return {?}
         */
        MatomoTracker.prototype.disableCookies = /**
         * Disables all first party cookies.<br />
         * Existing Matomo cookies for this websites will be deleted on the next page view.
         * @return {?}
         */
        function () {
            try {
                window._paq.push(['disableCookies']);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Deletes the tracking cookies currently set (useful when creating new visits).
         */
        /**
         * Deletes the tracking cookies currently set (useful when creating new visits).
         * @return {?}
         */
        MatomoTracker.prototype.deleteCookies = /**
         * Deletes the tracking cookies currently set (useful when creating new visits).
         * @return {?}
         */
        function () {
            try {
                window._paq.push(['deleteCookies']);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Returns whether cookies are enabled and supported by this browser.
         *
         * @returns Promise for the support and activation of cookies.
         */
        /**
         * Returns whether cookies are enabled and supported by this browser.
         *
         * @return {?} Promise for the support and activation of cookies.
         */
        MatomoTracker.prototype.hasCookies = /**
         * Returns whether cookies are enabled and supported by this browser.
         *
         * @return {?} Promise for the support and activation of cookies.
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
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
        };
        /**
         * Sets the tracking cookie name prefix.<br />
         * Default prefix is 'pk'.
         *
         * @param prefix Prefix for the tracking cookie names.
         */
        /**
         * Sets the tracking cookie name prefix.<br />
         * Default prefix is 'pk'.
         *
         * @param {?} prefix Prefix for the tracking cookie names.
         * @return {?}
         */
        MatomoTracker.prototype.setCookieNamePrefix = /**
         * Sets the tracking cookie name prefix.<br />
         * Default prefix is 'pk'.
         *
         * @param {?} prefix Prefix for the tracking cookie names.
         * @return {?}
         */
        function (prefix) {
            try {
                window._paq.push(['setCookieNamePrefix', prefix]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets the domain of the tracking cookies.<br />
         * Default is the document domain.<br />
         * If your website can be visited at both www.example.com and example.com, you would use: `'.example.com'` or `'*.example.com'`.
         *
         * @param domain Domain of the tracking cookies.
         */
        /**
         * Sets the domain of the tracking cookies.<br />
         * Default is the document domain.<br />
         * If your website can be visited at both www.example.com and example.com, you would use: `'.example.com'` or `'*.example.com'`.
         *
         * @param {?} domain Domain of the tracking cookies.
         * @return {?}
         */
        MatomoTracker.prototype.setCookieDomain = /**
         * Sets the domain of the tracking cookies.<br />
         * Default is the document domain.<br />
         * If your website can be visited at both www.example.com and example.com, you would use: `'.example.com'` or `'*.example.com'`.
         *
         * @param {?} domain Domain of the tracking cookies.
         * @return {?}
         */
        function (domain) {
            try {
                window._paq.push(['setCookieDomain', domain]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets the path of the tracking cookies.<br />
         * Default is '/'.
         *
         * @param path Path of the tracking cookies.
         */
        /**
         * Sets the path of the tracking cookies.<br />
         * Default is '/'.
         *
         * @param {?} path Path of the tracking cookies.
         * @return {?}
         */
        MatomoTracker.prototype.setCookiePath = /**
         * Sets the path of the tracking cookies.<br />
         * Default is '/'.
         *
         * @param {?} path Path of the tracking cookies.
         * @return {?}
         */
        function (path) {
            try {
                window._paq.push(['setCookiePath', path]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Set to true to enable the Secure cookie flag on all first party cookies.<br />
         * This should be used when your website is only available under HTTPS so that all tracking cookies are always sent
         * over secure connection.
         *
         * @param secure If true, the secure cookie flag will be set on all first party cookies.
         */
        /**
         * Set to true to enable the Secure cookie flag on all first party cookies.<br />
         * This should be used when your website is only available under HTTPS so that all tracking cookies are always sent
         * over secure connection.
         *
         * @param {?} secure If true, the secure cookie flag will be set on all first party cookies.
         * @return {?}
         */
        MatomoTracker.prototype.setSecureCookie = /**
         * Set to true to enable the Secure cookie flag on all first party cookies.<br />
         * This should be used when your website is only available under HTTPS so that all tracking cookies are always sent
         * over secure connection.
         *
         * @param {?} secure If true, the secure cookie flag will be set on all first party cookies.
         * @return {?}
         */
        function (secure) {
            try {
                window._paq.push(['setSecureCookie', secure]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets the visitor cookie timeout.<br />
         * Default is 13 months.
         *
         * @param timeout Timeout, in seconds, for the visitor cookie timeout.
         */
        /**
         * Sets the visitor cookie timeout.<br />
         * Default is 13 months.
         *
         * @param {?} timeout Timeout, in seconds, for the visitor cookie timeout.
         * @return {?}
         */
        MatomoTracker.prototype.setVisitorCookieTimeout = /**
         * Sets the visitor cookie timeout.<br />
         * Default is 13 months.
         *
         * @param {?} timeout Timeout, in seconds, for the visitor cookie timeout.
         * @return {?}
         */
        function (timeout) {
            try {
                window._paq.push(['setVisitorCookieTimeout', timeout]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets the referral cookie timeout.<br />
         * Default is 6 months.
         *
         * @param timeout Timeout, in seconds, for the referral cookie timeout.
         */
        /**
         * Sets the referral cookie timeout.<br />
         * Default is 6 months.
         *
         * @param {?} timeout Timeout, in seconds, for the referral cookie timeout.
         * @return {?}
         */
        MatomoTracker.prototype.setReferralCookieTimeout = /**
         * Sets the referral cookie timeout.<br />
         * Default is 6 months.
         *
         * @param {?} timeout Timeout, in seconds, for the referral cookie timeout.
         * @return {?}
         */
        function (timeout) {
            try {
                window._paq.push(['setReferralCookieTimeout', timeout]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets the session cookie timeout.<br />
         * Default is 30 minutes.
         *
         * @param timeout Timeout, in seconds, for the session cookie timeout.
         */
        /**
         * Sets the session cookie timeout.<br />
         * Default is 30 minutes.
         *
         * @param {?} timeout Timeout, in seconds, for the session cookie timeout.
         * @return {?}
         */
        MatomoTracker.prototype.setSessionCookieTimeout = /**
         * Sets the session cookie timeout.<br />
         * Default is 30 minutes.
         *
         * @param {?} timeout Timeout, in seconds, for the session cookie timeout.
         * @return {?}
         */
        function (timeout) {
            try {
                window._paq.push(['setSessionCookieTimeout', timeout]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Adds a click listener to a specific link element.<br />
         * When clicked, Matomo will log the click automatically.
         *
         * @param element Element on which to add a click listener.
         */
        /**
         * Adds a click listener to a specific link element.<br />
         * When clicked, Matomo will log the click automatically.
         *
         * @param {?} element Element on which to add a click listener.
         * @return {?}
         */
        MatomoTracker.prototype.addListener = /**
         * Adds a click listener to a specific link element.<br />
         * When clicked, Matomo will log the click automatically.
         *
         * @param {?} element Element on which to add a click listener.
         * @return {?}
         */
        function (element) {
            try {
                window._paq.push(['addListener', element]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets the request method to either "GET" or "POST". (The default is "GET".)<br />
         * To use the POST request method, either:<br />
         * 1) the Matomo host is the same as the tracked website host (Matomo installed in the same domain as your tracked website), or<br />
         * 2) if Matomo is not installed on the same host as your website, you need to enable CORS (Cross domain requests).
         *
         * @param method HTTP method for sending information to the Matomo server.
         */
        /**
         * Sets the request method to either "GET" or "POST". (The default is "GET".)<br />
         * To use the POST request method, either:<br />
         * 1) the Matomo host is the same as the tracked website host (Matomo installed in the same domain as your tracked website), or<br />
         * 2) if Matomo is not installed on the same host as your website, you need to enable CORS (Cross domain requests).
         *
         * @param {?} method HTTP method for sending information to the Matomo server.
         * @return {?}
         */
        MatomoTracker.prototype.setRequestMethod = /**
         * Sets the request method to either "GET" or "POST". (The default is "GET".)<br />
         * To use the POST request method, either:<br />
         * 1) the Matomo host is the same as the tracked website host (Matomo installed in the same domain as your tracked website), or<br />
         * 2) if Matomo is not installed on the same host as your website, you need to enable CORS (Cross domain requests).
         *
         * @param {?} method HTTP method for sending information to the Matomo server.
         * @return {?}
         */
        function (method) {
            try {
                window._paq.push(['setRequestMethod', method]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets a function that will process the request content.<br />
         * The function will be called once the request (query parameters string) has been prepared, and before the request content is sent.
         *
         * @param callback Function that will process the request content.
         */
        /**
         * Sets a function that will process the request content.<br />
         * The function will be called once the request (query parameters string) has been prepared, and before the request content is sent.
         *
         * @param {?} callback Function that will process the request content.
         * @return {?}
         */
        MatomoTracker.prototype.setCustomRequestProcessing = /**
         * Sets a function that will process the request content.<br />
         * The function will be called once the request (query parameters string) has been prepared, and before the request content is sent.
         *
         * @param {?} callback Function that will process the request content.
         * @return {?}
         */
        function (callback) {
            try {
                window._paq.push(['setCustomRequestProcessing', callback]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        /**
         * Sets request Content-Type header value.<br />
         * Applicable when "POST" request method is used via setRequestMethod.
         *
         * @param contentType Value for Content-Type HTTP header.
         */
        /**
         * Sets request Content-Type header value.<br />
         * Applicable when "POST" request method is used via setRequestMethod.
         *
         * @param {?} contentType Value for Content-Type HTTP header.
         * @return {?}
         */
        MatomoTracker.prototype.setRequestContentType = /**
         * Sets request Content-Type header value.<br />
         * Applicable when "POST" request method is used via setRequestMethod.
         *
         * @param {?} contentType Value for Content-Type HTTP header.
         * @return {?}
         */
        function (contentType) {
            try {
                window._paq.push(['setRequestContentType', contentType]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        };
        MatomoTracker.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        MatomoTracker.ctorParameters = function () { return []; };
        return MatomoTracker;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatomoModule = /** @class */ (function () {
        function MatomoModule() {
        }
        MatomoModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [],
                        exports: [],
                        providers: [MatomoInjector, MatomoTracker]
                    },] }
        ];
        return MatomoModule;
    }());

    exports.MatomoInjector = MatomoInjector;
    exports.MatomoModule = MatomoModule;
    exports.MatomoTracker = MatomoTracker;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-matomo.umd.js.map
