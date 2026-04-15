package com.crm.util;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class Userdao {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public List<Map<String, Object>> findAllUsers() {
		String sql = "SELECT * FROM users";
		return jdbcTemplate.queryForList(sql);
	}

	public int saveUser(String name, String email) {
		String sql = "INSERT INTO users (name, email) VALUES (?, ?)";
		return jdbcTemplate.update(sql, name, email);
	}
}