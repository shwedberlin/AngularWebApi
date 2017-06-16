using JSNLog;
using System;
using System.Web.Http;

namespace Angular2webapp
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            JavascriptLogging.OnLogging += LoggingHandler;

            Common.Logging.LogManager.GetLogger("ApiLogger").Info("Server side started");
        }
    
        private void LoggingHandler(LoggingEventArgs e)
        {
            var currReqId = JavascriptLogging.RequestId();
            e.FinalMessage = String.Format("[{0,-36}] {1}", currReqId, e.FinalMessage);                 
        }
    }
}
