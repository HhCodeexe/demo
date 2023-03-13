"use strict";
const common_vendor = require("../../common/vendor.js");
require("./dist/alibabacloud-iot-device-sdk.js");
const _sfc_main = {
  data() {
    return {
      title: "demo001"
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/studysoftware/HBuilder/demo001/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
