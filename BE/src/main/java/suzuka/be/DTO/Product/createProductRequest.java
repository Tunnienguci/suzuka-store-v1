package suzuka.be.DTO.Product;

import lombok.Data;
import suzuka.be.Entities.SubCategory;

import java.util.List;
@Data
public class createProductRequest {
    private String sku;
    private String barcode;
    private String product_name;
    private String product_description;
    private String origin;
    private SubCategory sub_category_id;
    private Float price;
    private Integer discount;
    private String brand;
    private String discount_start_time;
    private String discount_end_time;
    private String avatar;
    private List<String> images;
}
