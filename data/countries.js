const countries = [
    {
      "code": "CN",
      "name": "中国",
      "socketTypes": [
        "A",
        "I"
      ],
      "voltage": "220"
    },
    {
      "code": "US",
      "name": "美国",
      "socketTypes": [
        "A",
        "B"
      ],
      "voltage": "120"
    },
    {
      "code": "JP",
      "name": "日本",
      "socketTypes": [
        "A",
        "B"
      ],
      "voltage": "100"
    },
    {
      "code": "GB",
      "name": "英国",
      "socketTypes": [
        "G"
      ],
      "voltage": "230"
    },
    {
      "code": "FR",
      "name": "法国",
      "socketTypes": [
        "C",
        "E"
      ],
      "voltage": "230"
    },
    {
      "code": "DE",
      "name": "德国",
      "socketTypes": [
        "C",
        "F"
      ],
      "voltage": "230"
    },
    {
      "code": "IN",
      "name": "印度",
      "socketTypes": [
        "C",
        "D",
        "M"
      ],
      "voltage": "230"
    },
    {
      "code": "AU",
      "name": "澳大利亚",
      "socketTypes": [
        "I"
      ],
      "voltage": "230"
    },
    {
      "code": "BR",
      "name": "巴西",
      "socketTypes": [
        "C",
        "N"
      ],
      "voltage": "127/220"
    },
    {
      "code": "ZA",
      "name": "南非",
      "socketTypes": [
        "M",
        "N"
      ],
      "voltage": "230"
    },
    {
      "code": "RU",
      "name": "俄罗斯",
      "socketTypes": [
        "C",
        "F"
      ],
      "voltage": "220"
    },
    {
      "code": "KR",
      "name": "韩国",
      "socketTypes": [
        "C",
        "F"
      ],
      "voltage": "220"
    },
    {
      "code": "TH",
      "name": "泰国",
      "socketTypes": [
        "A",
        "C",
        "O"
      ],
      "voltage": "220"
    },
    {
      "code": "IL",
      "name": "以色列",
      "socketTypes": [
        "H"
      ],
      "voltage": "230"
    },
    {
      "code": "IT",
      "name": "意大利",
      "socketTypes": [
        "C",
        "L"
      ],
      "voltage": "230"
    },
    {
      "code": "ES",
      "name": "西班牙",
      "socketTypes": [
        "C",
        "F"
      ],
      "voltage": "230"
    },
    {
      "code": "NL",
      "name": "荷兰",
      "socketTypes": [
        "C",
        "F"
      ],
      "voltage": "230"
    },
    {
      "code": "SE",
      "name": "瑞典",
      "socketTypes": [
        "C",
        "F"
      ],
      "voltage": "230"
    },
    {
      "code": "CH",
      "name": "瑞士",
      "socketTypes": [
        "C",
        "J"
      ],
      "voltage": "230"
    },
    {
      "code": "BE",
      "name": "比利时",
      "socketTypes": [
        "C",
        "E"
      ],
      "voltage": "230"
    },
    {
      "code": "MX",
      "name": "墨西哥",
      "socketTypes": [
        "A",
        "B"
      ],
      "voltage": "127"
    },
    {
      "code": "CA",
      "name": "加拿大",
      "socketTypes": [
        "A",
        "B"
      ],
      "voltage": "120"
    },
    {
      "code": "AR",
      "name": "阿根廷",
      "socketTypes": [
        "C",
        "I"
      ],
      "voltage": "220"
    },
    {
      "code": "NZ",
      "name": "新西兰",
      "socketTypes": [
        "I"
      ],
      "voltage": "230"
    },
    {
      "code": "FI",
      "name": "芬兰",
      "socketTypes": [
        "C",
        "F"
      ],
      "voltage": "230"
    },
    {
      "code": "DK",
      "name": "丹麦",
      "socketTypes": [
        "C",
        "K"
      ],
      "voltage": "230"
    },
    {
      "code": "PT",
      "name": "葡萄牙",
      "socketTypes": [
        "C",
        "F"
      ],
      "voltage": "230"
    },
    {
      "code": "NO",
      "name": "挪威",
      "socketTypes": [
        "C",
        "F"
      ],
      "voltage": "230"
    },
    {
      "code": "PL",
      "name": "波兰",
      "socketTypes": [
        "C",
        "E"
      ],
      "voltage": "230"
    },
    {
      "code": "GR",
      "name": "希腊",
      "socketTypes": [
        "C",
        "F"
      ],
      "voltage": "230"
    },
    {
      "code": "HU",
      "name": "匈牙利",
      "socketTypes": [
        "C",
        "F"
      ],
      "voltage": "230"
    },
    {
      "code": "CZ",
      "name": "捷克",
      "socketTypes": [
        "C",
        "E"
      ],
      "voltage": "230"
    },
    {
      "code": "SK",
      "name": "斯洛伐克",
      "socketTypes": [
        "C",
        "E"
      ],
      "voltage": "230"
    },
    {
      "code": "TR",
      "name": "土耳其",
      "socketTypes": [
        "C",
        "F"
      ],
      "voltage": "230"
    },
    {
      "code": "EG",
      "name": "埃及",
      "socketTypes": [
        "C",
        "F"
      ],
      "voltage": "220"
    },
    {
      "code": "SA",
      "name": "沙特阿拉伯",
      "socketTypes": [
        "G"
      ],
      "voltage": "230"
    },
    {
      "code": "AE",
      "name": "阿联酋",
      "socketTypes": [
        "G"
      ],
      "voltage": "230"
    },
    {
      "code": "MY",
      "name": "马来西亚",
      "socketTypes": [
        "G"
      ],
      "voltage": "230"
    },
    {
      "code": "SG",
      "name": "新加坡",
      "socketTypes": [
        "G"
      ],
      "voltage": "230"
    },
    {
      "code": "PH",
      "name": "菲律宾",
      "socketTypes": [
        "A",
        "B",
        "C"
      ],
      "voltage": "220"
    },
    {
      "code": "VN",
      "name": "越南",
      "socketTypes": [
        "A",
        "C",
        "F"
      ],
      "voltage": "220"
    },
    {
      "code": "ID",
      "name": "印度尼西亚",
      "socketTypes": [
        "C",
        "F"
      ],
      "voltage": "230"
    },
    {
      "code": "PK",
      "name": "巴基斯坦",
      "socketTypes": [
        "C",
        "D",
        "G"
      ],
      "voltage": "230"
    },
    {
      "code": "BD",
      "name": "孟加拉国",
      "socketTypes": [
        "C",
        "D",
        "G"
      ],
      "voltage": "230"
    },
    {
      "code": "LK",
      "name": "斯里兰卡",
      "socketTypes": [
        "D",
        "G",
        "M"
      ],
      "voltage": "230"
    },
    {
      "code": "NG",
      "name": "尼日利亚",
      "socketTypes": [
        "D",
        "G"
      ],
      "voltage": "230"
    },
    {
      "code": "KE",
      "name": "肯尼亚",
      "socketTypes": [
        "G"
      ],
      "voltage": "240"
    },
    {
      "code": "TZ",
      "name": "坦桑尼亚",
      "socketTypes": [
        "D",
        "G"
      ],
      "voltage": "230"
    }
  ]



module.exports = {
  countries,
}; 