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
        // GET: api/Dummier
        public IEnumerable<DummyData> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new DummyData
            {
                clientData = string.Empty,
                serverData = DateTime.Now.AddDays(index).ToString("d")
            });
        }

        //// GET: api/Dummier/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/Dummier
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT: api/Dummier/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/Dummier/5
        //public void Delete(int id)
        //{
        //}

        public class DummyData
        {
            public string clientData { get; set; }
            public string serverData { get; set; }
        
        }
    }
}
