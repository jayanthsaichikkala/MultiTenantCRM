package com.crm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    // ❌ REMOVED /login mapping

    @GetMapping("/adminDashboard")
    public String adminDashboard() {
        return "adminDashboard";
    }
}