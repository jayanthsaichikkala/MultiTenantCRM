package com.crm.controller;

// ==============================================
//  AuthController.java
//  Place in: src/main/java/com/crm/controller/
// ==============================================

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AuthController {

	/**
	 * GET /login → renders templates/authentication/login.html
	 */
	@GetMapping("/login")
	public String loginPage() {
		return "authentication/login";
	}

	/**
	 * GET /dashboard → renders templates/dashboard.html (Create this template when
	 * you build the dashboard)
	 */
	@GetMapping("/dashboard")
	public String dashboard() {
		return "dashboard";
	}
}
