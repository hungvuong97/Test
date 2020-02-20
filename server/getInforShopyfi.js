const getInforShopyfi = async (ctx, accesstoken, shop) => {
     await fetch(`https://${shop}/admin/api/2020-01/storefront_access_tokens.json`).then((val) => {
        console.log(val.json())
        return val.json()
    })
    // console.log(await response;
    
}
module.exports =  getInforShopyfi;