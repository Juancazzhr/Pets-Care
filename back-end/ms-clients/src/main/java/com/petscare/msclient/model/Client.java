package com.petscare.msclient.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="Clients")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "user_id")
    private int userId;
}
