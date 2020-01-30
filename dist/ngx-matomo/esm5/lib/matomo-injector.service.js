/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
        if (isPlatformBrowser(this.platformId)) {
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
        if (isPlatformBrowser(this.platformId)) {
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
        { type: Injectable }
    ];
    /** @nocollapse */
    MatomoInjector.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return MatomoInjector;
}());
export { MatomoInjector };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatomoInjector.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0b21vLWluamVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0b21vLyIsInNvdXJjZXMiOlsibGliL21hdG9tby1pbmplY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7OztBQWdCcEQ7SUFFRTs7OztPQUlHO0lBQ0gsd0JBQXlDLFVBQVU7UUFBVixlQUFVLEdBQVYsVUFBVSxDQUFBO1FBQ2pELElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7U0FDakM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7O0lBQ0gsNkJBQUk7Ozs7Ozs7OztJQUFKLFVBQUssR0FBVyxFQUFFLEVBQVUsRUFBRSxTQUFrQixFQUFFLDJCQUFxQztRQUNyRixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsMkJBQTJCLEVBQUU7Z0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzthQUNyQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1lBQ3pDOzs7WUFBQzs7b0JBQ08sQ0FBQyxHQUFHLEdBQUc7Z0JBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7O29CQUN6QyxDQUFDLEdBQUcsUUFBUTs7b0JBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDOztvQkFDN0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLENBQUMsQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNmLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNmLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUNqRCxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztTQUNOO0lBQ0gsQ0FBQzs7Z0JBM0NGLFVBQVU7Ozs7Z0RBT0ksTUFBTSxTQUFDLFdBQVc7O0lBcUNqQyxxQkFBQztDQUFBLEFBNUNELElBNENDO1NBM0NZLGNBQWM7Ozs7OztJQU1iLG9DQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqXG4gKiBBY2Nlc3MgdG8gdGhlIGdsb2JhbCB3aW5kb3cgdmFyaWFibGUuXG4gKi9cbmRlY2xhcmUgdmFyIHdpbmRvdzoge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIHByb3RvdHlwZTogV2luZG93O1xuICBuZXcgKCk6IFdpbmRvdztcbn07XG5cbi8qKlxuICogU2VydmljZSBmb3IgaW5qZWN0aW5nIHRoZSBNYXRvbW8gdHJhY2tlciBpbiB0aGUgYXBwbGljYXRpb24uXG4gKlxuICogQGV4cG9ydFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWF0b21vSW5qZWN0b3Ige1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBNYXRvbW9JbmplY3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHBsYXRmb3JtSWQgQW5ndWxhciBkZXNjcmlwdGlvbiBvZiB0aGUgcGxhdGZvcm0uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQpIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgd2luZG93Ll9wYXEgPSB3aW5kb3cuX3BhcSB8fCBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdNYXRvbW9JbmplY3RvciBjYW5cXCd0IGJlIHVzZWQgb24gc2VydmVyIHBsYXRmb3JtJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluamVjdHMgdGhlIE1hdG9tbyB0cmFja2VyIGluIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgVVJMIG9mIHRoZSBNYXRvbW8gaW5zdGFuY2UgdG8gY29ubmVjdCB0by5cbiAgICogQHBhcmFtIGlkIFNpdGVJZCBmb3IgdGhpcyBhcHBsaWNhdGlvbi9zaXRlLlxuICAgKiBAcGFyYW0gW3NjcmlwdFVybF0gT3B0aW9uYWwgVVJMIGZvciB0aGUgYHBpd2lrLmpzYC9gbWF0b21vLmpzYCBzY3JpcHQgaW4gY2FzZSBpdCBpcyBub3QgYXQgaXRzIGRlZmF1bHQgbG9jYXRpb24uXG4gICAqIEBwYXJhbSBbc2tpcFRyYWNraW5nSW5pdGlhbFBhZ2VWaWV3XSBPcHRpb25hbCBib29sZWFuIHdoaWNoLCBpZiB0cnVlLCB3aWxsIHByZXZlbnQgdHJhY2tpbmcgdGhlIGluaXRpYWwgcGFnZSBhcyBwYXJ0IG9mIGluaXRcbiAgICovXG4gIGluaXQodXJsOiBzdHJpbmcsIGlkOiBudW1iZXIsIHNjcmlwdFVybD86IHN0cmluZywgc2tpcFRyYWNraW5nSW5pdGlhbFBhZ2VWaWV3PzogYm9vbGVhbikge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBpZiAoIXNraXBUcmFja2luZ0luaXRpYWxQYWdlVmlldykge1xuICAgICAgICB3aW5kb3cuX3BhcS5wdXNoKFsndHJhY2tQYWdlVmlldyddKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5fcGFxLnB1c2goWydlbmFibGVMaW5rVHJhY2tpbmcnXSk7XG4gICAgICAoKCkgPT4ge1xuICAgICAgICBjb25zdCB1ID0gdXJsO1xuICAgICAgICB3aW5kb3cuX3BhcS5wdXNoKFsnc2V0VHJhY2tlclVybCcsIHUgKyAncGl3aWsucGhwJ10pO1xuICAgICAgICB3aW5kb3cuX3BhcS5wdXNoKFsnc2V0U2l0ZUlkJywgaWQudG9TdHJpbmcoKV0pO1xuICAgICAgICBjb25zdCBkID0gZG9jdW1lbnQ7XG4gICAgICAgIGNvbnN0IGcgPSBkLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBjb25zdCBzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICAgIGcudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBnLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgZy5kZWZlciA9IHRydWU7XG4gICAgICAgIGcuc3JjID0gISFzY3JpcHRVcmwgPyBzY3JpcHRVcmwgOiB1ICsgJ3Bpd2lrLmpzJztcbiAgICAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShnLCBzKTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICB9XG59XG4iXX0=