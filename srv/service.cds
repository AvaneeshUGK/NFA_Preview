using { PreviewApp as my } from '../db/schema';

using PreviewApp from '../db/schema';

@path : '/service/PreviewApp'
service PreviewAppService
{
    @readonly
    entity VendorPriceComp as
        projection on my.VendorPriceComp;

    // @readonly
    @odata.draft.enabled
    entity Source_Events as
        projection on my.Source_Events;

    // @odata.draft.enabled
    entity Comments as
        projection on my.Comments;
}
