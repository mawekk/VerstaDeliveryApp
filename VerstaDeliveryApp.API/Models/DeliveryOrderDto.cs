// <copyright file="DeliveryOrderDto.cs" company="Maria Myasnikova">
// Copyright (c) Maria Myasnikova. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
// </copyright>

namespace VerstaDeliveryApp.API.Models;

/// <summary>
/// Delivery order DTO.
/// </summary>
public record DeliveryOrderDto(
    int Id,
    string SenderCity,
    string SenderAddress,
    string ReceiverCity,
    string ReceiverAddress,
    double CargoWeight,
    DateTime PickupDate);