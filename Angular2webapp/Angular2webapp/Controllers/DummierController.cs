using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular2webapp.Controllers
{
    public class DummierController : ApiController
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();

        // GET: api/Dummier/Get
        public IEnumerable<DummyData> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new DummyData
            {
                clientData = string.Empty,
                serverData = DateTime.Now.AddDays(index).ToString("d")
            });
        }

        // GET: api/Dummier/GetVersion
        public string GetVersion()
        {
            return "v.0.0.1";
        }

        // GET: api/Dummier/Authenticate
        public UserData GetAuthenticate()
        {
            logger.Log(LogLevel.Info, "Authenticate: "+ User.Identity.Name);
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
