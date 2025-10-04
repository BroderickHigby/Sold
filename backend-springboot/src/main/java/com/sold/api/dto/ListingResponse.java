package com.sold.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ListingResponse {
    private UUID id;
    private UUID itemId;
    private String platform;
    private String platformListingId;
    private String status;
    private LocalDateTime postedAt;
    private LocalDateTime createdAt;
}
