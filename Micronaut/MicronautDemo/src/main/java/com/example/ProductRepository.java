package com.example;

import io.micronaut.data.annotation.Repository;
import io.micronaut.data.repository.CrudRepository;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product, String> {
    List<Product> findByName(String name);
}

/*
Without DB
*/
//@Singleton
//public class ProductRepository {
//    List<Product> products = new ArrayList<>();

//    public ProductRepository() {
//        this.products.add(new Product(UUID.randomUUID().toString(), "Product_2"));
//        this.products.add(new Product(UUID.randomUUID().toString(), "Product_3"));
//        this.products.add(new Product(UUID.randomUUID().toString(), "Product_4"));
//    }
//
//    public Product createProduct() {
//        Product product = new Product();
//        product.setId(UUID.randomUUID().toString());
//        product.setName("Product1");
//        return product;
//    }
//
//    public List<Product> getAllProducts() {
//        return products;
//    }
//
//    public Product getProductById(String id){
//        return this.products.stream()
//                .filter(product -> id.equals(product.getId()))
//                .findFirst()
//                .orElseThrow(() -> new EntityNotFound("Product not found!"));
//    }
//
//    public void addProductInList(Product product){
//        this.products.add(product);
//    }
//
//    public void saveProduct(Product product) {
//        this.products.add(product);
//    }
//}
