package suzuka.be.DTO.Category;

import lombok.Data;
import suzuka.be.Entities.SubCategory;

import java.util.List;

@Data
public class getAllDTO {
    private Integer id;
    private String categoryName;
    private String categorySlug;
    private List<SubCategoryDTO> subCategories;
}
