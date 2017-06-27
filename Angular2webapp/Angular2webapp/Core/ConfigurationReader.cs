using Angular2webapp.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Angular2webapp.Core
{
    public class ConfigurationReader
    {
        //TODO: Validate json file against json schema
        //MIT Licensed Validator could be used: https://github.com/RSuter/NJsonSchema
        //schema example:
        //{
        //  "title": "Root Schema",
        //  "type": "object",
        //  "additionalProperties": false,
        //  "required": [
        //      "loggers"
        //  ],
        //  "properties": {
        //      "loggers": {
        //          "type": "array",
        //          "items": {
        //              "type": "object",
        //              "additionalProperties": false,
        //              "required": [
        //                  "name",
        //                  "level"
        //              ],
        //              "properties": {
        //                  "name": {
        //                      "type": "string"
        //                  },
        //                  "level": {
        //                      "type": "string"
        //                  }
        //              }
        //          }
        //      }
        //  }
        //}

        internal static Configuration GetConfiguration()
        {
            try
            {
                var configFile = System.Web.Hosting.HostingEnvironment.MapPath("~/config.development.json");
                using (var r = new StreamReader(configFile))
                {
                    string json = r.ReadToEnd();
                    var items = JsonConvert.DeserializeObject<Configuration>(json);
                    return items;
                }
            }
            catch (FileNotFoundException fnfExc)
            {
                //Common.Logging.LogManager.GetLogger("ConfigurationReader.GetConfiguration").Fatal("Configurations file not found: " + fnfExc.Message, fnfExc);
                throw;
                //return null;
            }
            catch (Exception exc)
            {
                //Common.Logging.LogManager.GetLogger("ConfigurationReader.GetConfiguration").Fatal("???: " + exc.Message, exc);
                throw;
                //return null;
            }
        }
    }
}