package pets_Care.msusers.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="roles")
public class Rol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String description;

}
