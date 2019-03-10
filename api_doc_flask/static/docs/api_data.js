define({ "api": [
  {
    "type": "post",
    "url": "http://localhost:8090/api/v1.0/register",
    "title": "注册",
    "version": "1.0.0",
    "name": "register_user",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>(必须)用户手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>(必须)用户密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sms_code",
            "description": "<p>(必须)用户短信验证码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例json:",
          "content": "{\n\"mobile\": \"123456\",\n\"password\": \"123456\",\n\"sms_code\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "回参": [
          {
            "group": "回参",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户注册id</p>"
          },
          {
            "group": "回参",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户昵称</p>"
          },
          {
            "group": "回参",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>用户注册手机号</p>"
          },
          {
            "group": "回参",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>用户头像地址</p>"
          },
          {
            "group": "回参",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>用户创建时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求成功:",
          "content": "{\n\"msg\":\"注册成功\",\n\"data\":{\n\"user_id\":250,\n\"name\":\"tianlanlan\",\n\"mobile\":\"123456\",\n\"avatar\":\"http://www.test.com\",\n\"create_time\":\"2019\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求异常:",
          "content": "{\n\"error_code\":250,\n\"error_msg\":\"数据库查询错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./views.py",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "http://localhost:8090/api/v1.0/connect",
    "title": "连接测试",
    "version": "1.0.0",
    "name": "test",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>(必须)用户ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例form-data:",
          "content": "{\n\"id\":250\n}",
          "type": "form-data"
        }
      ]
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>连接状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求成功:",
          "content": "{\n\"msg\":\"请求成功\",\n\"data\":{\n\"info\":\"Successfully connection!\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求异常:",
          "content": "{\n\"error_code\":250,\n\"error_msg\":\"连接异常\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./views.py",
    "groupTitle": "Users"
  }
] });
