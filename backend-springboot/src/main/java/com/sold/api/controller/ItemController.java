package com.sold.api.controller;

import com.sold.api.dto.ItemRequest;
import com.sold.api.dto.ItemResponse;
import com.sold.api.service.ItemService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/items")
@RequiredArgsConstructor
@CrossOrigin(origins = "${cors.allowed-origins}")
public class ItemController {

    private final ItemService itemService;

    @PostMapping
    public ResponseEntity<ItemResponse> createItem(
            @Valid @RequestBody ItemRequest request,
            @RequestHeader("Authorization") String token) {
        ItemResponse response = itemService.createItem(request, token);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<ItemResponse>> getUserItems(@RequestHeader("Authorization") String token) {
        List<ItemResponse> items = itemService.getUserItems(token);
        return ResponseEntity.ok(items);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItemResponse> getItem(@PathVariable UUID id) {
        ItemResponse item = itemService.getItemById(id);
        return ResponseEntity.ok(item);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ItemResponse> updateItem(
            @PathVariable UUID id,
            @Valid @RequestBody ItemRequest request,
            @RequestHeader("Authorization") String token) {
        ItemResponse response = itemService.updateItem(id, request, token);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(
            @PathVariable UUID id,
            @RequestHeader("Authorization") String token) {
        itemService.deleteItem(id, token);
        return ResponseEntity.noContent().build();
    }
}
