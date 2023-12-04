package suzuka.be.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import suzuka.be.Entities.Category;
import suzuka.be.Entities.SubCategory;

import java.util.List;
@Repository
public interface SubCategoryRepository extends JpaRepository<SubCategory, Integer> {
    List<SubCategory> findByCategoryId(Category categoryId);

    List<SubCategory> findByCategoryId_IdAndSubCategorySlug(Integer categoryId, String subCategorySlug);
}
