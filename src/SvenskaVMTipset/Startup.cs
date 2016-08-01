using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using SvenskaVMTipset.Controllers.Registration;
using SvenskaVMTipset.DataAccess;
using SvenskaVMTipset.DataAccess.Repositories;
using SvenskaVMTipset.Services;
using SvenskaVMTipset.Services.Interfaces;

namespace SvenskaVMTipset
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsEnvironment("Development"))
            {
                // This will push telemetry data through Application Insights pipeline faster, allowing you to view results immediately.
                builder.AddApplicationInsightsSettings(developerMode: true);
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = Configuration.GetSection("ConnectionStrings:" + Environment.MachineName).Value;
            services.AddDbContext<DataContext>(options => options.UseSqlServer(connectionString));

            services.AddApplicationInsightsTelemetry(Configuration);
            
            services.AddCors(options => 
            {
                options.AddPolicy("AllowAll", 
                p => p.AllowAnyOrigin()
                      .AllowAnyMethod()
                      .AllowAnyHeader()
                      .AllowCredentials());
            });
            
            services.AddMvc();

            services.AddSingleton<IRegisterService, RegisterService>();
            services.AddSingleton<ILoginService, LoginService>();
            services.AddSingleton<IUserRepository, UserRepository>();
            services.AddSingleton<IPasswordService, PasswordService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseApplicationInsightsRequestTelemetry();

            app.UseApplicationInsightsExceptionTelemetry();
            app.UseCors("AllowAll");
            app.UseMvc();
        }
    }
}
