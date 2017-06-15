using JSNLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace Angular2webapp
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            JavascriptLogging.OnLogging += LoggingHandler;
        }
    
        private void LoggingHandler(LoggingEventArgs e)
        {
            var currReqId = JavascriptLogging.RequestId();
            NLog.MappedDiagnosticsContext.Set("requestId", currReqId);         
        }
    }
}
