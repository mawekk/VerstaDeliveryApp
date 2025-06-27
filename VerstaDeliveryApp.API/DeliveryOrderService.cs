// <copyright file="DeliveryOrderService.cs" company="Maria Myasnikova">
// Copyright (c) Maria Myasnikova. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
// </copyright>

namespace VerstaDeliveryApp.API;

using VerstaDeliveryApp.API.Models;
using VerstaDeliveryApp.Data;

/// <summary>
/// Service for working with delivery orders.
/// </summary>
public class DeliveryOrderService(DeliveryOrderRepository orderRepository)
{
    /// <summary>
    /// Adds new delivery order.
    /// </summary>
    /// <param name="request">Delivery order request.</param>
    public async Task AddDeliveryOrder(DeliveryOrderRequest request)
    {
        var order = new DeliveryOrder
        {
            SenderCity = request.SenderCity,
            SenderAddress = request.SenderAddress,
            ReceiverCity = request.ReceiverCity,
            ReceiverAddress = request.ReceiverAddress,
            CargoWeight = request.CargoWeight,
            PickupDate = request.PickupDate,
        };

        await orderRepository.Create(order);
    }

    /// <summary>
    /// Gets delivery order by Id or all delivery orders.
    /// </summary>
    /// <param name="id">Delivery order Id or null.</param>
    public async Task<List<DeliveryOrderDto>> GetDeliveryOrder(int? id)
    {
        List<DeliveryOrder> ordersList;

        if (id == null)
        {
            ordersList = await orderRepository.GetAll();
        }
        else
        {
            ordersList =
            [
                await orderRepository.GetById(id.Value) ??
                throw new InvalidOperationException($"Delivery order with ID {id.Value} was not found.")
            ];
        }

        return ordersList.Select(
            order => new DeliveryOrderDto(
                order.Id,
                order.SenderCity,
                order.SenderAddress,
                order.ReceiverCity,
                order.ReceiverAddress,
                order.CargoWeight,
                order.PickupDate)).ToList();
    }
}