using EduAppApi.Data;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Web;

const string CORSAllowSpecificOrigins = "_CORSAllowed";

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddCors(options => options.AddPolicy(name: CORSAllowSpecificOrigins,
                                                      policy => policy.WithOrigins("http://192.168.1.7", "http://192.168.1.5", "http://192.168.1.3","http://localhost:19006").AllowAnyOrigin().AllowAnyMethod()));
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
                                                    options.UseSqlServer(connectionString));

// Add services to the container.
//builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//    .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

//app.UseAuthorization();

app.MapControllers();

app.UseCors(CORSAllowSpecificOrigins);

app.Run();
