package suzuka.be.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import suzuka.be.Entities.Product;
import suzuka.be.Entities.SubCategory;

import java.util.List;
@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {
    List<Product> findBySubCategoryIn(List<SubCategory> categories);

    List<Product> findBySubCategoryId(Integer category);
}
