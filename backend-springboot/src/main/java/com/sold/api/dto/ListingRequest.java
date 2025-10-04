package com.sold.api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.UUID;

@Data
public class ListingRequest {
    @NotNull(message = "Item ID is required")
    private UUID itemId;

    @NotBlank(message = "Platform is required")
    private String platform;
}
