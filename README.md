# 国家插座转换工具

这是一款微信小程序，帮助用户查询不同国家之间的电源插座转换信息，方便旅行者了解是否需要准备转换插头。

## 主要功能

1. **国家选择**：选择源国家（设备来源国）和目标国家（旅行目的地）
2. **转换信息**：查看两国之间的插座类型兼容性和电压差异
3. **国家搜索**：支持快速搜索国家名称或代码，方便用户选择

## 使用方法

1. 在首页选择您的设备来源国（默认为中国）
2. 选择您要前往的目标国家
3. 点击"查看转换信息"按钮查看插座转换详情

## 搜索功能

- 点击国家选择框右侧的搜索图标🔍打开搜索弹窗
- 在搜索框中输入国家名称或代码（如"中国"或"CN"）
- 实时显示匹配的国家列表
- 点击国家名称进行选择

## 数据说明

本工具包含了全球主要国家的插座类型和电压信息：
- 插座类型标准：A、B、C、D、E、F、G、H、I、J、K、L、M、N、O等
- 电压标准：100V、110V、120V、220V、230V、240V等

## 技术实现

- 基于微信小程序原生框架开发
- 采用组件化开发方式
- 使用WeUI组件库
- 响应式设计，适配各种屏幕尺寸 