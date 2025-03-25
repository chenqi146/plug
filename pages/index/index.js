// index.js
import { countries } from '../../data/countries';

Page({
  data: {
    countries: countries,
    sourceCountry: '',
    sourceCode: '',
    sourceIndex: 0,
    targetCountry: '',
    targetCode: '',
    targetIndex: 0,
    // 搜索相关数据
    showSearchModal: false,
    searchType: 'source', // 'source' 或 'target'
    searchKeyword: '',
    filteredCountries: []
  },
  onLoad() {
    // 页面加载时执行
    // 默认选择中国作为源国家
    const china = this.data.countries.find(country => country.code === 'CN');
    const chinaIndex = this.data.countries.findIndex(country => country.code === 'CN');
    this.setData({
      sourceCountry: china.name,
      sourceCode: china.code,
      sourceIndex: chinaIndex
    });
    
    // 初始化filteredCountries，添加原始索引以便选择时使用
    this.initFilteredCountries();
  },
  
  // 初始化国家列表，添加原始索引
  initFilteredCountries() {
    const countriesWithIndex = this.data.countries.map((country, index) => {
      return {
        ...country,
        originalIndex: index
      };
    });
    
    this.setData({
      filteredCountries: countriesWithIndex
    });
  },
  
  // 显示源国家搜索弹窗
  showSourceSearch() {
    this.setData({
      showSearchModal: true,
      searchType: 'source',
      searchKeyword: '',
    });
    this.initFilteredCountries();
  },
  
  // 显示目标国家搜索弹窗
  showTargetSearch() {
    this.setData({
      showSearchModal: true,
      searchType: 'target',
      searchKeyword: '',
    });
    this.initFilteredCountries();
  },
  
  // 隐藏搜索弹窗
  hideSearchModal() {
    this.setData({
      showSearchModal: false
    });
  },
  
  // 清除搜索框内容
  clearSearch() {
    this.setData({
      searchKeyword: ''
    });
    this.initFilteredCountries();
  },
  
  // 搜索输入事件
  onSearchInput(e) {
    const keyword = e.detail.value.trim().toLowerCase();
    this.setData({
      searchKeyword: e.detail.value
    });
    
    if (!keyword) {
      // 如果关键词为空，显示所有国家
      this.initFilteredCountries();
      return;
    }
    
    // 过滤国家列表
    const filtered = this.data.countries.map((country, index) => {
      return {
        ...country,
        originalIndex: index
      };
    }).filter(country => {
      return country.name.toLowerCase().includes(keyword) || 
             country.code.toLowerCase().includes(keyword);
    });
    
    this.setData({
      filteredCountries: filtered
    });
  },
  
  // 选择国家
  selectCountry(e) {
    const originalIndex = e.currentTarget.dataset.index;
    const country = this.data.countries[originalIndex];
    
    if (this.data.searchType === 'source') {
      this.setData({
        sourceCountry: country.name,
        sourceCode: country.code,
        sourceIndex: originalIndex
      });
    } else {
      this.setData({
        targetCountry: country.name,
        targetCode: country.code,
        targetIndex: originalIndex
      });
    }
    
    // 关闭弹窗
    this.hideSearchModal();
  },
  
  // 保留原有方法供向下兼容
  bindSourceChange(e) {
    const index = e.detail.value;
    this.setData({
      sourceIndex: index,
      sourceCountry: this.data.countries[index].name,
      sourceCode: this.data.countries[index].code
    });
  },
  
  bindTargetChange(e) {
    const index = e.detail.value;
    this.setData({
      targetIndex: index,
      targetCountry: this.data.countries[index].name,
      targetCode: this.data.countries[index].code
    });
  },
  
  checkConversion() {
    if (!this.data.sourceCountry || !this.data.targetCountry) {
      wx.showToast({
        title: '请选择源国家和目标国家',
        icon: 'none'
      });
      return;
    }
    
    // 跳转到结果页面
    wx.navigateTo({
      url: `/pages/result/result?source=${this.data.sourceCode}&target=${this.data.targetCode}`
    });
  }
})
