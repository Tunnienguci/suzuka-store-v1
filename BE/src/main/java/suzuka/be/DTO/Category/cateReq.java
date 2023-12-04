package suzuka.be.DTO.Category;

import lombok.Data;

import java.util.List;

@Data
public class cateReq {
    private String categoryName;
    private List<String> subCategoryName;
}
