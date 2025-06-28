// <copyright file="DeliveryOrderEndpoints.cs" company="Maria Myasnikova">
// Copyright (c) Maria Myasnikova. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
// </copyright>

namespace VerstaDeliveryApp.API;

using VerstaDeliveryApp.API.Models;

/// <summary>
/// Class for delivery order endpoints.
/// </summary>
public static class DeliveryOrderEndpoints
{
    /// <summary>
    /// Registers delivery order endpoints.
    /// </summary>
    public static void MapDeliveryOrdersEndpoints(this IEndpointRouteBuilder app)
    {
        var orderGroup = app.MapGroup("/orders");

        orderGroup.MapPost("/new", CreateDeliveryOrder);
        orderGroup.MapGet(string.Empty, GetDeliveryOrder);
    }

    private static async Task<IResult> CreateDeliveryOrder(
        DeliveryOrderRequest request,
        DeliveryOrderService orderService)
    {
        await orderService.AddDeliveryOrder(request);
        return Results.Ok();
    }

    private static async Task<IResult> GetDeliveryOrder(
        int? id,
        DeliveryOrderService orderService)
    {
        var dtoList = await orderService.GetDeliveryOrder(id);
        return Results.Ok(dtoList);
    }
}