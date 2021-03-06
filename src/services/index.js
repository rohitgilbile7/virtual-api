const virtualProductMaster = require('./virtual-product-master/virtual-product-master.service.js');
const virtualProduct = require('./virtual-product/virtual-product.service.js');
const customProduct = require('./custom-product/custom-product.service.js');
const uploadImage = require('./upload-image/upload-image.service.js');
const uploadHistory = require('./upload-history/upload-history.service.js');
const postData = require('./post-data/post-data.service.js');
const fontFamily = require('./font-family/font-family.service.js');
const productExist = require('./product-exist/product-exist.service.js');
const supplierMaster = require('./supplier-master/supplier-master.service.js');
const virtualImprintMethod = require('./virtual-imprint-method/virtual-imprint-method.service.js');
const virtualProductImprint = require('./virtual-product-imprint/virtual-product-imprint.service.js');
const virtualProductImages = require('./virtual-product-images/virtual-product-images.service.js');
const productColor = require('./product-color/product-color.service.js');
const productDetails = require('./product-details/product-details.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(virtualProductMaster);
  app.configure(virtualProduct);
  app.configure(customProduct);
  app.configure(uploadImage);
  app.configure(uploadHistory);
  app.configure(postData);
  app.configure(fontFamily);
  app.configure(productExist);
  app.configure(supplierMaster);
  app.configure(virtualImprintMethod);
  app.configure(virtualProductImprint);
  app.configure(virtualProductImages);
  app.configure(productColor);
  app.configure(productDetails);
};
