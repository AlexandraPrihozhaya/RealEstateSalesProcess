package com.prikhozhaya.realestateagency.controller;

import com.prikhozhaya.realestateagency.exception.ResourceNotFoundException;
import com.prikhozhaya.realestateagency.exception.UserAlreadyExistsException;
import com.prikhozhaya.realestateagency.model.User;
import com.prikhozhaya.realestateagency.response.UserResponse;
import com.prikhozhaya.realestateagency.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final IUserService userService;

    @GetMapping("/all")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<User>> getUsers(){

        return new ResponseEntity<>(userService.getUsers(), HttpStatus.FOUND);
    }

    @GetMapping("/user/{email}")
    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN') or hasRole('ROLE_REALTOR')")
    public ResponseEntity<?> getUserByEmail(@PathVariable("email") String email){
        try{
            User theUser = userService.getUser(email);
            return ResponseEntity.ok(theUser);
        }catch (UsernameNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching user");
        }
    }
    @DeleteMapping("/delete/{userId}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or (hasRole('ROLE_USER') and #email == principal.username) or hasRole('ROLE_REALTOR') and #email == principal.username")
    public ResponseEntity<String> deleteUser(@PathVariable("userId") String email){
        try{
            userService.deleteUser(email);
            return ResponseEntity.ok("User deleted successfully");
        }catch (UsernameNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting user: " + e.getMessage());
        }
    }

    @PutMapping("/update")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<String> updateUser(@RequestBody User user) {
        try {
            userService.updateUserEmail(user.getEmail());
            return ResponseEntity.ok("User updated successfully");
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating user: " + e.getMessage());
        }
    }

    @GetMapping("/user-id-{userId}")
    public ResponseEntity<Optional<UserResponse>> getUserById(@PathVariable("userId") Long userId) {
        Optional<User> theUser = userService.getUserById(userId);
        return theUser.map(user -> {
            UserResponse userResponse = getUserResponse(user);
            return ResponseEntity.ok(Optional.of(userResponse));
        }).orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    private UserResponse getUserResponse(User user) {
        return new UserResponse(user.getId(), user.getEmail(), user.getRoles(), user.getFavorites(), user.getReviews(),
                user.getNotifications());
    }
}