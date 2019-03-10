from views import app
from flask_apidoc.commands import GenerateApiDoc
from flask_script import Manager

manager = Manager(app)

manager.add_command('apidoc', GenerateApiDoc())


# @app.route("/api/test", methods=["GET"])
# def api_test():
# 	if request.methods == "GET":
# 		return 

if __name__ == "__main__":
	
	# app.run(host='0.0.0.0', port=8090, debug=True)
	manager.run()
