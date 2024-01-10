using PreviewAppService as service from '../../srv/service';

annotate service.Source_Events with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'event_id',
            Value : event_id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Srcevtname',
            Value : Srcevtname,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Createdby',
            Value : Createdby,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Desc',
            Value : Desc,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Version',
            Value : Version,
        },
    ]
);

annotate service.Source_Events {
    event_id @Core.Immutable ;
    Srcevtname @Core.Immutable;
    Createdby @Core.Immutable;
    Desc @Core.Immutable;
    Version @Core.Immutable;
} ;

annotate service.Source_Events with @Common.SemanticKey : [ event_id ];

annotate service.Source_Events with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'event_id',
                Value : event_id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Srcevtname',
                Value : Srcevtname,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Createdby',
                Value : Createdby,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Desc',
                Value : Desc,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Version',
                Value : Version,
            },
            {
                $Type : 'UI.DataField',
                Label : 'status',
                Value : status,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Questions',
            ID : 'Questions',
            Target : 'vendorpc/@UI.LineItem#Questions',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Vendor Price Comparison',
            ID : 'VendorPriceComparison',
            Target : 'vendorpc/@UI.LineItem#VendorPriceComparison',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Comments',
            ID : 'Comments',
            Target : '@UI.FieldGroup#Comments1',
        },
    ]
);
annotate service.VendorPriceComp with @(
    UI.LineItem #VendorPriceComparison : [
        {
            $Type : 'UI.DataField',
            Value : Itemname,
        },
        {
            $Type : 'UI.DataField',
            Value : Guruprasad,
            Label : 'Guruprasad',
        },{
            $Type : 'UI.DataField',
            Value : Supplier_Demo2,
            Label : 'Supplier_Demo2',
        },]
);
annotate service.Source_Events with @(
    UI.HeaderFacets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Vendor Price Comparison',
            ID : 'ProjectDetails',
            Target : '@UI.FieldGroup#ProjectDetails',
        },
    ],
    UI.FieldGroup #ProjectDetails : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : Srcevtname,
                Label : 'Source Event Name',
            },{
                $Type : 'UI.DataField',
                Value : Desc,
                Label : 'Description',
            },],
    }
);
annotate service.Source_Events with @(
    UI.FieldGroup #Comments : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : Comment.Comments,
                Label : 'Comments',
            },],
    }
);

annotate service.Comments with @(
    UI.LineItem #Comments : [
        {
            $Type : 'UI.DataField',
            Value : Comments,
            Label : 'Comments',
        },]
);
annotate service.Source_Events with @(
    UI.FieldGroup #Comments1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : Comment.Comments,
            },],
    }
);
annotate service.Source_Events with @(
  Capabilities: { 
    InsertRestrictions: {
      Insertable: True
    },
    DeleteRestrictions: {
      Deletable: True
    }
  }
);

annotate service.Comments with @(
    UI.LineItem #Comments1 : [
        {
            $Type : 'UI.DataField',
            Value : Comments,
            Label : 'Comments',
        },]
);
annotate service.Comments with {
    Comments @UI.MultiLineText : true
};
annotate service.Comments with {
    Comments @Common.FieldControl : #Mandatory
};
annotate service.Comments with {
    Comments @Common.EditableFieldFor
};
annotate service.Source_Events with @(
    Communication.Contact #contact : {
        $Type : 'Communication.ContactType',
        fn : Createdby,
    }
);
annotate service.VendorPriceComp with @(
    UI.LineItem #Questions : [
    ]
);
annotate service.Comments with {
    event_id @UI.MultiLineText : true
};
annotate service.Comments with {
    event_id @Common.FieldControl : #Mandatory
};
