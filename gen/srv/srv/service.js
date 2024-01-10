const cds = require('@sap/cds');
module.exports = cds.service.impl(async function () {
    /*** SERVICE ENTITIES ***/
    const {
        VendorPriceComp,
        Source_Events, Comments
    } = this.entities;

    const c4re = await cds.connect.to('iflow');
    var firstRead = true;
    var firstSourceRead = true;

    /*** SERVICE HANDLERS ***/
    // this.before('READ',VendorPriceComp, async (req) => {
    //     try {
    //         // if (firstRead) {
    //             const event_id = req.params[0].event_id
    //             let query = '/dev/getPreview?event_id=' + event_id.toString();
    //             const resp = await c4re.get(query);
    //             await cds.tx(req).run(DELETE(VendorPriceComp));
    //             console.log(resp);
    //             const spaces = resp.data;
    //             const entries = [];
    //             if (spaces.length == 0 || spaces == undefined){

    //             } else {
    //                 spaces.forEach(space => {
    //                     entries.push({
    //                         event_id: event_id,
    //                       Itemname:space.Itemname,
    //                       Guruprasad:space.Guruprasad,
    //                       Supplier_Demo2:space.Supplier_Demo2
    //                     });
    //                 });
    //                 await cds.tx(req).run(INSERT.into(VendorPriceComp).entries(entries));
    //             }
                
                
    //             // firstRead = false;
    //         // }
    //         return req;
    //     } catch (err) {
    //         // req.error(500, err.message);
    //         return req;
    //     }
    // });



    // Source Events


    this.before('READ', Source_Events, async (req) => {
        try {
            if (firstSourceRead) {
                const resp = await c4re.get('/dev/GetSourceEvents');
                await cds.tx(req).run(DELETE(Source_Events));
                const spaces = resp.data;
                const entries = [];
                spaces.forEach(space => {
                    let criticality

                    if ( space.Srcevtname )
                    {
                        criticality = 5
                    }

                    if ( space.status === 'Completed' )
                     {
                        criticality = 3  
                     }                    
                    else if (space.status === 'Pending Selection' || space.status === 'Paused')
                    {
                        criticality = 2
                    }
                    else
                    {
                        criticality = 1
                    }
                    entries.push({
                        status:space.status,
                        Version:space.Version,
                        Srcevtname: space.Srcevtname,
                        Createdby: space.Createdby,
                        Desc: space.Desc,
                        event_id: space.event_id,
                        criticality: criticality
                    });                    
                });
                await cds.tx(req).run(INSERT.into(Source_Events).entries(entries));
                firstSourceRead = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    this.before ('EDIT', 'Source_Events', async req => {
        const { event_id } = req.data
        for (let a=0; a<i;a++){
            // const ar = req.data.Source_Events; 
            // const inv = ar[a].event_id;
            // let invoiceval = Number(inv);
            // const p_id = ar[a].CommodityCode;
            const { id } = await SELECT.one `event_id as id`.from (Source_Events).where ({event_id:event_id});
            // console.log(vari);
            ar[a].event_id = id
            // ar[a].Variance = 
            
        // }
//
            

        }
      });

});


