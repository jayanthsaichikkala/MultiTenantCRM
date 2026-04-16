package com.springboot1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DashboardController {

    @GetMapping("/dashboard/super-admin")
    public String superAdminDashboard() {
        return "dashboard-super-admin";
    }

    @GetMapping("/dashboard/admin")
    public String adminDashboard() {
        return "dashboard-admin";
    }

    @GetMapping("/dashboard/user")
    public String userDashboard() {
        return "dashboard-user";
    }
}
