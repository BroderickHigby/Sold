package com.sold.api.controller;

import com.sold.api.dto.ListingRequest;
import com.sold.api.dto.ListingResponse;
import com.sold.api.service.ListingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/listings")
@RequiredArgsConstructor
@CrossOrigin(origins = "${cors.allowed-origins}")
public class ListingController {

    private final ListingService listingService;

    @PostMapping
    public ResponseEntity<ListingResponse> createListing(
            @Valid @RequestBody ListingRequest request,
            @RequestHeader("Authorization") String token) {
        ListingResponse response = listingService.createListing(request, token);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/item/{itemId}")
    public ResponseEntity<List<ListingResponse>> getListingsByItem(@PathVariable UUID itemId) {
        List<ListingResponse> listings = listingService.getListingsByItemId(itemId);
        return ResponseEntity.ok(listings);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ListingResponse> getListing(@PathVariable UUID id) {
        ListingResponse listing = listingService.getListingById(id);
        return ResponseEntity.ok(listing);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<ListingResponse> updateListingStatus(
            @PathVariable UUID id,
            @RequestParam String status) {
        ListingResponse response = listingService.updateListingStatus(id, status);
        return ResponseEntity.ok(response);
    }
}
