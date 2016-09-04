import tornado.ioloop
import tornado.web
import sys
import os
from pythonql.RunPYQL import runProgramFromString
from pythonql.RunPYQL import runProgramFromFile
import io
import traceback

settings = {
  "static_path" : os.path.join(os.path.dirname(__file__),"pages"),
  "debug" : True
}

class BaseHandler(tornado.web.RequestHandler):
  None

class MainHandler(BaseHandler):
  def get(self):
    self.render("main.html")

class ViewScenarios(BaseHandler):
  def get(self):
    self.render("scenarios.html")

class ViewScenario(BaseHandler):
  def get(self):
    if not self.get_argument("name",None):
      self.render("empty.html")
    else:
      self.render("scenario.html", name=self.get_argument("name"))

class ShowQueryFrame(BaseHandler):
  def get(self):
    self.render("query_frame.html", query=self.get_argument("q"))

class ShowQuery(BaseHandler):
  def get(self):
    self.render("query.html", query=self.get_argument("q"))

class RunQuery(BaseHandler):
  def get(self):
    query_f = self.get_argument("q")
    out_buf = io.StringIO()
    old_stdout = sys.stdout
    sys.stdout = out_buf
    try:
      (comp_time,exec_time) = runProgramFromFile(query_f)
      print("-------Compile time: %.3f, Execution time: %.3f" % 
              (comp_time,exec_time) )
    except:
      old_stderr = sys.stderr
      sys.stderr = out_buf
      traceback.print_exc()
      sys.stderr = old_stderr

    sys.stdout = old_stdout
    self.render("result.html",output=out_buf.getvalue())
    
  def post(self):
    query = self.get_argument("query_string")
    query += "\n"
    out_buf = io.StringIO()
    old_stdout = sys.stdout
    sys.stdout = out_buf
    try:
      (comp_time,exec_time) = runProgramFromString(query)
      print("-------Compile time: %.3f, Execution time: %.3f" % 
              (comp_time,exec_time) )
    except:
      old_stderr = sys.stderr
      sys.stderr = out_buf
      traceback.print_exc()
      sys.stderr = old_stderr

    sys.stdout = old_stdout
    self.render("result.html",output=out_buf.getvalue())

application = tornado.web.Application([
  (r"/", MainHandler),
  (r"/scenarios.html", ViewScenarios),
  (r"/scenario.html", ViewScenario),
  (r"/view_query", ShowQueryFrame),
  (r"/query.html", ShowQuery),
  (r"/run_query", RunQuery),
  (r"/pages/(.*)", tornado.web.StaticFileHandler,{"path":settings['static_path']})
], **settings)

if __name__ == "__main__":
  application.listen(8080)
  tornado.ioloop.IOLoop.instance().start()
