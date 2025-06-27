// <copyright file="DeliveryOrderRepository.cs" company="Maria Myasnikova">
// Copyright (c) Maria Myasnikova. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
// </copyright>

namespace VerstaDeliveryApp.Data;

using Microsoft.EntityFrameworkCore;

/// <summary>
/// Class for interacting with the delivery order entity.
/// </summary>
/// <param name="context">Database context.</param>
public class DeliveryOrderRepository(AppDbContext context)
{
    /// <summary>
    /// Creates new delivery order.
    /// </summary>
    /// <param name="order">New delivery order.</param>
    public async Task Create(DeliveryOrder? order)
    {
        await context.DeliveryOrders.AddAsync(order);
        await context.SaveChangesAsync();
    }

    /// <summary>
    /// Gets delivery order by Id.
    /// </summary>
    /// <param name="id">Delivery order Id.</param>
    public async Task<DeliveryOrder?> GetById(int id) => await context.DeliveryOrders.FirstOrDefaultAsync(order => order.Id == id);

    /// <summary>
    /// Gets all delivery orders.
    /// </summary>
    public async Task<List<DeliveryOrder>> GetAll() => await context.DeliveryOrders.ToListAsync();
}