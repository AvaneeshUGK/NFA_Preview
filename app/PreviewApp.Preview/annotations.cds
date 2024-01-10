using PreviewAppService as service from '../../srv/service';

annotate service.VendorPriceComp with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : Itemname,
            Label : 'Itemname',
        },
        {
            $Type : 'UI.DataField',
            Value : Guruprasad,
            Label : 'Guruprasad',
        },
        {
            $Type : 'UI.DataField',
            Value : Supplier_Demo2,
            Label : 'Supplier_Demo2',
        },
    ]
);
annotate service.VendorPriceComp with @(
    UI.HeaderFacets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Vendor Price Comparison',
            ID : 'VendorPriceComparison',
            Target : '@UI.FieldGroup#VendorPriceComparison1',
        },],
    UI.FieldGroup #VendorPriceComparison : {
        $Type : 'UI.FieldGroupType',
        Data : [],
    }
);
annotate service.VendorPriceComp with @(
    UI.FieldGroup #VendorPriceComparison1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
        ],
    }
);
annotate service.VendorPriceComp with @(
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Table View',
    },
    UI.LineItem #tableView : [
    ],
    UI.SelectionPresentationVariant #tableView1 : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Table View 1',
    }
);
annotate service.VendorPriceComp with @(
    UI.SelectionFields : [
        Itemname,
    ]
);
annotate service.VendorPriceComp with {
    Itemname @Common.Label : 'Itemname'
};
