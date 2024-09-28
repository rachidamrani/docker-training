# First-stage base image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
# Set the working directory
WORKDIR /src

# copy ths csjproj and restore dependencies
COPY *.csproj /src
RUN dotnet restore

# Copy and publish application files
COPY . /src/
RUN dotnet publish /src/dockerhrapp.sln -c release -o /app

# final-stage image 
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app .

EXPOSE 5260

ENTRYPOINT ["dotnet", "hrapp.dll"]