# RealEstateSalesProcess🏡
***Программное средство автоматизации процессов купли-продажи жилой недвижимости через риэлторское агентство***

## Архитектура ПС

Архитектура ПС в нотации C4-модель. Ниже представлены контейнерный и компонентный уровни.

Диаграмма контейнеров

![контейнеры C4 drawio](https://github.com/user-attachments/assets/9f6aa4a4-985d-4e12-83c0-6fdbdd372ae3)

Диаграмма компонентов

![компоненты С4 drawio](https://github.com/user-attachments/assets/d1775589-b525-4c75-86f2-ba54a534d432)

Система дизайна пользовательского интерфейса

![UI Kit](https://github.com/user-attachments/assets/7a443bea-d0a0-40cc-819c-e2ef80520250)

## Архитектура

Схема БД

![image_2024-10-21_12-09-37](https://github.com/user-attachments/assets/95664975-de2c-4497-b808-54a9668e826e)

## Пользовательский интерфейс

### User-flow диаграммы

User-flow для пользователя

![user](https://github.com/user-attachments/assets/3e9700ae-e5ad-4d4a-9f45-c972a086633e)

User-flow для клиента

![client](https://github.com/user-attachments/assets/aba98c22-e21e-4293-bd66-f3c81bb0f7ad)

User-flow для риэлтора

![realtor](https://github.com/user-attachments/assets/fac1a0e7-ce26-40cc-ba19-5e83e613fdc4)

User-flow для администратора

![admin](https://github.com/user-attachments/assets/77d781db-76da-430e-886f-7fa145324dcd)

### Примеры экранов UI

![image](https://github.com/user-attachments/assets/6b57ba1d-e3a2-46fe-9c0c-331ec9f84a19)

![image](https://github.com/user-attachments/assets/12e2cc41-07a0-4076-ba78-109650c476a9)

![image](https://github.com/user-attachments/assets/e40e079c-0630-4dad-a8a5-06fc7e1801b8)

![image](https://github.com/user-attachments/assets/e9a20171-bc23-4c6a-a5b8-392853102217)

![image](https://github.com/user-attachments/assets/8b73bb67-2f73-4363-90aa-61bbae4c0a90)

![image](https://github.com/user-attachments/assets/8353fa23-db72-4a3c-b1ae-cb871ee3cb49)

![image](https://github.com/user-attachments/assets/f231cbf0-d935-4d8b-927d-938c5e23f710)

![image](https://github.com/user-attachments/assets/04230ff1-87cc-4326-ac10-7e26dc5fbf7b)

![image](https://github.com/user-attachments/assets/1cdd4e59-2021-42ad-abbe-d7a39df9eae0)

![image](https://github.com/user-attachments/assets/f5177ea5-e5a4-4f59-9584-57b29ad9d967)

![image](https://github.com/user-attachments/assets/2a4a1814-5967-4306-bb84-244d61741365)

![image](https://github.com/user-attachments/assets/002ac90b-eb53-4f58-bd33-cc707de94fb5)

![image](https://github.com/user-attachments/assets/2cf0d182-5a88-4398-ae44-099bdd27e32c)

![image](https://github.com/user-attachments/assets/90831344-b72a-4be5-91be-a3903f63efdb)

![image](https://github.com/user-attachments/assets/4e81af77-393a-4bef-9298-db4025844829)

![image](https://github.com/user-attachments/assets/755f3f47-11a4-4078-839d-8de354493766)

![image](https://github.com/user-attachments/assets/1fca8b77-a636-449f-9ddc-72c1aa95420c)

![image](https://github.com/user-attachments/assets/c84ed776-34bc-40cd-9229-8dec0e047ada)

![image](https://github.com/user-attachments/assets/4dcd936d-e4b7-4ac2-8b15-2cf13e89afe1)

![image](https://github.com/user-attachments/assets/6df24846-e2ed-4101-833d-2d9c24c1a8a1)

![image](https://github.com/user-attachments/assets/ad18bf40-6f71-4261-a827-ccf9901a61f4)

## Безопасность

В системе есть разграничение прав доступа, то есть реализовано разделение по ролям.
Аутентификация и авторизация реализованы с помощью Spring Security и JWT-токенов. 
Код ниже на Java представляет собой конфигурацию безопасности Spring Security для веб-приложения.

```ruby
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.csrf(AbstractHttpConfigurer :: disable)
            .exceptionHandling(
                    exception -> exception.authenticationEntryPoint(jwtAuthEntryPoint))
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                    .requestMatchers("/auth/**")
                    .permitAll().requestMatchers("/roles/**").hasRole("ADMIN")
                    .anyRequest().authenticated());
    http.authenticationProvider(authenticationProvider());
    http.addFilterBefore(authenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    return http.build();
}
```

Ниже представлен метод, генерирующий токены.

```ruby
public String generateJwtTokenForUser(Authentication authentication){
    AgencyUserDetails userPrincipal = (AgencyUserDetails) authentication.getPrincipal();
    List<String> roles = userPrincipal.getAuthorities()
            .stream()
            .map(GrantedAuthority::getAuthority).toList();
    return Jwts.builder()
            .setSubject(userPrincipal.getUsername())
            .claim("roles", roles)
            .setIssuedAt(new Date())
            .setExpiration(new Date((new Date()).getTime()+jwtExpirationMs))
            .signWith(key(), SignatureAlgorithm.HS256).compact();
}
```

Когда пользователь входит в систему, сервер проверяет его учетные данные и, если они действительны, создает и подписывает JWT-токен. Этот токен содержит информацию о пользователе, такую как его email и пароль.

```ruby
@PostMapping("/login")
public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest request){
    Authentication authentication =
            authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
    SecurityContextHolder.getContext().setAuthentication(authentication);
    String jwt = jwtUtils.generateJwtTokenForUser(authentication);
    AgencyUserDetails userDetails = (AgencyUserDetails) authentication.getPrincipal();
    List<String> roles = userDetails.getAuthorities()
            .stream()
            .map(GrantedAuthority::getAuthority).toList();
    return ResponseEntity.ok(new JwtResponse(
            userDetails.getId(),
            userDetails.getEmail(),
            jwt,
            roles));
}
```

Шифрование пароля реализовано с помощью кодировщика паролей `PasswordEncoder`.

```ruby
user.setPassword(passwordEncoder.encode(user.getPassword()));
```

Так, пароли в базе данных хранятся в зашифрованном виде.

![image](https://github.com/user-attachments/assets/85f0e59c-4321-4c30-b022-37c99c138a2c)
