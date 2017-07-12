using NLog;
using NLog.Config;
using System.Linq;
using System.Text;

namespace Angular2webapp.Core
{
    public static class NLogConfigurator
    {
        public static void Configure()
        {
            var appConfiguration = ConfigurationReader.GetConfiguration();
            var loggerConfiguration = BaseConfig();
            var defaultFileTarget = loggerConfiguration.AllTargets.First(e => e.Name == "defaultFile");

            if (null != appConfiguration)
            {
                LogLevel logLevel;
                foreach (var logger in appConfiguration.Loggers)
                {
                    switch (logger.Level)
                    {
                        case "DEBUG":
                            logLevel = LogLevel.Debug;
                            break;
                        case "INFO":
                            logLevel = LogLevel.Info;
                            break;
                        case "WARNING":
                            logLevel = LogLevel.Warn;
                            break;
                        case "ERROR":
                            logLevel = LogLevel.Error;
                            break;
                        case "VERBOSE":
                        default:
                            logLevel = LogLevel.Trace;
                            break;
                    }
                    var loggerRule = new LoggingRule(logger.Name, logLevel, defaultFileTarget)
                    {
                        Final = true
                    };
                    loggerConfiguration.LoggingRules.Add(loggerRule);
                }
            }

            // Add default rule at the end. Later as configured value in json possible
            var defaultRule = new LoggingRule("*", LogLevel.Debug, defaultFileTarget);
            loggerConfiguration.LoggingRules.Add(defaultRule);

            // Activate the configuration
            LogManager.Configuration = loggerConfiguration;
        }

        private static LoggingConfiguration BaseConfig()
        {
            // Create configuration object 
            var config = new LoggingConfiguration();

            // Create targets and add them to the configuration 
            var defaultFileTarget = new NLog.Targets.FileTarget
            {
                Name = "defaultFile",
                FileName = "${basedir}/logs/log_default.log",
                AutoFlush = true,
                Layout = "${longdate} ${uppercase:${level:padding=-10}} ${logger:padding=-15} ${message}",
                ConcurrentWrites = false,
                ArchiveFileName = "${basedir}/logs/archives/log_default.{#}.txt",
                ArchiveEvery = NLog.Targets.FileArchivePeriod.Hour,
                ArchiveDateFormat = "yyyyMMdd.HHmm",
                ArchiveNumbering = NLog.Targets.ArchiveNumberingMode.Date
            };
            config.AddTarget(defaultFileTarget);

            // Set Complex Layouts
            // Client side logs are async and thatswhy not ordered
            // But each log has right timestamp
            // Logfile content can be ordered manually,
            // thatswhy header should contain -0-, -1- and so on to be ordered at the top as initially
            var headerLayoutBuilder = new StringBuilder();
            headerLayoutBuilder.Append("-0-".PadRight(120, '-')).Append("${newline}");
            headerLayoutBuilder.Append("-1- System:".PadRight(15)).Append("${machinename}${newline}");
            headerLayoutBuilder.Append("-2- User:".PadRight(15)).Append("${windows-identity}${newline}");
            headerLayoutBuilder.Append("-3-".PadRight(120, '-'));
            defaultFileTarget.Header = headerLayoutBuilder.ToString();

            var footerLayoutBuilder = new StringBuilder();
            footerLayoutBuilder.Append("-9-".PadRight(120, '-'));
            defaultFileTarget.Footer = footerLayoutBuilder.ToString();
           
            // return base configuration
            return config;
        }

    }


}