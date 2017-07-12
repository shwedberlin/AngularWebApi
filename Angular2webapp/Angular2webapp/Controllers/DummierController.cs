using System;
using Common.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular2webapp.Controllers
{
    public class DummierController : ApiController
    {
        private static ILog logger = LogManager.GetLogger("ApiLogger");

        // GET: api/Dummier/Get
        public IEnumerable<DummyData> Get()
        {
            var re = Request;
            var headers = re.Headers;

            if (headers.Contains("RequestId"))
            {
                string reqToken = headers.GetValues("RequestId").First();

                logger.Info(msg => msg("[{0,-36}] FETCHING", reqToken));
            }

            return Enumerable.Range(1, 5).Select(index => new DummyData
            {
                clientData = string.Empty,
                serverData = DateTime.Now.AddDays(index).ToString("d")
            });
        }

        // GET: api/Dummier/GetVersion
        public string GetVersion()
        {
            var re = Request;
            var headers = re.Headers;

            if (headers.Contains("RequestId"))
            {
                string reqToken = headers.GetValues("RequestId").First();

                logger.Info(msg => msg("[{0,-36}] Get Version", reqToken));
            }

            return "v.0.0.1";
        }

        // GET: api/Dummier/Authenticate
        public UserData GetAuthenticate()
        {
            // Simulate 10 sec delay
            var waitTime = DateTime.Now.AddSeconds(10);
            while (DateTime.Now < waitTime)
            {
                //noop
            }
            var re = Request;
            var headers = re.Headers;

            if (headers.Contains("RequestId"))
            {
                string reqToken = headers.GetValues("RequestId").First();

                logger.Info(msg => msg("[{0,-36}] Authenticate: {1}", reqToken, User.Identity.Name));
            }

            if (User.Identity.IsAuthenticated)
            {
                return new UserData { name = User.Identity.Name, role = "Admin" };
            }
            else
            {
                return new UserData {name = User.Identity.Name, role = "User" };
            }
        }

        public class DummyData
        {
            public string clientData { get; set; }
            public string serverData { get; set; }
        
        }

        public class UserData
        {
            public string name { get; set; }
            public string role { get; set; }

        }
    }
}
