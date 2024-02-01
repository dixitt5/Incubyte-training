package com.example;

import com.example.exceptions.EntityNotFound;
import jakarta.inject.Singleton;

import java.util.List;

@Singleton
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product saveProduct(ProductRequest productRequest) {
        Product product = new Product();
        product.setName(productRequest.name());
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(String id) {
        return productRepository.findById(id).orElseThrow(() -> new EntityNotFound("Product not found!"));
    }

    public List<Product> findProductByName(String name){
        if(name.isEmpty()) {
            return productRepository.findAll();
        }
        return productRepository.findByName(name);
    }

/*
Without DB
 */
//    public Product createProduct() {
//        return this.productRepository.createProduct();
//    }
//
//    public List<Product> getAllProducts() {
//        return productRepository.getAllProducts();
//    }
//
//    public Product getProductById(String id) {
//        return productRepository.getProductById(id);
//    }
//
//    public void addProductInList(Product product){
//        productRepository.addProductInList(product);
//    }
//
//    public Product saveProduct(ProductRequest productRequest) {
//        Product product = new Product();
//        product.setId(UUID.randomUUID().toString());
//        product.setName(productRequest.name());
//        productRepository.saveProduct(product);
//        return product;
//    }
}
