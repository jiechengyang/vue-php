define({ "api": [
  {
    "type": "post",
    "url": "admin/base/login",
    "title": "01用户登录",
    "version": "1.0.0",
    "name": "login",
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "userinfoError",
            "description": "<p>账户信息错误.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>错误 服务器内部错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "userinfoError-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 400,\n  \"data\": \"\",\n  \"error\": \"用户名或密码错误\"\n}",
          "type": "json"
        },
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
    "filename": "./application/admin/controller/Base.php",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/base/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "admin/base/logout",
    "title": "02退出登录",
    "version": "1.0.0",
    "name": "logout",
    "group": "User",
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
            "description": "<p>返回码</p>"
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>错误 地址不存在</p>"
          },
          {
            "group": "Error 4xx",
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
    "filename": "./application/admin/controller/Base.php",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://demo.tpvue.com.cn/admin/base/logout"
      }
    ]
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
