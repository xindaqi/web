from flask import Flask, render_template 
from flask_apidoc import ApiDoc 

# app = Flask(__name__, static_url_path='', root_path='/home/xdq/xinPrj/python_web/flask_prj/api_doc_flask')
app = Flask(__name__)

doc = ApiDoc(app=app)

@app.route('/users', methods=['POST', 'GET'])
def register():
	"""
	@api {post} http://localhost:8090/api/v1.0/register 注册 
	@apiVersion 1.0.0
	@apiName register_user
	@apiGroup Users 
	@apiParam {String} mobile (必须)用户手机号
	@apiParam {String} password (必须)用户密码
	@apiParam {String}sms_code (必须)用户短信验证码
	@apiParamExample {json} 请求样例json:
	{
		"mobile": "123456",
		"password": "123456",
		"sms_code": "123456"
	}
	@apiSuccess (回参) {int} user_id 用户注册id
	@apiSuccess (回参) {String} name 用户昵称
	@apiSuccess (回参) {String} mobile 用户注册手机号
	@apiSuccess (回参) {String} avatar 用户头像地址
	@apiSuccess (回参) {String} create_time 用户创建时间
	@apiSuccessExample {json} 请求成功:
	{
		"msg":"注册成功",
		"data":{
			"user_id":250,
			"name":"tianlanlan",
			"mobile":"123456",
			"avatar":"http://www.test.com",
			"create_time":"2019"
		}
	}
	@apiErrorExample {json} 请求异常:
	{
		"error_code":250,
		"error_msg":"数据库查询错误"
	}
	"""
	"""
	@api {get} http://localhost:8090/api/v1.0/connect 连接测试
	@apiVersion 1.0.0
	@apiName test
	@apiGroup Users
	@apiParam {String} id (必须)用户ID
	@apiParamExample {form-data} 请求样例form-data:
	{
		"id":250
	}
	@apiSuccess (返回参数) {String} info 连接状态
	@apiSuccessExample {json} 请求成功:
	{
		"msg":"请求成功",
		"data":{
			"info":"Successfully connection!"
		}
	}
	@apiErrorExample {json} 请求异常:
	{
		"error_code":250,
		"error_msg":"连接异常"
	}

	"""

	pass


