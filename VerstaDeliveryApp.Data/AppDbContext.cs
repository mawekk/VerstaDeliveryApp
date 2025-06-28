// <copyright file="AppDbContext.cs" company="Maria Myasnikova">
// Copyright (c) Maria Myasnikova. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
// </copyright>

namespace VerstaDeliveryApp.Data;

using Microsoft.EntityFrameworkCore;

/// <summary>
/// The context class for the database.
/// </summary>
public class AppDbContext : DbContext
{
    /// <summary>
    /// Initializes a new instance of the <see cref="AppDbContext"/> class.
    /// </summary>
    /// <param name="options">Options for database context.</param>
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    /// <summary>
    /// Gets or sets delivery orders table.
    /// </summary>
    public DbSet<DeliveryOrder> DeliveryOrders { get; set; }

    /// <summary>
    /// Sets configuration of database table.
    /// </summary>
    /// <param name="modelBuilder">The builder being used to construct the model.</param>
    protected override void OnModelCreating(ModelBuilder modelBuilder) =>
        modelBuilder.Entity<DeliveryOrder>(entity => entity.HasKey(order => order.Id));
}