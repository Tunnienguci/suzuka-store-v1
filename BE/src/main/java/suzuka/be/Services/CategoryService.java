package suzuka.be.Services;

import lombok.RequiredArgsConstructor;
import suzuka.be.DTO.Category.cateReq;
import suzuka.be.DTO.Category.getAllDTO;
import suzuka.be.DTO.Category.SubCategoryDTO;
import suzuka.be.Entities.Category;
import suzuka.be.Entities.SubCategory;
import suzuka.be.Repositories.CategoryRepository;
import suzuka.be.Repositories.SubCategoryRepository;
import org.springframework.stereotype.Service;

import java.text.Normalizer;
import java.util.Collections;
import java.util.List;

@RequiredArgsConstructor
@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final SubCategoryRepository subCategoryRepository;

    public List<getAllDTO> getAllCategory(){
        try{
            List<Category> categories = categoryRepository.findAll();
            List<getAllDTO> getAllDTOList = categories.stream().map(category -> {
                getAllDTO getAllDTO = new getAllDTO();
                getAllDTO.setId(category.getId());
                getAllDTO.setCategoryName(category.getCategoryName());
                getAllDTO.setCategorySlug(category.getCategorySlug());
                getAllDTO.setSubCategories(subCategoryRepository.findByCategoryId(category).stream().map(subCategory -> {
                    SubCategoryDTO subCategoryDTO = new SubCategoryDTO();
                    subCategoryDTO.setSubCategoryId(subCategory.getId());
                    subCategoryDTO.setSubCategoryName(subCategory.getSubCategoryName());
                    subCategoryDTO.setSubCategorySlug(subCategory.getSubCategorySlug());
                    return subCategoryDTO;

                }).toList());
                
                return getAllDTO;
            }).toList();

            return getAllDTOList;
        }catch (Exception e){
            return Collections.emptyList();
        }
    }

    //Create Category
    public Category createCategory(cateReq req){
        try {
            String categoryName = req.getCategoryName().trim();
            String categorySlug = slugify(categoryName);

            Category category = categoryRepository.findByCategorySlug(categorySlug);
            if (category == null) {
                category = new Category();
                category.setCategoryName(categoryName);
                category.setCategorySlug(categorySlug);
            }
            category = categoryRepository.save(category);

            for (String subCategoryName : req.getSubCategoryName()) {
                String cleanedSubCategoryName = subCategoryName.trim();
                String subCategorySlug = slugify(cleanedSubCategoryName);

                List<SubCategory> existingSubCategories = subCategoryRepository.findByCategoryId_IdAndSubCategorySlug(category.getId(), subCategorySlug);
                if (existingSubCategories.isEmpty()) {
                    SubCategory subCategory = new SubCategory();
                    subCategory.setSubCategoryName(cleanedSubCategoryName);
                    subCategory.setCategoryId(category); // Set đối tượng category, không phải ID
                    subCategory.setSubCategorySlug(subCategorySlug);
                    subCategoryRepository.save(subCategory);
                }
            }

            return category;
        } catch (Exception e) {
            return null;
        }
    }


    public boolean deleteCategory(Integer categoryId, Integer subCategoryId) {
       try {
           if (subCategoryId.equals(null)) {
               Category category = categoryRepository.findById(categoryId).orElse(null);
               categoryRepository.delete(category);
               return true;
           } else {
               SubCategory subCategory = subCategoryRepository.findById(subCategoryId).orElse(null);
               subCategoryRepository.delete(subCategory);
               return true;
           }
       } catch (Exception e) {
           return false;
       }
   }

    public static String slugify(String input) {
        String sanitized = input.replaceAll("&", "và").replaceAll("-", " và ");

        String noAccent = Normalizer.normalize(sanitized, Normalizer.Form.NFD)
                            .replaceAll("[\\p{InCombiningDiacriticalMarks}]", "");
        return noAccent.toLowerCase().replaceAll("\\s+", "-");
    }
}
