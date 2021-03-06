package com.app.registeration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.registeration.model.User;
import com.app.registeration.service.RegisterationService;

@RestController
public class RegisterationController {
	
	@Autowired
	private RegisterationService service;
	@PostMapping("/registeruser")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmailId=user.getEmailid();
		if(tempEmailId!=null&& !"".equals(tempEmailId)) {
			User userobj=service.fetchUserByEmailId(tempEmailId);
			if(userobj !=null) {
				throw new Exception("user with "+tempEmailId+" already exists");
			}
		}
		User userobj=null;
	     userobj=service.saveUser(user);
	     return userobj;
	}

}
