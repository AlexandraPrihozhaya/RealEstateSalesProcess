package com.prikhozhaya.realestateagency.response;

import com.prikhozhaya.realestateagency.model.Role;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;

@Data
@NoArgsConstructor
public class UserResponse {
    private Long id;
    private String email;

    private Collection<Role> roles;


    public UserResponse(Long id, String email, Collection<Role> roles) {
        this.id = id;
        this.email = email;
        this.roles = roles;
    }
}
