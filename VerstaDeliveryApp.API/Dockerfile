﻿FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["VerstaDeliveryApp.API/VerstaDeliveryApp.API.csproj", "VerstaDeliveryApp.API/"]
COPY ["VerstaDeliveryApp.Data/VerstaDeliveryApp.Data.csproj", "VerstaDeliveryApp.Data/"]
RUN dotnet restore "VerstaDeliveryApp.API/VerstaDeliveryApp.API.csproj"
COPY . .
WORKDIR "/src/VerstaDeliveryApp.API"
RUN dotnet build "VerstaDeliveryApp.API.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "VerstaDeliveryApp.API.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "VerstaDeliveryApp.API.dll"]
