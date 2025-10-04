package com.sold.api.service;

import com.sold.api.dto.ItemRequest;
import com.sold.api.dto.ItemResponse;
import com.sold.api.entity.Item;
import com.sold.api.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;
    private final JwtService jwtService;

    public ItemResponse createItem(ItemRequest request, String token) {
        // Extract user ID from token
        String email = jwtService.extractEmail(token.replace("Bearer ", ""));
        // TODO: Get userId from email

        Item item = Item.builder()
                .userId(UUID.randomUUID()) // TODO: Use actual user ID
                .title(request.getTitle())
                .description(request.getDescription())
                .imageUrls(request.getImageUrls())
                .priceHigh(request.getPriceHigh())
                .priceMid(request.getPriceMid())
                .priceLow(request.getPriceLow())
                .build();

        item = itemRepository.save(item);
        return mapToResponse(item);
    }

    public List<ItemResponse> getUserItems(String token) {
        String email = jwtService.extractEmail(token.replace("Bearer ", ""));
        // TODO: Get userId from email and fetch items
        List<Item> items = itemRepository.findAll();
        return items.stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public ItemResponse getItemById(UUID id) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Item not found"));
        return mapToResponse(item);
    }

    public ItemResponse updateItem(UUID id, ItemRequest request, String token) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Item not found"));

        item.setTitle(request.getTitle());
        item.setDescription(request.getDescription());
        item.setImageUrls(request.getImageUrls());
        item.setPriceHigh(request.getPriceHigh());
        item.setPriceMid(request.getPriceMid());
        item.setPriceLow(request.getPriceLow());

        item = itemRepository.save(item);
        return mapToResponse(item);
    }

    public void deleteItem(UUID id, String token) {
        itemRepository.deleteById(id);
    }

    private ItemResponse mapToResponse(Item item) {
        return ItemResponse.builder()
                .id(item.getId())
                .userId(item.getUserId())
                .title(item.getTitle())
                .description(item.getDescription())
                .imageUrls(item.getImageUrls())
                .priceHigh(item.getPriceHigh())
                .priceMid(item.getPriceMid())
                .priceLow(item.getPriceLow())
                .status(item.getStatus())
                .createdAt(item.getCreatedAt())
                .updatedAt(item.getUpdatedAt())
                .build();
    }
}
