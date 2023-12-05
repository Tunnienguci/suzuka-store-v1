package suzuka.be.Controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import suzuka.be.DTO.Category.cateReq;
import suzuka.be.DTO.Category.deleteCategory;
import suzuka.be.DTO.Category.getAllDTO;
import suzuka.be.Entities.Category;
import suzuka.be.Services.CategoryService;

import java.util.List;

@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:58287"})
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("/get-all")
    public List<getAllDTO> getAllCategory(){
        return categoryService.getAllCategory();
    }

    @PostMapping("/create-category")
    public Category createCategory(@RequestBody cateReq req){
        return categoryService.createCategory(req);
    }

    @DeleteMapping("/delete-category")
    public Boolean deleteCategory(@RequestParam Integer categoryId, Integer subCategoryId){return categoryService.deleteCategory(categoryId, subCategoryId);}
}
