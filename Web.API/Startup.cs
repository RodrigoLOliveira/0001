using Web.API.Models.Db;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.OpenApi.Models;
using Web.API.Repositories;
using Web.API.Interfaces;

namespace Web.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(options =>
                    {
                        options.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuer = false,
                            ValidateAudience = false,
                            ValidateLifetime = true,
                            ValidateIssuerSigningKey = true,

                            ValidIssuer = "c",
                            ValidAudience = Configuration.GetSection("Url").GetSection("Api").Value.ToString(),
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("fRJYm5#ZW^`*UpYg,E^B&(t@gHfMby=FSNREs[g6!$fThFj)2At;tDPn2@+&%2qL:eB+6(hZVh;[Q87,vZw:L{fqf98DnELn{ej(S>y7Ssx)[%Cr:];dSt4ll@123"))
                        };
                    });

            WebContext.ConnectionString = Configuration.GetConnectionString("conn");

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Teste API", Version = "v1" });
            });


            services.AddDbContext<WebContext>();
            services.AddScoped<IClienteRepository, ClienteRepository>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            app.UseAuthentication();
            app.UseMvc();

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Teste API V1");
                c.RoutePrefix = string.Empty;
            });
        }
    }
}
