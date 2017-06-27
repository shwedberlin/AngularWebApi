using Angular2webapp.Core;
using Common.Logging.Configuration;
using System.Text;
using System.Web.Routing;

[assembly: WebActivatorEx.PostApplicationStartMethod(
    typeof(Angular2webapp.App_Start.LoggerConfiguration), "PostStart")]

namespace Angular2webapp.App_Start
{
    public static class LoggerConfiguration
    {
        public static void PostStart()
        {
            NLogConfigurator.Configure();
            ConfigCommonLogging();
            ConfigJSNLogRoutes();
        }

        private static void ConfigJSNLogRoutes()
        {
            // Insert a route that ignores the jsnlog.logger route. That way,
            // requests for jsnlog.logger will get through to the handler defined
            // in web.config.
            //
            // The route must take this particular form, including the constraint,
            // otherwise ActionLink will be confused by this route and generate the wrong URLs.

            var jsnlogRoute = new Route("{*jsnloglogger}", new StopRoutingHandler());
            jsnlogRoute.Constraints = new RouteValueDictionary { { "jsnloglogger", @"jsnlog\.logger(/.*)?" } };
            RouteTable.Routes.Insert(0, jsnlogRoute);
        }

        private static void ConfigCommonLogging()
        {
            // create properties
            var properties = new NameValueCollection
            {
                ["configType"] = "INLINE"
            };

            // set Adapter
            Common.Logging.LogManager.Adapter = new Common.Logging.NLog.NLogLoggerFactoryAdapter(properties);

            Common.Logging.LogManager.GetLogger("ApiLogger").Info("Server side logger configured");
        }
    }
}
