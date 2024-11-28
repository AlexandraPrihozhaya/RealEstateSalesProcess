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

![image](https://github.com/user-attachments/assets/e9d4c243-5025-4b6b-b7e4-967be2bee9bd)

![image](https://github.com/user-attachments/assets/65738337-1ace-4a08-b683-ba0518471bc7)

![image](https://github.com/user-attachments/assets/45f5f8a5-33b3-4d3f-8a5e-aa5335e0edcc)

![image](https://github.com/user-attachments/assets/f6416eb6-ba76-480a-9cc2-b5d5b1c82861)

![image](https://github.com/user-attachments/assets/359051ae-21ec-40a3-88c6-4fc8bdba2f0c)

![image](https://github.com/user-attachments/assets/b6f5d483-8adb-4bb0-ab57-8c15c5d123a1)

![image](https://github.com/user-attachments/assets/47b7ca14-e444-48fd-a314-7d6abc7f6427)

![image](https://github.com/user-attachments/assets/769ad750-2419-4937-b179-545b40934e08)

![image](https://github.com/user-attachments/assets/19091e14-951f-4a1e-8bce-eb635edad3de)

## Безопасность

Пароли в базе данных хранятся в зашифрованном виде

![image](https://github.com/user-attachments/assets/85f0e59c-4321-4c30-b022-37c99c138a2c)

В системе есть разграничение прав доступа, то есть реализовано разделение по ролям.
Аутентификация и авторизация реализованы с помощью Spring Security и JWT-токенов. 
Код ниже на Java представляет собой конфигурацию безопасности Spring Security для веб-приложения.

`public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
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
}`



