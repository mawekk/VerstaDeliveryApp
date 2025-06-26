// <copyright file="DeliveryOrder.cs" company="Maria Myasnikova">
// Copyright (c) Maria Myasnikova. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
// </copyright>

namespace VerstaDeliveryApp.Data;

/// <summary>
/// Delivery order entity.
/// </summary>
public class DeliveryOrder
{
    /// <summary>
    /// Gets or sets order id.
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Gets or sets order sender's city.
    /// </summary>
    public required string SenderCity { get; set; }

    /// <summary>
    /// Gets or sets order sender's address.
    /// </summary>
    public required string SenderAddress { get; set; }

    /// <summary>
    /// Gets or sets order recipient's city.
    /// </summary>
    public required string RecipientCity { get; set; }

    /// <summary>
    /// Gets or sets order recipient's address.
    /// </summary>
    public required string RecipientAddress { get; set; }

    /// <summary>
    /// Gets or sets order cargo weight.
    /// </summary>
    public required double CargoWeight { get; set; }

    /// <summary>
    /// Gets or sets order date of pickup.
    /// </summary>
    public required DateTime PickupDate { get; set; }
}