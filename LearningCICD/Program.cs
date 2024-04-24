var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(opts =>
{
    opts.WithOrigins("https://learning-ci-cd-client-2024.azurewebsites.net/")
        .AllowAnyMethod()
        .AllowAnyHeader();
});
app.MapGet("/", () => $"This is {builder.Configuration["Environment"]} environment/maybe i should say fuck off?");

app.Run();

