package com.sold.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ItemResponse {
    private UUID id;
    private UUID userId;
    private String title;
    private String description;
    private List<String> imageUrls;
    private Double priceHigh;
    private Double priceMid;
    private Double priceLow;
    private String status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
