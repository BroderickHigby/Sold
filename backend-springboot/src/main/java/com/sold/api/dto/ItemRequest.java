package com.sold.api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

import java.util.List;

@Data
public class ItemRequest {
    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Description is required")
    private String description;

    private List<String> imageUrls;

    @NotNull(message = "High price is required")
    @Positive(message = "High price must be positive")
    private Double priceHigh;

    @NotNull(message = "Mid price is required")
    @Positive(message = "Mid price must be positive")
    private Double priceMid;

    @NotNull(message = "Low price is required")
    @Positive(message = "Low price must be positive")
    private Double priceLow;
}
