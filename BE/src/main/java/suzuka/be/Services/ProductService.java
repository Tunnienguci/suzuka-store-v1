package suzuka.be.Services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import suzuka.be.DTO.Product.createProductRequest;
import suzuka.be.Entities.Category;
import suzuka.be.Entities.Image;
import suzuka.be.Entities.Product;
import suzuka.be.Repositories.CategoryRepository;
import suzuka.be.Repositories.ImageRepository;
import suzuka.be.Repositories.ProductRepository;
import suzuka.be.Repositories.SubCategoryRepository;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final SubCategoryRepository subCategoryRepository;
    private final ImageRepository imageRepository;

    public List<Product> getProductAll(){
        List<Product> products = productRepository.findAll();
        return products;
    }
    public List<Product> findByCategoryId(Integer categoryId) {
        Category category = categoryRepository.findById(categoryId).orElse(null);
        List<Product> products = productRepository.findBySubCategoryIn(category.getSubCategories());
        return products;
    }

    public List<Product> findBySubCategoryId(Integer subCategoryId) {
        List<Product> products = productRepository.findBySubCategoryId(subCategoryId);
        return products;
    }

    public Product findById(Integer id) {
        Product product = productRepository.findById(id).orElse(null);
        return product;
    }

    public Product createProduct(createProductRequest request){

        Product product = new Product();
        product.setSku(request.getSku().trim());
        product.setBarcode(request.getBarcode().trim());
        product.setProductName(request.getProduct_name().trim());
        product.setPrice(request.getPrice());
        product.setProductDescription(request.getProduct_description());
        product.setDiscount(request.getDiscount());
        product.setDiscountStartTime(request.getDiscount_start_time());
        product.setDiscountEndTime(request.getDiscount_end_time());
        product.setSubCategory(request.getSub_category_id());
        product.setAvatar(request.getAvatar().trim());
        product.setBrand(request.getBrand().trim());
        product.setOrigin(request.getOrigin().trim());

        productRepository.save(product);

        // Save images to database
        for (String image : request.getImages()) {
            Image img = new Image();
            img.setImg(image);
            img.setProduct(product);
            imageRepository.save(img);
        }
        
        return product;
    }

    // Delete product
    public void deleteProduct(Integer id){
        productRepository.deleteById(id);
    }
}
