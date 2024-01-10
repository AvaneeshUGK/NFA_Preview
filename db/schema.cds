namespace PreviewApp;

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    extensible,
    managed,
    temporal
}
from '@sap/cds/common';

entity Source_Events
{
    key event_id : String;
    Srcevtname : String
        @readonly;
    Createdby : String(50)
        @readonly;
    Desc : String(100)
        @readonly;
    Version : String(10)
        @readonly;
    status : String(100)
        @readonly;
    criticality : Integer
        @readonly;
    vendorpc : Association to many VendorPriceComp on vendorpc.Source_Events = $self
        @readonly;
    Comment : Composition of many Comments on Comment.Source_Events = $self;
}

entity VendorPriceComp
{
    Itemname : String(100);
    Guruprasad : Decimal(8,2);
    Supplier_Demo2 : Decimal(8,2);
    event_id : String;
    Source_Events : Association to one Source_Events on Source_Events.event_id = event_id;
}

entity Comments
{
    Comments : String(5000) @Consumption.editable;
    key event_id : String;
    Source_Events : Association to one Source_Events on Source_Events.event_id = event_id;
}
