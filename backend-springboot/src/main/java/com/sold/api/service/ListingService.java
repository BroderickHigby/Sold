package com.sold.api.service;

import com.sold.api.dto.ListingRequest;
import com.sold.api.dto.ListingResponse;
import com.sold.api.entity.Listing;
import com.sold.api.repository.ListingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ListingService {

    private final ListingRepository listingRepository;

    public ListingResponse createListing(ListingRequest request, String token) {
        Listing listing = Listing.builder()
                .itemId(request.getItemId())
                .platform(request.getPlatform())
                .build();

        listing = listingRepository.save(listing);
        return mapToResponse(listing);
    }

    public List<ListingResponse> getListingsByItemId(UUID itemId) {
        List<Listing> listings = listingRepository.findByItemId(itemId);
        return listings.stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public ListingResponse getListingById(UUID id) {
        Listing listing = listingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Listing not found"));
        return mapToResponse(listing);
    }

    public ListingResponse updateListingStatus(UUID id, String status) {
        Listing listing = listingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Listing not found"));

        listing.setStatus(status);
        listing = listingRepository.save(listing);
        return mapToResponse(listing);
    }

    private ListingResponse mapToResponse(Listing listing) {
        return ListingResponse.builder()
                .id(listing.getId())
                .itemId(listing.getItemId())
                .platform(listing.getPlatform())
                .platformListingId(listing.getPlatformListingId())
                .status(listing.getStatus())
                .postedAt(listing.getPostedAt())
                .createdAt(listing.getCreatedAt())
                .build();
    }
}
