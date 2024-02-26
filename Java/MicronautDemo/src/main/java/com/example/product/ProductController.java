package com.example;

import io.micronaut.http.annotation.*;

import java.util.List;

@Controller("/products")
public class ProductController {

    ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

/*
First demo of get request
 */
//    @Get("/hello")
//    public String hello(){
//        return "Hello Micronaut";
//    }

/*
With default values
 */
//    @Get("/create")
//    public Product createProduct() {
//        return this.productService.createProduct();
//    }

    @Get
    public List<Product> getAllProducts(){
        return this.productService.getAllProducts();
    }

    @Get("/{id}")
    public Product getProductById(@PathVariable String id){
        return this.productService.getProductById(id);
    }

    @Get("/search")
    public List<Product> getAllProducts(@QueryValue String name){
        return this.productService.findProductByName(name);
    }

/*
add product with get
 */
//    @Get("/addNewProduct")
//    public String addProductInList(){
//        this.productService.addProductInList(new Product(UUID.randomUUID().toString(), "product_5"));
//        return "Product created successfully";
//    }

    @Post
    public Product saveProduct(@Body ProductRequest productRequest){
        return this.productService.saveProduct(productRequest);
    }

//    @Error(global = true)
//    public String error() {
//        return "Not Found!";
//    }
}
