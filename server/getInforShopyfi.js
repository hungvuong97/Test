
const Infor = require('../model/info');
const getInforShopyfi = async (ctx, accessToken, shop) => {
  const test = {
      "id": 879921427,
      "tax": 0.1
  }
    const response = await fetch(`https://${shop}/admin/api/2020-01/shop.json`, {
        method: 'GET',
        headers: {
          // 'Content-Type': 'application/json',
          "X-Shopify-Access-Token": accessToken,
        },
        // body: test?
      })
    
      const responseJson = await response.json();
      const newInfor = new Infor({
        access_token: accessToken,
        domain: responseJson.shop.domain,
        customer_email: responseJson.shop.customer_email
      });
      newInfor.save();
      console.log(newInfor)
      ctx.response.status = 200;
      ctx.response.body = 'success'
      // console.log(responseJson.shop.name, accessToken)


}
module.exports = getInforShopyfi;