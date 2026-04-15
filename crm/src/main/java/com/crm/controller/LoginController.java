package com.crm.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class LoginController {

	// Show login page
	@GetMapping("/login")
	public String loginPage() {
		return "authentication/login";
	}

	// Handle login
	@PostMapping("/login")
	public String loginProcess(@RequestParam String username, @RequestParam String password, HttpSession session,
			Model model) {

		boolean isValid = ("admin".equals(username) && "admin123".equals(password))
				|| ("user".equals(username) && "user123".equals(password));

		if (isValid) {
			session.setAttribute("user", username);
			return "redirect:/dashboard";
		} else {
			model.addAttribute("error", "Invalid username or password");
			return "authentication/login";
		}
	}

	// Dashboard
	@GetMapping("/dashboard")
	public String dashboard(HttpSession session) {

		if (session.getAttribute("user") == null) {
			return "redirect:/login";
		}

		return "dashboard";
	}

	// Logout
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/login";
	}
}