define({ "api": [
  {
    "type": "post",
    "url": "admin/base/getConfigs",
    "title": "04获取配置",
    "version": "1.0.0",
    "name": "getConfigs",
    "group": "Base",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回码 200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.IDENTIFYING_CODE",
            "description": "<p>是否需要验证码1需要0不需要</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.LOGIN_SESSION_VALID",
            "description": "<p>会话有效期，秒为单位</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.SYSTEM_LOGO",
            "description": "<p>系统logo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.SYSTEM_NAME",
            "description": "<p>系统名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Base.php",
    "groupTitle": "Base",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/base/getConfigs"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "admin/base/getVerify",
    "title": "05验证码",
    "version": "1.0.0",
    "name": "getVerify",
    "group": "Base",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回码 200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Base.php",
    "groupTitle": "Base",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/base/getVerify"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "admin/base/login",
    "title": "01用户登录",
    "version": "1.0.0",
    "name": "login",
    "group": "Base",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verifyCode",
            "description": "<p>验证码(当登录使用验证码验证的时候带上)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isRemember",
            "description": "<p>记住密码(1:记住,0:不记住)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回码</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 200,\n  \"data\": {\n            \"authKey\": \"13578968cee752cced1dbf6ea4ff8f4e\", \n            \"authList\": [], \"menusList\": [], \n            \"sessionId\": \"hh42esnfeoetgs14u1g2jhv3m3\",\n            \"userInfo\": {},\n          },\n          \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./application/admin/controller/Base.php",
    "groupTitle": "Base",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/base/login"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "admin/base/logout",
    "title": "03退出登录",
    "version": "1.0.0",
    "name": "logout",
    "group": "Base",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sessionId",
            "description": "<p>SESSIONID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回码 200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 200,\n  \"data\": \"退出成功\",\n         \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./application/admin/controller/Base.php",
    "groupTitle": "Base",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/base/logout"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "admin/base/relogin",
    "title": "02检验记住密码",
    "version": "1.0.0",
    "name": "relogin",
    "group": "Base",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rememberKey",
            "description": "<p>记住密码key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回码</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Base.php",
    "groupTitle": "Base",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/base/relogin"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "admin/base/setInfo",
    "title": "05修改密码",
    "version": "1.0.0",
    "name": "setInfo",
    "group": "Base",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "auth_key",
            "description": "<p>登录后验证的key</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "new_pwd",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "old_pwd",
            "description": "<p>旧密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回码 200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Base.php",
    "groupTitle": "Base",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/base/setInfo"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "admin/structures/:id",
    "title": "05删除部门",
    "version": "1.0.0",
    "name": "delete",
    "group": "Department",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/structures"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>部门ID(GET参数)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": \"删除成功\",\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Structures.php",
    "groupTitle": "Department",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/structures/deletes",
    "title": "06批量删除部门",
    "version": "1.0.0",
    "name": "deletes",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>需要删除的ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": \"删除成功\",\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Structures.php",
    "groupTitle": "Department",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/structures/deletes"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/structures/enables",
    "title": "07批量启用、禁用",
    "version": "1.0.0",
    "name": "enables",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>需要操作的ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": \"操作成功\",\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Structures.php",
    "groupTitle": "Department",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/structures/enables"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "admin/structures",
    "title": "01获取部门列表",
    "version": "1.0.0",
    "name": "list",
    "group": "Department",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Users unique authkey.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "sessionid",
            "description": "<p>Users unique sessionid.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": [{\n               \"id\": 1,\n               \"name\": \"广东洪睿信息科技有限公司\",\n               \"pid\": 0,\n               \"status\": 1,\n               \"p_title\": \"\",\n               \"else\": \"广东洪睿信息科技有限公司\",\n               \"title\": \"广东洪睿信息科技有限公司\",\n               \"level\": 1\n           }],\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Structures.php",
    "groupTitle": "Department",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/structures"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "admin/structures/:id",
    "title": "02获取部门详情",
    "version": "1.0.0",
    "name": "read",
    "group": "Department",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/structures/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>部门ID(GET参数)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": [{\n               \"id\": 1,\n               \"name\": \"广东洪睿信息科技有限公司\",\n               \"pid\": 0,\n               \"status\": 1,\n               \"p_title\": \"\",\n               \"else\": \"广东洪睿信息科技有限公司\",\n               \"title\": \"广东洪睿信息科技有限公司\",\n               \"level\": 1\n           }],\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Structures.php",
    "groupTitle": "Department",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/structures/",
    "title": "03添加部门",
    "version": "1.0.0",
    "name": "save",
    "group": "Department",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": \"添加成功\",\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Structures.php",
    "groupTitle": "Department",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/structures/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "admin/structures/:id",
    "title": "04编辑部门",
    "version": "1.0.0",
    "name": "update",
    "group": "Department",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/structures"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>部门ID(GET参数)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": \"编辑成功\",\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Structures.php",
    "groupTitle": "Department",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc-template/main.js",
    "group": "E__nodejs_VueThink_php_apidoc_template_main_js",
    "groupTitle": "E__nodejs_VueThink_php_apidoc_template_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./public/apidoc/main.js",
    "group": "E__nodejs_VueThink_php_public_apidoc_main_js",
    "groupTitle": "E__nodejs_VueThink_php_public_apidoc_main_js",
    "name": ""
  },
  {
    "type": "DELETE",
    "url": "admin/groups/:id",
    "title": "05删除用户组",
    "version": "1.0.0",
    "name": "delete",
    "group": "Groups",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/groups"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>用户组ID(GET参数)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": \"删除成功\",\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Groups.php",
    "groupTitle": "Groups",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/groups/deletes",
    "title": "06批量删除用户组",
    "version": "1.0.0",
    "name": "deletes",
    "group": "Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>需要删除的ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": \"删除成功\",\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Groups.php",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/groups/deletes"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/groups/enables",
    "title": "07批量启用、禁用",
    "version": "1.0.0",
    "name": "enables",
    "group": "Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>需要操作的ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": \"操作成功\",\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Groups.php",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/groups/enables"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "admin/groups",
    "title": "01获取用户组列表",
    "version": "1.0.0",
    "name": "list",
    "group": "Groups",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": [{\n               \"id\": 15,\n               \"title\": \"普通会员\",\n               \"rules\": \"1,2,3,4,5,6,7,8,9,10,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,59,61,62,63,28,29\",\n               \"pid\": 0,\n               \"remark\": \"最厉害的组别\",\n               \"status\": 1,\n               \"p_title\": \"\",\n               \"else\": \"普通会员\",\n               \"level\": 1\n           }],\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Groups.php",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/groups"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "admin/groups/:id",
    "title": "02获取用户组详情",
    "version": "1.0.0",
    "name": "read",
    "group": "Groups",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/groups/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>用户组ID(GET参数)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": [{\n               \"id\": 15,\n               \"title\": \"普通会员\",\n               \"rules\": \"1,2,3,4,5,6,7,8,9,10,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,59,61,62,63,28,29\",\n               \"pid\": 0,\n               \"remark\": \"最厉害的组别\",\n               \"status\": 1,\n               \"p_title\": \"\",\n               \"else\": \"普通会员\",\n               \"level\": 1\n           }],\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Groups.php",
    "groupTitle": "Groups",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/groups/",
    "title": "03添加用户组",
    "version": "1.0.0",
    "name": "save",
    "group": "Groups",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": \"添加成功\",\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Groups.php",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/groups/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "admin/groups/:id",
    "title": "04编辑用户组",
    "version": "1.0.0",
    "name": "update",
    "group": "Groups",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/groups"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>用户组ID(GET参数)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": \"编辑成功\",\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Groups.php",
    "groupTitle": "Groups",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "admin/menus/:id",
    "title": "05删除菜单",
    "version": "1.0.0",
    "name": "delete",
    "group": "Menu",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/menus"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>菜单ID(GET参数)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 200,\n            \"data\": \"删除成功\",\n            \"error\": \"\"\n        }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.url",
            "description": "<p>链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.icon",
            "description": "<p>图标</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.menu_type",
            "description": "<p>1普通三级菜单2单页菜单3外联</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.rule_id",
            "description": "<p>绑定标识</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.module",
            "description": "<p>模块</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.from",
            "description": "<p>子菜单来源</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级菜单</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Menus.php",
    "groupTitle": "Menu",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/menus/deletes",
    "title": "06批量删除菜单",
    "version": "1.0.0",
    "name": "deletes",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>需要删除的ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 200,\n            \"data\": \"删除成功\",\n            \"error\": \"\"\n        }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.url",
            "description": "<p>链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.icon",
            "description": "<p>图标</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.menu_type",
            "description": "<p>1普通三级菜单2单页菜单3外联</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.rule_id",
            "description": "<p>绑定标识</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.module",
            "description": "<p>模块</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.from",
            "description": "<p>子菜单来源</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级菜单</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Menus.php",
    "groupTitle": "Menu",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/menus/deletes"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/menus/enables",
    "title": "07批量启用、禁用",
    "version": "1.0.0",
    "name": "enables",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>需要操作的ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 200,\n            \"data\": \"操作成功\",\n            \"error\": \"\"\n        }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.url",
            "description": "<p>链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.icon",
            "description": "<p>图标</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.menu_type",
            "description": "<p>1普通三级菜单2单页菜单3外联</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.rule_id",
            "description": "<p>绑定标识</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.module",
            "description": "<p>模块</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.from",
            "description": "<p>子菜单来源</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级菜单</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Menus.php",
    "groupTitle": "Menu",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/menus/enables"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "admin/menus",
    "title": "01获取菜单列表",
    "version": "1.0.0",
    "name": "menuList",
    "group": "Menu",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": [{\n               \"id\": 56,\n               \"pid\": 53,\n               \"title\": \"      ├ 权限规则\",\n               \"url\": \"\\/home\\/rule\\/list\",\n               \"icon\": \"\",\n               \"menu_type\": 1,\n               \"sort\": 0,\n               \"status\": 1,\n               \"rule_id\": 13,\n               \"module\": \"Administrative\",\n               \"menu\": \"rule\",\n               \"p_title\": \"系统配置\",\n               \"else\": \"权限规则\",\n               \"level\": 3\n           }],\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.url",
            "description": "<p>链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.icon",
            "description": "<p>图标</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.menu_type",
            "description": "<p>1普通三级菜单2单页菜单3外联</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.rule_id",
            "description": "<p>绑定标识</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.module",
            "description": "<p>模块</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.from",
            "description": "<p>子菜单来源</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级菜单</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Menus.php",
    "groupTitle": "Menu",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/menus"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "admin/menus/:id",
    "title": "02获取菜单详情",
    "version": "1.0.0",
    "name": "read",
    "group": "Menu",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/menus/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>菜单ID(GET参数)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": [{\n               \"id\": 56,\n               \"pid\": 53,\n               \"title\": \"      ├ 权限规则\",\n               \"url\": \"\\/home\\/rule\\/list\",\n               \"icon\": \"\",\n               \"menu_type\": 1,\n               \"sort\": 0,\n               \"status\": 1,\n               \"rule_id\": 13,\n               \"module\": \"Administrative\",\n               \"menu\": \"rule\",\n               \"p_title\": \"系统配置\",\n               \"else\": \"权限规则\",\n               \"level\": 3\n           }],\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.url",
            "description": "<p>链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.icon",
            "description": "<p>图标</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.menu_type",
            "description": "<p>1普通三级菜单2单页菜单3外联</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.rule_id",
            "description": "<p>绑定标识</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.module",
            "description": "<p>模块</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.from",
            "description": "<p>子菜单来源</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级菜单</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Menus.php",
    "groupTitle": "Menu",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/menus",
    "title": "03新增菜单详情",
    "version": "1.0.0",
    "name": "save",
    "group": "Menu",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 200,\n            \"data\": \"添加成功\",\n            \"error\": \"\"\n        }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.url",
            "description": "<p>链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.icon",
            "description": "<p>图标</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.menu_type",
            "description": "<p>1普通三级菜单2单页菜单3外联</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.rule_id",
            "description": "<p>绑定标识</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.module",
            "description": "<p>模块</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.from",
            "description": "<p>子菜单来源</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级菜单</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Menus.php",
    "groupTitle": "Menu",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/menus"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>链接</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>图标</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menu_type",
            "description": "<p>1普通三级菜单2单页菜单3外联</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "rule_id",
            "description": "<p>绑定标识</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "module",
            "description": "<p>所属菜单</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>子菜单来源</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "admin/menus/:id",
    "title": "04编辑菜单",
    "version": "1.0.0",
    "name": "update",
    "group": "Menu",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/menus"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>菜单ID(GET参数)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>链接</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>图标</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menu_type",
            "description": "<p>1普通三级菜单2单页菜单3外联</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "rule_id",
            "description": "<p>绑定标识</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "module",
            "description": "<p>所属菜单</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>子菜单来源</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 200,\n            \"data\": \"编辑成功\",\n            \"error\": \"\"\n        }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.pid",
            "description": "<p>上级id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.url",
            "description": "<p>链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.icon",
            "description": "<p>图标</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.menu_type",
            "description": "<p>1普通三级菜单2单页菜单3外联</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.rule_id",
            "description": "<p>绑定标识</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.module",
            "description": "<p>模块</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.from",
            "description": "<p>子菜单来源</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级菜单</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Menus.php",
    "groupTitle": "Menu",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "admin/posts/:id",
    "title": "05删除岗位",
    "version": "1.0.0",
    "name": "delete",
    "group": "Posts",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/posts"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>岗位ID(GET参数)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": \"删除成功\",\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Posts.php",
    "groupTitle": "Posts",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/posts/deletes",
    "title": "06批量删除岗位",
    "version": "1.0.0",
    "name": "deletes",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>需要删除的ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": \"删除成功\",\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Posts.php",
    "groupTitle": "Posts",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/posts/deletes"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/posts/enables",
    "title": "07批量启用、禁用",
    "version": "1.0.0",
    "name": "enables",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>需要操作的ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": \"操作成功\",\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Posts.php",
    "groupTitle": "Posts",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/posts/enables"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "admin/posts",
    "title": "01获取岗位列表",
    "version": "1.0.0",
    "name": "list",
    "group": "Posts",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": [{\n               \"id\": 32,\n               \"name\": \"后端研发工程师\",\n               \"remark\": \"\",\n               \"create_time\": 1484706863,\n               \"status\": 1\n           }],\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Posts.php",
    "groupTitle": "Posts",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/posts"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "admin/posts/:id",
    "title": "02获取岗位详情",
    "version": "1.0.0",
    "name": "read",
    "group": "Posts",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/posts/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>岗位ID(GET参数)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": [{\n               \"id\": 32,\n               \"name\": \"后端研发工程师\",\n               \"remark\": \"\",\n               \"create_time\": 1484706863,\n               \"status\": 1\n           }],\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Posts.php",
    "groupTitle": "Posts",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/posts/",
    "title": "03添加岗位",
    "version": "1.0.0",
    "name": "save",
    "group": "Posts",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": \"添加成功\",\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Posts.php",
    "groupTitle": "Posts",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/posts/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "admin/posts/:id",
    "title": "04编辑岗位",
    "version": "1.0.0",
    "name": "update",
    "group": "Posts",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/posts"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>岗位ID(GET参数)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": \"编辑成功\",\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Posts.php",
    "groupTitle": "Posts",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "admin/rules/:id",
    "title": "05删除规则",
    "version": "1.0.0",
    "name": "delete",
    "group": "Rule",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/rules/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>规则ID(GET参数)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>权限标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>权限显示名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别1模块,2控制器,3操作</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 200,\n            \"data\": \"删除成功\",\n            \"error\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "./application/admin/controller/Rules.php",
    "groupTitle": "Rule",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/rules/deletes",
    "title": "06批量删除规则",
    "version": "1.0.0",
    "name": "deletes",
    "group": "Rule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>需要删除的ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>权限标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>权限显示名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别1模块,2控制器,3操作</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 200,\n            \"data\": \"删除成功\",\n            \"error\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "./application/admin/controller/Rules.php",
    "groupTitle": "Rule",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/rules/deletes"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/rules/enables",
    "title": "07批量启用、禁用",
    "version": "1.0.0",
    "name": "enables",
    "group": "Rule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>需要修改的ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>权限标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>权限显示名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别1模块,2控制器,3操作</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 200,\n            \"data\": \"删除成功\",\n            \"error\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "./application/admin/controller/Rules.php",
    "groupTitle": "Rule",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/rules/enables"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "admin/rules/:id",
    "title": "02获取规则详情",
    "version": "1.0.0",
    "name": "read",
    "group": "Rule",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/rules/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID(GET参数)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": [{\n               \"id\": 10,\n               \"title\": \"系统基础功能\",\n               \"name\": \"admin\",\n               \"level\": 1,\n               \"pid\": 0,\n               \"status\": 1,\n               \"p_title\": \"\",\n               \"else\": \"系统基础功能\"\n           }],\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>权限标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>权限显示名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别1模块,2控制器,3操作</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Rules.php",
    "groupTitle": "Rule",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "admin/rules",
    "title": "01获取规则列表",
    "version": "1.0.0",
    "name": "ruleList",
    "group": "Rule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n           \"code\": 200,\n           \"data\": [{\n               \"id\": 10,\n               \"title\": \"系统基础功能\",\n               \"name\": \"admin\",\n               \"level\": 1,\n               \"pid\": 0,\n               \"status\": 1,\n               \"p_title\": \"\",\n               \"else\": \"系统基础功能\"\n           }],\n           \"error\": \"\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>权限标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>权限显示名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别1模块,2控制器,3操作</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Rules.php",
    "groupTitle": "Rule",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/rules"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/rules",
    "title": "03新增规则详情",
    "version": "1.0.0",
    "name": "save",
    "group": "Rule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>权限标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>权限显示名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>上级ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>级别1模块,2控制器,3操作</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "structure_id",
            "description": "<p>所属部门</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>权限标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>权限显示名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别1模块,2控制器,3操作</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 200,\n            \"data\": \"添加成功\",\n            \"error\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "./application/admin/controller/Rules.php",
    "groupTitle": "Rule",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/rules"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "admin/rules/:id",
    "title": "04编辑规则",
    "version": "1.0.0",
    "name": "update",
    "group": "Rule",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/rules/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>规则ID(GET参数)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>权限标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>权限显示名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>上级ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>级别1模块,2控制器,3操作</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "structure_id",
            "description": "<p>所属部门</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.id",
            "description": "<p>主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>权限标识</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>权限显示名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.p_title",
            "description": "<p>上级名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>级别1模块,2控制器,3操作</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 200,\n            \"data\": \"编辑成功\",\n            \"error\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "./application/admin/controller/Rules.php",
    "groupTitle": "Rule",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/upload",
    "title": "01文件上传",
    "version": "1.0.0",
    "name": "upload",
    "group": "Upload",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回码 200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "filename": "./application/admin/controller/Upload.php",
    "groupTitle": "Upload",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/upload"
      }
    ],
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "admin/users",
    "title": "05新增用户",
    "version": "1.0.0",
    "name": "addUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "realname",
            "description": "<p>真实姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "structure_id",
            "description": "<p>所属部门</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "groups",
            "description": "<p>所属用户组</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 200,\n            \"data\": \"添加成功\",\n            \"error\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./application/admin/controller/Users.php",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/users"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "admin/users/:id",
    "title": "07删除用户",
    "version": "1.0.0",
    "name": "deleteUser",
    "group": "User",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/users/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 200,\n            \"data\": \"删除成功\",\n            \"error\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./application/admin/controller/Users.php",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "admin/users/deletes",
    "title": "08批量删除用户",
    "version": "1.0.0",
    "name": "deletesUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>需要删除的ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 200,\n            \"data\": \"删除成功\",\n            \"error\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./application/admin/controller/Users.php",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/users/deletes"
      }
    ]
  },
  {
    "type": "POST",
    "url": "admin/users/enables",
    "title": "09批量启用、禁用",
    "version": "1.0.0",
    "name": "enablesUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "ids",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>1启用0禁用</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 200,\n            \"data\": \"操作成功\",\n            \"error\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./application/admin/controller/Users.php",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/users/enables"
      }
    ]
  },
  {
    "type": "GET",
    "url": "admin/users/:id",
    "title": "04获取用户详情",
    "version": "1.0.0",
    "name": "read",
    "group": "User",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/users/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.dataCount",
            "description": "<p>数据总量</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data.list",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.list.username",
            "description": "<p>账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.list.password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.list.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.list.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.list.realname",
            "description": "<p>真实姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.list.s_name",
            "description": "<p>部门</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.list.p_name",
            "description": "<p>岗位</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 200,\n  \"data\": {\n            \"list\": [{\n                \"id\": 3,\n                \"username\": \"用户AAAA\",\n                \"password\": \"c78b6663d47cfbdb4d65ea51c104044e\",\n                \"remark\": \"\",\n                \"create_time\": 1487217060,\n                \"realname\": \"用户A\",\n                \"structure_id\": 5,\n                \"post_id\": 20,\n                \"status\": 1,\n                \"s_name\": \"设计部\",\n                \"p_name\": \"项目经理\"\n            }],\n            \"dataCount\": 1\n          },\n          \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./application/admin/controller/Users.php",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "admin/users/:id",
    "title": "06编辑用户",
    "version": "1.0.0",
    "name": "updateUser",
    "group": "User",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/users/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "realname",
            "description": "<p>真实姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "structure_id",
            "description": "<p>所属部门</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "groups",
            "description": "<p>所属用户组</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 200,\n            \"data\": \"编辑成功\",\n            \"error\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./application/admin/controller/Users.php",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "admin/users",
    "title": "03用户列表",
    "version": "1.0.0",
    "name": "userList",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": "<p>关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "struct_id",
            "description": "<p>部门id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>200正确400错误</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.dataCount",
            "description": "<p>数据总量</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data.list",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.list.username",
            "description": "<p>账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.list.password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.list.remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.list.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>状态1启用0禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.list.realname",
            "description": "<p>真实姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.list.s_name",
            "description": "<p>部门</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.list.p_name",
            "description": "<p>岗位</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 200,\n  \"data\": {\n            \"list\": [{\n                \"id\": 3,\n                \"username\": \"用户AAAA\",\n                \"password\": \"c78b6663d47cfbdb4d65ea51c104044e\",\n                \"remark\": \"\",\n                \"create_time\": 1487217060,\n                \"realname\": \"用户A\",\n                \"structure_id\": 5,\n                \"post_id\": 20,\n                \"status\": 1,\n                \"s_name\": \"设计部\",\n                \"p_name\": \"项目经理\"\n            }],\n            \"dataCount\": 1\n          },\n          \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"地址不存在\"\n}",
          "type": "json"
        },
        {
          "title": "500-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"服务器内部错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./application/admin/controller/Users.php",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/users"
      }
    ]
  }
] });
