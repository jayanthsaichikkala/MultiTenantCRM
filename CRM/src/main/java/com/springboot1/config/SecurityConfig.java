package com.springboot1.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.springboot1.security.LoginSuccessHandler;

@Configuration
public class SecurityConfig {

	private final LoginSuccessHandler loginSuccessHandler;

	public SecurityConfig(LoginSuccessHandler loginSuccessHandler) {
		this.loginSuccessHandler = loginSuccessHandler;
	}

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests(auth -> auth
				// ── Static assets – always public ──────────────────────────
				.requestMatchers("/login", "/css/**", "/js/**", "/images/**", "/fonts/**", "/webjars/**", "/login.css",
						"/dashboard-admin.css", "/dashboard-admin.js", "/*.css", "/*.js", "/*.ico", "/*.png", "/*.svg")
				.permitAll()

				// ── Role-based route access ────────────────────────────────
				.requestMatchers("/dashboard/super-admin").hasRole("SUPER_ADMIN")

				.requestMatchers("/dashboard/admin").hasAnyRole("SUPER_ADMIN", "ADMIN")

				// ← THIS WAS MISSING – all /admin/** routes now secured
				.requestMatchers("/admin/**").hasAnyRole("SUPER_ADMIN", "ADMIN")

				.requestMatchers("/dashboard/user").hasAnyRole("SUPER_ADMIN", "ADMIN", "USER")

				// ── Everything else requires authentication ─────────────────
				.anyRequest().authenticated())
				.formLogin(form -> form.loginPage("/login").usernameParameter("usernameOrEmail") // matches
																									// name="usernameOrEmail"
																									// in login.html
						.passwordParameter("password").successHandler(loginSuccessHandler) // redirects by role
						.failureUrl("/login?error").permitAll())
				.logout(logout -> logout.logoutUrl("/logout").logoutSuccessUrl("/login?logout")
						.invalidateHttpSession(true).deleteCookies("JSESSIONID").permitAll());

		return http.build(); // ← was [http.build](http://http.build)() — now fixed
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	DaoAuthenticationProvider authenticationProvider(UserDetailsService userDetailsService, PasswordEncoder encoder) {
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider(userDetailsService);
		authProvider.setPasswordEncoder(encoder);
		return authProvider;
	}
}