package suzuka.be.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import suzuka.be.Entities.Image;
import suzuka.be.Entities.Product;

import java.util.List;
@Repository
public interface ImageRepository extends JpaRepository<Image,Integer> {
}

