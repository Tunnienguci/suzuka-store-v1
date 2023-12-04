package suzuka.be.Controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import suzuka.be.DTO.Product.createProductRequest;
import suzuka.be.DTO.Product.getCategoryRequest;
import suzuka.be.Entities.Product;
import suzuka.be.Services.ProductService;

import java.util.List;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
    private final ProductService productService;

    @GetMapping("/get-all")
    public List<Product> getProductAll(){
        return productService.getProductAll();
    }

    @GetMapping("/get-product-by-category")
    public List<Product> getProductByCategory(@RequestBody getCategoryRequest req) {
        return productService.findByCategoryId(req.getCategory());
    }

    @GetMapping("/get-product-by-sub-category")
    public List<Product> getProductBySubCategory(@RequestBody getCategoryRequest req) {
        return productService.findBySubCategoryId(req.getSubCategory());
    }

    @GetMapping("/get-product-by-id")
    public Product getProductById(@RequestParam Integer id) {
        return productService.findById(id);
    }

    @PostMapping("/create-product")
    public Product createProduct(@RequestBody createProductRequest req){
        return productService.createProduct(req);
    }

    @DeleteMapping("/delete-product")
    public void deleteProduct(@RequestParam Integer id){
        productService.deleteProduct(id);
    }
}
