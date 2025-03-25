import { countries } from './countries';
const socketTypes = {
  'A': {
    name: 'A型插座',
    description: '两个扁平并行插脚',
    image: '/assets/A.png',
    standard: '国标'
  },
  'B': {
    name: 'B型插座',
    description: '两个圆柱形插脚',
    image: '/assets/B.png',
    standard: '美标'
  },
  'C': {
    name: 'C型插座',
    description: '三个圆柱形插脚',
    image: '/assets/C.png',
    standard: '欧标'
  },
  'D': {
    name: 'D型插座',
    description: '',
    image: '/assets/D.png',
    standard: '南非'
  },
  'E': {
    name: 'E型插座',
    description: '',
    image: '/assets/E.png',
    standard: '法国'
  },
  'F': {
    name: 'F型插座',
    description: '',
    image: '/assets/F.png',
    standard: '德标'
  },
  'G': {
    name: 'G型插座',
    description: '',
    image: '/assets/G.png',
    standard: '英标'
  },
  'H': {
    name: 'H型插座',
    description: '',
    image: '/assets/H.png',
    standard: '以色列'
  },
  'I': {
    name: 'I型插座',
    description: '',
    image: '/assets/I.png',
    standard: '国标'
  },
  'J': {
    name: 'J型插座',
    description: '',
    image: '/assets/J.png',
    standard: '瑞士'
  },
  'K': {
    name: 'K型插座',
    description: '',
    image: '/assets/K.png',
    standard: '丹麦'
  },
  'L': {
    name: 'L型插座',
    description: '',
    image: '/assets/L.png',
    standard: '意大利'
  },
  'M': {
    name: 'M型插座',
    description: '',
    image: '/assets/M.png',
    standard: '南非'
  },
  'N': {
    name: 'N型插座',
    description: '',
    image: '/assets/N.png',
    standard: '南非'
  },
  'O': {
    name: 'O型插座',
    description: '',
    image: '/assets/O.png',
    standard: '泰国'
  },
};

// 插座转换建议
const getConversionInfo = (sourceCode, targetCode) => {
  const source = countries.find(country => country.code === sourceCode);
  const target = countries.find(country => country.code === targetCode);
  const sourceCountry = source.name;
  const targetCountry = target.name;
  
  if (!source || !target) {
    return {
      needAdapter: false,
      adapterType: "",
      voltageWarning: false,
      message: "无法获取转换信息，请检查国家选择。"
    };
  }
  
  // 判断是否需要转换器
  const sourceTypes = source.socketTypes;
  const targetTypes = target.socketTypes;
  const commonTypes = sourceTypes.filter(type => targetTypes.includes(type));
  const existCommonTypes = commonTypes.length > 0;
  const needAdapter = commonTypes.length === 0;
  
  // 判断电压是否兼容
  const sourceVoltage = parseInt(source.voltage);
  const targetVoltage = parseInt(target.voltage);
  const voltageWarning = Math.abs(sourceVoltage - targetVoltage) > 10;
  
  
  // 用顿号链接sourceTypes
  const sourceTypesStr = sourceTypes.join('、');
  const targetTypesStr = targetTypes.join('、');

  let message = "";
  const targetStandard = targetTypes.filter(type => !sourceTypes.includes(type)).map(type => socketTypes[type].standard).join('、');

  if(needAdapter) {
    message += `从${sourceCountry}到${targetCountry}需要使用(${targetStandard})转换插头，`;
  } else {
    // 生成建议信息
    if (commonTypes.length === targetTypes.length) {
      message += `从${sourceCountry}到${targetCountry}可以直接使用插头，无需转换器。`;
    } else {
      // 获取目标国家的插座标准(两个国家非共同插座类型)
      if(targetStandard.length > 0){
        message += `您可能需要一个${targetStandard}的插座转换器~~~`;
      }
    }
  }

  return {
    needAdapter,
    adapterType: needAdapter ? `${sourceTypesStr}到${targetTypesStr}` : "",
    voltageWarning,
    commonTypes,
    targetStandard,
    message
  };
};

module.exports = {
  countries,
  socketTypes,
  getConversionInfo
}; 