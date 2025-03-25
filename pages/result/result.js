// 导入插座数据
const { socketTypes, getConversionInfo } = require('../../data/socketData');
const { countries } = require('../../data/countries');

Page({
  data: {
    sourceCountry: '',
    targetCountry: '',
    sourceData: {},
    targetData: {},
    sourceSocketTypes: [],
    targetSocketTypes: [],
    commonSocketTypes: [],
    conversionInfo: {}
  },
  
  onLoad: function(options) {
    const { source, target } = options;

    // 根据code获取国家
    const sourceCountry = countries.find(country => country.code === source);
    const targetCountry = countries.find(country => country.code === target);

    if (!sourceCountry || !targetCountry) {
      wx.showToast({
        title: '参数错误',
        icon: 'none'
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
      return;
    }
    
    // 获取源国家和目标国家的插座数据
    const sourceData = sourceCountry;
    const targetData = targetCountry;
    
    // 获取插座类型详细信息
    const sourceSocketTypes = sourceCountry.socketTypes.map(type => socketTypes[type]);
    const targetSocketTypes = targetCountry.socketTypes.map(type => socketTypes[type]);
    
    // 获取转换信息
    const conversionInfo = getConversionInfo(source, target);
    
    // 获取共同支持的插座类型
    const commonSocketTypes = conversionInfo.commonTypes ? 
      conversionInfo.commonTypes.map(type => socketTypes[type]) : [];
    
    console.log(conversionInfo);
    console.log(commonSocketTypes);
    this.setData({
      sourceData,
      targetData,
      sourceSocketTypes,
      targetSocketTypes,
      commonSocketTypes,
      conversionInfo
    });
  },
  
  backToIndex: function() {
    wx.navigateBack();
  }
}); 