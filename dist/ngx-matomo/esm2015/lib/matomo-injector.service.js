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
export class MatomoInjector {
    /**
     * Creates an instance of MatomoInjector.
     *
     * @param {?} platformId Angular description of the platform.
     */
    constructor(platformId) {
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
     * @param {?} url URL of the Matomo instance to connect to.
     * @param {?} id SiteId for this application/site.
     * @param {?=} scriptUrl
     * @param {?=} skipTrackingInitialPageView
     * @return {?}
     */
    init(url, id, scriptUrl, skipTrackingInitialPageView) {
        if (isPlatformBrowser(this.platformId)) {
            if (!skipTrackingInitialPageView) {
                window._paq.push(['trackPageView']);
            }
            window._paq.push(['enableLinkTracking']);
            ((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const u = url;
                window._paq.push(['setTrackerUrl', u + 'piwik.php']);
                window._paq.push(['setSiteId', id.toString()]);
                /** @type {?} */
                const d = document;
                /** @type {?} */
                const g = d.createElement('script');
                /** @type {?} */
                const s = d.getElementsByTagName('script')[0];
                g.type = 'text/javascript';
                g.async = true;
                g.defer = true;
                g.src = !!scriptUrl ? scriptUrl : u + 'piwik.js';
                s.parentNode.insertBefore(g, s);
            }))();
        }
    }
}
MatomoInjector.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MatomoInjector.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatomoInjector.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0b21vLWluamVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0b21vLyIsInNvdXJjZXMiOlsibGliL21hdG9tby1pbmplY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7OztBQWlCcEQsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQU16QixZQUF5QyxVQUFVO1FBQVYsZUFBVSxHQUFWLFVBQVUsQ0FBQTtRQUNqRCxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQ2pDO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDOzs7Ozs7Ozs7O0lBVUQsSUFBSSxDQUFDLEdBQVcsRUFBRSxFQUFVLEVBQUUsU0FBa0IsRUFBRSwyQkFBcUM7UUFDckYsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLDJCQUEyQixFQUFFO2dCQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7YUFDckM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztZQUN6Qzs7O1lBQUMsR0FBRyxFQUFFOztzQkFDRSxDQUFDLEdBQUcsR0FBRztnQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzs7c0JBQ3pDLENBQUMsR0FBRyxRQUFROztzQkFDWixDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7O3NCQUM3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsQ0FBQyxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQ2pELENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1NBQ047SUFDSCxDQUFDOzs7WUEzQ0YsVUFBVTs7Ozs0Q0FPSSxNQUFNLFNBQUMsV0FBVzs7Ozs7OztJQUFuQixvQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8qKlxuICogQWNjZXNzIHRvIHRoZSBnbG9iYWwgd2luZG93IHZhcmlhYmxlLlxuICovXG5kZWNsYXJlIHZhciB3aW5kb3c6IHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuICBwcm90b3R5cGU6IFdpbmRvdztcbiAgbmV3ICgpOiBXaW5kb3c7XG59O1xuXG4vKipcbiAqIFNlcnZpY2UgZm9yIGluamVjdGluZyB0aGUgTWF0b21vIHRyYWNrZXIgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICpcbiAqIEBleHBvcnRcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hdG9tb0luamVjdG9yIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTWF0b21vSW5qZWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSBwbGF0Zm9ybUlkIEFuZ3VsYXIgZGVzY3JpcHRpb24gb2YgdGhlIHBsYXRmb3JtLlxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHdpbmRvdy5fcGFxID0gd2luZG93Ll9wYXEgfHwgW107XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignTWF0b21vSW5qZWN0b3IgY2FuXFwndCBiZSB1c2VkIG9uIHNlcnZlciBwbGF0Zm9ybScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmplY3RzIHRoZSBNYXRvbW8gdHJhY2tlciBpbiB0aGUgRE9NLlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIFVSTCBvZiB0aGUgTWF0b21vIGluc3RhbmNlIHRvIGNvbm5lY3QgdG8uXG4gICAqIEBwYXJhbSBpZCBTaXRlSWQgZm9yIHRoaXMgYXBwbGljYXRpb24vc2l0ZS5cbiAgICogQHBhcmFtIFtzY3JpcHRVcmxdIE9wdGlvbmFsIFVSTCBmb3IgdGhlIGBwaXdpay5qc2AvYG1hdG9tby5qc2Agc2NyaXB0IGluIGNhc2UgaXQgaXMgbm90IGF0IGl0cyBkZWZhdWx0IGxvY2F0aW9uLlxuICAgKiBAcGFyYW0gW3NraXBUcmFja2luZ0luaXRpYWxQYWdlVmlld10gT3B0aW9uYWwgYm9vbGVhbiB3aGljaCwgaWYgdHJ1ZSwgd2lsbCBwcmV2ZW50IHRyYWNraW5nIHRoZSBpbml0aWFsIHBhZ2UgYXMgcGFydCBvZiBpbml0XG4gICAqL1xuICBpbml0KHVybDogc3RyaW5nLCBpZDogbnVtYmVyLCBzY3JpcHRVcmw/OiBzdHJpbmcsIHNraXBUcmFja2luZ0luaXRpYWxQYWdlVmlldz86IGJvb2xlYW4pIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgaWYgKCFza2lwVHJhY2tpbmdJbml0aWFsUGFnZVZpZXcpIHtcbiAgICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3RyYWNrUGFnZVZpZXcnXSk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuX3BhcS5wdXNoKFsnZW5hYmxlTGlua1RyYWNraW5nJ10pO1xuICAgICAgKCgpID0+IHtcbiAgICAgICAgY29uc3QgdSA9IHVybDtcbiAgICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldFRyYWNrZXJVcmwnLCB1ICsgJ3Bpd2lrLnBocCddKTtcbiAgICAgICAgd2luZG93Ll9wYXEucHVzaChbJ3NldFNpdGVJZCcsIGlkLnRvU3RyaW5nKCldKTtcbiAgICAgICAgY29uc3QgZCA9IGRvY3VtZW50O1xuICAgICAgICBjb25zdCBnID0gZC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgY29uc3QgcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgICAgICBnLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgZy5hc3luYyA9IHRydWU7XG4gICAgICAgIGcuZGVmZXIgPSB0cnVlO1xuICAgICAgICBnLnNyYyA9ICEhc2NyaXB0VXJsID8gc2NyaXB0VXJsIDogdSArICdwaXdpay5qcyc7XG4gICAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZywgcyk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgfVxufVxuIl19