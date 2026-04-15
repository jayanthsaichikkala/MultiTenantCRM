package com.crm.controller;

// ==============================================
//  SecurityConfig.java
//  Place in: src/main/java/com/crm/controller/
// ==============================================

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	/**
	 * Security filter chain – defines which URLs are protected and configures the
	 * login / logout flow.
	 */
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests(auth -> auth
				// Allow static resources without authentication
				.requestMatchers("/style.css", "/script.js", "/images/**", "/favicon.ico").permitAll()
				// Allow the login page itself
				.requestMatchers("/login").permitAll()
				// Every other request needs to be authenticated
				.anyRequest().authenticated()).formLogin(form -> form.loginPage("/login") // custom login page
						.loginProcessingUrl("/login") // POST target (matches th:action in HTML)
						.defaultSuccessUrl("/dashboard", true).failureUrl("/login?error").permitAll())
				.logout(logout -> logout.logoutSuccessUrl("/login?logout").permitAll());

		return http.build();
	}

	/**
	 * In-memory user for quick testing. Replace with a JPA-backed
	 * UserDetailsService for production.
	 */
	@Bean
	public UserDetailsService userDetailsService() {
		UserDetails admin = User.builder().username("admin").password(passwordEncoder().encode("admin123"))
				.roles("ADMIN").build();

		UserDetails user = User.builder().username("user").password(passwordEncoder().encode("user123")).roles("USER")
				.build();

		return new InMemoryUserDetailsManager(admin, user);
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
