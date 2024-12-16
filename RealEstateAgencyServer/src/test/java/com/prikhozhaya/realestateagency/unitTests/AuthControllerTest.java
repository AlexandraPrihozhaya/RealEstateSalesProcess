package com.prikhozhaya.realestateagency.unitTests;

import com.prikhozhaya.realestateagency.controller.AuthController;
import com.prikhozhaya.realestateagency.exception.UserAlreadyExistsException;
import com.prikhozhaya.realestateagency.model.User;
import com.prikhozhaya.realestateagency.security.jwt.JwtUtils;
import com.prikhozhaya.realestateagency.service.IUserService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
public class AuthControllerTest {
    @InjectMocks
    private AuthController authController;

    @Mock
    private IUserService userService;

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private JwtUtils jwtUtils;
    @Test
    public void testRegisterUser_Success() {

        User user = new User();
        user.setEmail("test@example.com");
        user.setPassword("password");
        when(userService.registerUser(user)).thenReturn(user);

        ResponseEntity<?> response = authController.registerUser(user);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Registration successful!", response.getBody());
        verify(userService, times(1)).registerUser(user);
    }

    @Test
    public void testRegisterUser_UserAlreadyExistsException() {

        User user = new User();
        user.setEmail("test@example.com");
        user.setPassword("password");
        when(userService.registerUser(any(User.class))).thenThrow(new UserAlreadyExistsException(user.getEmail()
                + " уже существует"));

        ResponseEntity<?> response = authController.registerUser(user);

        assertEquals(user.getEmail() + " уже существует", response.getBody());
        verify(userService, times(1)).registerUser(user);
    }
}
