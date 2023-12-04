package suzuka.be.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "sub_category")
public class SubCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "sub_category_name")
    private String subCategoryName;

    @Column(name = "sub_category_slug")
    private String subCategorySlug;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category categoryId;

    @OneToMany(mappedBy = "subCategory", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Product> products;


}
